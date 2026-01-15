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

  // Country detection
  if (process.env.NODE_ENV === "development") {
    // ⚠️ Default IN rakho
    country = (process.env.TEST_COUNTRY || "IN").toUpperCase();
  } else {
    country =
      request.geo?.country ||
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("cf-ipcountry") ||
      "";
  }

  const isUS = country === "US";
  const isUSPath = pathname.startsWith("/us");

  /* ============================
     🇮🇳 Indian users
     - /blog allowed
     - /us blocked
  ============================ */
  if (!isUS && isUSPath) {
    return NextResponse.redirect(new URL("/blocked", request.url));
  }

  /* ============================
     🇺🇸 US users
     - /us/blog allowed
     - /blog blocked
     - NO auto redirect
  ============================ */
  if (isUS && !isUSPath) {
    return NextResponse.redirect(new URL("/blocked", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|fonts).*)",
  ],
};
