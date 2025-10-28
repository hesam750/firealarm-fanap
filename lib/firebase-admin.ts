import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getMessaging } from 'firebase-admin/messaging'

function getCredentials() {
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  let privateKey = process.env.FIREBASE_PRIVATE_KEY
  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY')
  }
  // Fix escaped newlines in env vars
  privateKey = privateKey.replace(/\\n/g, '\n')
  return { projectId, clientEmail, privateKey }
}

// Initialize admin app once in the server runtime
if (!getApps().length) {
  const { projectId, clientEmail, privateKey } = getCredentials()
  initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
  })
}

export const messaging = getMessaging()