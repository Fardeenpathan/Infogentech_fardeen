"use client";
import Icons from "@/components/ui/Icon";
import Link from "next/link";

const PortfolioServices = ({ activeService }) => {
  const services = [
    { id: 1, icon: "Design", label: "Design", slug: "design" },
    { id: 2, icon: "Development", label: "Development", slug: "development" },
    {
      id: 3,
      icon: "DigitalMarketing",
      label: "Digital Marketing",
      slug: "marketing",
    },
    { id: 4, icon: "Content", label: "Content", slug: "content" },
  ];

  return (
    <div className="flex gap-6 justify-self-center mt-5">
      {services.map((service) => (
        <Link
          key={service.id}
          href={`/portfolio/${service.slug}`}
          className={`flex gap-2 items-center justify-center border-[1px] border-white  rounded-md px-7 py-2 cursor-pointer transition-opacity duration-300 ${
            activeService === service.label ? "" : "opacity-30"
          }`}
        >
          <Icons name={service.icon} />
          <p className="text-sm font-jost">{service.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioServices;
