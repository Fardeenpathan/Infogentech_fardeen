"use client"
import Icons from "@/components/ui/Icon";
import { useState } from "react";

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
    </>
  );
};

export default PortFolio;
