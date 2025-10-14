"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import dayjs from "dayjs";
import SubscribeContact from "@/components/SubscribeContact";
import Icons from "@/components/ui/Icon";

export default function BlogClient({ blog, slug }) {
  const [openId, setOpenId] = useState(null);

  const faqData = [
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
  ];

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container mx-auto mt-24 text-wrap px-10">
      <div className="mb-8">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>

      <div className="flex justify-center items-center flex-col">
        {blog.category?.name && (
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
            <Tag size={16} />
            {blog.category.name}
          </div>
        )}

        <h1 className="font-avalors text-[24px] font-normal leading-[100%] tracking-[0.03em] mt-6 text-center text-primary">
          PUBLISHED {dayjs(blog.createdAt).format("DD MMM YYYY")}
        </h1>

        <h1 className="font-avalors text-[32px] font-normal leading-[100%] tracking-[0.03em] mt-6 text-center">
          {blog.title}
        </h1>

        {blog.excerpt && (
          <p className="font-jost font-medium text-lg leading-6 text-center align-middle mt-8 max-w-4xl">
            {blog.excerpt}
          </p>
        )}

        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={1400}
            height={460}
            className="mt-20 rounded-2xl h-[560px] object-cover"
          />
        )}

        <div
          className="mt-18 font-kumbh-sans text-[20px] leading-[30px]  w-full"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="text-[#82828C] mt-12 border-2 container mx-auto px-10"></div>
      </div>

      <section className="mt-10">
        <h2 className="font-jost text-[30px] font-normal leading-[38px] text-primary">
          FAQs
        </h2>
        <div className="rounded-lg">
          {faqData.map((faq) => (
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
  );
}
