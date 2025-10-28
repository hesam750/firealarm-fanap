import { SignJWT, jwtVerify } from 'jose'

const alg = 'HS256'

function getJwtSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET is not set')
  return new TextEncoder().encode(secret)
}

function getTokenExpiry(): string {
  return process.env.JWT_EXPIRES_IN || '7d'
}

function parseExpiresToSeconds(exp: string): number {
  const trimmed = String(exp).trim()
  const m = /^([0-9]+)\s*(ms|s|m|h|d)?$/i.exec(trimmed)
  if (!m) {
    // fallback to 7 days
    return 60 * 60 * 24 * 7
  }
  const value = parseInt(m[1], 10)
  const unit = (m[2] || 's').toLowerCase()
  switch (unit) {
    case 'ms':
      return Math.ceil(value / 1000)
    case 's':
      return value
    case 'm':
      return value * 60
    case 'h':
      return value * 60 * 60
    case 'd':
      return value * 60 * 60 * 24
    default:
      return value
  }
}

export function getCookieMaxAge(): number {
  return parseExpiresToSeconds(getTokenExpiry())
}

export async function signToken(payload: Record<string, unknown>, expires?: string) {
  const exp = expires || getTokenExpiry()
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(getJwtSecret())
}

export async function verifyToken<T = any>(token: string) {
  const { payload } = await jwtVerify(token, getJwtSecret())
  return payload as T
}