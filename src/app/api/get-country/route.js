import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    let country = 'IN'; // Default to India

    if (process.env.NODE_ENV === 'development') {
      country = process.env.TEST_COUNTRY || process.env.NEXT_PUBLIC_TEST_COUNTRY || 'US';
    } else {
      country = request.headers.get('CF-IPCountry') ||
                request.headers.get('X-Forwarded-Country') ||
                request.headers.get('CloudFront-Viewer-Country') ||
                'US';
    }

    return NextResponse.json({
      success: true,
      country: country,
      isIndia: country === 'IN',
      environment: process.env.NODE_ENV
    });

  } catch (error) {
    console.error('Error in get-country API:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to determine country',
      country: 'IN', // Default to India on error
      isIndia: true
    }, { status: 500 });
  }
}