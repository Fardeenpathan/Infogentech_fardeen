"use client";

import Link from "next/link";
import GradientButton from "./ui/GradientButton";
import { ServicesDropdown } from "./servicesDropdown";
import Icons from "./ui/Icon";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ScrollNav from "./ScrollNav";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setScrolled(y > 100);
    });
  }, [scrollY]);

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
    <AnimatePresence mode="sync">
      {!scrolled && (
        <motion.nav
          key="default-navbar"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute w-full flex bg-transparent mt-6 h-15 mx-auto justify-between items-center z-50 font-jost font-medium text-lg leading-6 px-20 gap-4"
        >
          <div className="flex items-center border border-[#8E8E8E] rounded-md ">
            <div className="flex items-center pl-3.5 space-x-1.5">
              <Link href="/us" className="flex items-center gap-1.5">
                <Icons name="LogoFooter" />
                <p className="font-avalors lg:text-2xl leading-8 tracking-[3px] font-bold text-xl">
                  INFOGENTECH
                </p>
              </Link>
            </div>
            <div className="flex flex-row space-x-7.5 xl:space-x-12.5 py-4.5  xl:px-12.5 lg:px-8 text-lg md:text-sm font-jost px-2">
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
                href="/us/portfolio/design"
                className={linkClasses("/us/portfolio/design")}
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="flex items-center border border-[#8E8E8E] rounded-md pr-3.75 text-nowrap">
            <div className="md:flex items-center space-x-12.5 xl:px-8.5 lg:px-6 py-4.5 text-lg md:text-sm font-jost px-2">
              <Link href="/us/blog" className={linkClasses("/us/blog")}>
                Blogs
              </Link>
              <Link href="/us/contact" className={linkClasses("/us/contact")}>
                Contact us
              </Link>
              <Link href="/us/about" className={linkClasses("/us/about")}>
                About us
              </Link>
            </div>
            <Link href="/us/contact">
              <GradientButton className="!text-sm md:hidden lg:block" paddingX="px-3" paddingY="py-2">Free Consultation</GradientButton>
            </Link>
          </div>
        </motion.nav>
      )}

      {scrolled && (
        <motion.nav
          key="scrolled-navbar"
          initial={{ opacity: 0, y: -60, filter: "blur(50px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -60 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
            type: "spring",
            stiffness: 150,
          }}
          className="container mx-auto px-6 fixed top-2 left-1/2 -translate-x-1/2 z-99"
        >
          <ScrollNav/>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}