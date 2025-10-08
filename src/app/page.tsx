"use client";
import  IndHeroSection  from "@/components/IndHeroSection";
import  IndServices  from "@/components/IndServices";
import  IndAboutHome  from "@/components/IndAboutHome";
import  IndConsutation  from "@/components/IndConsutation";
import  IndHowWeWork  from "@/components/IndHowWeWork";
import  IndWhyChooseUs  from "@/components/IndWhyChooseUs";
export default function Home() {
  return (
    <main className="w-full">  
      <IndHeroSection />
      <IndServices/>
      <IndAboutHome/>
      <IndHowWeWork/>
      <IndConsutation/>
      <IndWhyChooseUs/>
    </main>
  );
}
