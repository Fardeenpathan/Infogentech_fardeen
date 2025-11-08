"use client";

import React, { useState } from "react";
import Icons from "../ui/Icon";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function IndServiceCard({ categories }) {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  if (!categories) return null;

  return (
    <div className="space-y-12 pb-10">
      {categories.map((category) => {
        const isOpen = openCategoryId === category.id;

        return (
          <div
            key={category.id}
            className="relative w-full bg-[#F4EFFF] md:rounded-4xl rounded-2xl px-2.5 py-4 sm:px-10 sm:py-10 lg:px-12 lg:pt-12 lg:pb-0 flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10"
          >
            <div className="flex gap-1 md:gap-8 w-full">
              <div className="font-avalors text-gray-400 text-[28px] sm:text-[36px] lg:text-[46px] font-normal leading-[120%]">
                {category.id}.
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <h3 className="font-avalors font-normal text-[28px] sm:text-[36px] lg:text-[46px] leading-[120%] capitalize text-gray-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-start gap-3 sm:gap-4 md:gap-5 lg:pb-10 md:pt-5 relative -left-8 md:left-0">
                  {category.subServices?.length > 0 ? (
                    category.subServices.map((service) => (
                      <span
                        key={service.id}
                        className="font-montserrat font-bold text-sm sm:text-base md:text-lg bg-white text-gray-600 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition"
                      >
                        {service.title}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-400 italic px-4">
                      No services available.
                    </p>
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
                        <p className="font-montserrat font-medium leading-[1.5] tracking-[-0.02em] md:text-lg text-sm text-gray-200">
                          {category.description}
                        </p>
                      )}
                      <Image
                        src={category?.image || "/assist/IndImg/blog.png"}
                        alt="Blog"
                        width={100}
                        height={660}
                        className="w-full md:h-80 h-40 object-fit rounded-t-md"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div
              onClick={() => toggleCategory(category.id)}
              className="flex justify-center md:justify-end items-end w-full md:w-[25%]"
            >
              <div className="relative w-[200px] sm:w-[220px] lg:w-[259px] h-[60px] sm:h-[64px] bg-white rounded-[40px] flex items-center justify-start cursor-pointer group hover:shadow-md transition-all">
                <div className="absolute left-[6px] top-[6px] w-[70%] sm:w-[187px] h-[48px] sm:h-[50px] bg-primary rounded-[30px] flex items-center justify-center group-hover:bg-primary transition">
                  <span className="text-white font-semibold font-montserrat text-base leading-[24px]">
                    Learn more
                  </span>
                </div>

                <div className="absolute right-[6px] top-[6px] w-[48px] sm:w-[50px] h-[48px] sm:h-[50px] bg-primary rounded-full flex items-center justify-center group-hover:bg-primary transition">
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
