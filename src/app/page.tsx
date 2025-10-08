"use client";
import  IndHeroSection  from "@/components/IndHeroSection";
import  IndServices  from "@/components/IndServices";
import  IndAboutHome  from "@/components/IndAboutHome";
import  IndHowWeWork  from "@/components/IndHowWeWork";
export default function Home() {
  return (
    <main className="w-full">  
      <IndHeroSection />
      <IndServices/>
      <IndAboutHome/>
      <IndHowWeWork/>
    </main>
  );
}
