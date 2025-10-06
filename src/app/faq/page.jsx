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
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Outcomes rely on the approach. Paid advertisements are able to provide instant leads and organic growth whereas SEO normally requires 3-6 months. Consistency, quality content and optimization can help in the growth of a business in the long-term.",
    },
    {
      id: 2,
      question: "Can digital marketing help improve my brand’s reputation?",
      answer: "Yes. Digital marketing improves your brand’s image by establishing and reaching out to your audience. Social proofs, testimonials and reviews also help in creating a sense of credibility, which makes your business look trustworthy on the internet.",
    },

     {
      id: 3,
      question: "Do small businesses need a digital marketing budget?",
      answer:
        "Definitely. With the help of the right strategy, a small budget can also lead to good results. Digital marketing ensures that the company is seen and makes sure that it attracts the right customers. Digital Marketing delivers desirable results and ensures that small businesses can remain competitive in their markets while also achieving sustainable growth.",
    },

     {
      id: 4,
      question: "What role does content play in digital marketing?",
      answer:
        "Content is the basis of Digital Marketing. It informs, engages and inspires audiences through blogs, videos, social media posts and other channels. Quality content not only boosts the SEO but also builds the customer’s trust and positions your company at the top of the leaderboard.",
    },

     {
      id: 5,
      question: "Can I manage digital marketing myself without an agency?",
      answer:
        "It is true that anyone can take on digital marketing, but partnering with an agency is absolutely necessary. At Infogentech, we bring our professional expertise, advanced tools and proven experience to the table to maximize the results. Working with an agency saves time, prevents expensive errors and guarantees more direct and quicker results for your business.",
    },
     {
      id: 6,
      question: "How do paid ads complement organic strategies?",
      answer:
        "The advertisements provide short term exposure and traffic, but the methods of organic promotion like SEO and content marketing  generate long-term value. When both are combined, it creates a balanced approach that reaches the maximum number of people, drives more conversions and ensures steady and sustainable growth.",
    },
  ],
  pricing: [
    {
      id: 7,
      question: "How is the pricing structured?",
      answer: "Pricing varies depending on the scope and requirements of each project. The final cost is determined by the complexity of designs, number of pages, functions and integrations. We ensure complete transparency so you always know exactly what you’re paying for.",
    },
    {
      id: 8,
      question: "Do you offer any discounts?",
      answer: "Yes, we do! Infogentech provides seasonal discounts and special offers. We also offer exclusive discounts to startups, NGOs and long-term customers. The discounts ensure that our professional services remain affordable while maintaining the high quality.",
    },
     {
      id: 9,
      question: "What is the usual project timeline?",
      answer: "The schedule depends on the scope and requirements of each project. Most of the websites or campaigns are completed within an average of 2-6 weeks. For urgent requirements, we can expedite the process with special arrangements.",
    },
     {
      id: 10,
      question: "Are there any hidden charges?",
      answer: "No, there are no hidden charges. We do not believe in disguised expenses. The pricing information for the included design, hosting and other features are disclosed at the time of payment. By doing so, you will be able to manage your budget without any extra expenses.",
    },
     {
      id: 11,
      question: "Can I pay in installments?",
      answer: "Yes, offer flexible installments plans. You can make a percentage as a down payment, with the remaining balance spread across project milestones. This approach is flexible and designed to give you peace of mind.",
    },
    {
      id: 12,
      question: "What happens if my project takes longer than expected?",
      answer: "Our goal is to meet all deadlines. However, if delays occur due to new features and changes, we will keep you informed and adjust the timeline. We maintain complete transparency throughout the process.",
    },

    {
      id: 13,
      question: "Do you offer free consultations before pricing?",
      answer: "Absolutely! During the initial phase, we offer a free consultation to get to know what you need and want to achieve. This will assist us in designing a custom proposal that reflects proper pricing and schedules that fit your business.",
    },
    {
      id: 14,
      question: "Can I upgrade my package later?",
      answer: "Yes, we offer flexibility in upgrading to a different package according to your needs. You can also begin with a basic package and upgrade to include more features, additional pages or enhanced marketing services as your business expands and becomes larger.",
    },
  ],
  support: [
    {
      id: 15,
      question: "What support channels are available?",
      answer: "Our support channels are available to make sure that you receive help in the most convenient manner. Our email and telephone systems enable you to contact us. Priority channels are provided in case of urgent problems to receive help and continue your day without any problems.",
    },
    {
      id: 16,
      question: "Do you provide 24/7 support?",
      answer: "We do not offer 24/7 support, but we work as an extension of your team by providing one-on-one assistance during business hours along with flexible assistance options. All enquiries are responded to within 1-2 business days to keep your operations running smoothly.",
    },

    {
      id: 17,
      question: "What does your maintenance service include?",
      answer: "We don’t just handle maintenance updates but also perform security check-ups, create backups, fix bugs and improve performance. We also ensure that your website/system remains fast, secure and up to date, allowing you to concentrate on expanding your business instead of minor technical problems.",
    },

    {
      id: 18,
      question: "How quickly do you respond to issues?",
      answer: "Response time depends on the nature of the problem. Critical issues are handled right away, while general inquiries are usually resolved within 24 hours. We give priority to urgent requests to reduce business impact and ensure you’re kept informed every step of the way.",
    },

    {
      id: 19,
      question: "Do you offer customized support plans?",
      answer: "Yes, we offer tailored support plans designed to meet your specific requirements. Service options range from basic monthly check-ups to advanced technical maintenance and comprehensive monitoring, all structured to align with your business needs and budget.",
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
