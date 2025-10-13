'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useDispatch } from "react-redux";
import { setCountryCode } from "../redux/countryCodeSlice";
import Loader from "./loader/Loader";
// India-only countries for main app
const INDIA_ALLOWED_COUNTRIES = ['IN'];
// Foreign countries for /us routes  
const US_ALLOWED_COUNTRIES = ['US', 'CA', 'UK', 'DE', 'AU', 'FR', 'NZ', 'SG'];

const BlockedPage = ({ isUSRoute = false }) => (
  <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
      <div className="text-6xl mb-6">🚫</div>
      <h1 className="text-3xl font-bold text-white mb-4">Access Restricted</h1>
      <p className="text-red-100 mb-6 text-lg">
        {isUSRoute 
          ? "This section is only available for Indian users."
          : "This website is not available in your region."
        }
      </p>
      <div className="flex justify-center space-x-4 text-4xl mb-6">
        {isUSRoute ? (
          <span title="India">🇮🇳</span>
        ) : (
          <>
            <span title="United States">🇺🇸</span>
            <span title="Canada">🇨🇦</span>
            <span title="United Kingdom">🇬🇧</span>
          </>
        )}
      </div>
      <p className="text-red-200 text-sm">We apologize for any inconvenience caused.</p>
    </div>
  </div>
);

async function fetchCountryFromProviders() {
  const providers = [
    {
      name: 'ipapi.co',
      url: 'https://ipapi.co/json/',
      parseResponse: (d) => d?.country_code ? { code: d.country_code, name: d.country_name || d.country } : null
    },
    {
      name: 'ipwhois.app', 
      url: 'https://ipwhois.app/json/',
      parseResponse: (d) => d?.country_code ? { code: d.country_code, name: d.country } : null
    },
    {
      name: 'ipgeolocation.io',
      url: 'https://api.ipgeolocation.io/ipgeo?apiKey=free',
      parseResponse: (d) => d?.country_code2 ? { code: d.country_code2, name: d.country_name } : null
    }
  ];

  for (const provider of providers) {
    try {
      console.log(`🔍 Trying ${provider.name}...`);
      const res = await fetch(provider.url, { 
        cache: 'no-store',
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (res.ok) {
        const data = await res.json();
        const result = provider.parseResponse(data);
        if (result) {
          console.log(`✅ ${provider.name} success:`, result);
          return result;
        }
      }
    } catch (e) {
      console.warn(`❌ ${provider.name} failed:`, e.message);
    }
  }

  console.error('🚫 All geo providers failed');
  return null;
}

export default function GeoBlockWrapper({ children }) {
  const [isAllowed, setIsAllowed] = useState(null); // null = checking
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const dispatch = useDispatch()
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

        if (process.env.NODE_ENV === 'development') {
          let testCountry = process.env.NEXT_PUBLIC_TEST_COUNTRY || 'IN';
          testCountry = testCountry.toUpperCase();
          
          const isUSRoute = pathname && pathname.startsWith('/us');
          
          let allowed = false;
          
          if (isUSRoute) {
            // On /us routes, only allow foreign countries
            allowed = US_ALLOWED_COUNTRIES.includes(testCountry);
          } else {
            // On main routes, only allow Indian users
            allowed = INDIA_ALLOWED_COUNTRIES.includes(testCountry);
          }
          
          if (!mounted) return;
          console.log(`🧪 GeoBlock: ${testCountry} on ${isUSRoute ? '/us route' : 'main route'} => ${allowed ? 'ALLOWED' : 'BLOCKED'}`);
          
          // Store country in Redux
          dispatch(setCountryCode(testCountry));
          setIsAllowed(allowed);
          setIsLoading(false);
          return;
        }

        // Production: detect real geo location
        console.log('🌍 Production mode: Detecting real geo location...');
        const geo = await fetchCountryFromProviders();
        
        if (!mounted) return;

        if (geo && geo.code) {
          const code = String(geo.code).toUpperCase();
          const isUSRoute = pathname && pathname.startsWith('/us');
          
          let allowed = false;
          
          if (isUSRoute) {
            // On /us routes, only allow foreign countries
            allowed = US_ALLOWED_COUNTRIES.includes(code);
          } else {
            // On main routes, only allow Indian users
            allowed = INDIA_ALLOWED_COUNTRIES.includes(code);
          }
          
          console.log(`🌍 Geo detected: ${code} (${geo.name}) on ${isUSRoute ? '/us route' : 'main route'} => ${allowed ? 'ALLOWED' : 'BLOCKED'}`);
          
          // Store country in Redux for contact page
          dispatch(setCountryCode(code));
          setIsAllowed(allowed);
        } else {
          // Fallback: block access if geo detection fails
          console.warn('⚠️ Geo detection failed — blocking access for security');
          dispatch(setCountryCode('UNKNOWN'));
          setIsAllowed(false);
        }
      } catch (err) {
        console.error('❌ Error in geo checking:', err);
        // On error, allow access but mark as unknown
        dispatch(setCountryCode('ERROR'));
        setIsAllowed(true);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    checkAccess();
    return () => { mounted = false; };
  }, [pathname, dispatch]);

  if (isLoading) {
     return <Loader />;
  }

  if (!isAllowed) {
    const isUSRoute = pathname && pathname.startsWith('/us');
    return <BlockedPage isUSRoute={isUSRoute} />;
  }

  return children;
}