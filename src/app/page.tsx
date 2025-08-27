"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="w-full   relative">
      <video
        className="absolute top-0 left-0 w-full h-220  object-cover bg-transparent -z-10"
        src="/assist/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
     
        <div className="max-w-custom  mx-auto">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        </div>
    
    </main>
  );
}
