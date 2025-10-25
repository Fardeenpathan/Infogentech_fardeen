
import React from "react";
import { motion } from "framer-motion";
import IndButton from "./ui/IndButton";

export default function IndConsutation() {
  return (
    <section className="px-2">
      <div className="relative flex flex-col justify-center items-center text-center container mx-auto rounded-2xl overflow-hidden mt-20">
      <div className="absolute inset-0 bg-primary z-0"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover z-5"
        src="https://res.cloudinary.com/dpmceu66e/video/upload/v1759924834/blog-app/blogs/blogs/1759924829760-gettyimages-956747124.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-primary/50 z-10"></div>

      <div className="relative z-20 p-10  text-white">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="font-montserrat font-normal xl:text-2xl text-[12px] xl:leading-[1.5] -tracking-[0.02em]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We’re here to help grow your business
          </motion.p>

          <motion.p
            className="font-avalors font-normal xl:text-[40px] text-sm xl:leading-12 capitalize mt-4.5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get a Free Consultation from Our Digital Marketing Experts!
          </motion.p>
        </motion.div>

        <motion.p
          className="font-montserrat font-medium xl:text-base text-[12px] leading-[1.5] tracking-[-0.02em] py-4 xl:mb-10 mt-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Are you ready to expand your business through a general digital marketing strategy 
          or a tailored digital marketing campaign? Our award-winning team designs personalised 
          and results-oriented plans to suit your industry as well as your objectives. 
          You can get a free initial consultation so that we can advise the most effective 
          digital marketing options for your brand. Reach out to us, inquire, and contribute, 
          and we can make you a success online. Fill out the form or reach out today, 
          and let's start building your growth story together!
        </motion.p> 

        <a href="/contact ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <IndButton variant="outline" className="!bg-white !text-primary xl:!text-xl !text-lg xl:!px-14 !px-8 xl:!py-2.5 !py-1 !border-primary/20">
               Let's Talk
            </IndButton>
          </motion.div>
        </a>
      </div>
    </div>
    </section>
    
  );
}
