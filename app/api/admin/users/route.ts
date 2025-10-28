import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { verifyToken } from '@/lib/auth'

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

export async function GET() {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'دسترسی غیرمجاز' }, { status: 403 })
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: { id: true, email: true, name: true, role: true, createdAt: true }
  })
  return NextResponse.json({ users: users.map((u: typeof users[number]) => ({
    id: u.id,
    email: u.email,
    name: u.name,
    role: u.role,
    createdAt: u.createdAt.toISOString()
  })) })
}

export async function POST(req: Request) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: 'دسترسی غیرمجاز' }, { status: 403 })

  try {
    const { email, password, name, role } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'ایمیل و رمز عبور الزامی است' }, { status: 400 })
    }
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return NextResponse.json({ error: 'کاربر از قبل وجود دارد' }, { status: 409 })
    const hash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hash,
        name,
        role: role === 'ADMIN' ? 'ADMIN' : 'USER',
      }
    })
    return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } }, { status: 201 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'خطای داخلی سرور' }, { status: 500 })
  }
}