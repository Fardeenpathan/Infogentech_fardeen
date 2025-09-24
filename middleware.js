import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // console.log(`MIDDLEWARE CALLED for: ${pathname}`);
  
  if (pathname.startsWith('/admin') || 
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') || 
      pathname.includes('.') ||
      pathname === '/blocked') {
    console.log(`⏭️ SKIPPING: ${pathname}`);
    return NextResponse.next();
  }

  if (process.env.NODE_ENV === 'development') {
    const testCountry = process.env.TEST_COUNTRY || 'IN';
    const allowedCountries = ['IN', 'CA', 'ZA'];
    const isAllowed = allowedCountries.includes(testCountry);
    
    // console.log(` MIDDLEWARE: Testing with country ${testCountry} - ${isAllowed ? 'ALLOWED' : 'BLOCKED'}`);
    
    if (!isAllowed) {
      console.log(`BLOCKING access to ${pathname} for country ${testCountry}`);
      return NextResponse.redirect(new URL('/blocked', request.url));
    }
  }

  // console.log(` ALLOWING access to ${pathname}`);
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};