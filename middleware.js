import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname === '/blocked'
  ) {
    return NextResponse.next();
  }


  const country =
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-forwarded-country') ||
    request.headers.get('cloudfront-viewer-country') ||
    '';

  const isUS = country === 'US';
  const isUSPath = pathname.startsWith('/us');


  if (isUSPath && !isUS) {
    return NextResponse.redirect(new URL('/blocked', request.url));
  }


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
      '/contact',
    ];

    const hasUSEquivalent = commonRoutes.some(route => {
      if (route === '/') return pathname === '/';
      return pathname === route || pathname.startsWith(route + '/');
    });

    if (hasUSEquivalent) {
      return NextResponse.redirect(
        new URL(`/us${pathname}`, request.url)
      );
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|fonts).*)',
  ],
};
