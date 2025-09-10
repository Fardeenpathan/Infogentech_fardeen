"use client";
import Icons from "@/components/ui/Icon";
import Image from "next/image";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import Link from "next/link";
import { useState } from "react";

const SlugPage = () => {
  const [activeService, setActiveService] = useState("Content");

  return (
    <>
      <PortfolioHeader />
      <div>
        <div className="container mx-auto mt-10  -z-20 border-2 rounded-3xl pt-10">
          <PortfolioServices activeService={activeService} />
          <div className="mx-auto w-fit mt-10">
            <Icons name="CurveGradient" />
          </div>
          <div className="container mx-auto relative -top-48 ">
            <Image
              src="/assist/img/blogImg.png"
              alt="Blog"
              width={1400}
              height={460}
              className=" rounded-2xl h-[860px] mx-auto bg-black p-2"
            />
            <div className="mx-34 mt-10 font-jost">
              <p className=" font-normal text-[32px] leading-[28px]">
                Green House Gardening Landing Page
              </p>
              <div className="grid grid-cols-3 mt-15 space-y-8">
                <div className="flex flex-col gap-2 ">
                  <p className="font-jost font-medium text-[18px] leading-[20px] opacity-30">
                    Date
                  </p>
                  <p>May 2025</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-[18px] leading-[20px] opacity-30">
                    Duration
                  </p>
                  <p>10 Days</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-[18px] leading-[20px] opacity-30">
                    Tools
                  </p>
                  <span className="font-jost bg-[#8752FF80] py-1.5 px-3 w-fit radius">
                    Figma
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-[18px] leading-[20px] opacity-30">
                    Client
                  </p>
                  <p>Leroye d'Or</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-[18px] leading-[20px] opacity-30">
                    Location
                  </p>
                  <p>New, New York</p>
                </div>
              </div>
             <div className="grid grid-cols-3 mt-15 space-y-8">
  <div className="flex flex-col gap-2 ">
    <p className="font-jost font-medium text-[18px] leading-[20px] opacity-30">
      Modules
    </p>
    <span className="font-jost bg-[#8752FF80] py-1.5 px-3 w-fit radius">
      Figma
    </span>
  </div>

  <div className="flex flex-col gap-3">
    <p className=" font-medium text-[18px] leading-[20px] opacity-30">
      Duration
    </p>
    <span className="font-jost bg-[#8752FF80] py-1.5 px-3 w-fit radius">
      Figma
    </span>
  </div>
  <div className="flex flex-col gap-3 items-end">
    <a
      href="contactUs"
      className="inline-block p-[2px] rounded-xl 
             [background:linear-gradient(270deg,rgba(0,0,0,0)_4.64%,rgba(0,0,0,0.63)_82.81%)]"
    >
      <span
        className="flex gap-2 items-center 
                  text-[18px] font-jost px-10 py-3 
                  rounded-[10px] 
                  bg-[#7544E4] 
                  text-white 
                  shadow-[0px_0px_8px_0px_#FFFFFF_inset]"
      >
        View in Figma Design &nbsp;
        <Icons name="Arrow" />
      </span>
    </a>
  </div>
</div>

            </div>
          </div>
        </div>
        <div className="text-[#82828C] border-2 container mx-auto"></div>
        <SubscribeContact />
      </div>
    </>
  );
};

export default SlugPage;
