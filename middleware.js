import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore admin, api, next assets, files
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname === "/blocked"
  ) {
    return NextResponse.next();
  }

  let country = "IN";

  if (process.env.NODE_ENV === "development") {
    country = (process.env.TEST_COUNTRY || "US").toUpperCase();
  } else {
    country =
      request.geo?.country ||
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("cf-ipcountry") ||
      "";
  }

  const isUS = country === "US";
  const isUSPath = pathname.startsWith("/us");

  // Block non-US users from /us
  if (isUSPath && !isUS) {
    return NextResponse.redirect(new URL("/blocked", request.url));
  }

  // Redirect US users to /us version
  if (isUS && !isUSPath) {
    const commonRoutes = [
      "/",
      "/about",
      "/blog",
      "/portfolio",
      "/services",
      "/faq",
      "/help-center",
      "/privacy-policy",
      "/terms-and-conditions",
      "/contact",
    ];

    const shouldRedirect = commonRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );

    if (shouldRedirect) {
      return NextResponse.redirect(new URL(/us${pathname}, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|fonts).*)",
  ],
};