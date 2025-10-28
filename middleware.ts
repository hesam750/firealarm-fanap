import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get('token')?.value

  if (pathname.startsWith('/admin')) {
    if (!token) {
      const url = new URL('/login', req.url)
      url.searchParams.set('next', pathname)
      return NextResponse.redirect(url)
    }
    try {
      const payload = await verifyToken<{ role?: string }>(token)
      if (payload.role !== 'ADMIN') {
        const url = new URL('/login', req.url)
        url.searchParams.set('next', pathname)
        return NextResponse.redirect(url)
      }
      return NextResponse.next()
    } catch {
      const url = new URL('/login', req.url)
      url.searchParams.set('next', pathname)
      return NextResponse.redirect(url)
    }
  }

  if (pathname === '/login' && token) {
    try {
      const payload = await verifyToken<{ role?: string }>(token)
      if (payload.role === 'ADMIN') {
        const next = req.nextUrl.searchParams.get('next') || '/admin'
        const url = new URL(next, req.url)
        return NextResponse.redirect(url)
      }
    } catch {
      // ignore token errors for login page
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login']
}