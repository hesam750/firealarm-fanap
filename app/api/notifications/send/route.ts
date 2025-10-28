import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { cookies } from 'next/headers'
import { sendToTokens } from '@/lib/notify'

async function requireAdmin() {
  const token = (await cookies()).get('token')?.value
  if (!token) return null
  try {
    const payload = await verifyToken<{ userId: string; role: 'ADMIN' | 'USER' }>(token)
    if (payload.role !== 'ADMIN') return null
    return payload
  } catch {
    return null
  }
}

export async function POST(req: Request) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'دسترسی غیرمجاز' }, { status: 403 })

  try {
    const body = await req.json()
    const title: string = body?.title
    const message: string = body?.body
    const url: string | undefined = body?.url
    const userIds: string[] | undefined = body?.userIds

    if (!title || !message) {
      return NextResponse.json({ error: 'عنوان و متن اعلان الزامی است' }, { status: 400 })
    }

    let tokens: string[] = []
    if (Array.isArray(userIds) && userIds.length > 0) {
      const rows = await prisma.notificationToken.findMany({
        where: { userId: { in: userIds } },
        select: { token: true },
      })
      tokens = rows.map((r) => r.token)
    } else {
      const rows = await prisma.notificationToken.findMany({ select: { token: true } })
      tokens = rows.map((r) => r.token)
    }

    const { successCount, failureCount } = await sendToTokens(tokens, { title, body: message, url })
    return NextResponse.json({ ok: true, successCount, failureCount, total: tokens.length })
  } catch (e) {
    console.error(e)
    const msg = e instanceof Error ? e.message : 'خطای داخلی سرور'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}