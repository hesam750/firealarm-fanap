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
      await fetch(`/api/extinguishers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const res = await fetch("/api/extinguishers")
      const { extinguishers } = await res.json()
      setExtinguishers(extinguishers)
      setIsAddDialogOpen(false)
    } catch (e) {
      console.error("failed to add extinguisher", e)
    }
  }

  const handleUpdate = async (id: string, data: Omit<Extinguisher, "id" | "status">) => {
    try {
      await fetch(`/api/extinguishers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const res = await fetch("/api/extinguishers")
      const { extinguishers } = await res.json()
      setExtinguishers(extinguishers)
      setEditingExt(null)
    } catch (e) {
      console.error("failed to update extinguisher", e)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">ویرایش نقشه ساختمان</h1>
          <Link href="/admin" className="self-start md:self-auto w-full md:w-auto">
            <Button variant="outline" className="w-full md:w-auto">بازگشت به پنل</Button>
          </Link>
        </div>
        <div className="flex justify-start md:justify-end">
          <Button className="w-full md:w-auto" onClick={() => setIsAddDialogOpen(true)}>افزودن کپسول جدید</Button>
        </div>
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
            <ExtinguisherForm extinguisher={addDefaults as any} onSubmit={handleAdd} onCancel={() => setIsAddDialogOpen(false)} />
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
    </div>
  )
}