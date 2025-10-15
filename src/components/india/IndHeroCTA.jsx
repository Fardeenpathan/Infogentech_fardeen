"use client";

import { motion } from "framer-motion";
import Icons from "@/components/ui/Icon";
import IndButton from "./ui/IndButton";

export default function IndHeroCTA() {
  return (
    <div className="container px-4 mx-auto">
        <section className="relative flex lg:h-96 h-64 flex-col items-center justify-center text-center  rounded-2xl overflow-hidden bg-[#f5efff] md:w-[85%] mx-auto">

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex justify-center">
        <Icons name="IndCurve" />
      </div>
      <div className="relative z-10">
        <h1 className="font-avalors font-normal lg:text-[46px] text-3xl leading-[120%] text-center align-middle text-primary mb-4">
          Better IT Solutions & Services at <br /> your Fingertips
        </h1>

        <a href="/contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <IndButton variant="outline" className="font-semibold !leading-6 !text-lg ">
              Let's talk
            </IndButton>
          </motion.div>
        </a>
      </div>
    </section>
    </div>
  
  );
}
