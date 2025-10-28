"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Mail, Lock, Eye, EyeOff, Loader2, Shield, Smartphone, Bell } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
// Removed left brand panel; no brand background needed here
import { ThemeToggle } from "@/components/theme-toggle"

function LoginPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextPath = searchParams.get('next') || '/admin'
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "ورود ناموفق")
      toast({ title: "ورود موفق", description: "در حال انتقال..." })
      router.replace(nextPath)
    } catch (err: any) {
      toast({ title: "خطا در ورود", description: err.message, variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const isEmailValid = /.+@.+\..+/.test(email)
  const isPasswordValid = password.length >= 6

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 md:p-10">
      {/* Centered form panel with FANAP logo above card */}
      <div className="w-full max-w-md flex flex-col items-center">
        <Card className="w-full">
          <CardHeader className="items-center text-center border-b">
            <Image src="/fanap.png" alt="FANAP TECH" width={140} height={42} className="mb-1" priority />
            <CardTitle className="text-2xl">ورود به حساب کاربری</CardTitle>
            {/* <CardDescription className="mt-1">برای دسترسی به پنل مدیریت وارد شوید</CardDescription> */}
            <CardAction>
              <ThemeToggle />
            </CardAction>
          </CardHeader>

          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="email">ایمیل</Label>
                <InputGroup>
                  <InputGroupAddon>
                    <Mail className="text-muted-foreground" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="email"
                    type="email"
                    inputMode="email"
                    placeholder="example@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={email.length > 0 && !isEmailValid}
                  />
                </InputGroup>
              </div>

              <div className="space-y-1">
                <Label htmlFor="password">رمز عبور</Label>
                <InputGroup>
                  <InputGroupAddon>
                    <Lock className="text-muted-foreground" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="حداقل ۶ کاراکتر"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-invalid={password.length > 0 && !isPasswordValid}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      variant="ghost"
                      size="icon-sm"
                      aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <Button
                disabled={loading || !isEmailValid || !isPasswordValid}
                className="w-full"
                type="submit"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2"><Loader2 className="size-4 animate-spin" /> در حال ورود...</span>
                ) : (
                  "ورود"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-between">
            <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">حساب ندارید؟ ثبت‌نام</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">فراموشی رمز؟</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageContent />
    </Suspense>
  )
}