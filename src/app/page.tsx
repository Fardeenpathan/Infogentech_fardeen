"use client";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/StatsSection";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="w-full">
        <HeroSection />
          <StatsSection /> 
        <ServicesSection />
    </main>
  );
}
