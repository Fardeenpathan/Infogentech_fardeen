"use client";
import { motion } from "framer-motion";
import IndTopicHeader from "../IndTopicHeader";
import Image from "next/image";

export default function IndWhyChooseUs() {
  const pills = [
    { text: "Powerful SAAS", style: "xl:-top-34 -top-6 left-8 rotate-12 md:block hidden" },
    { text: "Design", style: "xl:-top-14 right-8  -top-5 -rotate-12 md:block hidden" },
    { text: "Powerful SAAS", style: "-bottom-15 left-0 rotate-12 md:hidden block" },
    { text: "Design", style: " right-8  -bottom-0 -rotate-12 md:hidden block" },
     { text: "Development", style: " -bottom-15 right-28  rotate-12 md:hidden block" },
    { text: "Growth", style: " -bottom-5 left-20 -rotate-12 md:hidden block" },
    { text: "Marketing", style: " -bottom-5 right-25 rotate-12 md:hidden block" },
    { text: "Development", style: "xl:bottom-14 bottom-1 xl:-right-20 right-10 rotate-12 md:block hidden" },
    { text: "Growth", style: "xl:-bottom-24 bottom-8 right-58 -rotate-12 md:block hidden" },
    { text: "Marketing", style: "xl:-bottom-24 bottom-0 left-8 rotate-12 md:block hidden" },
  ];

  return (
    <section className="lg:mt-20 mt-10 container mx-auto lg:px-10 px-2 ">
      <IndTopicHeader
        title="We Do More For Your Business"
        subtitle="Why Choose Us!"
        description="We deliver digital and creative solutions that drive real results. From websites and social media to complete branding, we tailor every project to match your unique goals and help your business grow."
      />

      <div className="container mx-auto flex justify-between flex-col xl:flex-row xl:py-10 py-0">
        <motion.div
          className="flex justify-between 2xl:gap-30 gap-10 items-center flex-col xl:flex-row"
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
              src="https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png"
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
                key={index}
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

            <p className="font-montserrat font-medium xl:text-lg text-sm leading-[1.5] tracking-[-0.02em] py-4">
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
    </section>
  );
}
