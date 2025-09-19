"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MiniNavbar } from "./MiniNavbar";
export default function ClientLayoutControls({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.includes("/admin");

  return (
    <>
      {!isAdmin && (
        <div className="hidden md:block">
          <Navbar />
        </div>
      )}
      {!isAdmin && (
        <div className="block md:hidden">
          <MiniNavbar />
        </div>
      )}

      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
