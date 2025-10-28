import type { Extinguisher, Alert } from "@/types/extinguisher"

export function generateAlerts(extinguishers: Extinguisher[]): Alert[] {
  const alerts: Alert[] = []
  const today = new Date()

  extinguishers.forEach((ext) => {
    const expiryDate = new Date(ext.expirationDate)
    const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    // Expired
    if (daysUntilExpiry < 0) {
      alerts.push({
        id: `alert-${ext.id}-expired`,
        extinguisherId: ext.id,
        type: "expired",
        message: `کپسول ${ext.location} منقضی شده است (${Math.abs(daysUntilExpiry)} روز گذشته)`,
        severity: "high",
        createdAt: new Date().toISOString(),
      })
    }
    // Expiring within 30 days
    else if (daysUntilExpiry <= 30) {
      alerts.push({
        id: `alert-${ext.id}-expiring`,
        extinguisherId: ext.id,
        type: "expiring-soon",
        message: `کپسول ${ext.location} ${daysUntilExpiry} روز دیگر منقضی می‌شود`,
        severity: daysUntilExpiry <= 7 ? "high" : "medium",
        createdAt: new Date().toISOString(),
      })
    }

    // Inspection due (if last inspection was more than 6 months ago)
    if (ext.lastInspection) {
      const lastInspectionDate = new Date(ext.lastInspection)
      const daysSinceInspection = Math.floor((today.getTime() - lastInspectionDate.getTime()) / (1000 * 60 * 60 * 24))

      if (daysSinceInspection > 180) {
        alerts.push({
          id: `alert-${ext.id}-inspection`,
          extinguisherId: ext.id,
          type: "inspection-due",
          message: `کپسول ${ext.location} نیاز به بازرسی دارد (${Math.floor(daysSinceInspection / 30)} ماه از آخرین بازرسی)`,
          severity: "low",
          createdAt: new Date().toISOString(),
        })
      }
    }
  })

  // Sort by severity
  return alerts.sort((a, b) => {
    const severityOrder = { high: 0, medium: 1, low: 2 }
    return severityOrder[a.severity] - severityOrder[b.severity]
  })
}
