"use client";
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceDesc from "@/components/india/IndServiceDesc";
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
      <IndServicesHeader />
      <IndAllServices activeService="Development" />

      <div className="container mx-auto mt-24 xl:px-10 md:px-5 px-2">
      <IndServiceDesc/>
      </div>
    </>
  );
};

export default Development;
