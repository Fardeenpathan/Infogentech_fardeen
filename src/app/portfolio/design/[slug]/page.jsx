"use client";
import Icons from "@/components/ui/Icon";
import Image from "next/image";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import ShinyButton from "@/components/ui/ShinyButton";
import { useState } from "react";

const SlugPage = () => {
  const [activeService, setActiveService] = useState("Design");
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <PortfolioHeader />
      <div className="container mx-auto px-10">
        <div className=" mt-10  -z-20 border-2 rounded-3xl pt-10">
          <PortfolioServices activeService={activeService} />
          <div className="mx-auto w-fit mt-10">
            <Icons name="CurveGradient" />
          </div>

          <div className="relative -top-48 px-10">
            <div
              className={`mx-auto rounded-2xl overflow-hidden bg-black transition-[max-height] duration-500 ${
                expanded ? "h-full" : "h-[1200px]"
              }`}
            >
              <Image
                src="/assist/portfolio/design/BookpremiumfareCase.png"
                alt="Blog"
                width={1400}
                height={460}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                sizes="(max-width: 768px) 100vw, 1400px"
                className="rounded-2xl mx-auto p-2"
              />
            </div>
            <div className="mx-34 mt-10 font-jost text-center">
              <ShinyButton
                onClick={() => setExpanded((s) => !s)}
              >
                {expanded ? "Know less" : "Know more"}
                <Icons name="Arrow" />
              </ShinyButton>
            </div>
            <div className="mx-5 mt-6 font-jost">
              <p className=" font-normal text-[32px] leading-[28px]">
                Green House Gardening Landing Page
              </p>
            </div>
          </div>
        </div>
        <SubscribeContact />
      </div>
    </>
  );
};

export default SlugPage;
