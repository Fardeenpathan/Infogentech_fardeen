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
    <html lang="en" className={isUS ? "dark" : "IndColorText"}>
      <head>
        <link rel="icon" href="/mainLogo.svg" />
        <title>
          Innovation Success with Software, Technology & Digital Marketing
        </title>
        <meta
          name="description"
          content="Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world."
        />
        <meta
          name="keywords"
          content="digital marketing company, digital marketing company in Delhi NCR, digital marketing services, online marketing services, web development services, IT services, SEO services in Delhi, SEO services, digital marketing agency near me, social media marketing"
        />
        <meta
          property="og:title"
          content="Innovation Success with Software, Technology & Digital Marketing"
        />
        <meta
          property="og:description"
          content="Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world."
        />
        <meta
          property="og:keywords"
          content="digital marketing company, digital marketing company in Delhi NCR, digital marketing services, online marketing services, web development services, IT services, SEO services in Delhi, SEO services, digital marketing agency near me, social media marketing"
        />
        <meta
          property="og:image"
          content="https://infogentech.com/public/CompanyName.svg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Innovation Success with Software, Technology & Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world."
        />
        <meta name="twitter:site" content="@infogentech" />
        <meta
          name="twitter:image"
          content="https://infogentech.com/public/CompanyName.svg"
        />
        <meta property="og:site_name" content="infogentech" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:type" content="Website" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="All" />
        <meta name="author" content="InfoGenTech" />
        <meta name="publisher" content="InfoGenTech" />
        <meta name="distribution" content="global" />
        <meta property="og:url" content="https://infogentech.com/" />
        <link rel="canonical" href="https://infogentech.com/" />
        <link
          rel="alternate"
          href="https://infogentech.com/"
          hreflang="en-us"
        />
        <meta
          name="google-site-verification"
          content="2clM2ZKIzwvV-FbBtijfyJ5-zR06cssZbGvL4D0cZ2g"
        />
      </head>
      <body>
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
