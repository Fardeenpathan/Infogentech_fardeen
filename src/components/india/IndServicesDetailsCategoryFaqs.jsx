"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "../ui/Icon";

const IndServicesDetailCategoryFaqs = ({ servicedetailscategorysidebarfaqs }) => {
    const [faqDatas, setFaqData] = useState([]);
    const [loadingFaqs, setLoadingFaqs] = useState(true);
    const [openId, setOpenId] = useState(null);

    useEffect(() => {
        fetchBlogFaqs();
    }, []);

    const fetchBlogFaqs = async () => {
        try {
            setLoadingFaqs(true);
            let faqs = [];
            if (servicedetailscategorysidebarfaqs.faqs && Array.isArray(servicedetailscategorysidebarfaqs.faqs)) {
                faqs = servicedetailscategorysidebarfaqs.faqs;
            } else {
                console.log("No FAQs found in blog object");
            }

            const activeFaqs = faqs
                .filter((faq) => {
                    const isActive = faq.isActive;
                    return isActive !== false && isActive !== "false" && isActive !== "0";
                })
                .sort((a, b) => {
                    const orderA = parseInt(a.order) || 0;
                    const orderB = parseInt(b.order) || 0;
                    return orderA - orderB;
                });
            setFaqData(activeFaqs);
        } catch (error) {
            console.error("Error fetching blog FAQs:", error);
            if (servicedetailscategorysidebarfaqs.faqs && Array.isArray(servicedetailscategorysidebarfaqs.faqs)) {
                const activeFaqs = servicedetailscategorysidebarfaqs.faqs
                    .filter((faq) => faq.isActive !== false)
                    .sort((a, b) => (a.order || 0) - (b.order || 0));
                setFaqData(activeFaqs);
            } else {
                setFaqData([]);
            }
        } finally {
            setLoadingFaqs(false);
        }
    };

    const toggleFAQ = (id) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
        <div className="lg:mb-28 mb-12">
            <h2 className="font-jost text-[24px] font-semibold leading-[38px] text-black py-3 px-5 border border-[#DBD4FF] rounded-t-2xl">Category</h2>
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-full"
                    >
                        <section className="font-montserrat w-full mb-12">
                            {faqDatas.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`border-b border-l border-r border-[#DBD4FF] py-4 w-full ${openId === faq.id ? "bg-[#F9F8FE]" : "bg-white"
                                        }`}
                                >
                                    {/* Question */}
                                    <button
                                        className="flex w-full items-start justify-between rounded-lg text-left text-lg font-medium focus:outline-none px-5"
                                        onClick={() => toggleFAQ(faq.id)}
                                    >
                                        <div className="text-gray-600 flex items-center gap-4 md:text-[18px] text-[16px]">
                                            {faq.question}
                                        </div>
                                        <motion.div
                                            animate={{ rotate: openId === faq.id ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center justify-center z-10 cursor-pointer shrink-0"
                                        >
                                            <Icons name="ServiceSidebarArrow" />
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
                                                <div className="xl:pl-6 pl-6 xl:pr-5 pr-2 mt-3 text-left md:text-[16px] text-[14px] leading-[1.4]">
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
        </>
    );
};

export default IndServicesDetailCategoryFaqs;
