"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import IndTopicHeader from "../IndTopicHeader";
import IndButton from "./ui/IndButton";

export default function IndAboutHome() {
  return (
    <div className="mt-20 container mx-auto px-10 flex justify-between py-10">
      {/* LEFT: Images + Video */}
      <motion.div
        className="flex justify-between gap-20 relative"
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
            className="object-cover rounded-2xl h-96"
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
            className="object-cover rounded-2xl h-64"
          />
        </motion.div>

        <motion.video
          className="absolute top-60 left-50 w-84 h-82 object-cover rounded-2xl"
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

      {/* RIGHT: Text + Button */}
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
            <IndButton variant="outline" className="mt-16">
              Know more
            </IndButton>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
