import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { token, userId } = await req.json()
    if (!token) return NextResponse.json({ error: 'توکن الزامی است' }, { status: 400 })
    await prisma.notificationToken.upsert({
      where: { token },
      create: { token, userId },
      update: { userId },
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'خطای داخلی سرور' }, { status: 500 })
  }
}