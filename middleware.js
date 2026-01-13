import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/us') ||      
    pathname.includes('.') ||
    pathname === '/blocked'
  ) {
    return NextResponse.next();
  }

  /*  COUNTRY DETECTION */
  let country = 'IN';

  if (process.env.NODE_ENV === 'development') {
    country = process.env.TEST_COUNTRY || 'US';
  } else {
    country =
      request.geo?.country ||
      request.headers.get('CF-IPCountry') ||
      request.headers.get('X-Forwarded-Country') ||
      request.headers.get('CloudFront-Viewer-Country') ||
      'IN'; 
  }

  const isIndianUser = country === 'IN';
  const isUSPath = pathname.startsWith('/us');

  /* 🇮🇳 INDIAN USERS */
  if (isIndianUser) {
    if (isUSPath) {
      return NextResponse.redirect(new URL('/blocked', request.url));
    }
    return NextResponse.next();
  }

  const redirected = request.cookies.get('geo_redirected');

  if (!isIndianUser && !redirected) {
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
      '/contact',
    ];

    const hasUSEquivalent = commonRoutes.some(route =>
      pathname === route || pathname.startsWith(route + '/')
    );

    if (hasUSEquivalent) {
      const res = NextResponse.redirect(
        new URL(`/us${pathname}`, request.url)
      );

      res.cookies.set('geo_redirected', '1', { path: '/' });
      return res;
    }

    return NextResponse.redirect(new URL('/blocked', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|fonts|blocked).*)',
  ],
};
