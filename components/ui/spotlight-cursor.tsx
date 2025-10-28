"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface SpotlightCursorProps {
  className?: string
  color?: string // base glow color
  radius?: number // px
  intensity?: number // 0..1
}

// Cursor-follow radial spotlight overlay to give a premium hero-like feel.
// It relies on CSS variables set on the container (via onMouseMove) for position.
export function SpotlightCursor({ className, color = "255, 153, 0", radius = 520, intensity = 0.12 }: SpotlightCursorProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("absolute inset-0 pointer-events-none z-0", className)}
      style={{
        background: `radial-gradient(${radius}px circle at var(--cursor-x, 50%) var(--cursor-y, 40%), rgba(${color}, ${intensity}), transparent 60%)`,
        mixBlendMode: "soft-light",
      }}
    />
  )
}

export default SpotlightCursor