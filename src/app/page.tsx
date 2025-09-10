"use client";
import { HeroSection } from "@/components/hero-section";
import ServicesSection from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import OurValues from "@/components/OurValues";
import SuhcduleCall from "@/components/SuhcduleCall";
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
      <div className="container mx-auto">
        <OurValues />
        <SuhcduleCall />
        <StrategicProcess />
        <OurPortfolio />
        <Testimonials />
        <LatestBlogs />
      </div>
    </main>
  );
}
