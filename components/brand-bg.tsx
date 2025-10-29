'use client'

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

type BrandBgProps = {
  children: React.ReactNode
  className?: string
  logoSrc?: string
}

export function BrandBg({ children, className, logoSrc }: BrandBgProps) {
  // Try user-provided logo first if passed; otherwise prefer /image/fanap.png, then fallback chain.
  const initialSrc = logoSrc ?? "/image/fanap.png"
  const [src, setSrc] = useState(initialSrc)
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border",
        // Brand palettes: Light (cream + orange), Dark (navy + orange)
        "bg-gradient-to-br from-[#FFF5E6] via-[#FFF0D8] to-[#FFF5E6] dark:from-[#162447] dark:via-[#1B2A49] dark:to-[#1B2A49]",
        className
      )}
    >
      {/* Grid pattern overlay for light mode */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35 dark:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(245,158,11,0.08) 0, rgba(245,158,11,0.08) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(245,158,11,0.08) 0, rgba(245,158,11,0.08) 1px, transparent 1px, transparent 24px)",
        }}
      />

      {/* Grid pattern overlay for dark mode */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-30 dark:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 24px)",
        }}
      />

      {/* Orange accent glow (light) */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage:
            "radial-gradient(600px 300px at 85% 10%, rgba(245,158,11,0.18), transparent 60%)",
        }}
      />

      {/* Orange accent glow (dark) */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(600px 300px at 85% 10%, rgba(245,158,11,0.28), transparent 60%)",
        }}
      />

      {/* Logo watermark */}
      <div className="absolute left-4 top-4 z-10 select-none opacity-60">
        <Image
          src={src}
          alt="لوگو"
          width={140}
          height={40}
          className="h-auto w-auto"
          priority
          onError={() => {
            // Fallback chain: /image/fanap.png -> /fanap.png -> /placeholder-logo.png
            if (src === "/image/fanap.png") {
              setSrc("/fanap.png")
              return
            }
            if (src !== "/placeholder-logo.png") {
              setSrc("/placeholder-logo.png")
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-4 sm:p-6">{children}</div>
    </div>
  )
}