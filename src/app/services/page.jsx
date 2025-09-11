"use client";
import SubscribeContact from "@/components/SubscribeContact";
import Icons from "@/components/ui/Icon";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SubServiceCard from "@/components/SubServiceCard";
import servicesData from "@/data/servicesData.json";

const PortFolio = () => {
  const [activeKey, setActiveKey] = useState("design");
  const [openCategory, setOpenCategory] = useState(
    servicesData.find((s) => s.key === "design")?.categories[0].id
  );
  const [activeService, setActiveService] = useState(
    servicesData.find((s) => s.key === activeKey)
  );

  useEffect(() => {
    const service = servicesData.find((s) => s.key === activeKey);
    setActiveService(service);
    setOpenCategory(service?.categories[0]?.id || null);
  }, [activeKey]);

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
    <div className="container mx-auto mt-24 px-10">
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          Our Services
        </p>
        <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          What We <span className="text-[#6A27FF]">Provide</span>
        </p>
        <p className="font-jost text-lg font-medium leading-[24px] text-center mt-6">
          Shaping digital futures with customized digital solutions that deliver
          results.
        </p>
        <div className="w-0.5 h-28 rounded-full mb-10 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
        <div className="relative w-12 h-12">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex gap-6 justify-center mt-10 ">
        {servicesData.map((service) => (
          <button
            key={service.id}
            className={`flex gap-2 items-center border border-white rounded-md px-7 py-2 cursor-pointer transition-opacity duration-300 ${
              activeKey === service.key ? "opacity-100" : "opacity-30"
            }`}
            onClick={() => setActiveKey(service.key)}
          >
            <Icons name={service.icon} />
            <span className="text-sm font-jost">{service.label}</span>
          </button>
        ))}
      </div>

      <div className="border-b-2 border-[#7e7d7d] mt-15 opacity-15"></div>
      <div >
        {activeService?.categories?.map((category) => (
          <div key={category.id}>
            <div
              className={`relative  font-jost font-normal text-[64px] leading-[100%] tracking-[0.03em] flex justify-between items-center py-5 cursor-pointer transition-opacity duration-300 ${
                openCategory === category.id ? "opacity-100" : "opacity-15"
              }`}
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex gap-50 ">
                <span>{category.id}</span> <span>{category.title}</span>
              </div>
              {openCategory === category.id && (
                <Image
                  src="/assist/img/DesignImg.png"
                  alt="Blogs"
                  width={400}
                  height={377}
                  objectFit="cover"
                  className="rounded-2xl rotate-12 absolute -top-15 right-9 animate-slide-in-right overflow-hidden"
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
                    How we work at Untitled guided by shared values that keep us
                    connected as one team
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

        <div className="relative subContainer h-[640px] flex items-center justify-center ">
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
  );
};

export default PortFolio;
