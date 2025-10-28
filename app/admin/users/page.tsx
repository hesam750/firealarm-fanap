"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LogoutButton } from "@/components/logout-button"

type UserRow = { id: string; email: string; name?: string | null; role: "ADMIN" | "USER"; createdAt: string }

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRow[]>([])
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"ADMIN" | "USER">("USER")

  const load = async () => {
    const res = await fetch("/api/admin/users")
    const data = await res.json()
    setUsers(data.users || [])
  }

  useEffect(() => {
    load()
  }, [])

  const submit = async () => {
    if (!email || !password) return
    await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, role }),
    })
    setEmail("")
    setName("")
    setPassword("")
    setRole("USER")
    await load()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">مدیریت کاربران</h1>
            <p className="text-muted-foreground mt-2">ایجاد و مشاهده کاربران سامانه</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/admin">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 ml-2" />
                بازگشت به پنل
              </Button>
            </Link>
            <LogoutButton />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 space-y-4">
            <h2 className="text-xl font-semibold">ایجاد کاربر جدید</h2>
            <div className="space-y-3">
              <Input placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder="نام" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="رمز عبور" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Select value={role} onValueChange={(v) => setRole(v as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="نقش" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USER">کاربر</SelectItem>
                  <SelectItem value="ADMIN">مدیر</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={submit}>ایجاد کاربر</Button>
            </div>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ایمیل</TableHead>
                  <TableHead>نام</TableHead>
                  <TableHead>نقش</TableHead>
                  <TableHead>تاریخ ایجاد</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                      کاربری ثبت نشده است
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="font-medium">{u.email}</TableCell>
                      <TableCell>{u.name || "-"}</TableCell>
                      <TableCell>{u.role === "ADMIN" ? "مدیر" : "کاربر"}</TableCell>
                      <TableCell>{new Date(u.createdAt).toLocaleDateString("fa-IR")}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}