"use client";
import PortfolioHeader from "@/components/PortfolioHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";

const Design = () => {
  const categories = [
  {
    id: "01",
    title: "Graphic Design",
    subServices: [
      {
        id: "01",
        title: "Print and Digital Graphic Design",
        desc: "Creating impactful visual content across media.",
      },
      {
        id: "02",
        title: "Presentation Design",
        desc: "Crafting narrative-driven brand presentations.",
      },
      {
        id: "03",
        title: "Ad Creative Design",
        desc: "Designing engaging ads that capture attention.",
      },
      {
        id: "04",
        title: "Illustrations & Iconography",
        desc: "Custom visuals to enhance storytelling.",
      },
      {
        id: "05",
        title: "Print & Packaging Design",
        desc: "Innovative packaging and print solutions.",
      },
      {
        id: "06",
        title: "Product Sheets & One Pagers",
        desc: "Clear and concise product communication.",
      },
      {
        id: "07",
        title: "Corporate Reports",
        desc: "Professional, data-driven report designs.",
      },
    ],
  },
  {
    id: "02",
    title: "UI/UX Design",
    subServices: [
      {
        id: "01",
        title: "UI/UX Design & Wireframing",
        desc: "Intuitive, user-focused digital experiences.",
      },
      {
        id: "02",
        title: "Mobile-first Responsive Design",
        desc: "Seamless design across every device.",
      },
      {
        id: "03",
        title: "Visual Design Systems & Style Guides",
        desc: "Consistent branding with clear design standards.",
      },
      {
        id: "04",
        title: "Website Design (Desktop, Mobile, eCommerce)",
        desc: "Engaging, functional websites that convert.",
      },
      {
        id: "05",
        title: "Landing Page Design",
        desc: "High-impact pages built to drive results.",
      },
    ],
  },
  {
    id: "03",
    title: "Branding",
    subServices: [
      {
        id: "01",
        title: "Corporate Identity Design",
        desc: "Building strong, memorable brand identities.",
      },
      {
        id: "02",
        title: "Brand Guidelines",
        desc: "Defining consistent rules for brand expression.",
      },
      {
        id: "03",
        title: "Brand Identity Messaging",
        desc: "Clear communication of your brand’s voice.",
      },
      {
        id: "04",
        title: "Rebranding Services",
        desc: "Transforming brands for modern relevance.",
      },
    ],
  },
  {
    id: "04",
    title: "Logo Design",
    subServices: [
      // Currently no sub-services, you can add if needed
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
      <AllServices activeService="Design" />

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

export default Design;
