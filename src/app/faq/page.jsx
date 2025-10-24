"use client";
import { useState, useEffect } from "react";
import Icons from "@/components/ui/Icon";
import Loader from "@/components/loader/Loader";
import { motion, AnimatePresence } from "framer-motion";
const categoryList = [
  { key: "general", label: "General & Services" },
  { key: "pricing", label: "Pricing & Timeline" },
  { key: "support", label: "Support & Maintenance" },
];

const mockApiResponse = {
  general: [
    {
      id: 1,
      question: "What types of hosting plans do you offer?",
      answer:
        "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.",
    },
    {
      id: 2,
      question: "What is the uptime guarantee for your hosting services?",
      answer: "We guarantee an uptime of 99.9% for all our hosting services.",
    },
  ],
  pricing: [
    {
      id: 3,
      question: "How is the pricing structured?",
      answer: "Pricing is based on project scope and complexity.",
    },
    {
      id: 4,
      question: "Do you offer any discounts?",
      answer: "Yes, we offer seasonal and referral-based discounts.",
    },
  ],
  support: [
    {
      id: 5,
      question: "What support channels are available?",
      answer: "You can reach us via email, live chat, and phone support.",
    },
    {
      id: 6,
      question: "Do you provide 24/7 support?",
      answer: "Yes, we provide 24/7 customer support for all clients.",
    },
  ],
};

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [faqsByCategory, setFaqsByCategory] = useState({});
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFaqsByCategory(mockApiResponse);
      setLoading(false);
    };

    fetchFaqs();
  }, []);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  const currentFaqs = faqsByCategory[activeCategory] || [];

  return (
    <div className="subContainer mx-auto px-4">
      <div className="flex flex-col ">
        <p className="font-avalors font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mt-35">
          FAQS
        </p>
        <p className="font-avalors font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary">
          Your questions answered
        </p>
        <p className="font-montserrat font-medium text-base sm:text-lg md:text-xl leading-relaxed mt-6">
          Find answers to common questions about our services, project process,
          updates, and support at Infogentech.
        </p>
      </div>
      <section className="flex sm:gap-20 gap-4 container mx-auto xl:mt-20 mt-10 flex-col sm:flex-row ">
        <div className="flex sm:ap-10 gap-2">
          <div className="flex flex-col text-nowrap font-montserrat">
            {categoryList.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  setOpenId(null);
                }}
                className={`font-jost sm:mb-10 mb-4 text-base leading-6 align-middle transition-opacity duration-300 cursor-pointer ${
                  activeCategory === category.key
                    ? "opacity-100 font-semibold"
                    : "opacity-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <aside className="w-full">
          <p className="font-avalors font-normal sm:text-3xl text-2xl  leading-[100%] tracking-[0.03em] mb-6">
            {categoryList.find((c) => c.key === activeCategory)?.label}
          </p>
          {loading ? (
            <Loader />
          ) : (
            <section className="font-montserrat w-full">
              {currentFaqs.map((faq, index) => (
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
                    <div className="text-[#252525] flex items-center gap-4  xl:text-2xl text-sm">
                      <span className="text-4xl font-normal opacity-40">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 90 : 0 }}
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
                        <div className="xl:pl-19 pl-10 xl:pr-5  pr-2 pt-3 text-left xl:text-lg text-[12px] leading-[1.4]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </section>
          )}
        </aside>
      </section>
    </div>
  );
};

export default FAQs;
