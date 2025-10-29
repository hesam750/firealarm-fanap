"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Extinguisher } from "@/types/extinguisher"
import { PersianDatePicker } from "@/components/persian-date-picker"

interface ExtinguisherFormProps {
  extinguisher?: Extinguisher
  onSubmit: (data: Omit<Extinguisher, "id" | "status">) => void
  onCancel: () => void
}

export function ExtinguisherForm({ extinguisher, onSubmit, onCancel }: ExtinguisherFormProps) {
  const [formData, setFormData] = useState({
    location: extinguisher?.location || "",
    floor: extinguisher?.floor || "ground",
    x: extinguisher?.x || 50,
    y: extinguisher?.y || 50,
    chargeDate: extinguisher?.chargeDate || new Date().toISOString().split("T")[0],
    expirationDate: extinguisher?.expirationDate || "",
    lastInspection: extinguisher?.lastInspection || "",
    notes: extinguisher?.notes || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData as Omit<Extinguisher, "id" | "status">)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="location">موقعیت</Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="مثال: انبار 1"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="floor">طبقه</Label>
        <Select value={formData.floor} onValueChange={(value) => setFormData({ ...formData, floor: value as any })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ground">طبقه همکف</SelectItem>
            <SelectItem value="first">طبقه اول</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="x">موقعیت افقی (X%)</Label>
          <Input
            id="x"
            type="number"
            min="0"
            max="100"
            value={formData.x}
            onChange={(e) => setFormData({ ...formData, x: Number(e.target.value) })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="y">موقعیت عمودی (Y%)</Label>
          <Input
            id="y"
            type="number"
            min="0"
            max="100"
            value={formData.y}
            onChange={(e) => setFormData({ ...formData, y: Number(e.target.value) })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="chargeDate">تاریخ شارژ</Label>
          <PersianDatePicker
            id="chargeDate"
            value={formData.chargeDate}
            onChange={(v) => setFormData({ ...formData, chargeDate: v })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expirationDate">تاریخ انقضا</Label>
          <PersianDatePicker
            id="expirationDate"
            value={formData.expirationDate}
            onChange={(v) => setFormData({ ...formData, expirationDate: v })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastInspection">آخرین بازرسی (اختیاری)</Label>
        <PersianDatePicker
          id="lastInspection"
          value={formData.lastInspection}
          onChange={(v) => setFormData({ ...formData, lastInspection: v })}
          placeholder="مثال: ۱۴۰۳/۰۷/۱۵"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">یادداشت‌ها (اختیاری)</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="یادداشت‌های اضافی..."
          rows={3}
        />
      </div>

      <div className="flex gap-2 justify-end pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          انصراف
        </Button>
        <Button type="submit">{extinguisher ? "بروزرسانی" : "افزودن"}</Button>
      </div>
    </form>
  )
}
