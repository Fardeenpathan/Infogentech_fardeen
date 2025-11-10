import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Content",
    desc: "Creative strategies, impactful storytelling, personalized adaptive journeys, and strong social media engagement.",
    imageIcon: "/assist/img/serviceContent.png",
    link: "/services/content",
  },
  {
    id: "02",
    title: "Design",
    desc: "Modern Digital Design, Bold Print Design, User-Focused UX/UI, And Consistent Branding Solutions.",
    imageIcon: "/assist/img/serviceDesign.png",
    link: "/services/design",
  },
  {
    id: "03",
    title: "Development",
    desc: "Reliable Web Development, Ongoing Maintenance & Support, Accessible Design, And Actionable Data & Analytics.",
    imageIcon: "/assist/img/serviceDevelopment.png",
    link: "/services/development",
  },
  {
    id: "04",
    title: "Marketing",
    desc: "Precision Ads, Advanced SEO, Data-Based Conversion Strategies, And Scalable Long-Term Strategies To Grow.",
    imageIcon: "/assist/img/serviceMarket.png",
    link: "/services/digital-marketing",
  },
];

export default function ServicesSection() {
  return (
    <div className="mx-auto md:pb-18 pb-10 container sm:px-10 px-4 xl:mt-30 mt-20">
      <TopicHeader
        name="Our Services"
        subheading="Explore Our Digital Solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6 relative container mx-auto px-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-[#15152A] rounded-md  md:p-5 p-3 shadow-[0px_0px_54px_24px_#1C1C38] flex flex-col justify-between hover:scale-105 transition-transform duration-500 cursor-pointer
              
            `}
          >
            <div>
              <span className="font-jost font-normal text-[32px] leading-[100%] tracking-[3%] opacity-10">
                {service.id}
              </span>
              <p className="md:mt-10 mt-2.5">
                <Image
                  src={service.imageIcon}
                  alt={service.title}
                  width={117}
                  height={110}
                  style={{ objectFit: 'cover' }}
                  className="xl:w-25 xl:h-25"
                />
              </p>
              <h2
                className="font-jost font-medium 2xl:text-[50px] lg:text-[40px] text-[36px] leading-[120%] tracking-[0.03em]
               bg-[linear-gradient(93.46deg,#C4C4C4_4.94%,#FFFFFF_98.78%)]
               bg-clip-text text-transparent"
              >
                {service.title}
              </h2>
              <p className="text-[#C4C4C4] lg:text-lg text-sm md:mt-9 mt-2.5 leading-relaxed font-kumbh-sans">
                {service.desc}
              </p>
            </div>
            <div className="flex justify-end ">
              <Link href={service.link}>
                <Icons name="Arrow" width={50} height={50} />
              </Link>
            </div>
          </div>
        ))}

        <div className="overflow-hidden">
          <div className="absolute moving-text-container -z-30 md:-top-23 -top-8 ">
            <div className="moving-text-content font-['Jost'] font-avalors font-normal md:text-[120px] text-4xl tracking-[0.03em] uppercase bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 moving-text-container">
              <div className="flex gap-56">
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i}>INFOGENTECH</p>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute moving-text-container -z-30 md:-bottom-20 -bottom-1 ">
            <div className="moving-text-left font-['Jost'] font-avalors font-normal md:text-[120px] text-4xl tracking-[0.03em] uppercase bg-gradient-to-b from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent opacity-15 moving-text-container">
              <div className="flex gap-56">
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i}>INFOGENTECH</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
