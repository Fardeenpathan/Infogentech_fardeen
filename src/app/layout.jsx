"use client";

import { Provider } from "react-redux";
import "./globals.css";
import ClientLayoutControls from "@/components/ClientLayoutControls";
import USClientLayoutControls from "@/components/USClientLayoutControls"; // another layout for /us
import store from "@/redux/store";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isUS = pathname.startsWith("/us");

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/mainLogo.svg" />
      </head>
      <body>
        <Provider store={store}>
          {isUS ? (
            <USClientLayoutControls>{children}</USClientLayoutControls>
          ) : (
            <ClientLayoutControls>{children}</ClientLayoutControls>
          )}
        </Provider>
      </body>
    </html>
  );
}
