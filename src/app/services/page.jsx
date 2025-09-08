"use client";
import Icons from "@/components/ui/Icon";
import { useState } from "react";

const servicesData = [
  {
    id: 1,
    key: "design",
    icon: "Design",
    label: "Design",
    title: "Graphic Design",
    categories: [
      {
        id: "01",
        title: "Content",
        subServices: [
          { id: "01-1", title: "Copywriting", desc: "Engaging and impactful content strategies." },
          { id: "01-2", title: "Storytelling", desc: "Narrative-driven approaches for brands." },
        ],
      },
      {
        id: "02",
        title: "Design",
        subServices: [
          { id: "02-1", title: "Digital Design", desc: "Modern Digital Design, Bold Print Design, and User-Focused UX/UI." },
          { id: "02-2", title: "Branding Solutions", desc: "Consistent branding solutions for all platforms." },
        ],
      },
      {
        id: "03",
        title: "Marketing",
        subServices: [
          { id: "03-1", title: "Social Media", desc: "Creative strategies, impactful storytelling, and adaptive journeys." },
          { id: "03-2", title: "Engagement", desc: "Strong social media engagement and user growth." },
        ],
      },
    ],
  },
  {
    id: 2,
    key: "uiux",
    icon: "Development",
    label: "UI/UX Design",
    title: "UI/UX Design",
    categories: [
      {
        id: "04",
        title: "Development",
        subServices: [
          { id: "04-1", title: "Web Development", desc: "Reliable web development and ongoing support.", imageIcon: "/assist/img/serviceDevelopment.png" },
          { id: "04-2", title: "Data Analytics", desc: "Accessible design and actionable analytics.", imageIcon: "/assist/img/serviceDevelopment.png" },
        ],
      },
      {
        id: "05",
        title: "Marketing",
        subServices: [
          { id: "05-1", title: "SEO", desc: "Advanced SEO and data-driven strategies.", imageIcon: "/assist/img/serviceMarket.png" },
          { id: "05-2", title: "Advertising", desc: "Precision ads and scalable long-term strategies.", imageIcon: "/assist/img/serviceMarket.png" },
        ],
      },
    ],
  },
  {
    id: 3,
    key: "branding",
    icon: "Content",
    label: "Branding",
    title: "Branding",
    categories: [
      {
        id: "06",
        title: "Brand Strategy",
        subServices: [
          { id: "06-1", title: "Identity Design", desc: "Building a unique and recognizable visual identity.", imageIcon: "/assist/img/serviceContent.png" },
          { id: "06-2", title: "Messaging", desc: "Strategic messaging for stronger brand recognition.", imageIcon: "/assist/img/serviceContent.png" },
        ],
      },
    ],
  },
  {
    id: 4,
    key: "marketing",
    icon: "DigitalMarketing",
    label: "Digital Marketing",
    title: "Logo Design",
    categories: [
      {
        id: "07",
        title: "Marketing Strategy",
        subServices: [
          { id: "07-1", title: "Funnel Optimization", desc: "Data-driven marketing with continuous improvement.", imageIcon: "/assist/img/serviceMarket.png" },
          { id: "07-2", title: "Growth Strategy", desc: "Long-term strategies powered by analytics.", imageIcon: "/assist/img/serviceMarket.png" },
        ],
      },
    ],
  },
];

const PortFolio = () => {
  const [activeKey, setActiveKey] = useState("design");
  const [openCategory, setOpenCategory] = useState(null); // track which category is open

  const activeService = servicesData.find((s) => s.key === activeKey);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id); // open/close accordion
  };

  return (
    <div className="container mx-auto mt-24">
      {/* Title */}
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          Our Services
        </p>
        <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          What We <span className="text-[#6A27FF]">Provide</span>
        </p>
        <p className="font-jost text-[18px] font-medium leading-[24px] text-center mt-6">
          Shaping digital futures with customized digital solutions that deliver results.
        </p>
        <div className="w-0.5 h-28 rounded-full mb-10 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
        <div className="relative w-12 h-12">
          <img src="/assist/video/pentagonVideo.gif" alt="valueImg" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Service Tabs */}
      <div className="flex gap-6 justify-center mt-10">
        {servicesData.map((service) => (
          <button
            key={service.id}
            className={`flex gap-2 items-center border border-white rounded-md px-7 py-2 cursor-pointer transition-opacity duration-300 ${
              activeKey === service.key ? "opacity-100" : "opacity-30"
            }`}
            onClick={() => {
              setActiveKey(service.key);
              setOpenCategory(null); // reset open category when switching service
            }}
          >
            <Icons name={service.icon} />
            <span className="text-sm font-jost">{service.label}</span>
          </button>
        ))}
      </div>

      {/* Categories & SubServices */}
      <div className="mt-20">
        {activeService.categories.map((category) => (
          <div key={category.id} >
            <p
              className="font-jost font-normal text-[64px] leading-[100%] tracking-[0.03em] flex justify-between items-center border-b-2 border-[#7e7d7d] py-5 cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              {category.title}
            </p>

            {openCategory === category.id && (
              <div>
                <div className="py-10 flex flex-col items-center gap-2 text-center">
                  <p className="font-jost font-bold text-[32px] leading-[24px] text-[#8752FF]">Our Value</p>
                  <p className="font-jost font-medium text-[18px] leading-[24px]">
                    How we work at Untitled guided by shared values that keep us connected as one team
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.subServices.map((subService) => (
                    <div key={subService.id} className="shadow-[0px_0px_54px_24px_#1C1C38] p-5 rounded-2xl">
                      <span className="font-jost font-normal text-[32px] leading-[100%] tracking-[3%] opacity-10">
                        {subService.id}
                      </span>
                      <h2 className="font-jost font-medium text-[32px] leading-[120%] tracking-[0.03em] mt-8">
                        {subService.title}
                      </h2>
                      <p className="font-jost font-normal text-[16px] leading-[140%] tracking-[0.03em] capitalize mt-8 opacity-30">
                        {subService.desc}
                      </p>
                      <div className="flex justify-end mt-4">
                        <Icons name="Arrow" width={40} height={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolio;
