"use client";

import { usePathname } from "next/navigation";
import { Toaster } from 'react-hot-toast';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MiniNavbar } from "./MiniNavbar";
import GeoBlockWrapper from "./GeoBlockWrapper";

export default function ClientLayoutControls({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.includes("/admin");

  if (isAdmin) {
    return (
      <>
        <main>{children}</main>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1F2937',
              color: '#F3F4F6',
              border: '1px solid #374151',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </>
    );
  }

  return (
    <GeoBlockWrapper>
      <>
        <div className="hidden lg:block">
          <Navbar />
        </div>
      )}
      {!isAdmin && (
        <div className="block lg:hidden">
        <div className="block md:hidden">
          <MiniNavbar />
        </div>

        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1F2937',
              color: '#F3F4F6',
              border: '1px solid #374151',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </>
    </GeoBlockWrapper>
  );
}
