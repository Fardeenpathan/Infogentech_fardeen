"use client";

import Link from "next/link";
import GradientButton from "./ui/GradientButton";
import { ServicesDropdown } from "./servicesDropdown";
import Icons from "./ui/Icon";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setScrolled(y > 10);
    });
  }, [scrollY]);

  const linkClasses = (href) =>
    `transition-colors ${
      pathname === href
        ? "text-[#8752FF] font-semibold"
        : "text-white hover:text-[#8752FF]"
    }`;

  return (
    <AnimatePresence mode="sync">
      {!scrolled && (
        <motion.nav
          key="default-navbar"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="relative flex bg-transparent mt-6 h-15 mx-auto justify-between items-center z-50 font-jost font-medium text-lg leading-[24px] container px-10"
        >
          <div className="flex items-center border border-[#8E8E8E] rounded-md">
            <div className="flex items-center pl-3.75 py-2.25 space-x-1.5">
              <Link href="/" className="flex items-center gap-1.5">
                <Icons name="LogoFooter" /> 
                <p className="font-avalors text-[24px] leading-[32px] tracking-[3px] font-bold">
                  INFOGENTECH
                </p>
              </Link>
            </div>
            <div className="flex flex-row space-x-12.5 py-4.5 px-12.5 text-lg font-Jost">
              <div className="relative group">
                <button className=" flex items-center justify-center cursor-pointer">
                  Products
                 <Icons name="Downarrow"/>
                </button>
                <div className="absolute left-0 max-w-6xl rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform ">
                  <ServicesDropdown />
                </div>
              </div>
              <Link
                href="/portfolio/design"
                className={linkClasses("/portfolio/design")}
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="flex items-center border border-[#8E8E8E] rounded-md pr-3.75">
            <div className="md:flex items-center space-x-12.5 px-12.5 py-4.5 text-lg font-Jost">
              <Link href="/blogs" className={linkClasses("/blogs")}>
                Blogs
              </Link>
              <Link href="/contactUs" className={linkClasses("/contactUs")}>
                Contact us
              </Link>
              <Link href="/aboutUs" className={linkClasses("/aboutUs")}>
                About us
              </Link>
            </div>
            <Link href="/contactUs">
              <GradientButton>Free Consultation</GradientButton>
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
          className="fixed top-2 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between border container rounded-xl bg-white/10 backdrop-blur-lg shadow-xl px-6 py-4 font-jost font-medium text-lg leading-[24px] mx-auto"
        >
          <div className="flex items-center gap-10 justify-between w-full">
            <Link href="/" className="flex items-center gap-2">
              <Icons name="LogoFooter" />
              <p className="font-avalors text-[24px] leading-[32px] tracking-[3px] font-bold">
                INFOGENTECH
              </p>
            </Link>
             <div className="relative group">
                <button className=" flex items-center justify-center cursor-pointer">
                  Products
                 <Icons name="Downarrow"/>
                </button>
                <div className="absolute left-0 max-w-6xl rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform ">
                  <ServicesDropdown />
                </div>
              </div>
            <Link
              href={`/portfolio/design`}
              className={linkClasses("/portfolio/design")}
            >
              Portfolio
            </Link>
            <Link href="/blogs" className={linkClasses("/blogs")}>
              Blogs
            </Link>
            <Link href="/contactUs" className={linkClasses("/contactUs")}>
              Contact us
            </Link>
            <Link href="/aboutUs" className={linkClasses("/aboutUs")}>
              About us
            </Link>
            <Link href="/contactUs">
              <GradientButton>Free Consultation</GradientButton>
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
