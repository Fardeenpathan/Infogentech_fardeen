"use client";
import { useState } from "react";

const faqs = [
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
  {
    id: 3,
    question: "Do you provide website migration assistance?",
    answer:
      "Yes, we offer free website migration assistance for new customers.",
  },
  {
    id: 4,
    question: "What security measures do you have in place?",
    answer:
      "We employ advanced security measures including firewalls, DDoS protection, and regular security audits.",
  },
];

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
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
            <p className="font-jost font-medium text-[18px] leading-[24px] align-middle mt-9">
              Find answers to common questions about our services, project
              process, updates, and support at Infogentech.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-20">
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
          <div className="">
            <p className="font-jost mb-10 text-[16px] leading-[24px]  align-middle">
              General & Services
            </p>
            <p className="font-jost mb-10 text-[16px] leading-[24px]  align-middle">
              Pricing & Timeline
            </p>
            <p className="font-jost mb-10 text-[16px] leading-[24px]  align-middle">
              Support & Maintenance
            </p>
          </div>
        </div>
        <div>
          <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em]">
            General & Services
          </p>
          <section className=" mx-auto ">
            <div className=" px-7 md:px-10 xl:px-2 py-4">
              <div className="  rounded-lg">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`border-b border-[#0A071B]/10 ${
                      openId === faq.id ? "" : ""
                    }`}
                  >
                    <button
                      className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transition-transform duration-200 ${
                          openId === faq.id ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                      </svg>
                    </button>
                    {openId === faq.id && (
                      <div className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
