"use client";
import { motion } from "framer-motion";

export default function IndHeroSectionContent() {
  return (
    <div className="max-w-6xl xl:leading-[160%] leading-[110%] tracking-[3px] mx-auto text-white px-4">
      
      <motion.div
        className="xl:text-[80px] text-3xl font-avalors "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>CREATING</span>
        <span className="bg-primary xl:px-12 rounded-full xl:ml-10 ml-4 font-avalors px-4 py-4">BRANDS</span>
      </motion.div>
      <motion.div
        className="xl:text-[80px] text-3xl xl:mt-20 mt-4 flex xl:justify-center xl:items-center flex-col xl:flex-row justify-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-avalors">AND DIGITAL</h1>
        <p className="text-lg ml-10">
          We build strong brand identities and deliver<br /> 
          digital solutions that blend creativity and <br />
          technology to help businesses grow and engage.
        </p>
      </motion.div>

      <motion.div
        className="mt-20 relative items-center xl:text-[80px] text-3xl font-avalors"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="bg-primary xl:px-12 px-4 py-4 rounded-full xl:ml-60 font-avalors ml-0">
          Solutions
        </span>

        <span className="absolute sm:w-40  sm:h-40 w-30 h-30 flex items-center justify-center ml-8 xl:right-20 2xl:-top-10 -top-12 right-0">

          <a href="/contact" className="sm:w-16 w-12 sm:h-16 h-12 bg-primary rounded-full flex items-center justify-center z-10">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" />
            </svg>
          </a>
          <div className="absolute w-full h-full flex items-center justify-center">
           
            <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
               
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                  fill="none"
                />
              </defs>
              
              <text className="fill-white">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                  className="text-lg font-jost tracking-[0.2rem]"
                >
                  LEADING DIGITAL COMPANY SINCE 2022 * 
                </textPath>
              </text>
            </svg>
          </div>
        </span>
      </motion.div>
    </div>
  );
}



