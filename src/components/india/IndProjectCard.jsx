"use client";

import Image from "next/image";
import Icons from "../ui/Icon";

export default function IndProjectCard({ category }) {
  if (!category) {
    console.error(" ERROR: IndProjectCard missing category prop!");
    return null;
  }

  return (
    <div className="w-full">
      <div
        className="w-full font-montserrat bg-[#F4EFFF] md:rounded-4xl rounded-2xl px-3 py-6 md:px-10 mb-20 md:mb-0"
        key={category.id}
      >
        <h2 className="text-[24px] md:text-[28px] font-bold text-gray-600 mt-5 uppercase leading-[150%] mb-8">
          {category.title} Projects
        </h2>
        <div className="flex gap-5 pb-2">
          {category.image?.map((img, index) => (
            <div key={index} className="relative w-1/2">
              <Image
                src={img.src}
                alt={category.title}
                width={800}
                height={600}
                className="w-full h-35 md:h-45 rounded-2xl object-fit"
              />
              <a
                href={img.link}
                className="flex items-center md:gap-4 gap-2 cursor-pointer absolute bottom-4 left-2 md:left-4"
              >
                <div className="h-10 w-10 sm:h-14 sm:w-14 bg-white rounded-[40px] flex items-center justify-start hover:shadow-md ">
                  <div className="w-9  md:w-13.5 md:h-6 rounded-full flex items-center justify-center z-10 cursor-pointer shrink-0">
                    <Icons name="ArrowPortfolio" />
                  </div>
                </div>
                <span className="text-nowrap md:text-xl text-[16px] text-white">
                  Open Projects
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}