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

    // Modern browsers expose 'visible' | 'hidden'; wait for visible if hidden
    if (document.visibilityState === 'hidden') {
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