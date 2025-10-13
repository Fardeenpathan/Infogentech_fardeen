import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') || 
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') || 
      pathname.includes('.') ||
      pathname === '/blocked') {
    return NextResponse.next();
  }

  let country = 'IN'; 

  if (process.env.NODE_ENV === 'development') {
    country = process.env.TEST_COUNTRY || 'IN';
  } else {
    country = request.geo?.country || 
              request.headers.get('CF-IPCountry') || 
              request.headers.get('X-Forwarded-Country') ||
              request.headers.get('CloudFront-Viewer-Country') ||
              'IN';
  }

  // console.log(`🌍 Detected country: ${country}, pathname: ${pathname}`);

  const isIndianUser = country === 'IN';
  const isUSPath = pathname.startsWith('/us');

  if (isIndianUser) {
    if (isUSPath) {
      // console.log(`🚫 BLOCKING Indian user from accessing US route: ${pathname}`);
      return NextResponse.redirect(new URL('/blocked', request.url));
    }
    return NextResponse.next();
  }

  if (!isIndianUser) {
    if (!isUSPath) {
      const usEquivalent = `/us${pathname}`;
      
      const commonRoutes = [
        '/about',
        '/blogs',
        '/portfolio',
        '/services',
        '/faq',
        '/help-center',
        '/privacy-policy',
        '/terms',
        '/contact'
      ];
      
      const hasUSEquivalent = commonRoutes.some(route => 
        pathname.startsWith(route)
      );

      if (pathname === '/' || hasUSEquivalent) {
        // console.log(`� Redirecting foreign user from ${pathname} to ${usEquivalent}`);
        return NextResponse.redirect(new URL(usEquivalent, request.url));
      } else {
        // console.log(`🚫 BLOCKING foreign user from India-only route: ${pathname}`);
        return NextResponse.redirect(new URL('/us/blocked', request.url));
      }
    }
    return NextResponse.next();
  }

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