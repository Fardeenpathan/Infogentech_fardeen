"use client";
import { motion } from "framer-motion";
import IndTopicHeader from "../IndTopicHeader";
import Image from "next/image";

export default function IndWhyChooseUs() {
  const pills = [
    { text: "Powerful SAAS", style: "xl:-top-34 -top-6 left-8 rotate-12" },
    { text: "Design", style: "xl:-top-14 right-8  -top-5 -rotate-12" },
    { text: "Development", style: "xl:bottom-14 bottom-1 xl:-right-20 right-10 rotate-12" },
    { text: "Growth", style: "xl:-bottom-24 bottom-8 right-58 -rotate-12" },
    { text: "Marketing", style: "xl:-bottom-24 bottom-0 left-8 rotate-12" },
  ];

  return (
    <div className="xl:mt-20 mt-10 container mx-auto xl:px-10 px-2 ">
      <IndTopicHeader
        title="We Do More For Your Business"
        subtitle="Why Choose Us!"
        description="We deliver digital and creative solutions that drive real results. From websites and social media to complete branding, we tailor every project to match your unique goals and help your business grow."
      />

      <div className="container mx-auto flex justify-between flex-col xl:flex-row xl:py-10 py-0">
        <motion.div
          className="flex justify-between xl:gap-30 gap-10 items-center flex-col xl:flex-row"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Image
              src="/assist/IndImg/homePage/service1.jpg"
              alt="service"
              width={625}
              height={400}
              className="object-cover rounded-2xl xl:h-138 h-64"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative xl:pr-25 pr-2"
          >
            {pills.map((pill, index) => (
              <motion.p
                key={pill.text}
                className={`absolute ${pill.style} xl:px-8 xl:py-3 px-3 py-1 bg-primary rounded-4xl text-white opacity-30`}
                initial={{ y: 0, scale: 0.9 }}
                animate={{ y: [-5, 5, -5], scale: [0.9, 1, 0.9] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                {pill.text}
              </motion.p>
            ))}

            <p className="font-montserrat font-medium xl:text-lg text-[14px] leading-[1.5] tracking-[-0.02em] py-4">
              We are one of the famous digital marketing firms that provides all the
              services of online marketing, SEO services, web development, and IT
              solutions. Our marketing works with education, healthcare, real estate, and
              tech brands to drive growth through the blend of creativity and data. With
              our personal approach, our discovery and strategy program is followed by
              implementation and optimization phases, so each campaign will be done with
              the vision of your brand. Our services include the design of websites,
              software development, and Google Ads targeting that can increase the
              recognition of the business, active interaction, and the ROI. Infogentech
              changes your online presence from digital to a real outcome as a committed
              company, staying at the leading edge of the industry. Let us bring your
              brand to the next level!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
