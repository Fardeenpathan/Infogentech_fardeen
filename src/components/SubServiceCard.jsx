import React from 'react';
import { motion } from 'framer-motion';
import Icons from "@/components/ui/Icon";
const shakeX = [-0, -8, 8, -6, 6, -3, 3, 0];
const duration = 0.6;

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
      className="md:shadow-[0px_0px_54px_24px_#1C1C38] shadow-[0px_0px_34px_4px_#1C1C38] p-5 rounded-2xl relative md:min-h-80 min-h-50"
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ willChange: 'transform' }}
      layout
    >
      <span className="font-jost font-normal md:text-[32px] text-base leading-[100%] tracking-[3%] opacity-10">
        {subService.id}
      </span>

      <h2 className="font-jost font-medium md:text-[32px] text-base leading-[120%] tracking-[0.03em] md:mt-8 mt-2.5">
        {subService.title}
      </h2>

      <p className="font-jost font-normal md:text-base text-sm leading-[140%] tracking-[0.03em] capitalize md:mt-8 mt-2 opacity-30 font-kumbh-sans">
        {subService.desc}
      </p>

      <a
        className="flex justify-end absolute right-5 bottom-[10px]"
        href="/us/contact"
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
          <Icons name="ArrowPortfolioLeft" />
          <Icons name="SmallArrowPortfolioLeft" />
        </motion.span>
      </a>
    </motion.div>
  );
};

export default SubServiceCard;