import { messaging } from './firebase-admin'
import type { MulticastMessage } from 'firebase-admin/messaging'

type SendOptions = {
  title: string
  body: string
  url?: string
}

export async function sendToTokens(tokens: string[], opts: SendOptions) {
  if (!tokens.length) return { successCount: 0, failureCount: 0 }
  const { title, body, url } = opts

  let message: MulticastMessage = {
    tokens,
    notification: { title, body },
  }

  if (url) {
    message.data = { url }
    message.webpush = { fcmOptions: { link: url } }
  }

  const res = await messaging.sendEachForMulticast(message)
  return { successCount: res.successCount, failureCount: res.failureCount }
}