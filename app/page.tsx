"use client"

import { useState, useEffect } from "react"
import { FloorPlanViewer } from "@/components/floor-plan-viewer"
import { ExtinguisherDetailsDialog } from "@/components/extinguisher-details-dialog"
import { AlertPanel } from "@/components/alert-panel"
import { UpcomingExpirations } from "@/components/upcoming-expirations"
import { Button } from "@/components/ui/button"
import type { Extinguisher } from "@/types/extinguisher"
// import { getExtinguishers } from "@/lib/storage"
import { generateAlerts } from "@/lib/alerts"
import { Settings } from "lucide-react"
import Link from "next/link"
import { BrandBg } from "@/components/brand-bg"

export default function Home() {
  const [extinguishers, setExtinguishers] = useState<Extinguisher[]>([])
  const [selectedExtinguisher, setSelectedExtinguisher] = useState<Extinguisher | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const fetchExtinguishers = async () => {
      try {
        const res = await fetch("/api/extinguishers")
        const data = await res.json()
        setExtinguishers(data.extinguishers || [])
      } catch (e) {
        console.error("failed to load extinguishers", e)
      }
    }
    fetchExtinguishers()
  }, [])

  const alerts = generateAlerts(extinguishers)

  const handleExtinguisherClick = (extinguisher: Extinguisher) => {
    setSelectedExtinguisher(extinguisher)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-balance">سیستم مدیریت کپسول‌های آتش‌نشانی</h1>
            <p className="text-muted-foreground mt-2">نظارت و مدیریت تجهیزات ایمنی ساختمان</p>
          </div>
          <Link href="/admin" className="self-start md:self-auto">
            <Button className="w-full md:w-auto">
              <Settings className="w-4 h-4 mr-2" />
              پنل مدیریت
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BrandBg className="shadow-sm" logoSrc="/fanap.png">
              <FloorPlanViewer
                extinguishers={extinguishers}
                onExtinguisherClick={handleExtinguisherClick}
                cardClassName="bg-transparent border-none shadow-none p-0"
                background="transparent"
              />
            </BrandBg>
          </div>

          <div className="space-y-6">
            <AlertPanel alerts={alerts} />
            <UpcomingExpirations extinguishers={extinguishers} />
          </div>
        </div>
      </div>

      <ExtinguisherDetailsDialog
        extinguisher={selectedExtinguisher}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  )
}
