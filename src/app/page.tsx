"use client";
import { HeroSection } from "@/components/hero-section";
import ServicesSection from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <StatsSection />
        <ServicesSection />
    </main>
  );
}
