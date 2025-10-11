"use client";
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceDesc from "@/components/india/IndServiceDesc";
import IndMoveableRibben from "@/components/india/IndMoveableRibben";
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
        { id: "01", title: "ROI-Driven Campaign Strategies", desc: "Maximize marketing returns." },
        { id: "02", title: "B2B Content Strategies", desc: "Targeted business content." },
        { id: "03", title: "Brand Messaging & Narratives", desc: "Strong brand storytelling." },
        { id: "04", title: "Content Strategy & Execution", desc: "Effective content delivery." },
        { id: "05", title: "Performance Tracking & ROI Analysis", desc: "Data-driven insights." },
        { id: "06", title: "Long-Term Partnerships", desc: "Sustainable business growth." },
        { id: "07", title: "Competitor Benchmarking", desc: "Stay ahead of rivals." },
      ],
    },
    {
      id: "02",
      title: "Performance Marketing",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        { id: "01", title: "Pay-Per-Click Advertising (PPC)", desc: "Targeted paid ads." },
        { id: "02", title: "Google Ads Campaign Management", desc: "Optimized Google Ads." },
        { id: "03", title: "Display Ads & Retargeting", desc: "Reach & re-engage." },
        { id: "04", title: "Shopping Ads & Product Listings", desc: "Boost product visibility." },
        { id: "05", title: "Conversion Tracking & Optimization", desc: "Improve ROI results." },
        { id: "06", title: "E-commerce Marketing", desc: "Grow online sales." },
        { id: "07", title: "Online Store Optimization", desc: "Enhance shopping experience." },
        { id: "08", title: "Shopping Campaign Management", desc: "Streamlined ad campaigns." },
        { id: "09", title: "Shopping Ads & Product Listings", desc: "Drive product sales." },
        { id: "10", title: "Cart Abandonment Recovery", desc: "Recover lost revenue." },
        { id: "11", title: "CLV Optimization", desc: "Boost lifetime value." },
        { id: "12", title: "Marketplace Marketing (Amazon, eBay)", desc: "Sell on top marketplaces." },
      ],
    },
    {
      id: "03",
      title: "CRM & Automation",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        { id: "01", title: "Email Marketing", desc: "Boost sales with targeted emails." },
        { id: "02", title: "Email Campaign Design", desc: "Design emails that convert." },
        { id: "03", title: "Newsletter Creation & Management", desc: "Send consistent updates." },
        { id: "04", title: "Automation Sequences", desc: "Automate personalized emails." },
        { id: "05", title: "Customer Retention Strategies", desc: "Keep customers loyal." },
        { id: "06", title: "List Building & Segmentation", desc: "Grow and organize lists." },
      ],
    },
    {
      id: "04",
      title: "Audience Engagement Strategy",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        { id: "01", title: "Social Media Marketing (SMO)", desc: "Grow your social presence." },
        { id: "02", title: "Instagram, Facebook & YouTube Marketing", desc: "Boost reach on top platforms." },
        { id: "03", title: "WhatsApp & Twitter Engagement", desc: "Drive real-time interactions." },
        { id: "04", title: "Social Strategy Development", desc: "Build winning social plans." },
        { id: "05", title: "Content Creation & Community Management", desc: "Create and engage communities." },
        { id: "06", title: "Channel Optimization", desc: "Maximize platform performance." },
        { id: "07", title: "Social Analytics & Reporting", desc: "Track and improve results." },
        { id: "08", title: "Influencer Marketing", desc: "Leverage influencer reach." },
        { id: "09", title: "Influencer Outreach & Collaboration", desc: "Connect and collaborate effectively." },
        { id: "10", title: "Campaign Strategy & Management", desc: "Plan and run campaigns." },
      ],
    },
    {
      id: "05",
      title: "Search Engine Optimization (SEO)",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        { id: "01", title: "Search Engine Optimization (SEO)", desc: "Improve search rankings." },
        { id: "02", title: "Technical SEO Audits", desc: "Fix site issues fast." },
        { id: "03", title: "On-Page SEO & Content Optimization", desc: "Optimize content for SEO." },
        { id: "04", title: "Off-Page SEO & Link Building", desc: "Build strong backlinks." },
        { id: "05", title: "Local SEO for Businesses", desc: "Rank higher locally." },
        { id: "06", title: "Mobile & E-commerce SEO", desc: "Optimize for mobile sales." },
        { id: "07", title: "Keyword Research & Competitor Analysis", desc: "Find winning keywords." },
      ],
    },
    {
      id: "06",
      title: "Content Marketing",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        { id: "01", title: "Blog Writing & SEO Copy", desc: "Write content that ranks." },
        { id: "02", title: "Social Content & Captions", desc: "Create engaging posts." },
        { id: "03", title: "Video Scripts & Storytelling", desc: "Tell stories that sell." },
        { id: "04", title: "Marketing Copywriting", desc: "Craft persuasive messages." },
        { id: "05", title: "Content Calendar Planning", desc: "Plan content in advance." },
      ],
    },
    {
      id: "07",
      title: "Analytics & Reporting",
      image: "/assist/services/marketing/marketing.png",
      subServices: [
        { id: "01", title: "Google Analytics Setup", desc: "Track website performance." },
        { id: "02", title: "Performance Monitoring & CRO", desc: "Boost conversions continuously." },
        { id: "03", title: "Custom Dashboards & Reporting", desc: "Get tailored insights." },
        { id: "04", title: "ROI & Insight Reports", desc: "Measure returns clearly." },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState(categories[0].id);

  const toggleCategory = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <IndServicesHeader />
      <IndAllServices activeService="Digital Marketing" />
      <div className="container mx-auto mt-24 xl:px-10 md:px-5 px-2">
        <IndServiceDesc/>
         <IndMoveableRibben/>
      </div>
<div className="moving-text-container overflow-hidden bg-[#3F237F] text-white">
  <div className="moving-text-content font-montserrat font-normal text-xl -tracking-[0.05em] custom-skew">
    <div className="flex gap-96">
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i} className="py-4 flex gap-28">
          Design <Icons name="IndStar" /> Development <Icons name="IndStar" /> Branding <Icons name="IndStar" /> Product
        </p>
      ))}
    </div>
  </div>
</div>


    </>
  );
};

export default Marketing;
