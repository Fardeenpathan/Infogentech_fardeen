"use client";
import { HeroSection } from "@/components/hero-section";
import ServicesSection from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import OurValues from "@/components/OurValues";  
export default function Home() {    
  return (
    <main className="w-full">
      <HeroSection />
      <StatsSection />
        <ServicesSection />
        <OurValues />
    </main>
  );
}
