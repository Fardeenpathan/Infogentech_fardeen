"use client";
import Icons from "@/components/ui/Icon";
import Image from "next/image";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import Link from "next/link";
import { useState } from "react";
import contentProjects from "./contentProjects.json";

const Content = () => {
  const [activeService, setActiveService] = useState("Content");
  return (
    <>
      <PortfolioHeader />
      <PortfolioServices activeService={activeService} />
      <div>
        <div className="container mx-auto mt-10 -z-20">
          <div className="mx-auto w-fit">
            <Icons name="CurveGradient" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 container mx-auto relative -top-48">
          {contentProjects?.map((project) => (
            <div key={project.id} className="p-2.5 rounded-xl px-10">
              <div className="w-full max-w-[774px]">
                <Image
                  src={project.subImage}
                  alt={project.title}
                  width={774}
                  height={380}
                  objectFit="cover"
                  style={{ objectFit: "cover", width: 774, height: 480 }}
                  className="rounded-xl"
                />
                <div className="px-2.5 pb-2.5 flex justify-between flex-col">
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-jost text-[24px] font-normal leading-[28px] tracking-normal">
                      {project.title}
                    </p>
                    <Link href={`/portfolio/content/${project.slug}`}>
                      <Icons
                        name="Arrow"
                        height={26}
                        width={59}
                        color="#C4C4C4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[#82828C] border-2 container mx-auto px-10"></div>
        <SubscribeContact />
      </div>
    </>
  );
};

export default Content;
