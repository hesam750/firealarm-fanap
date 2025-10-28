"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Extinguisher } from "@/types/extinguisher"
import { Calendar } from "lucide-react"

interface UpcomingExpirationsProps {
  extinguishers: Extinguisher[]
}

export function UpcomingExpirations({ extinguishers }: UpcomingExpirationsProps) {
  const today = new Date()

  // Get extinguishers expiring in the next 60 days
  const upcomingExpirations = extinguishers
    .map((ext) => {
      const expiryDate = new Date(ext.expirationDate)
      const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      return { ...ext, daysUntilExpiry }
    })
    .filter((ext) => ext.daysUntilExpiry >= 0 && ext.daysUntilExpiry <= 60)
    .sort((a, b) => a.daysUntilExpiry - b.daysUntilExpiry)

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-6 h-6" />
        <h2 className="text-2xl font-bold">انقضاهای پیش رو</h2>
      </div>

      {upcomingExpirations.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">هیچ انقضایی در 60 روز آینده وجود ندارد</p>
      ) : (
        <div className="space-y-3">
          {upcomingExpirations.map((ext) => (
            <div key={ext.id} className="flex items-center justify-between p-3 rounded-lg border bg-card">
              <div>
                <p className="font-semibold">{ext.location}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(ext.expirationDate).toLocaleDateString("fa-IR")}
                </p>
              </div>
              <Badge
                className={
                  ext.daysUntilExpiry <= 7 ? "bg-red-500" : ext.daysUntilExpiry <= 30 ? "bg-amber-500" : "bg-blue-500"
                }
              >
                {ext.daysUntilExpiry} روز
              </Badge>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}
