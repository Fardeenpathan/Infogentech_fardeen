"use client";
import { HeroSection } from "@/components/hero-section";
import ServicesSection from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import OurValues from "@/components/OurValues";  
import SuhcduleCall from "@/components/SuhcduleCall";  
import StrategicProcess from "@/components/StrategicProcess";  
export default function Home() {    
  return (
    <main className="w-full">
      <HeroSection />
      <StatsSection />
        <ServicesSection />
        <OurValues />
        <SuhcduleCall />
        <StrategicProcess />
    </main>
  );
}
