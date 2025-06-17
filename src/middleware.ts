import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth.config";
import {
  authRoutes,
  adminRoutes,
  defaultRedirectRoute,
  signInRoute,
  authApiRoutes,
  publicRoutes,
  homeRoute,
} from "@/constants/paths";

const adminRoles = ["admin", "super-admin"];

export default async function middleware(req: NextRequest) {
  const session = await auth();
  const { nextUrl } = req;
  const isLoggedIn = !!session?.user;

  const sessionCartId = req.cookies.get("sessionCartId");
  if (!sessionCartId) {
    const newSessionCartId = crypto.randomUUID();
    const newRequestHeaders = new Headers(req.headers);
    const response = NextResponse.next({
      headers: newRequestHeaders,
    });
    response.cookies.set("sessionCartId", newSessionCartId);
    return response;
  }

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute =
    nextUrl.pathname === homeRoute() ||
    publicRoutes.some((route) => nextUrl.pathname.startsWith(route));
  const isAdminRoute = nextUrl.pathname.startsWith(adminRoutes);
  const isAuthApiRoute = nextUrl.pathname.startsWith(authApiRoutes);

  if (isAuthApiRoute) return null;

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL(defaultRedirectRoute(), nextUrl));
  }

  if (!isLoggedIn && !isAuthRoute && !isPublicRoute) {
    return NextResponse.redirect(new URL(signInRoute(), nextUrl));
  }

  if (isLoggedIn && isAdminRoute) {
    if (adminRoles.includes("admin")) return null;
    else return NextResponse.redirect(new URL(defaultRedirectRoute(), nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
