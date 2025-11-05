"use client";
import React from "react";
import Icons from "../ui/Icon"; // assuming you use your custom Icons component
import IndMidHeader from "@/components/india/IndMidHeader";
import IndTopicHeader from "../IndTopicHeader";

export default function WhatMakesStandOut() {
  const cards = [
    {
      icon: "IndExpertise",
      title: "Proven Expertise & Experience:",
      text: "With years in the industry, our industry experts analyze the issues specific to the sectors and create strategies based on data and analytics. Our expertise helps businesses optimise their visibility online, improve their rankings, and become successful empirically.",
    },
    {
      icon: "IndDigitalSolutions",
      title: "Customized Digital Solutions:",
      text: "We believe that no two businesses are alike; thus, a one-fits-all approach does not hold for us. Our experts are dedicated to truly understanding your business aspirations, sector requirements, and customer needs to conceptualise customised IT and digital marketing solutions. Whether you need an SEO kick, a fresher website, or a marketing solution to die for, we customize every ingredient for maximum growth and interaction.",
    },
    {
      icon: "IndTechnology",
      title: "Cutting-Edge Technology:",
      text: "The latest forms of AI, data analytics, and automation equip us with all the technology to stay ahead. Marketing solutions driven by AI help with customer targeting, while predictive analytics guide strategy-making decisions. Keeping in sync with the current technological trends puts your company ahead in this dynamic digital world.",
    },
    {
      icon: "IndGlobalAssist",
      title: "Global Accessibility & round-the-clock assistance:",
      text: "Wherever your business is based, our offering is made to be made available worldwide. Our services have been successfully provided to businesses across various sectors around the globe with solutions that surpass even geographical location constraints. The special assistance team will attend to your inquiries, help modify strategies, and ensure uninterrupted operations around the clock, putting your brand a step ahead of the competition.",
    },
  ];

  return (
    <section className="w-full container mx-auto px-5 sm:px-8 md:px-10 lg:py-12 bg-transparent lg:mt-20">
      <div className="hidden lg:block">
        <IndMidHeader
        className="text-center"
          title="What Makes"
          subtitle="Infogentech Stand Out in Digital Marketing"
          description="We are a worldwide agency that manages higher-level digital marketing for clients around the globe. Our highly qualified and experienced team gives quality output. Customer satisfaction and long-term success are what we aim to achieve for each client that we have. We assure effective growth across the globe and would provide services without fear. Our vast client and sector experience shines through in performance."
        />
        </div>
        <IndTopicHeader
          className="!flex-col gap-2 lg:gap-10 lg:hidden"
          title="What Makes"
           subtitle="Infogentech Stand Out in Digital Marketing"
          description="We are a worldwide agency that manages higher-level digital marketing for clients around the globe. Our highly qualified and experienced team gives quality output. Customer satisfaction and long-term success are what we aim to achieve for each client that we have. We assure effective growth across the globe and would provide services without fear. Our vast client and sector experience shines through in performance."
        />
          <p
        className="font-montserrat font-medium xl:text-lg text-sm xl:leading-[150%] tracking-[-0.02em] lg:text-center text-start  py-4"
      >
        Through the years, we have groomed brands as an IT solutions firm. Do not let your competitors overshadow your web presence. Our experts will study trends and optimise your brand visibility. Customized SEO techniques give us the power to measure real success. Let our IT experts work on expanding your business.
       </p>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#F4EFFF] relative rounded-[20px] p-6 sm:p-8 flex flex-col items-start justify-start shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full max-w-[528px] h-auto aspect-[528/280] rounded-xl opacity-100 flex items-center justify-center mx-auto">
              <Icons
                name={card.icon}
                className="w-full h-full object-contain rounded-[20px]"
              />
            </div>
            <h4 className="font-montserrat font-semibold xl:text-2xl text-lg text-gray-600 mb-3 text-start lg:text-center sm:text-left leading-[150%] tracking-[-0.02em] z-10">
              {card.title}
            </h4>
            <p className="font-montserrat font-medium xl:text-lg text-sm leading-[150%] tracking-[-0.02em] text-gray-600/80 text-start lg:text-center sm:text-left z-10">
              {card.text}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-[linear-gradient(179.37deg,rgb(253_253_253/5%)_0.55%,#FCFBFF_46.27%)]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
