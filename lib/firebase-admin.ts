import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getMessaging as _getMessaging, type Messaging } from 'firebase-admin/messaging'

let cachedMessaging: Messaging | null = null

function buildCredentialsOrNull() {
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  let privateKey = process.env.FIREBASE_PRIVATE_KEY
  if (!projectId || !clientEmail || !privateKey) {
    // Do NOT throw at import/build time; let callers decide when to fail
    return null
  }
  privateKey = privateKey.replace(/\\n/g, '\n')
  return { projectId, clientEmail, privateKey }
}

export function getServerMessaging(): Messaging {
  if (cachedMessaging) return cachedMessaging
  const creds = buildCredentialsOrNull()
  if (!creds) {
    throw new Error(
      'Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY',
    )
  }
  if (!getApps().length) {
    initializeApp({ credential: cert(creds) })
  }
  cachedMessaging = _getMessaging()
  return cachedMessaging
}