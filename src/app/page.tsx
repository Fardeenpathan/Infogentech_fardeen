import IndHeroPage from "@/components/india/IndHeroPage";
import React from "react";

export const metadata = {
title: "Infogentech | Home",
  icons: {
    icon: "https://infogentech.com/favicon.ico",
    shortcut: "https://infogentech.com/favicon.ico",
    apple: "https://infogentech.com/favicon.ico",
  },
  description:
    "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
  keywords:
    "digital marketing company, digital marketing company in Delhi NCR, digital marketing services, online marketing services, web development services, IT services, SEO services in Delhi, SEO services, digital marketing agency near me, social media marketing",
    
  openGraph: {
    title:
      "Innovation Success with Software, Technology & Digital Marketing",
    description:
      "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
    url: "https://infogentech.com/",
    siteName: "infogentech",
    images: [
      {
        url: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
        width: 200,
        height: 60,
        alt: "Infogentech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@infogentech",
    title:
      "Innovation Success with Software, Technology & Digital Marketing",
    description:
      "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  alternates: {
    canonical: "https://infogentech.com/",
  },
  other: {
    "geo.region": "IN",
    "http-equiv": "x-ua-compatible",
    "google-site-verification": "GKXtUSJnxyTpAU8aFry0DST64cl9JHxL8eCn2rJlKso",
    distribution: "global",
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://infogentech.com/#website",
        url: "https://infogentech.com/",
        name: "Infogentech Softwares LLP",
        description:
          "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://infogentech.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://infogentech.com/#webpage",
        url: "https://infogentech.com/",
        name: "Infogentech | Digital Marketing Company in Delhi NCR",
        description:
          "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
      },
      {
        "@type": "Organization",
        "@id": "https://infogentech.com/#organization",
        name: "Infogentech | Digital Marketing Company in Delhi NCR",
        url: "https://infogentech.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://infogentech.com/assets/images/logo-light.webp",
        },
        sameAs: [
          "https://www.facebook.com/infogentechsoftwares/",
          "https://x.com/info_gentech",
          "https://www.instagram.com/info_gentech/",
          "https://www.youtube.com/@infogentech",
          "https://www.linkedin.com/company/infogentech/",
          "https://pinterest.com/infogentech/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://infogentech.com/#localbusiness",
        name: "Infogentech Softwares LLP",
        image: "https://infogentech.com/assets/images/logo-light.webp",
        url: "https://infogentech.com/",
        telephone: "9910130963",
        priceRange: "$",
        description:
          "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "A85, First Floor, GT Karnal Road INDL. Area, Near Vardhman Mall",
          addressLocality: "New Delhi",
          postalCode: "110033",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.6951556,
          longitude: 77.1912943,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.0",
          bestRating: "5",
          ratingCount: "1100",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "21:00",
        },
        sameAs: [
          "https://www.facebook.com/infogentechsoftwares/",
          "https://x.com/info_gentech",
          "https://www.instagram.com/info_gentech/",
          "https://www.youtube.com/@infogentech",
          "https://www.linkedin.com/company/infogentech/",
          "https://pinterest.com/infogentech/",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <IndHeroPage />
    </>
  );
}