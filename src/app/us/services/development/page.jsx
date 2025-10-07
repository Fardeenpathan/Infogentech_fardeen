"use client";
import ServicesHeader from "@/components/ServicesHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";
import { motion, AnimatePresence } from "framer-motion";

const Development = () => {
  const categories = [
    {
      id: "01",
      title: "Web & App Development",
      image: "/assist/services/development/webAp.jpeg",
      subServices: [
        { id: "01", title: "Website Development", desc: "Scalable websites built for performance." },
        { id: "02", title: "Custom Websites & Business Landing Pages", desc: "Tailored solutions for unique business needs." },
        { id: "03", title: "E-commerce Platforms & Online Stores", desc: "Powerful online shopping experiences." },
        { id: "04", title: "Personal Portfolios & Showcase Sites", desc: "Sleek designs to highlight your work." },
        { id: "05", title: "Application Development", desc: "End-to-end custom software solutions." },
        { id: "06", title: "Web-based Application Development", desc: "Secure and scalable web apps." },
        { id: "07", title: "Mobile App Development (iOS & Android)", desc: "Engaging apps across platforms." },
        { id: "08", title: "Progressive Web Applications (PWA)", desc: "Modern, app-like web experiences." },
        { id: "09", title: "Cross-platform Mobile Solutions", desc: "Apps that work seamlessly across devices." },
        { id: "10", title: "Portal & Dashboard Development", desc: "Smart dashboards for data-driven insights." },
        { id: "11", title: "Enterprise App Development", desc: "Scalable apps tailored for enterprises." },
        { id: "12", title: "Software Development & SaaS", desc: "Cloud-based software for modern businesses." },
        { id: "13", title: "Custom Software Development", desc: "Bespoke solutions for unique challenges." },
        { id: "14", title: "SaaS Platform Setup, Deployment & Support", desc: "End-to-end SaaS implementation." },
        { id: "15", title: "Scalability & Performance Optimization", desc: "Faster, more efficient applications." },
        { id: "16", title: "Application Maintenance", desc: "Reliable support and ongoing improvements." },
      ],
    },
    {
      id: "02",
      title: "CMS Development",
      image: "/assist/services/development/cms.png",
      subServices: [
        { id: "01", title: "WordPress (Custom Themes & Plugins)", desc: "Custom WordPress solutions." },
        { id: "02", title: "Shopify Store Development & Customization", desc: "Scalable Shopify stores." },
        { id: "03", title: "Joomla & WooCommerce Solutions", desc: "Smart eCommerce solutions." },
        { id: "04", title: "Custom CMS Development", desc: "Tailored CMS platforms." },
        { id: "05", title: "LMS Development", desc: "Powerful online learning systems." },
      ],
    },
    {
      id: "03",
      title: "Custom Integrations",
      image: "/assist/services/development/customIntegration.png",
      subServices: [
        { id: "01", title: "Database Design & API Integration", desc: "Seamless data connectivity." },
        { id: "02", title: "System Integration & Custom Software", desc: "Unified custom solutions." },
        { id: "03", title: "CRM Integration", desc: "Smarter customer management." },
      ],
    },
    {
      id: "04",
      title: "AI & Cloud Solutions",
      image: "/assist/services/development/AICloud.png",
      subServices: [
        { id: "01", title: "Advanced AI Development", desc: "Smart AI solutions." },
        { id: "02", title: "Cloud Hosting Services", desc: "Secure cloud hosting." },
        { id: "03", title: "Advanced Solutions", desc: "Innovative tech services." },
        { id: "04", title: "Node.js Development", desc: "Fast Node.js apps." },
        { id: "05", title: "React Development", desc: "Dynamic React apps." },
        { id: "06", title: "Laravel Development", desc: "Powerful Laravel sites." },
        { id: "07", title: "No-Code Development", desc: "Build without coding." },
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
      <AllServices activeService="Development" />

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
                    src={category.image}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 overflow-visible px-10">
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
          {/* // */}
        </div>

        <SubscribeContact />
      </div>
    </>
  );
};

export default Development;
