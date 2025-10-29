"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "@/components/ui/Icon";

const FaqsBlog = ({ blog }) => {
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
      if (blog.faqs && Array.isArray(blog.faqs)) {
        faqs = blog.faqs;
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
      if (blog.faqs && Array.isArray(blog.faqs)) {
        const activeFaqs = blog.faqs
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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full py-10"
    >
      <section className="mt-10">
        <h2 className="font-jost text-[30px] font-normal leading-[38px] text-primary">
          FAQs
        </h2>
        {faqDatas.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-[#0A071B]/10 linearGradientFaq mb-2"
          >
            <button
              className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div>{faq.question}</div>
              <motion.div
                animate={{ rotate: openId === faq.id ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <Icons name={openId === faq.id ? "Minus" : "Add"} />
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
                  <div className="answer flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default FaqsBlog;
