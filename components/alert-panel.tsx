"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Alert } from "@/types/extinguisher"
import { AlertCircle, Clock, Bell, X } from "lucide-react"
import { useState } from "react"

interface AlertPanelProps {
  alerts: Alert[]
  onDismiss?: (alertId: string) => void
}

export function AlertPanel({ alerts, onDismiss }: AlertPanelProps) {
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set())

  const visibleAlerts = alerts.filter((alert) => !dismissedAlerts.has(alert.id))

  const handleDismiss = (alertId: string) => {
    setDismissedAlerts((prev) => new Set([...prev, alertId]))
    onDismiss?.(alertId)
  }

  const getSeverityColor = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-amber-500"
      case "low":
        return "bg-blue-500"
    }
  }

  const getSeverityBg = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "bg-red-50 dark:bg-red-950/15"
      case "medium":
        return "bg-amber-50 dark:bg-amber-950/15"
      case "low":
        return "bg-blue-50 dark:bg-blue-950/15"
    }
  }

  const getSeverityBorder = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "border-red-500/60"
      case "medium":
        return "border-amber-500/60"
      case "low":
        return "border-blue-500/60"
    }
  }

  const getSeverityGradient = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "from-red-500 to-red-600"
      case "medium":
        return "from-amber-500 to-amber-600"
      case "low":
        return "from-blue-500 to-blue-600"
    }
  }

  const getSeverityLabel = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "فوری"
      case "medium":
        return "مهم"
      case "low":
        return "عادی"
    }
  }

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "expired":
        return <AlertCircle className="w-5 h-5" />
      case "expiring-soon":
        return <Clock className="w-5 h-5" />
      case "inspection-due":
        return <Bell className="w-5 h-5" />
    }
  }

  if (visibleAlerts.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center text-muted-foreground">
          <Bell className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>هیچ هشداری وجود ندارد</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Bell className="w-6 h-6" />
          هشدارها
        </h2>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{visibleAlerts.length} هشدار</Badge>
          {visibleAlerts.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const ids = visibleAlerts.map((a) => a.id)
                setDismissedAlerts((prev) => new Set([...prev, ...ids]))
                ids.forEach((id) => onDismiss?.(id))
              }}
            >
              بستن همه
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {visibleAlerts.map((alert) => (
          <div
            key={alert.id}
            className={
              `flex items-start gap-3 p-4 rounded-xl border ${getSeverityBorder(alert.severity)} ` +
              `${getSeverityBg(alert.severity)} hover:shadow-sm transition-shadow border-l-4`
            }
          >
            <div className={`p-[2px] rounded-full bg-gradient-to-br ${getSeverityGradient(alert.severity)} shrink-0`}>
              <div className="rounded-full bg-background/95 text-foreground p-2">
                <div className={`text-white rounded-full p-2 ${getSeverityColor(alert.severity)}`}>
                  {getAlertIcon(alert.type)}
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(alert.severity)}>{getSeverityLabel(alert.severity)}</Badge>
                </div>
                <Badge variant="outline" className="text-xs">
                  {new Date(alert.createdAt).toLocaleDateString("fa-IR")}
                </Badge>
              </div>
              <p className="text-sm leading-6">{alert.message}</p>
            </div>

            <Button variant="ghost" size="icon" onClick={() => handleDismiss(alert.id)} className="shrink-0">
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
