"use client"
import { HeroSection } from "@/components/hero-section.jsx";
import ServicesSection from "@/components/ServicesSection.jsx";
import { StatsSection } from "@/components/StatsSection.jsx";
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
                  "https://in.pinterest.com/infogentech_/",
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
