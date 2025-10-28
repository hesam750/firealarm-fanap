"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { Extinguisher } from "@/types/extinguisher"
import { Calendar, MapPin, AlertCircle, CheckCircle } from "lucide-react"

interface ExtinguisherDetailsDialogProps {
  extinguisher: Extinguisher | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExtinguisherDetailsDialog({ extinguisher, open, onOpenChange }: ExtinguisherDetailsDialogProps) {
  if (!extinguisher) return null

  const getStatusBadge = (status: Extinguisher["status"]) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-emerald-500">
            <CheckCircle className="w-3 h-3 mr-1" />
            فعال
          </Badge>
        )
      case "warning":
        return (
          <Badge className="bg-amber-500">
            <AlertCircle className="w-3 h-3 mr-1" />
            هشدار
          </Badge>
        )
      case "expired":
        return (
          <Badge className="bg-red-500">
            <AlertCircle className="w-3 h-3 mr-1" />
            منقضی شده
          </Badge>
        )
    }
  }

  const daysUntilExpiry = Math.floor(
    (new Date(extinguisher.expirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>جزئیات کپسول</span>
            {getStatusBadge(extinguisher.status)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="font-semibold">موقعیت</div>
              <div className="text-sm text-muted-foreground">{extinguisher.location}</div>
              <div className="text-xs text-muted-foreground">
                {extinguisher.floor === "ground" ? "طبقه همکف" : "طبقه اول"}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm font-medium">تاریخ شارژ</div>
              <div className="text-sm text-muted-foreground">
                {new Date(extinguisher.chargeDate).toLocaleDateString("fa-IR")}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm font-medium">تاریخ انقضا</div>
              <div className="text-sm text-muted-foreground">
                {new Date(extinguisher.expirationDate).toLocaleDateString("fa-IR")}
              </div>
            </div>
          </div>

          {extinguisher.lastInspection && (
            <div className="space-y-1">
              <div className="text-sm font-medium">آخرین بازرسی</div>
              <div className="text-sm text-muted-foreground">
                {new Date(extinguisher.lastInspection).toLocaleDateString("fa-IR")}
              </div>
            </div>
          )}

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold text-sm">وضعیت زمانی</span>
            </div>
            {daysUntilExpiry > 0 ? (
              <p className="text-sm">
                <span className="font-bold">{daysUntilExpiry}</span> روز تا انقضا باقی مانده
              </p>
            ) : (
              <p className="text-sm text-red-600 font-semibold">
                <span className="font-bold">{Math.abs(daysUntilExpiry)}</span> روز از تاریخ انقضا گذشته
              </p>
            )}
          </div>

          {extinguisher.notes && (
            <div className="space-y-1">
              <div className="text-sm font-medium">یادداشت‌ها</div>
              <div className="text-sm text-muted-foreground p-3 bg-muted rounded">{extinguisher.notes}</div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
