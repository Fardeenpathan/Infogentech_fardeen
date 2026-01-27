"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "../ui/Icon";

const IndServicesDetailFaqs = ({ servicedetailsfaqs }) => {
  const [faqDatas, setFaqData] = useState([]);
  const [loadingFaqs, setLoadingFaqs] = useState(true);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetchBlogFaqs();
  }, []);

  const fetchBlogFaqs = async () => {
    try {
      setLoadingFaqs(true);
      let faqs = [];
      if (servicedetailsfaqs.faqs && Array.isArray(servicedetailsfaqs.faqs)) {
        faqs = servicedetailsfaqs.faqs;
      } else {
        console.log("No FAQs found in blog object");
      }

      const activeFaqs = faqs
        .filter((faq) => {
          const isActive = faq.isActive;
          return isActive !== false && isActive !== "false" && isActive !== "0";
        })
        .sort((a, b) => {
          const orderA = parseInt(a.order) || 0;
          const orderB = parseInt(b.order) || 0;
          return orderA - orderB;
        });
      setFaqData(activeFaqs);
    } catch (error) {
      console.error("Error fetching blog FAQs:", error);
      if (servicedetailsfaqs.faqs && Array.isArray(servicedetailsfaqs.faqs)) {
        const activeFaqs = servicedetailsfaqs.faqs
          .filter((faq) => faq.isActive !== false)
          .sort((a, b) => (a.order || 0) - (b.order || 0));
        setFaqData(activeFaqs);
      } else {
        setFaqData([]);
      }
    } finally {
      setLoadingFaqs(false);
    }
  };

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="grid lg:grid-cols-[3fr_1fr]  grid-cols-1 gap-12 items-start">
    <div className="xl:mt-10 mt-10 w-full px-2 text-base">
      {/* Header */}
     <h2 className="font-jost text-[24px] font-bold leading-[38px] text-primary">
          FAQs
        </h2>
        <h2 className="font-jost text-[46px] font-bold leading-[46px] text-black py-4">Everything You Need to Know</h2>

      <div className="mt-8  w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <section className="font-montserrat w-full">
              {faqDatas.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`border border-[#C0CADF] mb-4 rounded-2xl py-4 w-full ${
                    openId === faq.id ? "bg-[#F6F6F6]" : "bg-white"
                  }`}
                >
                  {/* Question */}
                  <button
                    className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none px-5"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="text-gray-600 flex items-center gap-4 md:text-2xl text-[16px]">
                      <span className="lg:text-4xl text-3xl font-normal opacity-40">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 0 : 90 }}
                      transition={{ duration: 0.3 }}
                      className={`w-15 h-15 rounded-full flex items-center justify-center z-10 cursor-pointer shrink-0 ${
                        openId === faq.id ? "bg-white" : "bg-[#F6F6F6]"
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
                         <div className="xl:pl-19 pl-19 xl:pr-5 pr-2 pt-3 text-left md:text-lg text-[14px] leading-[1.4]">
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
    </div>
  );
};

export default IndServicesDetailFaqs;
