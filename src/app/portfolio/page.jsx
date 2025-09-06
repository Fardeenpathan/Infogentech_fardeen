"use client";
import Icons from "@/components/ui/Icon";
import Image from "next/image";
import { useState } from "react";
import SubscribeContact from "@/components/SubscribeContact";
const PortFolio = () => {
  const [services, setServices] = useState([
    { id: 1, icon: "Design", label: "Design", active: true },
    { id: 2, icon: "Development", label: "Development", active: false },
    {
      id: 3,
      icon: "DigitalMarketing",
      label: "Digital Marketing",
      active: false,
    },
    { id: 4, icon: "Content", label: "Content", active: false },
  ]);

  const projects = [
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
    {
      id: 3,
      title: "E-commerce App Interface",
      image: "/assist/img/DesignImg.png",
    },
    {
      id: 4,
      title: "Social Media Content Planner",
      image: "/assist/img/DesignImg.png",
    },
    {
      id: 5,
      title: "Fitness Tracker Mobile UI",
      image: "/assist/img/DesignImg.png",
    },
    {
      id: 6,
      title: "Smart Home Control Panel",
      image: "/assist/img/DesignImg.png",
    },
  ];
  return (
    <>
      <div className="flex justify-between ">
        <Icons name="PortHome" />
        <div className="flex gap-7 flex-row justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              Our Work
            </p>
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              Our <span className="text-[#6A27FF]">Projects</span>
            </p>
            <p className="font-jost text-[18px] font-medium leading-[24px] tracking-normal text-center align-middle mt-6">
              At Infogentech, every project shows our focus on innovation,
              quality, and making a difference. Take a look at the solutions
              we've built and meet the team that turns ideas into reality.
            </p>
            <div className="w-0.5 h-28 rounded-full mb-10 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <Icons name="PortHomeRight" />
      </div>

      <div className="flex gap-6 justify-self-center mt-5">
        {services.map((service) => (
          <button
            key={service.id}
            className={`flex gap-2 items-center justify-center border-[1px] border-white  rounded-md px-7 py-2 cursor-pointer ${
              service.active ? "" : "opacity-30"
            }`}
            onClick={() => {
              setServices(
                services.map((s) =>
                  s.id === service.id
                    ? { ...s, active: true }
                    : { ...s, active: false }
                )
              );
            }}
          >
            <Icons name={service.icon} />
            <p className="text-sm font-[jost] ">{service.label}</p>
          </button>
        ))}
      </div>
      <div>
        <div className="container mx-auto mt-10 relative top-48 -z-20">
          <div className="mx-auto w-fit">
            <Icons name="CurveGradient" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 container mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="p-2.5 rounded-xl">
              <div className="w-full max-w-[774px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={774}
                  height={38}
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="px-2.5 pb-2.5 flex justify-between flex-col">
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-[jost] text-[24px] font-normal leading-[28px] tracking-normal">
                      {project.title}
                    </p>
                    <a href="#">
                      <Icons
                        name="Arrow"
                        height={26}
                        width={59}
                        color="#C4C4C4"
                      />
                    </a>
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

export default PortFolio;
