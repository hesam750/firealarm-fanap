import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { email, password, name, role } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'ایمیل و رمز عبور الزامی است' }, { status: 400 })
    }
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: 'کاربر از قبل وجود دارد' }, { status: 409 })
    }
    const hash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { email, passwordHash: hash, name, role: role === 'ADMIN' ? 'ADMIN' : 'USER' }
    })
    const token = await signToken({ userId: user.id, email: user.email, role: user.role })
    const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name, role: user.role } })
    res.cookies.set('token', token, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 })
    return res
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'خطای داخلی سرور' }, { status: 500 })
  }
}