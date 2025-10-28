"use client"

import { Card } from "@/components/ui/card"
import type { Extinguisher } from "@/types/extinguisher"
import { AlertCircle, CheckCircle, Clock, Package } from "lucide-react"

interface DashboardStatsProps {
  extinguishers: Extinguisher[]
}

export function DashboardStats({ extinguishers }: DashboardStatsProps) {
  const totalCount = extinguishers.length
  const activeCount = extinguishers.filter((e) => e.status === "active").length
  const warningCount = extinguishers.filter((e) => e.status === "warning").length
  const expiredCount = extinguishers.filter((e) => e.status === "expired").length

  const stats = [
    {
      title: "کل کپسول‌ها",
      value: totalCount,
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "فعال",
      value: activeCount,
      icon: CheckCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "نیاز به توجه",
      value: warningCount,
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "منقضی شده",
      value: expiredCount,
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
