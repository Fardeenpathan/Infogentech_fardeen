"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IndTopicHeader({ title, subtitle, description, className }) {
    return (
        <div className={`flex justify-between gap-8 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.p
                    className="font-avalors font-normal text-[32px] leading-6 align-middle text-primary"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.p>

                <motion.p
                    className="font-avalors font-normal text-[46px] leading-12 align-middle capitalize mt-4.5 max-w-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {subtitle}
                </motion.p>
            </motion.div>
            <motion.p
                className="font-montserrat font-medium text-lg leading-[150%] tracking-[-0.02em] max-w-2xl py-4"
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
