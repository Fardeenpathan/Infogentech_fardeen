"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const IndAboutImage =()=>{
    return (
         <motion.div
        className="flex lg:gap-5 gap-2 relative lg:-top-55 container mx-auto items-center justify-center px-4 -top-20"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assist/IndImg/homePage/service1.jpg"
            alt="service"
            width={315}
            height={382}
            className="object-cover rounded-2xl lg:h-96 h-45"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assist/IndImg/homePage/service2.jpg"
            alt="service"
            width={361}
            height={267}
            className="object-cover rounded-2xl lg:h-64 -32"
          />
        </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assist/IndImg/homePage/service1.jpg"
            alt="service"
            width={315}
            height={400}
            className="object-cover rounded-2xl lg:h-96 h-45"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assist/IndImg/homePage/service2.jpg"
            alt="service"
            width={361}
            height={267}
            className="object-cover rounded-2xl h-64 lg:block hidden"
          />
        </motion.div>
      </motion.div>
    )
}

export default IndAboutImage;