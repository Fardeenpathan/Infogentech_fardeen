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
        // empty by design
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
      <IndAllServices activeService="Design" />
      <div className="container mx-auto mt-24 xl:px-10 md:px-5 px-2">
         <IndServiceDesc/>
      </div>
    </>
  );
};

export default Design;
