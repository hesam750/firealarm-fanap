import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage, type Messaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
}

export const app = initializeApp(firebaseConfig)

export function initMessaging(vapidKey: string, serviceWorkerRegistration?: ServiceWorkerRegistration) {
  const messaging: Messaging = getMessaging(app)
  const requestToken = () => getToken(messaging, { vapidKey, serviceWorkerRegistration })
  return { messaging, requestToken, onMessage }
}