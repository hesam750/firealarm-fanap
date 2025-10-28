import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('token')?.value
    if (!token) {
      const url = new URL('/login', req.url)
      return NextResponse.redirect(url)
    }
    try {
      const payload = await verifyToken<{ role?: string }>(token)
      if (payload.role !== 'ADMIN') {
        const url = new URL('/login', req.url)
        return NextResponse.redirect(url)
      }
      return NextResponse.next()
    } catch {
      const url = new URL('/login', req.url)
      return NextResponse.redirect(url)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}