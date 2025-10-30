
import { motion } from "framer-motion";
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
      slug: "digital-marketing",
    },
    { id: 4, icon: "Content", label: "Content", slug: "content" },
  ];

  return (
    <div className="gap-6 justify-self-center grid md:grid-cols-4 grid-cols-2 md:mt-5 mt-0 md:px-4 px-2 text-nowrap relative">
      {services.map((service) => {
        const isActive = activeService === service.label;

        return (
          <div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              href={`/us/portfolio/${service.slug}`}
              scroll={false}
              className={`relative flex gap-2 items-center justify-center border-[1px] border-white rounded-md px-7 py-2 cursor-pointer transition-opacity duration-300 ${
                isActive ? "" : "opacity-30"
              }`}
            >
              {isActive && (
                <div
                  className="absolute inset-0 rounded-md bg-white/10 z-0"
                 
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                <Icons name={service.icon} />
                <p className="text-sm font-jost">{service.label}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioServices;
