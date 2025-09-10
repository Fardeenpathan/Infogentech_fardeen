"use client";
import { useState, useEffect } from "react";
import Icons from "@/components/ui/Icon";
import Loader from "@/components/loader/Loader";

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
    <div className="mt-35 subContainer mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <div className="flex justify-center items-center mb-40 flex-col">
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 "></div>
          </div>
          <div className="flex flex-col ">
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              FAQS
            </p>
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              Your questions answered
            </p>
            <p className="font-jost font-medium text-lg leading-[24px] align-middle mt-9">
              Find answers to common questions about our services, project
              process, updates, and support at Infogentech.
            </p>
          </div>
        </div>
      </div>
      <section className="flex gap-20 container mx-auto">
        <div className="flex gap-10">
          <div className="flex justify-center items-center mb-40 flex-col">
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </div>
          <div className="flex flex-col text-nowrap">
            {categoryList.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  setOpenId(null);
                }}
                className={`font-jost mb-10 text-[16px] leading-[24px] align-middle transition-opacity duration-300 cursor-pointer ${
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
          <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em] capitalize mb-6">
            {categoryList.find((c) => c.key === activeCategory)?.label}
          </p>
          {loading ? (
            <Loader />
          ) : (
            <section>
              <div className="rounded-lg">
                {currentFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-[#0A071B]/10 linearGradientFaq mb-2"
                  >
                    <button
                      className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <div>{faq.question}</div>
                      <div className="cursor-pointer">
                        <Icons name={openId === faq.id ? "Minus" : "Add"} />
                      </div>
                    </button>
                    {openId === faq.id && (
                      <div className="answer flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </section>
    </div>
  );
};

export default FAQs;
