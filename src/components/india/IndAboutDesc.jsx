"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import IndTopicHeader from "../IndTopicHeader";
import IndAboutQuality from "./IndAboutQuality";
import IndButton from "./ui/IndButton";

export default function IndAboutDesc() {
  return (
    <div className="container mx-auto flex justify-between  py-10 flex-col lg:flex-row gap-4 lg:gap-20 px-4">
      <motion.div
        className="flex justify-between gap-10 relative"
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
          className="md:shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dpmceu66e/image/upload/v1761123173/blog-app/blogs/blogs/1761123161164-frame_2147224284.png"
            alt="service"
            width={724}
            height={400}
            className="object-cover rounded-2xl xl:h-165 lg:h-120 h-100 w-full "
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <IndTopicHeader
          className="!flex-col gap-10"
          title="About Our Company"
          subtitle="We’re Partner of Your Innovations"
          description="We are located in US/India, one of the leading Web development and Digital Marketing companies for all your digital requirements. As we all know that your valuable audience is looking for you on various internet platforms. They need the same services but if you are not visible to them, they won't be able to get in touch with you. This is where our digital marketing company can help you."
        />
        <IndAboutQuality />
        <a href="/contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <IndButton variant="outline" className="mt-16  font-semibold !leading-6 tracking-wider ">
              Let's Talk
            </IndButton>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
