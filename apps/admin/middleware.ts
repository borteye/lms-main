import { NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/onboarding",
  "/reset-password",
];

const excludedRoutes = [
  "/api/auth",
  "/api/",
  "/_next",
  "/favicon.ico",
  "/static",
];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("__tenaClass_access_token")?.value;
  const currentPath = req.nextUrl.pathname;

  if (excludedRoutes.some((route) => currentPath.startsWith(route))) {
    return NextResponse.next();
  }

  if (!token && !publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (token && publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
