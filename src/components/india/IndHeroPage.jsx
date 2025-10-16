"use client";
import  IndHeroSection  from "@/components/india/IndHeroSection";
import  IndServices  from "@/components/india/IndServices";
import  IndAboutHome  from "@/components/india/IndAboutHome";
import  IndConsutation  from "@/components/india/IndConsutation";
import  IndHowWeWork  from "@/components/india/IndHowWeWork";
import  IndWhyChooseUs  from "@/components/india/IndWhyChooseUs";
import  IndTestomonial  from "@/components/india/IndTestomonial";
import  IndFaqsHome  from "@/components/india/IndFaqsHome";
import  IndWhatMakesStandOut  from "@/components/india/IndWhatMakesStandOut";
export default function Home() {
  return (
    <>
      <main className="w-full overflow-hidden">  
        <IndHeroSection />
        <IndServices/>
        <IndAboutHome/>
        <IndWhatMakesStandOut/>    
        <IndHowWeWork/>
        <IndConsutation/>
        <IndWhyChooseUs/>
        <IndTestomonial/>
        <IndFaqsHome/>
      </main>
    </>
  );
}