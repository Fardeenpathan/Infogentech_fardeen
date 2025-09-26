
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Icons from "@/components/ui/Icon";
import { useState ,useEffect} from "react";
import SubscribeContact from "@/components/SubscribeContact";
import { useSelector } from 'react-redux';
import { redirect} from "next/navigation";
const mockApiResponse = [
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
    question: "Do you provide 24/7 customer support?",
    answer:
      "Yes, our support team is available 24/7 via live chat, email, and phone.",
  },
  {
    id: 4,
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your hosting plan at any time with zero downtime.",
  },
  {
    id: 5,
    question: "Do you offer free website migration?",
    answer:
      "Yes, we provide free professional website migration for all new customers.",
  },
  {
    id: 6,
    question: "Is SSL included with your hosting plans?",
    answer:
      "Yes, we include a free SSL certificate with all of our hosting plans.",
  },
];

const BlogSlugPage = () => {
  const countryCode = useSelector((state) => state.countryCode.value);
  const params = useParams();
  const { slug } = params;

  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

useEffect(() => {
    if (countryCode !== "US") {
      redirect("/blogs");
    }
  }, [countryCode]);
  return (
    <div className="container mx-auto mt-24">
    <div className="container mx-auto mt-24 text-wrap">
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors text-[32px] leading-[24px] font-normal align-middle text-[#8752FF]">
          Published 20 jan 2025
        </p>
        <p className="font-avalors text-[32px] font-normal leading-[100%] tracking-[0.03em] mt-6">
          Madhya Pradesh Partners with Submer for AI‑Ready Data Centres
        </p>
        <p className="font-jost font-medium text-[18px] leading-[24px] text-center align-middle mt-8">
          What happens when a middle school friendship, a shared love for music,
          and a global pandemic come together? In...
        </p>
        <Image
          src="/assist/img/blogImg.png"
          alt="Blog"
          width={1400}
          height={460}
          className="mt-20 rounded-2xl h-[560px]"
        />
        <h1 className="mt-18 font-kumbh-sans text-[20px]  leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </h1>
        <div className="text-[#82828C] mt-12 border-2 container mx-auto"></div>
      </div>
      <div className="font-avalors text-[32px] leading-[24px] font-normal mt-12 text-[#8752FF] uppercase">
        Introduction
      </div>
      <h1 className="mt-18 font-kumbh-sans text-[20px]  leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </h1>
      <h1 className="mt-18 font-kumbh-sans text-[20px]  leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </h1>
      <div></div>
      <Image
        src="/assist/img/blogImg.png"
        alt="Blog"
        width={1200}
        height={460}
        className="mt-20 rounded-2xl h-[560px] w-full"
      />
      <p className="border-l-2 border-[#8752FF] font-kumbh-sans font-medium text-[24px] leading-[36px] mt-12 pl-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper
        mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor
        aliquet risus gravida nunc at feugiat consequat purus. Non massa enim
        vitae duis mattis. Vel in ultricies vel fringilla.
      </p>
      <h1 className="mt-18 font-kumbh-sans text-[20px]  leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </h1>
      <h1 className="mt-5 font-kumbh-sans text-[20px]  leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </h1>
      <div className="mt-10">
        <h2 className="font-jost text-[30px] font-normal leading-[38px] text-[#8752FF]">
          Conclusion
        </h2>
        <p className="mt-5 font-kumbh-sans text-[20px]  leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="font-jost text-[30px] font-normal leading-[38px] text-[#8752FF]">
          FAQs
        </h2>
        <div className="rounded-lg">
          {mockApiResponse.map((faq) => (
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
      <SubscribeContact />
    </div>
    </div>
  );
};

export default  BlogSlugPage;