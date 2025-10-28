"use client";
import { motion } from "framer-motion";
import Icons from "../ui/Icon";
import IndTopicHeader from "../IndTopicHeader";

const services = [
  {
    icon: "DevelopmentInd",
    title: "Development",
    description: "Crafting innovative and robust digital solutions.",
  },
  {
    icon: "DesignInd",
    title: "Designing",
    description: "Delivering cutting-edge strategies for business growth.",
  },
  {
    icon: "MarketingInd",
    title: "Marketing",
    description: "Creating stunning, engaging and user-friendly interfaces.",
  },
  {
    icon: "ContentInd",
    title: "Content",
    description:
      "Producing engaging and high-quality material for all platforms.",
  },
];

export default function IndServices() {
  return (
    <section className="mt-10 xl:mt-20 container mx-auto px-4">
      <IndTopicHeader
        title="Our Services"
        subtitle="Delivering Solutions That Drive Results"
        description="We provide a wide range of digital and creative services designed to help your business grow. From stunning websites and engaging social media designs to complete branding solutions, our team ensures every project is tailored to meet your unique goals."
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-24  gap-14 xl:mt-16 mt-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="text-center xl:max-w-3xs items-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="flex justify-center mb-4 ">
              <div className="bg-purple-50 rounded-full p-6">
                <div className="bg-purple-100 rounded-full p-6">
                  <div className="bg-purple-200 rounded-full p-4">
                    <Icons name={service.icon} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 mt-10 text-gray-400 leading-[1.5] tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="font-montserrat font-medium md:text-lg text-sm tracking-tightest text-gray-200">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
