"use client"

import { useEffect, useRef, useState } from "react"

interface AudioAlertProps {
  active: boolean
  intervalMs?: number
  beepDurationMs?: number
  volume?: number // 0.0 - 1.0
}

// Plays a short beep periodically when `active` is true.
// Uses Web Audio API to avoid bundling audio assets and keep latency low.
export function AudioAlert({ active, intervalMs = 20000, beepDurationMs = 500, volume = 0.08 }: AudioAlertProps) {
  const ctxRef = useRef<AudioContext | null>(null)
  const [needsUserGesture, setNeedsUserGesture] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const ensureContext = async () => {
    if (!ctxRef.current) {
      const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext
      if (!Ctx) return null
      ctxRef.current = new Ctx()
    }
    const ctx = ctxRef.current!
    if (ctx.state === "suspended") {
      try {
        await ctx.resume()
        setNeedsUserGesture(false)
      } catch {
        setNeedsUserGesture(true)
      }
    }
    return ctx
  }

  const playBeep = async () => {
    const ctx = await ensureContext()
    if (!ctx || ctx.state !== "running") {
      setNeedsUserGesture(true)
      return
    }
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = "sine"
    osc.frequency.setValueAtTime(880, ctx.currentTime) // A5
    gain.gain.setValueAtTime(volume, ctx.currentTime)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    setTimeout(() => {
      try {
        osc.stop()
      } catch {}
      osc.disconnect()
      gain.disconnect()
    }, beepDurationMs)
  }

  // Try to resume audio on any user interaction if needed
  useEffect(() => {
    const handler = async () => {
      if (needsUserGesture) {
        await ensureContext()
        setNeedsUserGesture(false)
      }
    }
    window.addEventListener("click", handler, { once: false })
    window.addEventListener("keydown", handler, { once: false })
    return () => {
      window.removeEventListener("click", handler)
      window.removeEventListener("keydown", handler)
    }
  }, [needsUserGesture])

  // Periodic beep while active
  useEffect(() => {
    if (active) {
      // immediate beep on activation
      playBeep()
      // set interval
      intervalRef.current = window.setInterval(() => {
        playBeep()
      }, intervalMs)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [active, intervalMs])

  return null
}