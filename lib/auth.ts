import { SignJWT, jwtVerify } from 'jose'

const alg = 'HS256'

function getJwtSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET is not set')
  return new TextEncoder().encode(secret)
}

export async function signToken(payload: Record<string, unknown>, expires = '7d') {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(getJwtSecret())
}

export async function verifyToken<T = any>(token: string) {
  const { payload } = await jwtVerify(token, getJwtSecret())
  return payload as T
}