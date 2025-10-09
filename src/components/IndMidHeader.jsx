"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IndMidHeader({ title, subtitle, className }) {
    return (
        <motion.div
            className={`flex justify-center items-center flex-col gap-4 ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.p
                className="font-avalors font-normal text-[32px] leading-6 align-middle text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {title}
            </motion.p>

            <motion.p
                className="font-avalors font-normal text-[46px] leading-12 align-middle capitalize"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {subtitle}
            </motion.p>
        </motion.div>
    );
}
