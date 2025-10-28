"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export function LogoutButton({ className }: { className?: string }) {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const onLogout = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" })
      if (!res.ok) throw new Error("خطا در خروج")
      toast({ title: "خروج انجام شد" })
      router.replace("/login")
    } catch (err: any) {
      toast({ title: "خطا", description: err.message, variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button variant="outline" className={className} onClick={onLogout} disabled={loading}>
      <LogOut className="w-4 h-4 ml-2" />
      خروج
    </Button>
  )
}