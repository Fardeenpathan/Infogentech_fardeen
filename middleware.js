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
    // For localhost testing, default to 'US' so it redirects to /us
    country = process.env.TEST_COUNTRY || 'US';
  } else {
    country = request.geo?.country || 
              request.headers.get('CF-IPCountry') || 
              request.headers.get('X-Forwarded-Country') ||
              request.headers.get('CloudFront-Viewer-Country') ||
              'US'; // Default to US on production if no geo data
  }

  const isIndianUser = country === 'IN';
  const isUSPath = pathname.startsWith('/us');

  if (isIndianUser) {
    if (isUSPath) {
      return NextResponse.redirect(new URL('/blocked', request.url));
    }
    return NextResponse.next();
  }

  // For non-Indian users (including when country detection fails)
  if (!isIndianUser) {
    if (!isUSPath) {
      const usEquivalent = `/us${pathname}`;
      
      const commonRoutes = [
        '/about',
        '/blog',
        '/portfolio',
        '/services',
        '/faq',
        '/help-center',
        '/privacy-policy',
        '/terms-and-conditions',
        '/contact'
      ];
      
      const hasUSEquivalent = commonRoutes.some(route => 
        pathname.startsWith(route)
      );

      if (pathname === '/' || hasUSEquivalent) {
        return NextResponse.redirect(new URL(usEquivalent, request.url));
      } else {
        return NextResponse.redirect(new URL('/blocked', request.url));
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
    '/((?!api|_next/static|_next/image|favicon.ico|fonts).*)',
  ],
};