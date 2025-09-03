import Image from "next/image";
import TopicHeader from "./TopicHeader";
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
    <div className="mt-30 ">
        <TopicHeader
          name="Our Values"
          subheading="Core beliefs behind everything we build"
        />

      <div className="flex">
        <div className=" flex justify-center items-center">
          <div
            className="w-50 h-56 bg-transparent border border-white/10 rounded-2xl  flex justify-center items-center backdrop-blur-[51.97px]
         shadow-[0px_0px_8px_0px_#FFFFFF_inset] absolute"
          >
            <Image
              src="/assist/img/valueImg.png"
              alt="valueImg"
              width={100}
              height={99}
              objectFit="cover"
            />
          </div>
          <Image
            src="/assist/overValue.gif"
            alt="valueImg"
            width={640}
            height={150}
            objectFit="cover"
            className="w-[640px] h-72 relative transform scale-x-[-1] overflow-hidden -z-40 -right-62 -top-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6  mx-30 max-w-3xl">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#15152A] rounded-md  p-5 shadow-[12px_12px_13px_2px_#1C1C38] flex justify-center items-center flex-col"
            >
              <div className="flex flex-col items-center">
                
                  <Image
                    src={service.imageIcon}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    objectFit="cover"
                  />
                <h2 className="font-[jost] font-medium text-2xl leading-[120%] tracking-[0.03em] mt-6">
                  {service.title}
                </h2>
                <p className="text-[#C4C4C4] text-xl mt-3 leading-[120%] flex text-center">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

