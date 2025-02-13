import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const isAuthPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/signup");

  // If trying to access auth pages while logged in, redirect to dashboard
  if (isAuthPage && authToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If trying to access protected pages without auth, redirect to login
  if (!isAuthPage && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Add your protected routes here
export const config = {
  matcher: ["/dashboard/:path*", "/jobs/create", "/login", "/signup"],
};
