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
  // Determine country from Next.js geo (preferred) or common edge headers.
  // Do NOT default to 'US' — treat unknown as non-US to avoid exposing `/us`.
  if (process.env.NODE_ENV === 'development') {
    country = (process.env.TEST_COUNTRY || 'US').toUpperCase();
  } else {
    country = (request.geo?.country ||
               request.headers.get('x-vercel-ip-country') ||
               request.headers.get('cf-ipcountry') ||
               request.headers.get('x-forwarded-country') ||
               request.headers.get('cloudfront-viewer-country') ||
               '')?.toUpperCase();
  }

  const isUS = country === 'US';
  const isUSPath = pathname.startsWith('/us');

  // If the path is the US site, only allow when country === 'US'
  if (isUSPath && !isUS) {
    return NextResponse.redirect(new URL('/blocked', request.url));
  }

  // If visitor is from US and is on a non-/us root/common route, optionally
  // redirect them to the US equivalent for convenience.
  if (isUS && !isUSPath) {
    const commonRoutes = [
      '/',
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

    // Check if pathname matches a common route (exact match or with subpath)
    const hasUSEquivalent = commonRoutes.some(route => {
      if (route === '/') {
        return pathname === '/';
      }
      return pathname === route || pathname.startsWith(route + '/');
    });

    if (hasUSEquivalent) {
      const usEquivalent = `/us${pathname}`;
      return NextResponse.redirect(new URL(usEquivalent, request.url));
    }
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


// end of middleware
