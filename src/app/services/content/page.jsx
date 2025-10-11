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
      <IndServicesHeader />
      <IndAllServices activeService="Content" />
        <div className="container mx-auto mt-24 xl:px-10 md:px-5 px-2">
          <IndServiceDesc/>
      </div>
    </>
  );
};

export default Content;
