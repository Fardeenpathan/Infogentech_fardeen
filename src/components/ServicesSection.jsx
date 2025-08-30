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
  return (
    <div className="mt-28 mx-auto relative ">
      <div className="mx-30">
        <TopicHeader
          name="Our Services"
          subheading="Explore Our Digital Solutions"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-11 mx-30">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#15152A] rounded-md  p-5 shadow-[0px_0px_54px_24px_#1C1C38] flex flex-col justify-between "
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
      
        <div className="absolute font-['Jost'] font-avalors font-normal text-[120px] tracking-[0.03em] uppercase top-26 left-48 bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 -z-30 ">
          INFOGENTECH
        </div>
        <div className="absolute font-['Jost'] font-avalors font-normal text-[120px] tracking-[0.03em] uppercase top-26 -right-56 bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 -z-30 overflow-hidden">
          INFOGENTECH
        </div>
          <div className="absolute font-['Jost'] font-avalors font-normal text-[120px] tracking-[0.03em] uppercase -bottom-24 right-56 bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 -z-30 ">
          INFOGENTECH
        </div>
        <div className="absolute font-['Jost'] font-avalors font-normal text-[120px] tracking-[0.03em] uppercase -bottom-24 -left-72 bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 -z-30 overflow-hidden">
          INFOGENTECH
        </div>
      </div>
    </div>
  );
}
