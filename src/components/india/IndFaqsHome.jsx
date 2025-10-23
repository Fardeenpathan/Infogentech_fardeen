"use client";
import { useState } from "react";
import Image from "next/image";
import IndTopicHeader from "../IndTopicHeader";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "../ui/Icon";

const Faqs = [
  {
    id: "01",
    question: "What is the importance of digital marketing to my business?",
    answer:
      "It places your brand in front of prospective customers simultaneously and in the places where they are most likely to establish contact with the internet, can measure the outcome easily, and normally costs considerably less than a form of conventional advertising. Digital marketing enhances visibility and even facilitates rapid adoption of market changes.",
  },
  {
    id: "02",
    question: "What are the differences between SEO and PCC?",
    answer: "SEO means Search Engine Optimization, and it is aimed at raising the organic position a person has, thus raising the number of visits received over the course of time that are regarded as free. In the meantime, PPC utilizes paid-in adverts that display in search results or social media postings, which attract built-in traffic and pay for the aftermath of each and every click that transfers users to its business.",
  },
  {
    id: "03",
    question: "Do I have to be active on all social platforms?",
    answer:
      "No. It will be more effective to work on those platforms that your target audience uses more. The customization approach means that the content is consistent, more people will be engaged, and your marketing costs will be put to better use.",
  },
  {
    id: "04",
    question: "Which digital marketing strategy is the right one",
    answer: "A deeper audit or consultation process will determine what you want to achieve, the type of target you want to target, trends in the industry, and competitors. Informed recommendations are provided based on the goals, wherein the recommendations could be in terms of SEO, content marketing, PPC, or social media campaigns.",
  },
   {
    id: "05",
    question: "Is it possible to use digital market marketing with small or local businesses?",
    answer:
      "Yes! Local SEO, location-based advertisements, and social media marketing allow small businesses to find clients in their area to develop brand loyalty, and in the local marketplace, and to compete, even with just a modest budget.",
  },
  {
    id: "06",
    question: "How do I track results of digital marketing?",
    answer:
      "Classifying results can be done by tools such as Google Analytics, social media insights, and reports of campaign performance. Metrics can span traffic clicks to the website, conversions, engagements, click rate, and ROI in ensuring feedback to help improve tactics over time.",
  },
  // {
  //   id: "07",
  //   question: "What digital marketing services do you offers?",
  //   answer:
  //     "We provide SEO, PPC ad agency services, social media management, content marketing, email marketing, and analytics. We seek to assist in converting, increasing visibility, and generating measurable growth for your brand across the digital channels.",
  // },
  // {
  //   id: "08",
  //   question: "What tools do agencies use for digital marketing?",
  //   answer:
  //     "To track and optimize the campaigns, services like Google Analytics, keyword lookups (e.g., SEMrush), social media calendar, email marketing software, and designing tools like Canva or Adobe would need to be planned to be used.",
  // },
  // {
  //   id: "09",
  //   question: "Do you provide social media marketing services?",
  //   answer:
  //     "We can do full social marketing, including creating the content, managing your account, paid campaigns, adverts, and engaging people on social media. We develop your brand over such platforms as Instagram, Facebook, LinkedIn, and Twitter..",
  // },
  // {
  //   id: "10",
  //   question: "How can SEO assist in the growth of my company?",
  //   answer:
  //     "SEO increases your visibility online through search engines. So, when potential customers go online to find people who they are likely to purchase in your place, they will find you. Free publicity, in turn, through more visibility, relevant traffic, and good content, will create organic growth in the long term and trust towards the audience.",
  // },
  // {
  //   id: "11",
  //   question: "Can you handle PPC Campaigns for my Business?",
  //   answer:
  //     "Sure thing. Our team manages Google Ads, Facebook Ads, amongst other PPC campaigns, directing targeted traffic and leads. Our experts monitor the performance of such campaigns, optimize the budgets, and refine the targeting to optimize conversions and minimize wastage of ad expenditure.",
  // },
];

const IndFaqsHome = () => {
  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="mt-20 container mx-auto px-4">
      <IndTopicHeader title="Faqs" subtitle="Everything You Need to Know" subClass="w-full"/>

      <div className="xl:mt-8 container mx-auto flex justify-between mt-0 xl:py-10 py-0">
        <motion.div
          className="flex justify-between xl:gap-30 flex-col xl:flex-row gap-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Image
              src="/assist/IndImg/homePage/faq.png"
              alt="service"
              width={762}
              height={400}
              className="object-cover rounded-2xl xl:h-130 h-64"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <section className="font-montserrat w-full shrink-0">
              {Faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`border border-[#C0CADF] mb-4 rounded-2xl  py-4 ${
                    openId === faq.id ? "bg-[#F6F6F6]" : "bg-white"
                  }`}
                >
                  <button
                    className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none px-5"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="text-[#252525] flex items-center gap-4  md:text-2xl text-[14px]">
                      <span className=" font-normal opacity-40">
                        {faq.id}
                      </span>
                      {faq.question}
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-15 h-15 rounded-full flex items-center justify-center z-10 cursor-pointer shrink-0 ${
                        openId === faq.id ? "bg-white" : " bg-[#F6F6F6]"
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default IndFaqsHome;
