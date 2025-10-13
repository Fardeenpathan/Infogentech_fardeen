"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import dayjs from "dayjs";
import SubscribeContact from "@/components/SubscribeContact";
import Icons from "@/components/ui/Icon";

export default function BlogClient({ blog, slug }) {
  const [openId, setOpenId] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [loadingFaqs, setLoadingFaqs] = useState(true);

  useEffect(() => {
    fetchBlogFaqs();
  }, [blog._id]);

  const fetchBlogFaqs = async () => {
    try {
      setLoadingFaqs(true);
      
      // console.log('Blog object:', blog);
      // console.log('Blog FAQs:', blog.faqs);
      
      let faqs = [];
      
      if (blog.faqs && Array.isArray(blog.faqs)) {
        faqs = blog.faqs;
        // console.log('FAQs from blog object:', faqs);
      } else {
        console.log('No FAQs found in blog object');
      }

      const activeFaqs = faqs
        .filter(faq => {
          const isActive = faq.isActive;
          return isActive !== false && isActive !== 'false' && isActive !== '0';
        })
        .sort((a, b) => {
          const orderA = parseInt(a.order) || 0;
          const orderB = parseInt(b.order) || 0;
          return orderA - orderB;
        });

      // console.log('Active FAQs:', activeFaqs);
      setFaqData(activeFaqs);
    } catch (error) {
      console.error('Error fetching blog FAQs:', error);
      if (blog.faqs && Array.isArray(blog.faqs)) {
        const activeFaqs = blog.faqs
          .filter(faq => faq.isActive !== false)
          .sort((a, b) => (a.order || 0) - (b.order || 0));
        setFaqData(activeFaqs);
      } else {
        setFaqData([]);
      }
    } finally {
      setLoadingFaqs(false);
    }
  };

  const toggleFAQ = (faqId) => {
    setOpenId(openId === faqId ? null : faqId);
  };

  return (
    <div className="container mx-auto mt-24 text-wrap px-10">
      <div className="mb-8">
        <Link
          href="/blogs"
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

      {(loadingFaqs || faqData.length > 0) && (
        <section className="mt-10">
          <h2 className="font-jost text-[30px] font-normal leading-[38px] text-primary">
            FAQs
          </h2>
          <div className="rounded-lg">
            {loadingFaqs ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600">Loading FAQs...</span>
              </div>
            ) : faqData.length > 0 ? (
              faqData.map((faq, index) => {
                const faqId = faq._id || faq.id || index;
                return (
                  <div
                    key={faqId}
                    className="border-b border-[#0A071B]/10 linearGradientFaq mb-2"
                  >
                    <button
                      className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5"
                      onClick={() => toggleFAQ(faqId)}
                    >
                      <div>{faq.question}</div>
                      <div className="cursor-pointer">
                        <Icons name={openId === faqId ? "Minus" : "Add"} />
                      </div>
                    </button>
                    {openId === faqId && (
                      <div className="answer flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500">
                No FAQs available for this blog.
              </div>
            )}
          </div>
        </section>
      )}

      <SubscribeContact />
    </div>
  );
}
