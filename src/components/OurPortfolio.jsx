import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
const services = [
  { id: 1, icon: "Design", label: "Design" },
  { id: 2, icon: "Development", label: "Development" },
  { id: 3, icon: "DigitalMarketing", label: "Digital Marketing" },
  { id: 4, icon: "Content", label: "Content" },
];
export default function OurPortfolio() {
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
              className="flex gap-2 items-center justify-center border-[1px] border-white  rounded-md px-7 py-2 cursor-pointer"
            >
              <Icons name={service.icon} />
              <p className="text-sm font-[jost] ">{service.label}</p>
            </button>
          ))}
        </div>
        <div className="flex gap-8 items-center justify-center">
          <p className="font-[jost] font-semibold text-[18px] leading-[120%] capitalize ">
            See Our <br /> More Projects
          </p>
          <Icons name="Arrow" width={62} height={28} />
        </div>
      </div>
    </div>
  );
}
