'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const ALLOWED_COUNTRIES = ['IN', 'CA', 'ZA'];

const BlockedPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
      <div className="text-6xl mb-6">🚫</div>
      <h1 className="text-3xl font-bold text-white mb-4">Access Restricted</h1>
      <p className="text-red-100 mb-6 text-lg">This website is only available in:</p>
      <div className="flex justify-center space-x-4 text-4xl mb-6">
        <span title="India">🇮🇳</span>
        <span title="Canada">🇨🇦</span>
        <span title="South Africa">🇿🇦</span>
      </div>
      <p className="text-red-200 text-sm">We apologize for any inconvenience caused.</p>
    </div>
  </div>
);

async function fetchCountryFromProviders() {
  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (res.ok) {
      const d = await res.json();
      if (d && d.country_code) return { code: d.country_code, name: d.country_name || d.country };
    }
  } catch (e) {
    console.warn('ipapi.co failed:', e);
  }

  try {
    const res2 = await fetch('https://ipwhois.app/json/', { cache: 'no-store' });
    if (res2.ok) {
      const d2 = await res2.json();
      if (d2 && d2.country_code) return { code: d2.country_code, name: d2.country };
    }
  } catch (e) {
    console.warn('ipwhois.app failed:', e);
  }

  return null;
}

export default function GeoBlockWrapper({ children }) {
  const [isAllowed, setIsAllowed] = useState(null); // null = checking
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    async function checkAccess() {
      try {
        // Always allow admin routes (skip geo-block)
        if (pathname && pathname.startsWith('/admin')) {
          if (!mounted) return;
          setIsAllowed(true);
          setIsLoading(false);
          return;
        }

        // Dev/test override: keep for local testing
        // You can enable explicit test mode with NEXT_PUBLIC_TEST_MODE=1
        const testMode = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_TEST_MODE === '1';
        if (testMode) {
          const testCountry = (process.env.NEXT_PUBLIC_TEST_COUNTRY || 'IN').toUpperCase();
          const allowed = ALLOWED_COUNTRIES.includes(testCountry);
          if (!mounted) return;
          console.log(`🧪 Geo test override active: ${testCountry} => ${allowed ? 'ALLOWED' : 'BLOCKED'}`);
          setIsAllowed(allowed);
          setIsLoading(false);
          return;
        }

        // Production detection via HTTPS providers
        const geo = await fetchCountryFromProviders();
        if (!mounted) return;

        if (geo && geo.code) {
          const code = String(geo.code).toUpperCase();
          const allowed = ALLOWED_COUNTRIES.includes(code);
          console.log(`Geo detected ${code} (${geo.name}) allowed=${allowed}`);
          setIsAllowed(allowed);
        } else {
          // fallback: allow if detection failed
          console.warn('Geo detection failed — allowing by default.');
          setIsAllowed(true);
        }
      } catch (err) {
        console.error('Error checking location:', err);
        setIsAllowed(true);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    checkAccess();
    return () => { mounted = false; };
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!isAllowed) return <BlockedPage />;

  return children;
}