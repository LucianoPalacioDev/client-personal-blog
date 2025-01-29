'use server';
import {NextRequest, NextResponse} from 'next/server';
const DEBUG = process.env.NODE_ENV === 'development';

export function middleware(request: NextRequest) {
  // If the token is set, allow the request to continue.
  const token = request.cookies.get('token') || '';
  if (token || DEBUG) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: [
    /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - /login (login page)
       * - /sign-up (sign up page)
       * - /set-password (set password page)
       * - /reset-password (reset password page)
       * - /forgot-password (forgot password page)
       */
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/((?!api|_next/static|_next/image|favicon.ico|login|sign-up).*)',
  ],
};
