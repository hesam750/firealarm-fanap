"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExtinguisherForm } from "./extinguisher-form"
import type { Extinguisher } from "@/types/extinguisher"
import { Pencil, Trash2, Plus } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ExtinguisherTableProps {
  extinguishers: Extinguisher[]
  onUpdate: (id: string, data: Omit<Extinguisher, "id" | "status">) => void
  onDelete: (id: string) => void
  onAdd: (data: Omit<Extinguisher, "id" | "status">) => void
}

export function ExtinguisherTable({ extinguishers, onUpdate, onDelete, onAdd }: ExtinguisherTableProps) {
  const [editingExtinguisher, setEditingExtinguisher] = useState<Extinguisher | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const getStatusBadge = (status: Extinguisher["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-emerald-500">فعال</Badge>
      case "warning":
        return <Badge className="bg-amber-500">هشدار</Badge>
      case "expired":
        return <Badge className="bg-red-500">منقضی</Badge>
    }
  }

  const handleEdit = (extinguisher: Extinguisher) => {
    setEditingExtinguisher(extinguisher)
  }

  const handleUpdate = (data: Omit<Extinguisher, "id" | "status">) => {
    if (editingExtinguisher) {
      onUpdate(editingExtinguisher.id, data)
      setEditingExtinguisher(null)
    }
  }

  const handleAdd = (data: Omit<Extinguisher, "id" | "status">) => {
    onAdd(data)
    setIsAddDialogOpen(false)
  }

  const handleDelete = () => {
    if (deletingId) {
      onDelete(deletingId)
      setDeletingId(null)
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold">مدیریت کپسول‌ها</h2>
          <Button className="w-full sm:w-auto" onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            افزودن کپسول جدید
          </Button>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>موقعیت</TableHead>
                <TableHead>طبقه</TableHead>
                <TableHead>تاریخ شارژ</TableHead>
                <TableHead>تاریخ انقضا</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead className="text-left">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extinguishers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                    هیچ کپسولی ثبت نشده است
                  </TableCell>
                </TableRow>
              ) : (
                extinguishers.map((ext) => (
                  <TableRow key={ext.id}>
                    <TableCell className="font-medium">{ext.location}</TableCell>
                    <TableCell>{ext.floor === "ground" ? "همکف" : "اول"}</TableCell>
                    <TableCell>{new Date(ext.chargeDate).toLocaleDateString("fa-IR")}</TableCell>
                    <TableCell>{new Date(ext.expirationDate).toLocaleDateString("fa-IR")}</TableCell>
                    <TableCell>{getStatusBadge(ext.status)}</TableCell>
                    <TableCell className="text-left">
                      <div className="flex gap-2 justify-end">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(ext)}>
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setDeletingId(ext.id)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={!!editingExtinguisher} onOpenChange={() => setEditingExtinguisher(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ویرایش کپسول</DialogTitle>
          </DialogHeader>
          {editingExtinguisher && (
            <ExtinguisherForm
              extinguisher={editingExtinguisher}
              onSubmit={handleUpdate}
              onCancel={() => setEditingExtinguisher(null)}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>افزودن کپسول جدید</DialogTitle>
          </DialogHeader>
          <ExtinguisherForm onSubmit={handleAdd} onCancel={() => setIsAddDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deletingId} onOpenChange={() => setDeletingId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
            <AlertDialogDescription>
              این عملیات قابل بازگشت نیست. کپسول به طور دائم حذف خواهد شد.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>انصراف</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
              حذف
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
