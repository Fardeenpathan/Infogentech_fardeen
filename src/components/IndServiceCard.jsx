"use client";
import React from "react";
import Icons from "./ui/Icon";

const services = [
  "Print and Digital Graphic Design",
  "Presentation Design",
  "Ad Creative Design",
  "Illustrations & Iconography",
  "Print & Packaging Design",
  "Product Sheets & One Pagers",
  "Corporate Reports",
];

export default function IndServiceCard() {
  return (
    <div className="relative w-full max-w-[1616px] mx-auto bg-[#F4EFFF] rounded-[30px] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10 my-[60px]">
      
      {/* Left Section */}
      <div className="flex flex-col gap-8 w-full md:w-[75%]">
        {/* Title */}
        <div className="flex flex-row items-center flex-wrap gap-5 sm:gap-6">
          <span className="font-avalors text-[#4C4C4C] text-[28px] sm:text-[36px] lg:text-[46px] font-normal leading-[120%] capitalize">
            01.
          </span>
          <h3 className="font-avalors font-normal text-[28px] sm:text-[36px] lg:text-[46px] leading-[120%] capitalize text-[#4C4C4C]">
            GRAPHIC DESIGN
          </h3>
        </div>

        {/* Services */}
        <div className="flex flex-wrap justify-start p-8 gap-3 sm:gap-4 md:gap-5">
          {services.map((service, i) => (
            <span
              key={i}
              className="font-montserrat font-medium text-[14px] sm:text-[16px] md:text-[18px] bg-white text-[#252525] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section — Learn More Button */}
      <div className="flex justify-center md:justify-end items-end w-full md:w-[25%]">
        <div className="relative w-[200px] sm:w-[220px] lg:w-[259px] h-[60px] sm:h-[64px] bg-white rounded-[40px] flex items-center justify-start cursor-pointer group hover:shadow-md transition-all">
          <div className="absolute left-[6px] top-[6px] w-[70%] sm:w-[187px] h-[48px] sm:h-[50px] bg-[#8752FF] rounded-[30px] flex items-center justify-center group-hover:bg-[#7b3eff] transition">
            <span
              className="text-white font-semibold"
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Learn more
            </span>
          </div>

          <div className="absolute right-[6px] top-[6px] w-[48px] sm:w-[50px] h-[48px] sm:h-[50px] bg-[#8752FF] rounded-full flex items-center justify-center group-hover:bg-[#7b3eff] transition">
            <Icons name="IndArrow" className="text-white text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
