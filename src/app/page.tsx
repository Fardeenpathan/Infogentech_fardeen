"use client";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="w-full">
        <div className="max-w-custom  mx-auto">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        </div>
    </main>
  );
}
