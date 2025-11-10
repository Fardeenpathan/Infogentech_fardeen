"use client";
import ServicesHeader from "@/components/ServicesHeader";
import AllServices from "@/components/AllServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import { useRef, useState } from "react";
import SubServiceCard from "@/components/SubServiceCard";
import { motion, AnimatePresence } from "framer-motion";

const Marketing = () => {
  const categories = [
    {
      id: "01",
      title: "Marketing Strategy",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        {
          id: "01",
          title: "ROI-Driven Campaign Strategies",
          desc: "Maximize marketing returns.",
        },
        {
          id: "02",
          title: "B2B Content Strategies",
          desc: "Targeted business content.",
        },
        {
          id: "03",
          title: "Brand Messaging & Narratives",
          desc: "Strong brand storytelling.",
        },
        {
          id: "04",
          title: "Content Strategy & Execution",
          desc: "Effective content delivery.",
        },
        {
          id: "05",
          title: "Performance Tracking & ROI Analysis",
          desc: "Data-driven insights.",
        },
        {
          id: "06",
          title: "Long-Term Partnerships",
          desc: "Sustainable business growth.",
        },
        {
          id: "07",
          title: "Competitor Benchmarking",
          desc: "Stay ahead of rivals.",
        },
      ],
    },
    {
      id: "02",
      title: "Performance Marketing",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        {
          id: "01",
          title: "Pay-Per-Click Advertising (PPC)",
          desc: "Targeted paid ads.",
        },
        {
          id: "02",
          title: "Google Ads Campaign Management",
          desc: "Optimized Google Ads.",
        },
        {
          id: "03",
          title: "Display Ads & Retargeting",
          desc: "Reach & re-engage.",
        },
        {
          id: "04",
          title: "Shopping Ads & Product Listings",
          desc: "Boost product visibility.",
        },
        {
          id: "05",
          title: "Conversion Tracking & Optimization",
          desc: "Improve ROI results.",
        },
        { id: "06", title: "E-commerce Marketing", desc: "Grow online sales." },
        {
          id: "07",
          title: "Online Store Optimization",
          desc: "Enhance shopping experience.",
        },
        {
          id: "08",
          title: "Shopping Campaign Management",
          desc: "Streamlined ad campaigns.",
        },
        {
          id: "09",
          title: "Shopping Ads & Product Listings",
          desc: "Drive product sales.",
        },
        {
          id: "10",
          title: "Cart Abandonment Recovery",
          desc: "Recover lost revenue.",
        },
        { id: "11", title: "CLV Optimization", desc: "Boost lifetime value." },
        {
          id: "12",
          title: "Marketplace Marketing (Amazon, eBay)",
          desc: "Sell on top marketplaces.",
        },
      ],
    },
    {
      id: "03",
      title: "CRM & Automation",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        {
          id: "01",
          title: "Email Marketing",
          desc: "Boost sales with targeted emails.",
        },
        {
          id: "02",
          title: "Email Campaign Design",
          desc: "Design emails that convert.",
        },
        {
          id: "03",
          title: "Newsletter Creation & Management",
          desc: "Send consistent updates.",
        },
        {
          id: "04",
          title: "Automation Sequences",
          desc: "Automate personalized emails.",
        },
        {
          id: "05",
          title: "Customer Retention Strategies",
          desc: "Keep customers loyal.",
        },
        {
          id: "06",
          title: "List Building & Segmentation",
          desc: "Grow and organize lists.",
        },
      ],
    },
    {
      id: "04",
      title: "Audience Engagement Strategy",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        {
          id: "01",
          title: "Social Media Marketing (SMO)",
          desc: "Grow your social presence.",
        },
        {
          id: "02",
          title: "Instagram, Facebook & YouTube Marketing",
          desc: "Boost reach on top platforms.",
        },
        {
          id: "03",
          title: "WhatsApp & Twitter Engagement",
          desc: "Drive real-time interactions.",
        },
        {
          id: "04",
          title: "Social Strategy Development",
          desc: "Build winning social plans.",
        },
        {
          id: "05",
          title: "Content Creation & Community Management",
          desc: "Create and engage communities.",
        },
        {
          id: "06",
          title: "Channel Optimization",
          desc: "Maximize platform performance.",
        },
        {
          id: "07",
          title: "Social Analytics & Reporting",
          desc: "Track and improve results.",
        },
        {
          id: "08",
          title: "Influencer Marketing",
          desc: "Leverage influencer reach.",
        },
        {
          id: "09",
          title: "Influencer Outreach & Collaboration",
          desc: "Connect and collaborate effectively.",
        },
        {
          id: "10",
          title: "Campaign Strategy & Management",
          desc: "Plan and run campaigns.",
        },
      ],
    },
    {
      id: "05",
      title: "Search Engine Optimization (SEO)",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        {
          id: "01",
          title: "Search Engine Optimization (SEO)",
          desc: "Improve search rankings.",
        },
        {
          id: "02",
          title: "Technical SEO Audits",
          desc: "Fix site issues fast.",
        },
        {
          id: "03",
          title: "On-Page SEO & Content Optimization",
          desc: "Optimize content for SEO.",
        },
        {
          id: "04",
          title: "Off-Page SEO & Link Building",
          desc: "Build strong backlinks.",
        },
        {
          id: "05",
          title: "Local SEO for Businesses",
          desc: "Rank higher locally.",
        },
        {
          id: "06",
          title: "Mobile & E-commerce SEO",
          desc: "Optimize for mobile sales.",
        },
        {
          id: "07",
          title: "Keyword Research & Competitor Analysis",
          desc: "Find winning keywords.",
        },
      ],
    },
    {
      id: "06",
      title: "Content Marketing",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        {
          id: "01",
          title: "Blog Writing & SEO Copy",
          desc: "Write content that ranks.",
        },
        {
          id: "02",
          title: "Social Content & Captions",
          desc: "Create engaging posts.",
        },
        {
          id: "03",
          title: "Video Scripts & Storytelling",
          desc: "Tell stories that sell.",
        },
        {
          id: "04",
          title: "Marketing Copywriting",
          desc: "Craft persuasive messages.",
        },
        {
          id: "05",
          title: "Content Calendar Planning",
          desc: "Plan content in advance.",
        },
      ],
    },
    {
      id: "07",
      title: "Analytics & Reporting",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        {
          id: "01",
          title: "Google Analytics Setup",
          desc: "Track website performance.",
        },
        {
          id: "02",
          title: "Performance Monitoring & CRO",
          desc: "Boost conversions continuously.",
        },
        {
          id: "03",
          title: "Custom Dashboards & Reporting",
          desc: "Get tailored insights.",
        },
        {
          id: "04",
          title: "ROI & Insight Reports",
          desc: "Measure returns clearly.",
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
      <AllServices activeService="Digital Marketing" />

      <div className="container mx-auto mt-9 md:mt-24  xl:px-10 md:px-5 px-2">
        <div className="border-b-2 border-[#7e7d7d] mt-0 md:mt-15 opacity-15"></div>

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
                    alt="digital marketing"
                    width={400}
                    height={377}
                    className="w-[400px] h-[377px] md:w-[300px] md:h-[280px] lg:w-[350px] lg:h-[207px] rounded-2xl rotate-12 absolute -top-10 right-6 animate-slide-in-right object-cover z-10 xl:flex hidden"
                  />
                )}
              </div>

              {/* Framer Motion animated panel */}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10 overflow-visible md:px-10 px-4">
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
            <Icons name="gradientServices" width={300} height={100} />
          </div>
          {/* 
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

export default Marketing;
