"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IndTopicHeader({
  title,
  subtitle,
  description,
  className,
  subClass = "max-w-2xl",
}) {
  return (
    <div
      className={`flex justify-between flex-col lg:flex-row xl:gap-8 gap-2 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="font-avalors font-normal xl:text-[32px] sm:text-2xl text-lg xl:leading-6 align-middle text-primary "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        <motion.h2
          className={`font-avalors font-normal xl:text-[46px] text-2xl sm:text-3xl xl:leading-12 align-middle capitalize xl:mt-4.5 mt-0 ${subClass}`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.h2>
      </motion.div>
      <motion.p
        className="font-montserrat font-medium xl:text-lg text-sm xl:leading-[150%] tracking-[-0.02em] max-w-2xl py-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  );
}
