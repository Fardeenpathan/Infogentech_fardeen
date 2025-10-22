"use client";
import { useState } from "react";
import Image from "next/image";
import IndTopicHeader from "../IndTopicHeader";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "../ui/Icon";

const Faqs = [
  {
    id: "01",
    question: "What is the importance of digital marketing to my business?",
    answer:
      "It places your brand in front of prospective customers simultaneously and in the places where they are most likely to establish contact with the internet, can measure the outcome easily, and normally costs considerably less than a form of conventional advertising. Digital marketing enhances visibility and even facilitates rapid adoption of market changes.",
  },
  {
    id: "02",
    question: "What is the uptime guarantee for your hosting services?",
    answer: "We guarantee an uptime of 99.9% for all our hosting services.",
  },
  {
    id: "03",
    question: "What types of hosting plans do you offer?",
    answer:
      "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.",
  },
  {
    id: "04",
    question: "What is the uptime guarantee for your hosting services?",
    answer: "We guarantee an uptime of 99.9% for all our hosting services.",
  },
];

const IndFaqsHome = () => {
  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="mt-20 container mx-auto px-4">
      <IndTopicHeader title="Faqs" subtitle="Everything You Need to Know" subClass="w-full"/>

      <div className="xl:mt-8 container mx-auto flex justify-between mt-0 xl:py-10 py-0">
        <motion.div
          className="flex justify-between xl:gap-30 flex-col xl:flex-row gap-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Image
              src="/assist/IndImg/homePage/faq.png"
              alt="service"
              width={762}
              height={400}
              className="object-cover rounded-2xl xl:h-130 h-64"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <section className="font-montserrat w-full shrink-0">
              {Faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`border border-[#C0CADF] mb-4 rounded-2xl  py-4 ${
                    openId === faq.id ? "bg-[#F6F6F6]" : "bg-white"
                  }`}
                >
                  <button
                    className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none px-5"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="text-[#252525] flex items-center gap-4  xl:text-2xl text-[14px]">
                      <span className=" font-normal opacity-40">
                        {faq.id}
                      </span>
                      {faq.question}
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-15 h-15 rounded-full flex items-center justify-center z-10 cursor-pointer shrink-0 ${
                        openId === faq.id ? "bg-white" : " bg-[#F6F6F6]"
                      }`}
                    >
                      <Icons name="FaqArrow" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openId === faq.id && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="xl:pl-19 pl-10 xl:pr-5  pr-2 pt-3 text-left xl:text-lg text-[12px] leading-[1.4]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default IndFaqsHome;
