"use client";

import React, { useState } from "react";
import Icons from "../ui/Icon";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function IndServiceCard({ categories }) {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategoryId(prev => (prev === id ? null : id));
  };

  if (!categories) return null;

  return (
    <div className="space-y-12 pb-10">
      {categories.map((category) => {
        const isOpen = openCategoryId === category.id;

        return (
          <div
            key={category.id}
            className="relative w-full bg-[#F4EFFF] rounded-4xl px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:pt-12 lg:pb-0 flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10"
          >
            <div className="flex flex-col gap-8 w-full">
              <div
                className="flex flex-row items-center gap-2 lg:gap-20 cursor-pointer"
                
              >
                <span className="font-avalors text-gray-400 text-[28px] sm:text-[36px] lg:text-[46px] font-normal leading-[120%]">
                  {category.id}.
                </span>
                <h3 className="font-avalors font-normal text-[28px] sm:text-[36px] lg:text-[46px] leading-[120%] capitalize text-gray-400">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap justify-start lg:p-8 gap-3 sm:gap-4 md:gap-5">
                {category.subServices?.length > 0 ? (
                  category.subServices.map((service) => (
                    <span
                      key={service.id}
                      className="font-montserrat font-bold text-[14px] sm:text-[16px] md:text-[18px] bg-white text-[#252525] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition"
                    >
                      {service.title}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-400 italic px-4">No services available.</p>
                )}
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col px-4 gap-4"
                  >
                    {category.description && (
                      <p className="font-montserrat font-medium leading-[1.5] tracking-[-0.02em] text-lg text-gray-200">
                        {category.description}
                      </p>
                    )}
                    <Image
                      src="/assist/IndImg/blogBg.jpg"
                      alt="Blog"
                      width={100}
                      height={660}
                      className="w-full h-80 object-cover rounded-t-md"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div onClick={() => toggleCategory(category.id)} className="flex justify-center md:justify-end items-end w-full md:w-[25%]">
              <div className="relative w-[200px] sm:w-[220px] lg:w-[259px] h-[60px] sm:h-[64px] bg-white rounded-[40px] flex items-center justify-start cursor-pointer group hover:shadow-md transition-all">
                <div className="absolute left-[6px] top-[6px] w-[70%] sm:w-[187px] h-[48px] sm:h-[50px] bg-primary rounded-[30px] flex items-center justify-center group-hover:bg-[#7b3eff] transition">
                  <span className="text-white font-semibold font-montserrat text-[16px] leading-[24px]">
                    Learn more
                  </span>
                </div>

                <div className="absolute right-[6px] top-[6px] w-[48px] sm:w-[50px] h-[48px] sm:h-[50px] bg-primary rounded-full flex items-center justify-center group-hover:bg-[#7b3eff] transition">
                  <Icons name="IndArrow" className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
