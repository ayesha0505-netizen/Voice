import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that do NOT require authentication
const PUBLIC_PATHS = ["/login", "/signup", "/forgot-password", "/forget-password"];

// Auth pages where already authenticated users should be redirected to app
const AUTH_PAGES = ["/login", "/signup"];

// Static assets & Next.js internals — always allow
const ALWAYS_ALLOW = [
  "/_next",
  "/favicon.ico",
  "/icon.png",
  "/logo.png",
  "/apple-icon.png",
  "/avatars",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow static assets and Next internals
  if (ALWAYS_ALLOW.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Always allow all API routes to pass through so they are never redirected to an HTML page.
  // API route handlers manage their own authentication, session, and guest state.
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Check for Firebase session cookie (set by the app after sign-in)
  const sessionCookie = request.cookies.get("voice_session")?.value;
  const isPublicPath = PUBLIC_PATHS.includes(pathname);

  // Not authenticated and hitting a protected page → redirect to login
  if (!sessionCookie && !isPublicPath) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Already authenticated and hitting login or signup → redirect to app
  if (sessionCookie && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, sounds, icons, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp3|wav|ogg)).*)",
  ],
};
