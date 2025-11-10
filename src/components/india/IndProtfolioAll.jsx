"use client";
import { motion } from "framer-motion";
import Icons from "@/components/ui/Icon";
import Link from "next/link";

const IndAllServices = ({ activeService }) => {
  const services = [
    {
      id: 1,
      icon: "DesignInd",
      label: "Design",
      text: "Driving Growth Online",
      slug: "design",
    },
    {
      id: 2,
      icon: "DevelopmentInd",
      label: "Development",
      text: "Driving Growth Online",
      slug: "development",
    },
    {
      id: 3,
      icon: "MarketingInd",
      label: "Digital Marketing",
      text: "Driving Growth Online",
      slug: "digital-marketing",
    },
    {
      id: 4,
      icon: "ContentInd",
      label: "Content",
      text: "Driving Growth Online",
      slug: "content",
    },
  ];

  return (
    <div className="relative -top-24 justify-self-center grid md:grid-cols-4 grid-cols-2 md:mt-5 xl:mt-0 text-nowrap mt-4 rounded-2xl shadow-2xl z-10 subContainer px-4 bg-white">
      {services.map((service, index) => {
        const isActive = activeService === service.slug;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            {index < services.length - 1 && (
              <div className="hidden md:block absolute top-10 right-0 h-[60%] w-1 bg-[#B493FF] z-40"></div>
            )}

            <Link
              href={`/portfolio/${service.slug}`}
              scroll={false}
              className={`flex gap-2 items-center justify-center rounded-md px-16 py-4 cursor-pointer transition-all duration-300 ${
                isActive ? "" : ""
              }`}
            >
              <div
                className={`flex flex-col py-10 justify-center items-center relative ${
                  isActive
                    ? "bg-primary lg:scale-160 md:scale-110 scale-100 rounded-xl mr-1 !px-2.5"
                    : ""
                }`}
              >
                {isActive && (
                  <motion.div className="absolute inset-0 bg-primary rounded-2xl z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <Icons
                    name={service.icon}
                    width="42"
                    height="42"
                    color={isActive ? "#ffffff" : "#8752FF"}
                  />
                  <h4
                    className={`font-montserrat lg:text-2xl text-sm mb-2.5 mt-4 font-medium ${
                      isActive ? "text-white !text-lg" : "text-primary"
                    }`}
                  >
                    {service.label}
                  </h4>
                  <p
                    className={`font-montserrat lg:text-lg text-sm font-medium ${
                      isActive ? "text-white !text-sm" : "text-gray-200"
                    }`}
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default IndAllServices;
