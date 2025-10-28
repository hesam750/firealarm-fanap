"use client"

import { useState, useEffect } from "react"
import { ExtinguisherTable } from "@/components/extinguisher-table"
import { DashboardStats } from "@/components/dashboard-stats"
import type { Extinguisher } from "@/types/extinguisher"
import { calculateStatus } from "@/lib/storage"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useFcm } from "@/hooks/use-fcm"
import Link from "next/link"
import { LogoutButton } from "@/components/logout-button"

export default function AdminPage() {
  const [extinguishers, setExtinguishers] = useState<Extinguisher[]>([])
  useFcm()

  useEffect(() => {
    const fetchExtinguishers = async () => {
      try {
        const res = await fetch("/api/extinguishers")
        const data = await res.json()
        const list = (data.extinguishers || []) as any[]
        const normalized = list.map((e) => ({
          ...e,
          status: calculateStatus(e.expirationDate),
        })) as Extinguisher[]
        setExtinguishers(normalized)
      } catch (e) {
        console.error("failed to load extinguishers", e)
      }
    }
    fetchExtinguishers()
  }, [])

  const handleUpdate = async (id: string, data: Omit<Extinguisher, "id" | "status">) => {
    await fetch(`/api/extinguishers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const res = await fetch("/api/extinguishers")
    const { extinguishers } = await res.json()
    setExtinguishers(extinguishers)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/extinguishers/${id}`, { method: "DELETE" })
    const res = await fetch("/api/extinguishers")
    const { extinguishers } = await res.json()
    setExtinguishers(extinguishers)
  }

  const handleAdd = async (data: Omit<Extinguisher, "id" | "status">) => {
    await fetch(`/api/extinguishers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const res = await fetch("/api/extinguishers")
    const { extinguishers } = await res.json()
    setExtinguishers(extinguishers)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">پنل مدیریت</h1>
            <p className="text-muted-foreground mt-2">مدیریت کپسول‌های آتش‌نشانی</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Link href="/admin/users" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full">مدیریت کاربران</Button>
            </Link>
            <Link href="/admin/floor" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full">ویرایش نقشه</Button>
            </Link>
            <Link href="/" className="w-full md:w-auto">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 ml-2" />
                بازگشت به نقشه
              </Button>
            </Link>
            <LogoutButton />
          </div>
        </div>

        <DashboardStats extinguishers={extinguishers} />

        <ExtinguisherTable
          extinguishers={extinguishers}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      </div>
    </div>
  )
}
