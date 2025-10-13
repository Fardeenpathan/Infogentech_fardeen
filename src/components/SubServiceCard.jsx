import React from 'react';
import { motion } from 'framer-motion';
import Icons from "@/components/ui/Icon";

// Container hover will both scale up slightly and perform a quick horizontal shake
const shakeX = [-0, -8, 8, -6, 6, -3, 3, 0];
const duration = 0.6; // seconds

const containerVariants = {
  rest: { scale: 1, x: 0 },
  hover: {
    scale: 1.02,
    x: shakeX,
    transition: {
      x: { duration, ease: 'easeInOut' },
      scale: { type: 'spring', stiffness: 300, damping: 20 }
    }
  }
};

const arrowVariants = {
  rest: { x: 0, rotate: 0 },
  hover: {
    x: 8,
    rotate: 180,
    transition: {
      x: { type: 'spring', stiffness: 350, damping: 20 },
      rotate: { duration: 0.5, ease: 'easeInOut' }
    }
  }
};

const SubServiceCard = ({ subService }) => {
  return (
    <motion.div
      className="shadow-[0px_0px_54px_24px_#1C1C38] p-5 rounded-2xl relative min-h-80"
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ willChange: 'transform' }}
      layout
    >
      <span className="font-jost font-normal text-[32px] leading-[100%] tracking-[3%] opacity-10">
        {subService.id}
      </span>

      <h2 className="font-jost font-medium text-[32px] leading-[120%] tracking-[0.03em] mt-8">
        {subService.title}
      </h2>

      <p className="font-jost font-normal text-[16px] leading-[140%] tracking-[0.03em] capitalize mt-8 opacity-30 font-kumbh-sans">
        {subService.desc}
      </p>

      <a
        className="flex justify-end absolute right-5 bottom-[10px]"
        href="/contact"
        aria-label={`Contact about ${subService.title}`}
      >
        <motion.span
          variants={arrowVariants}
          initial="rest"
          animate="rest"
          whileHover="hover"
          aria-hidden
          style={{ display: 'inline-block' }}
        >
          <Icons name="ArrowPortfolioLeft" width={40} height={20} />
        </motion.span>
      </a>
    </motion.div>
  );
};

export default SubServiceCard;