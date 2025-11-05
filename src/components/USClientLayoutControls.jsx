"use client";

import { usePathname } from "next/navigation";
import { Toaster } from 'react-hot-toast';
import IndNavbar from "@/components/india/IndNavbar";
import { IndFooter } from "@/components/india/IndFooter";
import { IndMiniNavbar } from "@/components/india/IndMiniNavbar";
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
          <IndNavbar />
        </div>
        <div className="block lg:hidden">
          <IndMiniNavbar />
        </div>

        <main className="pb-20">{children}</main>
        <IndFooter />
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
