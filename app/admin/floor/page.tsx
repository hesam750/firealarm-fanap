"use client"

import { useEffect, useState } from "react"
import { FloorPlanViewer } from "@/components/floor-plan-viewer"
import type { Extinguisher } from "@/types/extinguisher"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExtinguisherForm } from "@/components/extinguisher-form"
import Link from "next/link"

export default function AdminFloorPage() {
  const [extinguishers, setExtinguishers] = useState<Extinguisher[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [addDefaults, setAddDefaults] = useState<Partial<Extinguisher> | null>(null)
  const [editingExt, setEditingExt] = useState<Extinguisher | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/extinguishers")
        const data = await res.json()
        setExtinguishers(data.extinguishers || [])
      } catch (e) {
        console.error("failed to load extinguishers", e)
      }
    }
    load()
  }, [])

  const handleAdd = async (data: Omit<Extinguisher, "id" | "status">) => {
    try {
      const response = await fetch(`/api/extinguishers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("افزودن کپسول ناموفق بود")
      const res = await fetch("/api/extinguishers")
      if (!res.ok) throw new Error("بارگذاری تجهیزات ناموفق بود")
      const { extinguishers } = await res.json()
      setExtinguishers(extinguishers)
      setIsAddDialogOpen(false)
    } catch (e) {
      console.error("failed to add extinguisher", e)
    }
  }

  const handleUpdate = async (id: string, data: Omit<Extinguisher, "id" | "status">) => {
    try {
      const response = await fetch(`/api/extinguishers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("ویرایش کپسول ناموفق بود")
      const res = await fetch("/api/extinguishers")
      if (!res.ok) throw new Error("بارگذاری تجهیزات ناموفق بود")
      const { extinguishers } = await res.json()
      setExtinguishers(extinguishers)
      setEditingExt(null)
    } catch (e) {
      console.error("failed to update extinguisher", e)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fa] dark:bg-slate-950">
      <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <header className="mb-6 flex flex-col gap-5 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-orange-600 dark:text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              مرکز عملیات ایمنی
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">نقشه تجهیزات ساختمان</h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">جای‌گذاری و مدیریت کپسول‌های آتش‌نشانی روی نقشه</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href="/admin" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-slate-300 bg-white sm:w-auto dark:border-slate-700 dark:bg-slate-900">بازگشت به پنل</Button>
            </Link>
            <Button className="w-full bg-orange-600 text-white shadow-sm hover:bg-orange-700 sm:w-auto" onClick={() => setIsAddDialogOpen(true)}>
              افزودن کپسول
            </Button>
          </div>
        </header>
        <section className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="border-r-2 border-orange-500 bg-white px-4 py-3 shadow-sm dark:bg-slate-900">
            <p className="text-xs text-slate-500">کل تجهیزات</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{extinguishers.length}</p>
          </div>
          <div className="border-r-2 border-emerald-500 bg-white px-4 py-3 shadow-sm dark:bg-slate-900">
            <p className="text-xs text-slate-500">وضعیت عادی</p>
            <p className="mt-1 text-2xl font-bold text-emerald-600">{extinguishers.filter((ext) => ext.status === "active").length}</p>
          </div>
          <div className="border-r-2 border-amber-500 bg-white px-4 py-3 shadow-sm dark:bg-slate-900">
            <p className="text-xs text-slate-500">نیازمند بررسی</p>
            <p className="mt-1 text-2xl font-bold text-amber-600">{extinguishers.filter((ext) => ext.status === "warning").length}</p>
          </div>
          <div className="border-r-2 border-red-500 bg-white px-4 py-3 shadow-sm dark:bg-slate-900">
            <p className="text-xs text-slate-500">منقضی‌شده</p>
            <p className="mt-1 text-2xl font-bold text-red-600">{extinguishers.filter((ext) => ext.status === "expired").length}</p>
          </div>
        </section>
        <FloorPlanViewer
          extinguishers={extinguishers}
          onExtinguisherClick={(ext) => setEditingExt(ext)}
          editable
          onMapClickAddExtinguisher={(floor, x, y) => {
            setAddDefaults({ floor, x, y } as any)
            setIsAddDialogOpen(true)
          }}
        />
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>افزودن کپسول جدید</DialogTitle>
            </DialogHeader>
            <ExtinguisherForm key={`${addDefaults?.floor ?? "ground"}-${addDefaults?.x ?? 50}-${addDefaults?.y ?? 50}`} extinguisher={addDefaults as any} onSubmit={handleAdd} onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>

        {/* Edit extinguisher dialog */}
        <Dialog open={!!editingExt} onOpenChange={() => setEditingExt(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ویرایش کپسول</DialogTitle>
            </DialogHeader>
            {editingExt && (
              <ExtinguisherForm
                extinguisher={editingExt}
                onSubmit={(data) => handleUpdate(editingExt.id, data)}
                onCancel={() => setEditingExt(null)}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}