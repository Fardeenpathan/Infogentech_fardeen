"use client";

import React from "react";
import Icons from "../ui/Icon";
import IndProjectCard from "@/components/india/IndProjectCard";
export default function IndServiceCard({ categories }) {
  

  if (!categories) return null;

  return (
    <>
      {categories.map((category) => (
        <div
          className="flex justify-between flex-col lg:flex-row gap-10 space-y-10"
          key={category.id}
        >
          <div className="w-full font-montserrat bg-[#F4EFFF] md:rounded-4xl rounded-2xl gap-8 md:gap-10 px-5 py-15 md:px-10">
            <section className="flex justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-white rounded-2xl w-16 h-16 flex items-center justify-center border-primary border-0.5">
                  <Icons name={category.icon} />
                </div>

        <h3 className="font-avalors font-normal text-xl sm:text-[36px] lg:text-2xl leading-[120%] capitalize text-gray-400">
                  {category.title}
                </h3>
                
              </div>
             <div
                className="flex justify-center md:justify-end w-full md:w-[25%] items-center gap-4 cursor-pointer"
              >
                <div className="h-10 w-10 sm:h-14 sm:w-14   bg-[#F9F7FF] rounded-full flex items-center justify-start hover:shadow-md transition-all border-primary border-1">
                  <div className="w-9  md:w-13.5 md:h-6 rounded-full flex items-center justify-center z-10 cursor-pointer shrink-0">
                    <Icons name="ArrowPortfolio" />
                  </div>
                </div>
                <span className="text-nowrap text-[18px] md:text-xl font-semibold text-gray-600">
                  Learn more
                </span>

                </div>
                
            
            </section>

            <p className="text-xl font-semibold text-gray-600 mt-7">
              {category.description}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mt-5 uppercase leading-[150%] flex justify-end">
              start from today
            </h2>
          </div>

        <IndProjectCard category={category} />
        </div>
      ))}
    </>
  );
}
