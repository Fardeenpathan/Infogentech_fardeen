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
    url: "https://infogentech.com/us/",
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
    canonical: "https://infogentech.com/us/",
  },
  other: {
    "geo.region": "US",
    "http-equiv": "x-ua-compatible",
    "google-site-verification": "GKXtUSJnxyTpAU8aFry0DST64cl9JHxL8eCn2rJlKso",
    distribution: "global",
  },
};

"use client";
import { HeroSection } from "@/components/hero-section";
import ServicesSection from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import OurValues from "@/components/OurValues";
import ScheduleCall from "@/components/ScheduleCall";
import StrategicProcess from "@/components/StrategicProcess";
import OurPortfolio from "@/components/OurPortfolio";
import Testimonials from "@/components/Testimonials";
import LatestBlogs from "@/components/LatestBlogs";
export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <StatsSection />
      <div className="overflow-hidden">
        <ServicesSection />
      </div>
      <div className="container mx-auto md:px-10 px-4 ">
        <OurValues />
        <ScheduleCall />
        <StrategicProcess />
        <OurPortfolio />
        <Testimonials />
        <LatestBlogs />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://infogentech.com/#organization",
                "name": "Infogentech | Empowering Your Digital Evolution",
                "url": "https://infogentech.com/us/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://infogentech.com/favicon.ico"
                },
                "sameAs": [
                  "https://www.facebook.com/infogentechsoftwares/",
                  "https://www.instagram.com/infogentech_/",
                  "https://www.youtube.com/@infogentech",
                  "https://www.linkedin.com/company/infogentech/",
                  "https://in.pinterest.com/infogentech/",
                  "https://www.threads.com/@infogentech_"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://infogentech.com/#website",
                "url": "https://infogentech.com/us/",
                "name": "Infogentech Softwares LLP",
                "description": "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
                "publisher": {
                  "@id": "https://infogentech.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://infogentech.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://infogentech.com/#webpage",
                "url": "https://infogentech.com/us/",
                "name": "Infogentech | Empowering Your Digital Evolution",
                "description": "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
                "isPartOf": {
                  "@id": "https://infogentech.com/#website"
                },
                "about": {
                  "@id": "https://infogentech.com/#organization"
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
