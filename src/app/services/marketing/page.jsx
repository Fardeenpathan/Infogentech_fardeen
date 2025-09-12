"use client";
import PortfolioHeader from "@/components/PortfolioHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";

const Marketing = () => {
  const categories = [
    {
      id: "01",
      title: "Marketing Strategy",
      subServices: [
        { id: "01", title: "ROI-Driven Campaign Strategies", desc: "" },
        { id: "02", title: "B2B Content Strategies", desc: "" },
        { id: "03", title: "Brand Messaging & Narratives", desc: "" },
        { id: "04", title: "Content Strategy & Execution", desc: "" },
        { id: "05", title: "Performance Tracking & ROI Analysis", desc: "" },
        { id: "06", title: "Long-Term Partnerships", desc: "" },
        { id: "07", title: "Competitor Benchmarking", desc: "" },
      ],
    },
    {
      id: "02",
      title: "Performance Marketing",
      subServices: [
        { id: "01", title: "Pay-Per-Click Advertising (PPC)", desc: "" },
        { id: "02", title: "Google Ads Campaign Management", desc: "" },
        { id: "03", title: "Display Ads & Retargeting", desc: "" },
        { id: "04", title: "Shopping Ads & Product Listings", desc: "" },
        { id: "05", title: "Conversion Tracking & Optimization", desc: "" },
        { id: "06", title: "E-commerce Marketing", desc: "" },
        { id: "07", title: "Online Store Optimization", desc: "" },
        { id: "08", title: "Shopping Campaign Management", desc: "" },
        { id: "09", title: "Shopping Ads & Product Listings", desc: "" },
        { id: "10", title: "Cart Abandonment Recovery", desc: "" },
        { id: "11", title: "CLV Optimization", desc: "" },
        { id: "12", title: "Marketplace Marketing (Amazon, eBay)", desc: "" },
      ],
    },
    {
      id: "03",
      title: "CRM & Automation",
      subServices: [
        { id: "01", title: "Email Marketing", desc: "" },
        { id: "02", title: "Email Campaign Design", desc: "" },
        { id: "03", title: "Newsletter Creation & Management", desc: "" },
        { id: "04", title: "Automation Sequences", desc: "" },
        { id: "05", title: "Customer Retention Strategies", desc: "" },
        { id: "06", title: "List Building & Segmentation", desc: "" },
      ],
    },
    {
      id: "04",
      title: "Audience Engagement Strategy",
      subServices: [
        { id: "01", title: "Social Media Marketing (SMO)", desc: "" },
        {
          id: "02",
          title: "Instagram, Facebook & YouTube Marketing",
          desc: "",
        },
        { id: "03", title: "WhatsApp & Twitter Engagement", desc: "" },
        { id: "04", title: "Social Strategy Development", desc: "" },
        {
          id: "05",
          title: "Content Creation & Community Management",
          desc: "",
        },
        { id: "06", title: "Channel Optimization", desc: "" },
        { id: "07", title: "Social Analytics & Reporting", desc: "" },
        { id: "08", title: "Influencer Marketing", desc: "" },
        { id: "09", title: "Influencer Outreach & Collaboration", desc: "" },
        { id: "10", title: "Campaign Strategy & Management", desc: "" },
      ],
    },
    {
      id: "05",
      title: "Search Engine Optimization (SEO)",
      subServices: [
        { id: "01", title: "Search Engine Optimization (SEO)", desc: "" },
        { id: "02", title: "Technical SEO Audits", desc: "" },
        { id: "03", title: "On-Page SEO & Content Optimization", desc: "" },
        { id: "04", title: "Off-Page SEO & Link Building", desc: "" },
        { id: "05", title: "Local SEO for Businesses", desc: "" },
        { id: "06", title: "Mobile & E-commerce SEO", desc: "" },
        { id: "07", title: "Keyword Research & Competitor Analysis", desc: "" },
      ],
    },
    {
      id: "06",
      title: "Content Marketing",
      subServices: [
        { id: "01", title: "Blog Writing & SEO Copy", desc: "" },
        { id: "02", title: "Social Content & Captions", desc: "" },
        { id: "03", title: "Video Scripts & Storytelling", desc: "" },
        { id: "04", title: "Marketing Copywriting", desc: "" },
        { id: "05", title: "Content Calendar Planning", desc: "" },
      ],
    },
    {
      id: "07",
      title: "Analytics & Reporting",
      subServices: [
        { id: "01", title: "Google Analytics Setup", desc: "" },
        { id: "02", title: "Performance Monitoring & CRO", desc: "" },
        { id: "03", title: "Custom Dashboards & Reporting", desc: "" },
        { id: "04", title: "ROI & Insight Reports", desc: "" },
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
      <AllServices activeService="Digital Marketing" />

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

export default Marketing;
