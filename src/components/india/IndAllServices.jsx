"use client";
import Icons from "@/components/ui/Icon";
import Link from "next/link";

const IndAllServices = ({ activeService }) => {
  const services = [
    { id: 1, icon: "DesignInd", label: "Design", text: "Driving Growth Online", slug: "design" },
    { id: 2, icon: "DevelopmentInd", label: "Development", text: "Driving Growth Online", slug: "development" },
    {
      id: 3,
      icon: "MarketingInd",
      label: "Digital Marketing",
      text: "Driving Growth Online",
      slug: "digital-marketing",
    },
    { id: 4, icon: "ContentInd", label: "Content", text: "Driving Growth Online", slug: "content" },
  ];

  return (
 <div className="relative -top-24 justify-self-center grid md:grid-cols-4 grid-cols-2 md:mt-5 xl:mt-0 text-nowrap mt-4 rounded-2xl shadow-2xl z-10 subContainer px-4">
  {services.map((service, index) => (
    <div key={service.id} className="relative">
      {index < services.length - 1 && (
        <div className="hidden md:block absolute top-10 right-0 h-[60%] w-1 bg-[#B493FF] z-40"></div>
      )}

      <Link
        href={`/services/${service.slug}`}
        scroll={false}
        className={`flex gap-2 items-center justify-center rounded-md px-16 py-4 cursor-pointer transition-all duration-300 ${
          activeService === service.label ? " " : ""
        }`}
      >
        <div className={`flex flex-col py-10 justify-center items-center ${activeService === service.label ? "bg-primary lg:scale-140  scale-110 rounded-2xl mr-1 !px-2" : ""}`}>
          <Icons
            name={service.icon}
            width="42"
            height="42"
            color={activeService === service.label ? "#ffffff" : "#8752FF"}
          />
          <h4
            className={`font-montserrat lg:text-2xl text-sm mb-2.5 mt-4 font-medium ${
              activeService === service.label ? "text-white" : "text-primary"
            }`}
          >
            {service.label}
          </h4>
          <p
            className={`font-montserrat lg:text-lg text-sm font-medium ${
              activeService === service.label ? "text-white" : "text-gray-200"
            }`}
          >
            {service.text}
          </p>
        </div>
      </Link>
    </div>
  ))}
</div>

  );
};

export default IndAllServices;