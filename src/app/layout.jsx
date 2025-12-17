"use client";
import { Provider } from "react-redux";
import "./globals.css";
import ClientLayoutControls from "@/components/ClientLayoutControls";
import USClientLayoutControls from "@/components/USClientLayoutControls";
import store from "@/redux/store";
import { usePathname } from "next/navigation";
import Script from "next/script";
export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isUS = pathname.startsWith("/us");

  return (
    <html lang="en" className={isUS ? "dark" : "IndColorText"}>
       <head>
        <link rel="icon" type="image/x-icon" href="https://infogentech.com/favicon.ico"></link>

        {/* GA4 code */}

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8J6QHLDZTB"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8J6QHLDZTB');
          `}
        </Script>
        
      </head>
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          {isUS ? (
            
            <ClientLayoutControls>{children}</ClientLayoutControls>
          ) : (
            <USClientLayoutControls>{children}</USClientLayoutControls>
          )}
        </Provider>
      </body>
    </html>
  );
}
