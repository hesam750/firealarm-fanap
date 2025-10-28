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
import { ArrowLeft } from "lucide-react"
import { useFcm } from "@/hooks/use-fcm"
import Link from "next/link"
import { LogoutButton } from "@/components/logout-button"

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

        {/* ارسال اعلان به موبایل‌ها/PWA */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">ارسال اعلان</h2>
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
        </Card>

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
