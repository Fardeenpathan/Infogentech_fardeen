"use client";

import Link from "next/link";
import GradientButton from "./ui/GradientButton";
import { ServicesDropdown } from "./servicesDropdown";
import Icons from "./ui/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollNav() {
  const pathname = usePathname();
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const linkClasses = (href) =>
    `transition-colors ${
      pathname === href
        ? "text-primary font-semibold"
        : "text-white hover:text-primary"
    }`;
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.3,
      },
    },
  };

  return (
       <div className="flex h-15 mx-auto justify-between z-50 font-jost font-medium text-lg leading-6 py-8 px-2 items-center border border-[#8E8E8E] rounded-md bg-[#15152a]">
      <div className="flex items-center pl-3.5 space-x-1.5">
        <Link href="/us" className="flex items-center gap-1.5">
          <Icons name="LogoFooter" />
          <p className="font-avalors text-2xl leading-8 tracking-[3px] font-bold text-xl">
            INFOGENTECH
          </p>
        </Link>
      </div>
      <div
        className="relative group"
        onMouseEnter={() => setIsServicesHovered(true)}
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        <button className=" flex items-center justify-center cursor-pointer">
          Services
          <Icons name="Downarrow" />
        </button>
        <AnimatePresence>
          {isServicesHovered && (
            <motion.div
              key="services-dropdown"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute left-0 max-w-6xl rounded-lg shadow-lg z-50 transform"
            >
              <ServicesDropdown />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Link
        href="/portfolio/design"
        className={linkClasses("/portfolio/design")}
      >
        Portfolio
      </Link>
      <Link href="/us/blog" className={linkClasses("/us/blog")}>
        Blogs
      </Link>
      <Link href="/us/contact" className={linkClasses("/us/contact")}>
        Contact us
      </Link>
      <Link href="/us/about" className={linkClasses("/us/about")}>
        About us
      </Link>
      <Link href="/us/contact">
        <GradientButton className="!text-sm md:hidden lg:block" paddingX="px-6" paddingY="py-3">
          Free Consultation
        </GradientButton>
      </Link>
    </div> 
  );
}
