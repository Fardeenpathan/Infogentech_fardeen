"use client";
import { useState, useEffect } from "react";
import Icons from "@/components/ui/Icon";
import Loader from "@/components/loader/Loader";
import adminApiService from "@/lib/adminApi";

const categoryList = [
  { key: "general", label: "General & Services" },
  { key: "pricing", label: "Pricing & Timeline" },
  { key: "support", label: "Support & Maintenance" },
  { key: "technical", label: "Technical" },
  { key: "process", label: "Process & Workflow" }
];

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [faqsByCategory, setFaqsByCategory] = useState({});
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://97fzff04-5000.inc1.devtunnels.ms/api/blogs');
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      
      const blogsData = await response.json();
      const blogs = blogsData.success ? blogsData.data : [];
      
      // Extract all FAQs from all blogs
      const allFaqs = [];
      blogs.forEach(blog => {
        if (blog.faqs && Array.isArray(blog.faqs)) {
          blog.faqs.forEach(faq => {
            // Only include active FAQs
            if (faq.isActive !== false && faq.isActive !== 'false' && faq.isActive !== '0') {
              allFaqs.push({
                ...faq,
                id: faq._id || faq.id || `${blog._id}_${faq.question.substring(0, 10)}`,
                blogId: blog._id,
                blogTitle: blog.title
              });
            }
          });
        }
      });
      
      const faqs = allFaqs;
      
      const groupedFaqs = faqs.reduce((acc, faq) => {
        if (faq.isActive) {
          const category = faq.category || 'general';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(faq);
        }
        return acc;
      }, {});
      
      Object.keys(groupedFaqs).forEach(category => {
        groupedFaqs[category].sort((a, b) => (a.order || 0) - (b.order || 0));
      });
      
      setFaqsByCategory(groupedFaqs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      setError('Failed to load FAQs. Please try again later.');
      setFaqsByCategory({});
    } finally {
      setLoading(false);
    }
  };

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
            <p className="font-jost font-medium text-lg leading-6 align-middle mt-9">
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
                className={`font-jost mb-10 text-[16px] leading-6 align-middle transition-opacity duration-300 cursor-pointer ${
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
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-400 mb-4">{error}</p>
              <button 
                onClick={fetchFaqs}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
            <section>
              <div className="rounded-lg">
                {(faqsByCategory[activeCategory] || []).length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <p>No FAQs available for this category yet.</p>
                  </div>
                ) : (
                  (faqsByCategory[activeCategory] || []).map((faq) => (
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
                  ))
                )}
              </div>
            </section>
          )}
        </aside>
      </section>
    </div>
  );
};

export default FAQs;
