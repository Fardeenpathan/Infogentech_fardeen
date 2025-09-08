"use client";
import { useState } from "react";
import Icons from "@/components/ui/Icon";
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
          <di className="text-nowrap">
            <p className="font-jost mb-10 text-[16px] leading-[24px]  align-middle">
              General & Services
            </p>
            <p className="font-jost mb-10 text-[16px] leading-[24px]  align-middle">
              Pricing & Timeline
            </p>
            <p className="font-jost mb-10 text-[16px] leading-[24px]  align-middle">
              Support & Maintenance
            </p>
          </di>
        </div>
        <aside className="w-full">
          <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em]">
            General & Services
          </p>
          <section>
              <div className="rounded-lg">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`border-b border-[#0A071B]/10 linearGradientFaq mb-2 ${
                      openId === faq.id ? "" : ""
                    }`}
                  >
                    <button
                      className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold  focus:outline-none p-5"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <div>{faq.question}</div>
                      <div className="cursor-pointer">
                        <Icons name = {openId===faq.id ? "Minus" : "Add"}/>
                      </div>
                    </button>
                    {openId === faq.id && (
                      <div className="answer flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold  focus:outline-none p-5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </section>
        </aside>
      </section>
    </div>
  );
};

export default FAQs;
