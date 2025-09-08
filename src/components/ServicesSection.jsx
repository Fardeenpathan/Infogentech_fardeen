import { useRef } from "react";
import { useInView } from "./useInView";
import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
const services = [
  {
    id: "01",
    title: "Content",
    desc: "Creative strategies, impactful storytelling, personalized adaptive journeys, and strong social media engagement.",
    imageIcon: "/assist/img/serviceContent.png",
  },
  {
    id: "02",
    title: "Design",
    desc: "Modern Digital Design, Bold Print Design, User-Focused UX/UI, And Consistent Branding Solutions.",
    imageIcon: "/assist/img/serviceDesign.png",
  },
  {
    id: "03",
    title: "Development",
    desc: "Reliable Web Development, Ongoing Maintenance & Support, Accessible Design, And Actionable Data & Analytics.",
    imageIcon: "/assist/img/serviceDevelopment.png",
  },
  {
    id: "04",
    title: "Marketing",
    desc: "Precision Ads, Advanced SEO, Data-Based Conversion Strategies, And Scalable Long-Term Strategies To Grow.",
    imageIcon: "/assist/img/serviceMarket.png",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mt-28 mx-auto pb-10 container" ref={ref} >
        <TopicHeader
          name="Our Services"
          subheading="Explore Our Digital Solutions"
        />
  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 relative container mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-[#15152A] rounded-md  p-5 shadow-[0px_0px_54px_24px_#1C1C38] flex flex-col justify-between hover:scale-105 transition-transform duration-500 cursor-pointer ${
              isInView
                ? index < 2
                  ? "animate-in slide-in-from-left-40 fade-in-50"
                  : index >= services.length - 2
                  ? "animate-in slide-in-from-right-40 fade-in-50"
                  : ""
                : "opacity-0"
            }`}
          >
            <div>
              <span className="font-[jost] font-normal text-[32px] leading-[100%] tracking-[3%] opacity-10">
                {service.id}
              </span>
              <p className="mt-10">
                <Image
                  src={service.imageIcon}
                  alt={service.title}
                  width={117}
                  height={110}
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
       {isInView && (
          <div className="overflow-hidden">
            <div className="absolute moving-text-container -z-30 -top-30">
              <div className="moving-text-content font-['Jost'] font-avalors font-normal text-[120px] tracking-[0.03em] uppercase  bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 moving-text-container">
                <div className="flex gap-56">
                  {Array.from({ length: 20 }, (_, i) => (
                    <p key={i}>INFOGENTECH</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute moving-text-container -z-30 -bottom-20 ">
              <div className="moving-text-left font-['Jost'] font-avalors font-normal text-[120px] tracking-[0.03em] uppercase  bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 moving-text-container">
                <div className="flex gap-56">
                  {Array.from({ length: 20 }, (_, i) => (
                    <p key={i}>INFOGENTECH</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
