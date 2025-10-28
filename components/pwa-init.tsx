"use client"

import { useEffect } from 'react'

export function PwaInit() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return
    // Avoid registering during prerender to prevent InvalidStateError
    const safeRegister = () => {
      try {
        navigator.serviceWorker
          .getRegistration()
          .then((reg) => {
            if (reg) return
            return navigator.serviceWorker.register('/firebase-messaging-sw.js')
          })
          .catch(() => {})
      } catch {
        // ignore
      }
    }

    if (document.visibilityState === 'prerender') {
      const onVisible = () => {
        if (document.visibilityState === 'visible') {
          safeRegister()
          document.removeEventListener('visibilitychange', onVisible)
        }
      }
      document.addEventListener('visibilitychange', onVisible)
    } else {
      safeRegister()
    }
  }, [])

  return null
}