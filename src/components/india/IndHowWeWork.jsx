import Image from "next/image";
import IndMidHeader from "./IndMidHeader";
import Icons from "../ui/Icon";
import { motion } from "framer-motion";

export default function IndHowWeWork() {
  return (
    <div className="xl:mt-20 mt-10 container mx-auto px-4 sm:px-6 xl:px-10 pb-20">
      <div className="lg:hidden">
        <IndMidHeader
          title="How We Work"
          subtitle="From Strategy to Success: Our Process"
        />
        <div className="relative flex flex-col xl:block">
          <Icons name="IndHomeService1" />
          <hr className="border-t-2 border-dashed border-[#B493FF] w-54 hidden xl:block" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-86"
          >
            <h3 className="text-sm sm:text-base xl:text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
              1. Understand Your Goals
            </h3>
            <p className="font-montserrat font-medium text-sm sm:text-base tracking-tight text-gray-200">
              We begin by listening to the goals of your business, your
              audience, and your market to create a custom-made digital
              marketing strategy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className=" max-w-86 ml-10  md:ml-30"
          >
            <h3 className="text-sm sm:text-base xl:text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
              2. Research & Plan
            </h3>
            <p className="font-montserrat font-medium text-sm sm:text-base tracking-tight text-gray-200">
              We will research competitors and keywords to develop a clear
              roadmap indicating what campaigns should be used and what
              performance should be measured.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className=" max-w-86 my-4 md:ml-60"
          >
            <h3 className="text-sm sm:text-base xl:text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
              3. Launch Campaigns
            </h3>
            <p className="font-montserrat font-medium text-sm sm:text-base tracking-tight text-gray-200">
              We implement pre-designed plans, not only in terms of SEO, PPC,
              and social media but also in terms of management of these
              activities to ensure a smooth operation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="ml-10 max-w-86 md:ml-90"
          >
            <div className="p-4 bg-purple-50 rounded-2xl">
              <h3 className="text-sm sm:text-base xl:text-[24px] font-semibold text-primary leading-[1.5] tracking-[-0.02em]">
                Analyze & Optimize
              </h3>
              <p className="font-montserrat font-medium text-sm sm:text-base tracking-tight text-primary">
                Analytics tools keep in touch with KPIs and user behavior to
                make critical adjustments to campaigns that will enhance their
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
          className="mt-20 flex flex-col xl:flex-row items-center gap-6 max-w-5xl mx-auto"
        >
          <Icons name="IndHomeService2" className="shrink-0" />
          <div className="p-4">
            <h3 className="text-sm sm:text-base xl:text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
              Our Commitment to Excellence
            </h3>
            <p className="font-montserrat font-medium text-sm sm:text-base  text-gray-200 tracking-[-0.02em] mt-2">
              At Infogentech, we focus on performance and keeping our customers
              satisfied. Our team essentially stays updated with the changing
              trends and technology in the industry to provide your business
              with a competitive advantage. By working globally in different
              industries, we bring the strength to help companies grow and
              thrive in getting the best out of the digital world.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="hidden xl:block mt-10"
        >
          <Image
            src="/assist/IndImg/homePage/service.svg"
            alt="service"
            width={312}
            height={267}
            className="object-cover w-full"
          />
        </motion.div>
      </div>
      <div className="lg:block hidden xl:hidden">
        <div>
          <IndMidHeader
            title="How We Work"
            subtitle="From Strategy to Success: Our Process"
          />
          <div className="relative">
            <Icons name="IndHomeService1" />
            <hr className="border-t-2 border-dashed border-[#B493FF] w-24" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute max-w-64 left-24 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 z-50 bg-white"
            >
              <h3 className="2xl:text-2xl text-xl font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
                1. Understand Your Goals
              </h3>
              <p className="font-montserrat font-medium 2xl:text-lg text-sm tracking-tightest text-gray-200">
                We begin by listening to the goals of your business, your
                audience, and your market to create a custom-made digital
                marketing strategy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute max-w-64 left-87.5 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-60 z-40 bg-white"
            >
              <h3 className="2xl:text-2xl text-xl font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
                2. Research & Plan
              </h3>
              <p className="font-montserrat font-medium 2xl:text-lg text-sm tracking-tightest text-gray-200">
                We will research competitors and keywords to develop a clear
                roadmap indicating what campaigns should be used and what
                performance should be measured.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute max-w-64 left-151 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-80 z-30 bg-white"
            >
              <h3 className="2xl:text-2xl text-xl font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
                3. Launch Campaigns
              </h3>
              <p className="font-montserrat font-medium 2xl:text-lg text-sm tracking-tightest text-gray-200">
                We implement pre-designed plans, not only in terms of SEO, PPC,
                and social media but also in terms of management of these
                activities to ensure a smooth operation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute max-w-64 left-214.5 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-90"
            >
              <div className="p-4 bg-purple-50 rounded-2xl">
                <h3 className="2xl:text-2xl text-xl font-semibold text-primary leading-[1.5] tracking-[-0.02em] ">
                  Analyze & Optimize
                </h3>
                <p className="font-montserrat font-medium 2xl:text-lg text-sm tracking-tightest text-primary">
                  Analytics tools keep in touch with KPIs and user behavior to
                  make critical adjustments to campaigns that will enhance their
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
              <h3 className="2xl:text-2xl text-xl font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
                Our Commitment to Excellence
              </h3>
              <p className="font-montserrat font-medium 2xl:text-lg text-sm tracking-tightest text-gray-200 tracking-[-0.02em] ">
                At Infogentech, we focus on performance and keeping our
                customers satisfied. Our team essentially stays updated with the
                changing trends and technology in the industry to provide your
                business with a competitive advantage. By working globally in
                different industries, we bring the strength to help companies
                grow and thrive in getting the best out of the digital world.
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
      </div>
      <div className="xl:block hidden">
        <IndMidHeader
          title="How We Work"
          subtitle="From Strategy to Success: Our Process"
        />
        <div className="relative">
          <Icons name="IndHomeService1" />
          <hr className="border-t-2 border-dashed border-[#B493FF] w-44" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute max-w-80 left-44 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 z-50 bg-white"
          >
            <h3 className="text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
              1. Understand Your Goals
            </h3>
            <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200">
              We begin by listening to the goals of your business, your
              audience, and your market to create a custom-made digital
              marketing strategy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute max-w-80 left-123.5 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-60 z-40 bg-white"
          >
            <h3 className="text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
              2. Research & Plan
            </h3>
            <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200">
              We will research competitors and keywords to develop a clear
              roadmap indicating what campaigns should be used and what
              performance should be measured.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute max-w-80 left-203 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-80 z-30 bg-white"
          >
            <h3 className="text-[24px] font-semibold text-gray-400 leading-[1.5] tracking-[-0.02em]">
              3. Launch Campaigns
            </h3>
            <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200">
              We implement pre-designed plans, not only in terms of SEO, PPC,
              and social media but also in terms of management of these
              activities to ensure a smooth operation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute max-w-80 left-282.5 border-l-2 border-b-2 border-dashed border-[#B493FF] p-4 top-90"
          >
            <div className="p-4 bg-purple-50 rounded-2xl">
              <h3 className="text-[24px] font-semibold text-primary leading-[1.5] tracking-[-0.02em] ">
                Analyze & Optimize
              </h3>
              <p className="font-montserrat font-medium text-lg tracking-tightest text-primary">
                Analytics tools keep in touch with KPIs and user behavior to
                make critical adjustments to campaigns that will enhance their
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
              trends and technology in the industry to provide your business
              with a competitive advantage. By working globally in different
              industries, we bring the strength to help companies grow and
              thrive in getting the best out of the digital world.
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
    </div>
  );
}
