import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/complete-profile",
  "/learning-hub",
  "/mentorship",
  "/my-profile",
  "/opportunities",
  "/settings",
];

const authRoutes = [
  "/login",
  "/signup",
  "/forgot-password",
  "/forgot-password-confirmation",
  "/reset-password",
  "/onboarding",
];

const isProtectedRoute = (pathname: string) => {
  return protectedRoutes.some((route) => pathname.startsWith(route));
};

const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route) => pathname.startsWith(route));
};

async function verifyToken(token: string, secret: string) {
  try {
    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error: any) {
    if (error?.code !== "ERR_JWT_EXPIRED") {
      console.error("Token verification failed:", error);
    }
    return null;
  }
}

export async function middleware(request: NextRequest) {
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
