import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for admin, API routes, and static assets
  if (pathname.startsWith('/admin') || 
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') || 
      pathname.includes('.') ||
      pathname === '/blocked') {
    return NextResponse.next();
  }

  // Development testing
  if (process.env.NODE_ENV === 'development') {
    const testCountry = process.env.TEST_COUNTRY || 'IN';
    const allowedCountries = ['IN', 'CA', 'US'];
    const isAllowed = allowedCountries.includes(testCountry);
    
    if (!isAllowed) {
      console.log(`🚫 BLOCKING access to ${pathname} for test country ${testCountry}`);
      return NextResponse.redirect(new URL('/blocked', request.url));
    }
    return NextResponse.next();
  }

  // Production: Use Vercel's geo headers (edge runtime)
  try {
    const country = request.geo?.country || request.headers.get('CF-IPCountry') || null;
    const allowedCountries = ['IN', 'CA', 'US'];
    
    if (country && !allowedCountries.includes(country)) {
      console.log(`🚫 BLOCKING access to ${pathname} for country ${country}`);
      return NextResponse.redirect(new URL('/blocked', request.url));
    }
    
    // If no geo data available, allow access (fallback)
    return NextResponse.next();
  } catch (error) {
    console.error('Geo-check error in middleware:', error);
    return NextResponse.next(); // Allow on error
  }
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
};