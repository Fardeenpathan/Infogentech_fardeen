"use client";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import Link from "next/link";

const Design = () => {
  const designProjects = [
    {
      id: 1,
      title: "Green House Gardening Landing Page",
      image: "/assist/img/DesignImg.png",
    },
    {
      id: 2,
      title: "AI SaaS Dashboard UI",
      image: "/assist/img/DesignImg.png",
    },
  ];

  return (
    <>
      <PortfolioHeader />
      <PortfolioServices />
      <div>
        <div className="container mx-auto mt-10 relative top-48 -z-20">
          <div className="mx-auto w-fit">
            <Icons name="CurveGradient" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 container mx-auto">
          {designProjects.map((project) => (
            <div key={project.id} className="p-2.5 rounded-xl">
              <div className="w-full max-w-[774px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={774}
                  height={380}
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="px-2.5 pb-2.5 flex justify-between flex-col">
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-[jost] text-[24px] font-normal leading-[28px] tracking-normal">
                      {project.title}
                    </p>
                    <Link href="#">
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
        <div className="text-[#82828C] mt-24 border-2 container mx-auto"></div>
        <SubscribeContact />
      </div>
    </>
  );
};

export default Design;
