"use client"

import { useState, useEffect } from "react"
import { ExtinguisherTable } from "@/components/extinguisher-table"
import { DashboardStats } from "@/components/dashboard-stats"
import type { Extinguisher } from "@/types/extinguisher"
import { calculateStatus } from "@/lib/storage"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Bell, Volume2 } from "lucide-react"
import { useFcm } from "@/hooks/use-fcm"
import Link from "next/link"
import { LogoutButton } from "@/components/logout-button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AudioAlert } from "@/components/audio-alert"

export default function AdminPage() {
  const [extinguishers, setExtinguishers] = useState<Extinguisher[]>([])
  useFcm()
  const { toast } = useToast()

  // اعلان‌ها
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [url, setUrl] = useState("")
  const [sendToAll, setSendToAll] = useState(true)
  const [userIdsText, setUserIdsText] = useState("")
  const [sending, setSending] = useState(false)
  const [isNotifOpen, setIsNotifOpen] = useState(false)

  // Audio alert settings
  const [isAudioOpen, setIsAudioOpen] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [audioInterval, setAudioInterval] = useState(20000)
  const [audioBeepDuration, setAudioBeepDuration] = useState(500)
  const [audioVolume, setAudioVolume] = useState(0.08)
  const [testBeep, setTestBeep] = useState(false)
  // Acknowledged alerts (localStorage-based)
  const [acknowledgedAlertIds, setAcknowledgedAlertIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchExtinguishers = async () => {
      try {
        const res = await fetch("/api/extinguishers")
        const data = await res.json()
        const list = (data.extinguishers || []) as any[]
        const normalized = list.map((e) => ({
          ...e,
          status: calculateStatus(e.expirationDate),
        })) as Extinguisher[]
        setExtinguishers(normalized)
      } catch (e) {
        console.error("failed to load extinguishers", e)
      }
    }
    fetchExtinguishers()
  }, [])

  // Load and persist audio settings
  useEffect(() => {
    if (typeof window === "undefined") return
    const enabled = localStorage.getItem("audioAlertEnabled")
    const interval = localStorage.getItem("audioAlertInterval")
    const duration = localStorage.getItem("audioAlertBeepDuration")
    const vol = localStorage.getItem("audioAlertVolume")
    if (enabled !== null) setAudioEnabled(enabled === "true")
    if (interval) setAudioInterval(Number(interval) || 20000)
    if (duration) setAudioBeepDuration(Number(duration) || 500)
    if (vol) setAudioVolume(Number(vol) || 0.08)
  }, [])

  // Load acknowledged alerts from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const raw = localStorage.getItem("acknowledgedAlertIds")
      if (raw) {
        const arr = JSON.parse(raw)
        if (Array.isArray(arr)) {
          setAcknowledgedAlertIds(new Set(arr))
        }
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem("audioAlertEnabled", String(audioEnabled))
    localStorage.setItem("audioAlertInterval", String(audioInterval))
    localStorage.setItem("audioAlertBeepDuration", String(audioBeepDuration))
    localStorage.setItem("audioAlertVolume", String(audioVolume))
  }, [audioEnabled, audioInterval, audioBeepDuration, audioVolume])

  const handleUpdate = async (id: string, data: Omit<Extinguisher, "id" | "status">) => {
    await fetch(`/api/extinguishers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const res = await fetch("/api/extinguishers")
    const { extinguishers } = await res.json()
    setExtinguishers(extinguishers)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/extinguishers/${id}`, { method: "DELETE" })
    const res = await fetch("/api/extinguishers")
    const { extinguishers } = await res.json()
    setExtinguishers(extinguishers)
  }

  const handleAdd = async (data: Omit<Extinguisher, "id" | "status">) => {
    await fetch(`/api/extinguishers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const res = await fetch("/api/extinguishers")
    const { extinguishers } = await res.json()
    setExtinguishers(extinguishers)
  }

  const sendNotification = async () => {
    try {
      setSending(true)
      const payload: any = { title, body }
      if (url) payload.url = url
      if (!sendToAll) {
        const ids = userIdsText
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean)
        if (ids.length) payload.userIds = ids
      }
      const res = await fetch("/api/notifications/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "ارسال اعلان ناموفق بود")
      toast({
        title: "اعلان ارسال شد",
        description: `موفق: ${json.successCount} | ناموفق: ${json.failureCount}`,
      })
      setTitle("")
      setBody("")
      setUrl("")
      setUserIdsText("")
      setSendToAll(true)
    } catch (e: any) {
      toast({ title: "خطا", description: e?.message || "مشکل در ارسال اعلان" })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Audio alert: active if enabled and there are unacknowledged expired items, or during test */}
      {(() => {
        const expiredIds = extinguishers
          .filter((e) => e.status === "expired")
          .map((e) => `alert-${e.id}-expired`)
        const hasUnackedExpired = expiredIds.some((id) => !acknowledgedAlertIds.has(id))
        return (
          <AudioAlert
            active={(audioEnabled && hasUnackedExpired) || testBeep}
            intervalMs={audioInterval}
            beepDurationMs={audioBeepDuration}
            volume={audioVolume}
          />
        )
      })()}
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">پنل مدیریت</h1>
            <p className="text-muted-foreground mt-2">مدیریت کپسول‌های آتش‌نشانی</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Link href="/admin/users" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full">مدیریت کاربران</Button>
            </Link>
            <Link href="/admin/floor" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full">ویرایش نقشه</Button>
            </Link>
            <Link href="/" className="w-full md:w-auto">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 ml-2" />
                بازگشت به نقشه
              </Button>
            </Link>
            <LogoutButton />
          </div>
        </div>

        {/* اعلان‌ها به‌صورت مودال */}
        <Dialog open={isNotifOpen} onOpenChange={setIsNotifOpen}>
          <div className="flex justify-end">
            <DialogTrigger asChild>
              <Button variant="secondary" className="w-full md:w-auto">
                <Bell className="w-4 h-4 ml-2" />
                اعلان‌ها
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>ارسال اعلان</DialogTitle>
            </DialogHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">ارسال به همه</span>
                <Switch checked={sendToAll} onCheckedChange={setSendToAll} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm">عنوان</label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="مثلاً: هشدار نشت گاز" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">آدرس مقصد (اختیاری)</label>
                <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="مثلاً: /admin یا https://example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm">متن پیام</label>
                <Textarea value={body} onChange={(e) => setBody(e.target.value)} rows={4} placeholder="توضیحات اعلان" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm">شناسه کاربران (با , جدا کنید)</label>
                <Input
                  value={userIdsText}
                  onChange={(e) => setUserIdsText(e.target.value)}
                  placeholder="مثلاً: cku...123, cku...456"
                  disabled={sendToAll}
                />
                <p className="text-xs text-muted-foreground">در صورت فعال بودن "ارسال به همه" این فیلد نادیده گرفته می‌شود.</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button onClick={sendNotification} disabled={sending || !title || !body}>
                {sending ? "در حال ارسال..." : "ارسال اعلان"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* تنظیمات هشدار صوتی */}
        <Dialog open={isAudioOpen} onOpenChange={setIsAudioOpen}>
          <div className="flex justify-end">
            <DialogTrigger asChild>
              <Button variant="secondary" className="w-full md:w-auto">
                <Volume2 className="w-4 h-4 ml-2" />
                هشدار صوتی
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>تنظیمات هشدار صوتی</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">فعال‌سازی هشدار صوتی برای کپسول‌های منقضی</p>
                  <p className="text-xs text-muted-foreground">در صفحه مدیریت یا نقشه، در صورت وجود کپسول منقضی بیپ پخش می‌شود.</p>
                </div>
                <Switch checked={audioEnabled} onCheckedChange={setAudioEnabled} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm">فاصله بیپ (ثانیه)</label>
                  <Input
                    type="number"
                    min={5}
                    value={Math.round(audioInterval / 1000)}
                    onChange={(e) => setAudioInterval(Math.max(5000, Number(e.target.value) * 1000))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">مدت بیپ (میلی‌ثانیه)</label>
                  <Input
                    type="number"
                    min={100}
                    value={audioBeepDuration}
                    onChange={(e) => setAudioBeepDuration(Math.max(100, Number(e.target.value)))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">ولوم (۰ تا ۱)</label>
                  <Input
                    type="number"
                    step={0.01}
                    min={0}
                    max={1}
                    value={audioVolume}
                    onChange={(e) => {
                      const v = Number(e.target.value)
                      setAudioVolume(Math.min(1, Math.max(0, isNaN(v) ? 0.08 : v)))
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {(() => {
                    const expired = extinguishers.filter((e) => e.status === "expired").length
                    const warning = extinguishers.filter((e) => e.status === "warning").length
                    return <span>منقضی: {expired} | هشدار: {warning}</span>
                  })()}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setTestBeep(true)
                      setTimeout(() => setTestBeep(false), audioBeepDuration + 300)
                    }}
                  >
                    تست صدا
                  </Button>
                  <Button onClick={() => setIsAudioOpen(false)}>بستن</Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">ممکن است مرورگر برای پخش صدا نیاز به یک کلیک داشته باشد.</p>
            </div>
          </DialogContent>
        </Dialog>

        <DashboardStats extinguishers={extinguishers} />

        <ExtinguisherTable
          extinguishers={extinguishers}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      </div>
    </div>
  )
}
