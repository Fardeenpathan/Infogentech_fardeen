'use client';

import { useEffect, useState } from 'react';
import { usePathname , useRouter} from 'next/navigation';
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

// async function fetchCountryFromProviders() {
//   const providers = [
//     {
//       name: 'ipapi.co',
//       url: 'https://ipapi.co/json/',
//       parseResponse: (d) => d?.country_code ? { code: d.country_code, name: d.country_name || d.country } : null
//     },
//     {
//       name: 'ipwhois.app', 
//       url: 'https://ipwhois.app/json/',
//       parseResponse: (d) => d?.country_code ? { code: d.country_code, name: d.country } : null
//     },
//     {
//       name: 'ipgeolocation.io',
//       url: 'https://api.ipgeolocation.io/ipgeo?apiKey=free',
//       parseResponse: (d) => d?.country_code2 ? { code: d.country_code2, name: d.country_name } : null
//     }
//   ];

//   for (const provider of providers) {
//     try {
//       const res = await fetch(provider.url, { 
//         cache: 'no-store',
//         headers: {
//           'Accept': 'application/json',
//         }
//       });
      
//       if (res.ok) {
//         const data = await res.json();
//         const result = provider.parseResponse(data);
//         if (result) {
//           return result;
//         }
//       }
//     } catch (e) {
//       console.warn(`❌ ${provider.name} failed:`, e.message);
//     }
//   }

//   console.error('🚫 All geo providers failed');
//   return null;
// }

export default function GeoBlockWrapper({ children }) {
  const [isAllowed, setIsAllowed] = useState(null); // null = checking
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const dispatch = useDispatch()
  const router = useRouter();
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
          
          if (!mounted) return;
          
          if (testCountry === 'IN' && isUSRoute) {
            const mainRoute = pathname.replace('/us', '') || '/';
            window.location.href = mainRoute;
            return;
          }
          
          if (US_ALLOWED_COUNTRIES.includes(testCountry) && !isUSRoute) {
            const usRoute = `/us${pathname}`;
            window.location.href = usRoute;
            return;
          }
          
          // Store country in Redux - always allow, no blocking
          dispatch(setCountryCode(testCountry));
          setIsAllowed(true);
          setIsLoading(false);
          return;
        }
        const geo = await fetchCountryFromProviders();
        
        if (!mounted) return;

        if (geo && geo.code) {
          const code = String(geo.code).toUpperCase();
          const isUSRoute = pathname && pathname.startsWith('/us');
          
          let allowed = false;
          
          if (isUSRoute) {
            allowed = US_ALLOWED_COUNTRIES.includes(code);
          } else {
            allowed = INDIA_ALLOWED_COUNTRIES.includes(code);
          }
          
          // AUTO REDIRECT LOGIC - NO BLOCKING IN PRODUCTION TOO!
          if (code === 'IN' && isUSRoute) {
            const mainRoute = pathname.replace('/us', '') || '/';
            dispatch(setCountryCode(code));
            window.location.href = mainRoute;
            return;
          }
          
          if (US_ALLOWED_COUNTRIES.includes(code) && !isUSRoute) {
            // Foreign user on main route → redirect to /us route
            const usRoute = `/us${pathname}`;
            dispatch(setCountryCode(code));
            window.location.href = usRoute;
            return;
          }
          
          // Store country in Redux - always allow, no blocking
          dispatch(setCountryCode(code));
          setIsAllowed(true);
        } else {
          // Fallback: default to India if geo detection fails
          console.warn('⚠️ Geo detection failed — defaulting to India');
          dispatch(setCountryCode('IN'));
          setIsAllowed(true);
        }
      } catch (err) {
        console.error('❌ Error in geo checking:', err);
        // On error, allow access and default to India
        dispatch(setCountryCode('IN'));
        setIsAllowed(true);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    checkAccess();
    return () => { mounted = false; };
  }, [pathname, dispatch]);

  if (isLoading)  {
     return <Loader />;
  }

  // No blocking - just redirects handled in useEffect
  // Always return children, redirects happen automatically

  return children;
}
