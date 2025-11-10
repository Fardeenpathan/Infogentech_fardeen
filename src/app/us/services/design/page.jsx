"use client";
import ServicesHeader from "@/components/ServicesHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";
import { motion, AnimatePresence } from "framer-motion";

const Design = () => {
  const categories = [
    {
      id: "01",
      title: "Graphic Design",
      image: "/assist/services/design/graphic.jpeg",
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
      image: "/assist/services/design/ui.png",
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
      image: "/assist/services/design/branding.png",
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
      image: "/assist/services/design/logo.jpeg",
      subServices: [
        {
          id: "01",
          title: "Minimalist logo",
          desc: "Sleek and simple designs for modern brands.",
        },
        {
          id: "02",
          title: "Animated logo",
          desc: "Bringing your brand to life with motion.",
        },
        {
          id: "03",
          title: "Custom Logo Design",
          desc: "Tailored designs that reflect your brand identity.",
        },
        {
          id: "04",
          title: "3D Logo",
          desc: "Adding depth and dimension to your brand.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState(categories[0].id);

  const toggleCategory = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlay = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   }
  // };

  // const handleVideoClick = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //       setIsPlaying(false);
  //     } else {
  //       videoRef.current.play();
  //       setIsPlaying(true);
  //     }
  //   }
  // };

  return (
    <>
      <ServicesHeader />
      <AllServices activeService="Design" />
      <div className="container mx-auto mt-9 md:mt-24 xl:px-10 md:px-5 px-2">
        <div className="border-b-2 border-[#7e7d7d] mt-9 md:mt-15 opacity-15"></div>
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
                    src={category.image}
                    alt={category.title}
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
                    
                    {openCategory === category.id && (
                      <div className="mt-10 flex justify-center">
                        <Image
                        src={category.image}
                        alt={category.title}
                        width={400}
                        height={377}
                        className=" w-64 h-36  rounded-2xl rotate-12  object-cover z-10 lg:hidden "
                      />
                      </div>
                      
                    )}
                    <div className="py-10 flex flex-col items-center gap-2 text-center px-4">
                      <p className="font-jost font-bold md:text-3xl text-2xl leading-6 text-primary">
                        Our Value
                      </p>
                      <p className="font-jost font-medium md:text-lg text-base leading-6">
                        How we work at Untitled guided by shared values that
                        keep us connected as one team
                      </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-6 gap-2 mb-10 overflow-visible md:px-10 px-4">
                      {category.subServices.length > 0 ? (
                        category.subServices.map((subService) => (
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
                        ))
                      ) : (
                        <div className="col-span-full text-center py-8 opacity-60">
                          <p className="font-jost text-lg">
                            No sub-services listed for this category.
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-b-2 border-[#7e7d7d] opacity-15"></div>
            </div>
          ))}
        </div>

        <div className="mt-34 flex justify-center items-center flex-col relative">
          <div className="absolute -top-20 ">
            <Icons name="gradientServices" width={300} height={100} />
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

export default Design;
