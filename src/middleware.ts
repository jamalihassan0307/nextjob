import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PageProps } from "next";

export function middleware(request: NextRequest) {
  // Get stored user from localStorage (client-side storage)
  const storedUser = request.cookies.get("user")?.value;
  const isAuthPage =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  // If trying to access protected routes without being logged in
  if (!storedUser && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If trying to access login/signup while logged in
  if (storedUser && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
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

interface ApplyJobProps extends PageProps {
  params: {
    id: string; // Ensure this matches the expected structure
  };
}
