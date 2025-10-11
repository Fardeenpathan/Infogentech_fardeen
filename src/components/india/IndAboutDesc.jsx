"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import IndTopicHeader from "../IndTopicHeader";
import IndAboutQuality from "./IndAboutQuality";
import IndButton from "./ui/IndButton";

export default function IndAboutDesc() {
  return (
    <div className="container mx-auto px-10 flex justify-between py-10">
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
          className="shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dpmceu66e/image/upload/v1760006744/blog-app/blogs/blogs/1760006730364-3aa636fa059706af10c54c0a099e2a1f199c3acd.jpg"
            alt="service"
            width={724}
            height={400}
            className="object-cover rounded-2xl h-165"
          />
        </motion.div>
      </motion.div>

      {/* Right Content Section */}
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
        <a href="#contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <IndButton variant="outline" className="mt-16">
              Let's talk
            </IndButton>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
