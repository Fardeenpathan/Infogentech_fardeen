"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IndMidHeader({ title, subtitle, className , description=""}) {
    return (
        <motion.div
            className={`flex justify-center items-center flex-col gap-4  ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.h2
                className="font-avalors font-normal xl:text-[32px] sm:text-2xl text-lg xl:leading-6 align-middle text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>

            <motion.h3
                className="font-avalors font-normal xl:text-[46px] text-2xl sm:text-3xl xl:leading-12 align-middle capitalize text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {subtitle}
            </motion.h3>
         <motion.p
                        className="font-montserrat font-medium xl:text-lg text-[14px] leading-[150%] tracking-[-0.02em]  py-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {description}
                    </motion.p>
        </motion.div>
    );
}
