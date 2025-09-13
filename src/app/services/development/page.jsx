"use client";
import PortfolioHeader from "@/components/PortfolioHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";

const Development = () => {
  const categories = [
    {
      id: "01",
      title: "Web & App Development",
      subServices: [
        { id: "01", title: "Website Development", desc: "" },
        {
          id: "02",
          title: "Custom Websites & Business Landing Pages",
          desc: "",
        },
        { id: "03", title: "E-commerce Platforms & Online Stores", desc: "" },
        { id: "04", title: "Personal Portfolios & Showcase Sites", desc: "" },
        { id: "05", title: "Application Development", desc: "" },
        { id: "06", title: "Web-based Application Development", desc: "" },
        { id: "07", title: "Mobile App Development (iOS & Android)", desc: "" },
        { id: "08", title: "Progressive Web Applications (PWA)", desc: "" },
        { id: "09", title: "Cross-platform Mobile Solutions", desc: "" },
        { id: "10", title: "Portal & Dashboard Development", desc: "" },
        { id: "11", title: "Enterprise App Development", desc: "" },
        { id: "12", title: "Software Development & SaaS", desc: "" },
        { id: "13", title: "Custom Software Development", desc: "" },
        {
          id: "14",
          title: "SaaS Platform Setup, Deployment & Support",
          desc: "",
        },
        { id: "15", title: "Scalability & Performance Optimization", desc: "" },
        { id: "16", title: "Application Maintenance", desc: "" },
      ],
    },
    {
      id: "02",
      title: "CMS Development",
      subServices: [
        { id: "01", title: "WordPress (Custom Themes & Plugins)", desc: "" },
        {
          id: "02",
          title: "Shopify Store Development & Customization",
          desc: "",
        },
        { id: "03", title: "Joomla & WooCommerce Solutions", desc: "" },
        { id: "04", title: "Custom CMS Development", desc: "" },
        { id: "05", title: "LMS Development", desc: "" },
      ],
    },
    {
      id: "03",
      title: "Custom Integrations",
      subServices: [
        {
          id: "01",
          title: "Database Design & API Integration",
          desc: "Creative strategies, impactful storytelling, and adaptive journeys.",
        },
        {
          id: "02",
          title: "System Integration & Custom Software",
          desc: "Strong social media engagement and user growth.",
        },
        {
          id: "03",
          title: "CRM Integration",
          desc: "Strong social media engagement and user growth.",
        },
      ],
    },
    {
      id: "04",
      title: "AI & Cloud Solutions",
      subServices: [
        {
          id: "01",
          title: "Advanced AI Development",
          desc: "Creative strategies, impactful storytelling, and adaptive journeys.",
        },
        {
          id: "02",
          title: "Cloud Hosting Services",
          desc: "Strong social media engagement and user growth.",
        },
        {
          id: "03",
          title: "Advanced Solutions",
          desc: "Strong social media engagement and user growth.",
        },
        { id: "04", title: "Node.js Development", desc: "" },
        { id: "05", title: "React Development", desc: "" },
        { id: "06", title: "Laravel Development", desc: "" },
        { id: "07", title: "No-Code Development", desc: "" },
      ],
    },
  ];
  const [openCategory, setOpenCategory] = useState(categories[0].id);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <PortfolioHeader />
      <AllServices activeService="Development" />

      <div className="container mx-auto mt-24 px-10">
        <div className="border-b-2 border-[#7e7d7d] mt-15 opacity-15"></div>

        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <div
                className={`relative font-jost font-normal text-[64px] leading-[100%] tracking-[0.03em] flex justify-between items-center py-5 cursor-pointer transition-opacity duration-300 ${
                  openCategory === category.id ? "opacity-100" : "opacity-40"
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex gap-10">
                  <span>{category.id}</span>
                  <span>{category.title}</span>
                </div>
                {openCategory === category.id && (
                  <Image
                    src="/assist/img/DesignImg.png"
                    alt="Blogs"
                    width={400}
                    height={377}
                    className="rounded-2xl rotate-12 absolute -top-15 right-9 animate-slide-in-right overflow-hidden object-cover"
                  />
                )}
              </div>
              {openCategory === category.id && (
                <div>
                  <div className="py-10 flex flex-col items-center gap-2 text-center">
                    <p className="font-jost font-bold text-[32px] leading-[24px] text-[#8752FF]">
                      Our Value
                    </p>
                    <p className="font-jost font-medium text-lg leading-[24px]">
                      How we work at Untitled guided by shared values that keep
                      us connected as one team
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 overflow-visible">
                    {category.subServices.map((subService) => (
                      <SubServiceCard
                        key={subService.id}
                        subService={subService}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="border-b-2 border-[#7e7d7d] opacity-15"></div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-34 flex justify-center items-center flex-col relative">
          <div className="absolute -top-20">
            <Icons name="gradientServices" />
          </div>

          <div className="relative subContainer h-[640px] flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer rounded-3xl"
              onClick={handleVideoClick}
              loop
              playsInline
              muted
            >
              <source src="/assist/hero-bg.mp4" type="video/mp4" />
            </video>
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg"
              >
                <Icons name="Play" />
              </button>
            )}
          </div>
        </div>

        <SubscribeContact />
      </div>
    </>
  );
};

export default Development;
