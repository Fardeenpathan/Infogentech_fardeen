import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
import { useState } from "react";

const services = [
  { id: 1, icon: "Design", label: "Design" },
  { id: 2, icon: "Development", label: "Development" },
  { id: 3, icon: "DigitalMarketing", label: "Digital Marketing" },
  { id: 4, icon: "Content", label: "Content" },
];
export default function OurPortfolio() {
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
    <div className="mx-30 mt-36">
      <TopicHeader
        name="Our Portfolio"
        subheading="Check Out Our Recently Completed Projects"
      />
      <div className="flex justify-between mx-14 relative -top-11">
        <div className="flex gap-6">
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
        <a href="#" className="flex gap-8 items-center justify-center">
          <p className="font-[jost] font-semibold text-[18px] leading-[120%] capitalize ">
            See Our <br /> More Projects
          </p>
          <Icons name="Arrow" width={62} height={28} />
        </a>
      </div>

      <div className="px-4 pt-4 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] h-[682px] overflow-hidden ">
        <div className="w-full h-full bg-black rounded-lg p-6 grid grid-cols-2 gap-4 ">
          <div className="ml-6.5">
            <div className="flex items-center gap-3 ">
              <Icons name="DotCircle" />
              <p className="font-jost font-medium text-sm leading-6 align-middle">
                Why Enjoy alone?
              </p>
            </div>
            <p className="font-jost font-semibold text-6xl leading-[150%] capitalize mt-4.5">
              Learn. connect. <span className="text-[#A855F7]">Grow!</span>
            </p>
            <div className="float-right relative -top-10 mr-10">
              <Icons name="ArrowDirection" />
              <div className="w-28 flex justify-end">
                <Icons name="PaperPlane" />
              </div>
            </div>
            <p className="font-kumbh font-medium text-[20px] leading-[150%] align-middle text-[#73737F] mt-19 mr-10">
              This project showcases our exploration into cutting-edge robotics
              and AI-driven solutions. From conceptual 3D modeling to real-time
              user interaction, every element is crafted to reflect the future
              of automation and smart systems.
            </p>
            <ul className="flex flex-col  gap-2 text-[#73737F] leading-[150%] text-[20px] font-medium pt-4.5">
              <li className="flex gap-2.5  items-center">
                <Icons name="LiIcon" />
                Modern, futuristic designs that capture attention instantly.
              </li>
              <li className="flex gap-2.5  items-center">
                <Icons name="LiIcon" />
                User-first layouts crafted for smooth, engaging experiences.
              </li>
              <li className="flex gap-2.5  items-center">
                <Icons name="LiIcon" />
                Fast, scalable, and SEO-friendly websites built to perform.
              </li>
            </ul>
          </div>
          <div className="px-2 pt-2 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] mt-34 rotate-[-5.03deg] ">
            <div className="w-full h-[500px] bg-black rounded-xl flex justify-between ">
              <Image
                src="/assist/img/DesignImg.png"
                alt="valueImg"
                width={800}
                height={99}
                objectFit="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
