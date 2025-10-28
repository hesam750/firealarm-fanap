"use client"

import { useEffect, useState } from 'react'
import { initMessaging } from '@/lib/firebase'
import type { MessagePayload } from 'firebase/messaging'
import { useToast } from '@/hooks/use-toast'

export function useFcm(userId?: string) {
  const [token, setToken] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const { toast } = useToast()

  useEffect(() => {
    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
    if (!vapidKey) {
      setError('VAPID key is missing')
      return
    }

    let mounted = true

    async function setup() {
      try {
        // Ensure notification permission is granted before requesting token
        if (typeof Notification !== 'undefined') {
          if (Notification.permission === 'default') {
            await Notification.requestPermission()
          }
          if (Notification.permission !== 'granted') {
            setError('اجازه اعلان داده نشد')
            return
          }
        }
        const reg = await navigator.serviceWorker.register('/firebase-messaging-sw.js')
        const { requestToken, messaging, onMessage } = initMessaging(vapidKey!, reg)
        const tok = await requestToken()
        if (!mounted) return
        setToken(tok)
        if (tok) {
          await fetch('/api/notifications/register-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: tok, userId }),
          })
        }

        onMessage(messaging, (payload: MessagePayload) => {
          toast({
            title: payload.notification?.title || 'اعلان جدید',
            description: payload.notification?.body || 'پیام جدید دریافت شد',
          })
        })
      } catch (e: any) {
        setError(e?.message || 'Failed to initialize notifications')
      }
    }

    setup()
    return () => {
      mounted = false
    }
  }, [userId])

  return { token, error }
}