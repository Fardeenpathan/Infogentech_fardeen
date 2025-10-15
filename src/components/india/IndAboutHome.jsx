"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import IndTopicHeader from "../IndTopicHeader";
import IndButton from "./ui/IndButton";

export default function IndAboutHome() {
  return (
    <div className="xl:mt-20 mt-10 container mx-auto xl:px-10 px-4 flex justify-between py-10 flex-col xl:flex-row gap-60">
      {/* LEFT: Images + Video */}
      <motion.div
        className="flex justify-between xl:gap-20 gap-2 relative"
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
        >
          <Image
            src="/assist/IndImg/homePage/service1.jpg"
            alt="service"
            width={227}
            height={400}
            className="object-cover rounded-2xl xl:h-96 h-64"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assist/IndImg/homePage/service2.jpg"
            alt="service"
            width={312}
            height={267}
            className="object-cover rounded-2xl xl:h-64 h-44"
          />
        </motion.div>

        <motion.video
          className="absolute xl:top-60 top-50 xl:left-50 left-25 sm:left-30 xl:w-84 xl:h-82 h-64 w-64 object-cover rounded-2xl"
          src="https://res.cloudinary.com/dpmceu66e/video/upload/v1759913086/blog-app/categories/categories/1759913081122-compressed-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <IndTopicHeader
          className="!flex-col gap-10"
          title="About us"
          subtitle="Global IT Services for a Digitally Driven World"
          description="InfoGenTech is dedicated to delivering efficient IT solutions that drive business growth. Your audience is always looking for you on the web; are you found? Today's leaders blend innovative thinking with analysis to forge powerful online strategies. If your business is not optimized online, you will never be seen by prospective customers. With our worldwide online marketing solutions, you can rule the arena. Put your brand at the front with our time-tested strategies and best collaborations towards success."
        />

        <a href="#contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <IndButton variant="outline" className="xl:mt-16 mt-4">
              Know more
            </IndButton>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
