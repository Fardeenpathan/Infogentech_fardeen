'use client';

import { motion } from 'framer-motion';
import StatsItem from '@/components/stats-item';
import SubscribeContact from '@/components/SubscribeContact';
import FocusPart from '@/components/FocusPart';
import Icons from '@/components/ui/Icon';
import MissionAbout from '@/components/MissionAbout';
import MidHeader from '@/components/MidHeader';

const stats = [
  { value: '250', suffix: '+', label: 'Projects Delivered' },
  { value: '7', suffix: '+', label: 'Years of Experience' },
  { value: '25', suffix: '+', label: 'Professional Teams' },
  { value: '80', suffix: '%', label: 'Active Client' },
];

const About = () => {
  return (
    <>
      {/* Header Section with Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-85 md:mt-30 mt-4 md:bg-[url('/assist/img/aboutBg.png')] bg-[url('/assist/img/subAbout.png')] container mx-auto relative md:px-10 px-4 bg-no-repeat"
      >
        <div className="flex xl:gap-10 gap-4 absolute top-2 px-4">
          <div className="flex items-center mb-40 flex-col shrink-0">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-12 h-12"
            >
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="w-0.5 h-[300px] xl:h-[400px] rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </div>
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-avalors font-normal xl:text-[75px] md:text-6xl text-5xl leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_-19.98%,_#6A27FF_70.29%)] bg-clip-text text-transparent"
            >
              About Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-jost font-medium lg:text-[26px] md:text-lg text-sm leading-[150%] align-middle mt-4 text-[#C9C9C9]"
            >
              At Infogentech, our story began with a simple goal: helping
              businesses get noticed online. We saw how, in today’s world,
              people search for everything on the internet and if a company
              isn’t easy to find, it’s almost invisible to potential customers.
              A trusted team devoted to web development and digital marketing
              was built in the USA. We create ingenious websites, optimize SEO
              to boost your search rankings, and run targeted online ads that
              help your business stand out in a crowded market. We back our work
              with friendly support, professional guidance, and a money-back
              guarantee—because your success is what drives us every day.
            </motion.p>

            <div className="xl:grid grid-cols-2 md:grid-cols-4 gap-4 font-jost md:divide-x divide-gray-200 justify-between mt-10 hidden">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <StatsItem
                    value={item.value}
                    suffix={item.suffix}
                    label={item.label}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-jost md:divide-x divide-gray-200 justify-between mt-20 xl:mt-0 md:ml-10 md:mt-30 xl:hidden sm:mt-10">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <StatsItem
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="xl:mt-60 md:mt-20 mt-10 container mx-auto relative md:px-10 px-4 mb-10 md:mb:0"
      >
        <MissionAbout />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <MidHeader
          name="Quality-driven digital solutions"
          subheading="We move quickly and adapt to keep you ahead."
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center flex-col items-center gap-8 lg:gap-32"
      >
        <FocusPart />
        <Icons name="LinesAbout" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <SubscribeContact />
      </motion.div>
    </>
  );
};

export default About;
