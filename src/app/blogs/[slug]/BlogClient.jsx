"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import IndSideLinks from "@/components/india/IndSideLinks";
import IndSharePost from "@/components/india/IndSharePost";
import IndBlogDetails from "@/components/india/IndBlogDetails";
import dayjs from "dayjs";
import Icons from "@/components/ui/Icon";
import IndButton from "@/components/india/ui/IndButton";
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
      let faqs = [];
      if (blog.faqs && Array.isArray(blog.faqs)) {
        faqs = blog.faqs;
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
    <>
      <div className="relative w-full h-200 flex items-center justify-start">
        <Image
          src="/assist/IndImg/blogBg.jpg"
          alt="Blog"
          width={1200}
          height={660}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#d4d1f4] opacity-95 -z-10" />
          <Image
          src="/assist/IndImg/blogdym.png"
          alt="Blog"
          width={1200}
          height={660}
          className="absolute top-50% -right-30 w-80 h-125 object-cover -z-10 -rotate-12 opacity-20"
        />
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between -top-14">
          <div className="w-full text-center md:text-left space-y-4">
          <div className="mb-20">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-[#252525] hover:text-gray-400  font-montserrat"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          </div>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl">
              20 Aug 2025
            </p>
            <h2 className="text-gray-400 text-3xl md:text-[46px] font-bold leading-[1.2] font-avalors tracking-wider mr-150">
              WHAT IS GENERATIVE ENGINE OPTIMIZATION (GEO) AND HOW IT WORKS?
            </h2>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl mt-15">
              What Is Generative Engine Optimization
            </p>
          </div>
        </div>
      </div>
      <div className="flex  justify-between container mx-auto gap-20 relative -top-24">
        <div>
             {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={1400}
            height={460}
           className="w-full h-180 object-cover -z-10 rounded-3xl"
          />
        )}
         <div
          className="mt-18 font-montserrat text-[20px] leading-[30px]  w-full"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <IndSharePost/>
        </div>
        <div className="min-w-112 flex flex-col gap-y-20">
            <IndBlogDetails data={blog}/>
           <IndSideLinks/>
        </div>
       
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
    </>
  );
}
