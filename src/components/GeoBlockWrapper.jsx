"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCountryCode } from "../redux/countryCodeSlice";
import Loader from "./loader/Loader";

const ALLOWED_COUNTRIES = ["IN", "CA", "US"];

const BlockedPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
      <div className="text-6xl mb-6">🚫</div>
      <h1 className="text-3xl font-bold text-white mb-4">Access Restricted</h1>
      <p className="text-red-100 mb-6 text-lg">
        This website is only available in:
      </p>
      <div className="flex justify-center space-x-4 text-4xl mb-6">
        <span title="India">🇮🇳</span>
        <span title="Canada">🇨🇦</span>
        <span title="South Africa">🇿🇦</span>
      </div>
      <p className="text-red-200 text-sm">
        We apologize for any inconvenience caused.
      </p>
    </div>
  </div>
);

export default function GeoBlockWrapper({ children }) {
  const [isAllowed, setIsAllowed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAccess() {
      try {
        if (process.env.NODE_ENV === "development") {
          const testCountry = process.env.NEXT_PUBLIC_TEST_COUNTRY || "IN";
          const allowed = ALLOWED_COUNTRIES.includes(testCountry);
          console.log(
            `🧪 Testing with country: ${testCountry} - ${
              allowed ? "ALLOWED" : "BLOCKED"
            }`
          );
          setIsAllowed(allowed);
          dispatch(setCountryCode(testCountry));
          setIsLoading(false);
          return;
        }
        const response = await fetch(
          "http://ip-api.com/json/?fields=status,country,countryCode"
        );
        const data = await response.json();

        if (data.status === "success") {
          const allowed = ALLOWED_COUNTRIES.includes(data.countryCode);
          console.log(
            `User country: ${data.countryCode} (${data.country}) - ${
              allowed ? "ALLOWED" : "BLOCKED"
            }`
          );
          setIsAllowed(allowed);
          dispatch(setCountryCode(data.countryCode));

        } else {
          console.log("Geolocation API failed, allowing access");
          setIsAllowed(true);
        }
      } catch (error) {
        console.error(" Error checking location:", error);
        setIsAllowed(true);
      } finally {
        setIsLoading(false);
      }
    }

    checkAccess();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAllowed) {
    return <BlockedPage />;
  }

  return children;
}
