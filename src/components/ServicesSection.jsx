import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
const services = [
  {
    id: "01",
    title: "Content",
    desc: "Creative Strategies, Impactful Storytelling, Personalized Adaptive Journeys, And Strong Social Media Engagement.",
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
    <div className="mt-28 mx-auto">
      <TopicHeader
        name="Our Services"
        subheading="Explore Our Digital Solutions"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#15152A] rounded-md w-[383px]  p-6 shadow-[0px_0px_54px_24px_#1C1C38] flex flex-col justify-between"
          >
            <div>
              <span className="font-[jost] font-normal text-[32px] leading-[100%] tracking-[3%] gradient-text">
                {service.id}
              </span>
              <span className="">
                <Image
                  src={service.imageIcon}
                  alt={service.title}
                  width={117}
                  height={110}
                  objectFit="cover"
                />
              </span>
              <h2 className="text-white text-2xl font-bold mt-3">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {service.desc}
              </p>
            </div>
            <div className="flex justify-end">
             <Icons name="Arrow"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
