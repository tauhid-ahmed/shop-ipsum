import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth.config";
// import * as paths from "@/constants/paths";

export default async function middleware(req: NextRequest) {
  // const session = await auth();
  // const { nextUrl } = req;
  // const isLoggedIn = !!session?.user;

  // const isPublicRoute = paths.publicRoutes.includes(nextUrl.pathname);
  // const isAuthRoute = paths.authRoutes.includes(nextUrl.pathname);

  // if (nextUrl.pathname.startsWith("/api/auth")) return null;

  // if (isLoggedIn && isAuthRoute) {
  //   return NextResponse.redirect(new URL(paths.defaultRedirectPath(), nextUrl));
  // }

  // if (!isLoggedIn && !isPublicRoute && !isAuthRoute) {
  //   return NextResponse.redirect(new URL(paths.signInPath(), nextUrl));
  // }

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
