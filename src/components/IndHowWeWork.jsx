
import Image from "next/image";
import IndMidHeader from "./IndMidHeader";
import Icons from "./ui/Icon";
import { motion } from "framer-motion";

export default function IndHowWeWork() {
  return (
    <div className="mt-20 container mx-auto px-10 pb-20">
      <IndMidHeader
        title="How We Work"
        subtitle="From Strategy to Success: Our Process"
      />
      <div className="relative">
        <Icons name="IndHomeService1" />
        <hr className="border-t-2 border-dashed border-[#B493FF] w-54" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute max-w-86 left-54 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 z-50 bg-white"
        >
          <h3 className="text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
            1. Understand Your Goals
          </h3>
          <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200">
            We begin by listening to the goals of your business, your audience,
            and your market to create a custom-made digital marketing strategy.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute max-w-86 left-139.5 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-60 z-40 bg-white"
        >
          <h3 className="text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
            2. Research & Plan
          </h3>
          <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200">
            We will research competitors and keywords to develop a clear roadmap
            indicating what campaigns should be used and what performance should
            be measured.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute max-w-86 left-225 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-80 z-30 bg-white"
        >
          <h3 className="text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
            3. Launch Campaigns
          </h3>
          <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200">
            We implement pre-designed plans, not only in terms of SEO, PPC, and
            social media but also in terms of management of these activities to
            ensure a smooth operation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute max-w-86 left-310.5 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-90"
        >
          <div className="p-4 bg-purple-50 rounded-2xl">
            <h3 className="text-[24px] font-semibold text-primary leading-[1.5] tracking-[-0.02em] ">
              Analyze & Optimize
            </h3>
            <p className="font-montserrat font-medium text-lg tracking-tightest text-primary">
              Analytics tools keep in touch with KPIs and user behavior to make
              critical adjustments to campaigns that will enhance their
              quality-tuning presentation, involvement, and ROI.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-80 max-w-5xl flex shrink-0 justify-center items-center"
      >
        <Icons name="IndHomeService2" className="shrink-0" />
        <div className="p-4 top-90">
          <h3 className="text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
            Our Commitment to Excellence
          </h3>
          <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200 tracking-[-0.02em] ">
            At Infogentech, we focus on performance and keeping our customers
            satisfied. Our team essentially stays updated with the changing
            trends and technology in the industry to provide your business with
            a competitive advantage. By working globally in different
            industries, we bring the strength to help companies grow and thrive
            in getting the best out of the digital world.
          </p>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assist/IndImg/homePage/service.svg"
          alt="service"
          width={312}
          height={267}
          className="object-cover w-full "
        />
      </motion.div>
    </div>
  );
}