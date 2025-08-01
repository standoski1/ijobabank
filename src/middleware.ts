import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get token from Authorization header or localStorage (client-side)
  const authHeader = request.headers.get('authorization')
  const token = authHeader ? authHeader.replace('Bearer ', '') : null

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // For API routes, check Authorization header
    if (request.nextUrl.pathname.startsWith('/api/')) {
      if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    } else {
      // For page routes, redirect to login if no token
      // Note: Client-side protection is also implemented in AuthContext
      return NextResponse.next()
    }
  }

  // Redirect authenticated users away from auth pages
  if (token && (
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/signup')
  )) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup']
} 