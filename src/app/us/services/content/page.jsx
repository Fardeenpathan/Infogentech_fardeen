"use client";
import ServicesHeader from "@/components/ServicesHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";
import { motion, AnimatePresence } from "framer-motion";

const Content = () => {
  const categories = [
    {
      id: "01",
      title: "Photo & Video Production",
      subServices: [
        {
          id: "01",
          title: "Video Production & Motion Design",
          desc: "Create dynamic visuals.",
        },
        {
          id: "02",
          title: "Video Production",
          desc: "Deliver high-quality videos.",
        },
        {
          id: "03",
          title: "Commercials & Hero Videos",
          desc: "Showcase your brand.",
        },
        {
          id: "04",
          title: "Product Demo Videos",
          desc: "Explain products clearly.",
        },
        {
          id: "05",
          title: "Animated Explainer Videos",
          desc: "Simplify with animation.",
        },
        {
          id: "06",
          title: "2D/3D Animations & AR Design",
          desc: "Bring ideas to life.",
        },
        {
          id: "07",
          title: "Social Media Video Content",
          desc: "Engage on socials.",
        },
        {
          id: "08",
          title: "Promotional & Marketing Videos",
          desc: "Drive brand awareness.",
        },
        {
          id: "09",
          title: "Video Editing & Post-Production",
          desc: "Refine videos professionally.",
        },
        {
          id: "10",
          title: "Interactive Animations",
          desc: "Engage with motion.",
        },
        {
          id: "11",
          title: "Sound & Music Design",
          desc: "Enhance with audio.",
        },
      ],
    },
    {
      id: "02",
      title: "Visual Content Design",
      subServices: [
        {
          id: "01",
          title: "Infographic Design",
          desc: "Visualize data smartly.",
        },
        {
          id: "02",
          title: "Visual & Written Content",
          desc: "Blend words with visuals.",
        },
        {
          id: "03",
          title: "Brand Storytelling & Messaging",
          desc: "Share your brand story.",
        },
        {
          id: "04",
          title: "Content Strategy & Execution",
          desc: "Plan and deliver content.",
        },
      ],
    },
    {
      id: "03",
      title: "Audio & Motion Graphics",
      subServices: [
        {
          id: "01",
          title: "Sound & Music Design",
          desc: "Enhance videos with powerful audio.",
        },
        {
          id: "02",
          title: "Video Production & Motion Design",
          desc: "Craft engaging visual experiences.",
        },
        {
          id: "03",
          title: "Interactive Animations",
          desc: "Drive engagement with interactive motion.",
        },
        {
          id: "04",
          title: "Explainer Video Scripting",
          desc: "Simplify ideas through clear scripts.",
        },
      ],
    },
    {
      id: "04",
      title: "Blog Posts & Articles",
      subServices: [
        {
          id: "01",
          title: "Blog Writing & SEO Articles",
          desc: "Write blogs that boost rankings.",
        },
        {
          id: "02",
          title: "Case Studies & Whitepapers",
          desc: "Showcase expertise with insights.",
        },
        {
          id: "03",
          title: "Website & Landing Page Copy",
          desc: "Convert visitors with persuasive copy.",
        },
        {
          id: "04",
          title: "Email Content & Newsletters",
          desc: "Engage audiences through consistent emails.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState(categories[0].id);

  const toggleCategory = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
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

    <div className="container mx-auto mt-24 xl:px-10 md:px-5 px-2">
        <div className="border-b-2 border-[#7e7d7d] mt-15 opacity-15"></div>

        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <div
                className={`relative font-jost font-normal xl:text-[64px]  md:text-5xl text-3xl leading-[100%] tracking-[0.03em] flex justify-between items-center py-5 cursor-pointer transition-opacity duration-300 ${
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
                    alt="Design"
                    width={400}
                    height={377}
                    className="w-[400px] h-[377px] md:w-[300px] md:h-[280px] lg:w-[350px] lg:h-[207px] rounded-2xl rotate-12 absolute -top-10 right-6 animate-slide-in-right object-cover z-10 xl:flex hidden"
                  />
                )}
              </div>
              <AnimatePresence initial={false}>
                {openCategory === category.id && (
                  <motion.div
                    key={`panel-${category.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-10 flex flex-col items-center gap-2 text-center px-4">
                      <p className="font-jost font-bold md:text-3xl text-2xl leading-6 text-primary">
                        Our Value
                      </p>
                      <p className="font-jost font-medium md:text-lg text-[16px] leading-6">
                        How we work at Untitled guided by shared values that
                        keep us connected as one team
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10 overflow-visible md:px-10 px-4">
                      {category.subServices.map((subService) => (
                        <motion.div
                          key={`${category.id}-${subService.id}`}
                          layout
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.28 }}
                        >
                          <SubServiceCard subService={subService} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-b-2 border-[#7e7d7d] opacity-15"></div>
            </div>
          ))}
        </div>

        <div className="mt-34 flex justify-center items-center flex-col relative">
          <div className="absolute -top-20">
             <Icons name="gradientServices" width={300} height={100}/>
          </div>

          {/* <div className="relative subContainer h-[640px] flex items-center justify-center">
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
                aria-label="Play video"
              >
                <Icons name="Play" />
              </button>
            )}
          </div> */}
        </div>

        <SubscribeContact />
      </div>
    </>
  );
};

export default Content;
