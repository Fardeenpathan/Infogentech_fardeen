"use client";
import ServicesHeader from "@/components/ServicesHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";

const Content = () => {
  const categories = [
    {
      id: "01",
      title: "Photo & Video Production",
      subServices: [
        { id: "01", title: "Video Production & Motion Design", desc: "" },
        { id: "02", title: "Video Production", desc: "" },
        { id: "03", title: "Commercials & Hero Videos", desc: "" },
        { id: "04", title: "Product Demo Videos", desc: "" },
        { id: "05", title: "Animated Explainer Videos", desc: "" },
        { id: "06", title: "2D/3D Animations & AR Design", desc: "" },
        { id: "07", title: "Social Media Video Content", desc: "" },
        { id: "08", title: "Promotional & Marketing Videos", desc: "" },
        { id: "09", title: "Video Editing & Post-Production", desc: "" },
        { id: "10", title: "Interactive Animations", desc: "" },
        { id: "11", title: "Sound & Music Design", desc: "" },
      ],
    },
    {
      id: "02",
      title: "Visual Content Design",
      subServices: [
        { id: "01", title: " Infographic Design", desc: "" },
        { id: "02", title: "Visual & Written Content", desc: "" },
        { id: "03", title: "Brand Storytelling & Messaging", desc: "" },
        { id: "04", title: " Content Strategy & Execution", desc: "" },
      ],
    },
    {
      id: "03",
      title: "Audio & Motion Graphics",
      subServices: [
        { id: "01", title: "Sound & Music Design", desc: "" },
        { id: "02", title: "Video Production & Motion Design", desc: "" },
        { id: "03", title: "Interactive Animations", desc: "" },
        { id: "04", title: "Explainer Video Scripting", desc: "" },
      ],
    },
      {
      id: "04",
      title: "Blog Posts & Articles",
      subServices: [
        { id: "01", title: "Blog Writing & SEO Articles", desc: "" },
        { id: "02", title: "Case Studies & Whitepapers", desc: "" },
        { id: "03", title: "Website & Landing Page Copy", desc: "" },
        { id: "04", title: "Email Content & Newsletters", desc: "" },
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
      <ServicesHeader />
      <AllServices activeService="Content" />

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

export default Content;
