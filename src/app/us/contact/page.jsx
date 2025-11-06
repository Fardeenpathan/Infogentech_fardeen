"use client";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import ContactForm from "@/components/ContactForm";
import SubContact from "@/components/SubContact";
import MoreContact from "@/components/MoreContact";
import SubscribeContact from "@/components/SubscribeContact";
import { motion } from "framer-motion";
const contact = () => {
  return (
    <div className="mt-35 subContainer mx-auto">
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center">
        <div className="flex gap-10 flex-col xl:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center xl:mb-40 mb-0 flex-col"
          >
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col max-w-3xl justify-center items-center lg:text-start px-4  xl:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-avalors font-normal md:text-[75px] text-4xl leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent"
            >
              NEED ASSISTANCE?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-primary  font-avalors align-middle md:text-[75px] text-4xl leading-[120%] tracking-[-0.75px]"
            >
              just ask!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-jost font-medium text-lg leading-6 align-middle mt-9 text-center lg:text-start"
            >
              We’re here to help! Reach out with any real questions, and we’ll
              get back to you within 48 hours. For support or inquiries, feel
              free to contact us at.
            </motion.p>

            <motion.a
              href="mailto:contact@infogentech.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="border border-white rounded flex justify-center items-center px-8 py-3 cursor-pointer max-w-[274px] space-x-2.5">
                <p className="font-jost">contact@infogentech.com</p>
                <Icons name="Slide" />
              </button>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mb-8"
        >
          <img
            src="/assist/video/play.gif"
            alt="valueImg"
            className="relative md:w-[459px] md:h-[450px] w-[300px] h-[300px]"
          />
          <Image
            src="/assist/img/polygons.png"
            alt="valueImg"
            width={359}
            height={371}
            objectFit="cover"
            className="absolute md:w-92 md:h-92 w-60 h-60"
          />
        </motion.div>
      </div>

      {/* Bottom Pentagon and Lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex gap-7 flex-row justify-center items-center py-4"
      >
        <div className="flex justify-center items-center flex-col">
          <div className="w-0.5 h-20 rounded-full md:mb-10 mb-5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          <div className="relative w-12 h-12">
            <img
              src="/assist/video/pentagonVideo.gif"
              alt="valueImg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-0.5 h-20 rounded-full md:mt-10 mt-5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-8">
        <ContactForm />
        <SubContact />
        <MoreContact />
        <SubscribeContact />
      </div>
    </div>
  );
};

export default contact;
