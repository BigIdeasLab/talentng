import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const protectedRoutes = [
  '/dashboard',
  '/dashboard/complete-profile',
  '/learning-hub',
  '/mentorship',
  '/my-profile',
  '/opportunities',
  '/settings',
  '/set-username',
];

const authRoutes = [
  '/login',
  '/signup',
  '/forgot-password',
  '/forgot-password-confirmation',
  '/reset-password',
  '/select-role',
  '/create-profile',
];

const isProtectedRoute = (pathname: string) => {
  return protectedRoutes.some(route => pathname.startsWith(route));
}

const isAuthRoute = (pathname: string) => {
  return authRoutes.some(route => pathname.startsWith(route));
}

async function verifyToken(token: string, secret: string) {
  try {
    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const accessToken = searchParams.get('accessToken');

  // If accessToken is in query params, set it as a cookie and redirect
  if (accessToken) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('accessToken');
    const response = NextResponse.redirect(url);
    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
    return response;
  }

  console.log(request.nextUrl.pathname);
  const token = request.cookies.get('accessToken')?.value;
  const jwtSecret = process.env.JWT_SECRET;

  if (isProtectedRoute(pathname)) {
    if (!jwtSecret) {
      console.error("JWT_SECRET is not set. Denying access to protected route.");
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    const payload = token ? await verifyToken(token, jwtSecret) : null; // Get the payload
    const isTokenValid = !!payload; // Check if payload exists

    if (!isTokenValid) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    
  }

  if (isAuthRoute(pathname)) {
    if (jwtSecret) {
      const payload = token ? await verifyToken(token, jwtSecret) : null; // Get the payload
      const isTokenValid = !!payload; // Check if payload exists
      if (isTokenValid) {
        // ONLY redirect to dashboard if the role is NOT 'general'
        if (payload && payload.role !== 'general') {
          const url = request.nextUrl.clone();
          url.pathname = '/dashboard';
          return NextResponse.redirect(url);
        }
        // If role is 'general', allow them to proceed to the auth route (e.g., /select-role)
      }
    }
  }

  return NextResponse.next();
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
}