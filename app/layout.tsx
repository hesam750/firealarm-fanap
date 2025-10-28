import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { PwaInit } from "@/components/pwa-init"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "سیستم مدیریت کپسول‌های آتش‌نشانی",
  description: "نظارت و مدیریت تجهیزات ایمنی ساختمان",
    generator: 'v0.app',
    manifest: '/manifest.webmanifest',
    applicationName: 'FireAlarm',
    icons: {
      icon: '/fanap.png',
      apple: '/fanap.png',
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'سیستم مدیریت کپسول‌های آتش‌نشانی',
    },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ff7a00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={cn(geist.className, "min-h-screen bg-background text-foreground")}>        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="container mx-auto px-4 py-3 flex items-center justify-end">
            <ThemeToggle />
          </div>
          <PwaInit />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
