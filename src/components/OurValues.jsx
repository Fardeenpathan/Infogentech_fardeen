import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
const services = [
  {
    id: "01",
    title: "Client-First Approach",
    desc: "We prioritize building meaningful relationships with our clients, understanding their vision, and working as true partners in their digital journey.",
    imageIcon: "/assist/img/Client-FirstApproach.png",
    width: 99,
    height: 65,
  },
  {
    id: "02",
    title: "Affordability with Quality",
    desc: "We believe great digital solutions should be accessible that's why we deliver high-quality work at transparent and affordable pricing.",
    imageIcon: "/assist/img/AffordabilityQuality.png",
    width: 94,
    height: 69,
  },
  {
    id: "03",
    title: "Excellence & Integrity",
    desc: "Our work meets industry standards and beyond, built with a strong foundation of honesty, ethics, and accountability.",
    imageIcon: "/assist/img/ExcellenceIntegrity.png",
    width: 70,
    height: 75,
  },
  {
    id: "04",
    title: "Trust That Lasts",
    desc: "We earn our clients' trust through reliability, clear communication, and a deep commitment to their growth.",
    imageIcon: "/assist/img/trustQuality.png",
    width: 80,
    height: 78,
  },
];


export default function OurValues() {
  return (
    <div className="mt-44 mx-auto">
      <div className="mx-30">
        <TopicHeader
          name="Our Values"
          subheading="Core beliefs behind everything we build"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-11 mx-30">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#15152A] rounded-md  p-5 shadow-[0px_0px_54px_24px_#1C1C38] flex flex-col justify-between "
          >
            <div>
              <p className="mt-10">
                <Image
                  src={service.imageIcon}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  objectFit="cover"
                />
              </p>
              <h2 className="font-[jost] font-medium text-[55px] leading-[120%] tracking-[0.03em]">
                {service.title}
              </h2>
              <p className="text-[#C4C4C4] text-sm mt-9 leading-relaxed">
                {service.desc}
              </p>
            </div>
            <div className="flex justify-end">
              <Icons name="Arrow" width={50} height={50} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
