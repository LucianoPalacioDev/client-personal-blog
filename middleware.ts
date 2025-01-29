'use server';
import {NextRequest, NextResponse} from 'next/server';
const DEBUG = process.env.NODE_ENV === 'development';

const PUBLIC_PATHS = ['/', '/login', '/sign-up'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token') || '';

  if (PUBLIC_PATHS.includes(pathname) || token || DEBUG) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
