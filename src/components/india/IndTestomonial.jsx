"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Icons from "@/components/ui/Icon";
import IndMidHeader from "./IndMidHeader";

const reviews = [
  {
    id: 1,
    text: "Their SEO work took us from barely showing up in searches to ranking on the first page for important keywords. They clearly know the healthcare space inside and out.",
    name: "Ethan Roberts",
    role: "Entrepreneur",
    img: "/assist/img/ethan.jpg",
  },
  {
    id: 2,
    text: "From a new logo to a refreshed social media strategy, they completely elevated our brand. Customer engagement is way up, and foot traffic to our store has been better than ever.",
    name: "Jessica Collins",
    role: "Manager",
    img: "/assist/img/jessica.jpg",
  },
  {
    id: 3,
    text: "They brought our vision to life with modern design and a smart strategy that really connects with our clients. We constantly get compliments on our new website and branding.",
    name: "Marcus Lee",
    role: "Founder StartTech",
    img: "/assist/img/Marcus.jpg",
  },
  {
    id: 4,
    text: "They helped us run ads that finally brought in the right customers. Within weeks, we saw more calls and new projects coming through.",
    name: "Sarah Mitchell",
    role: "Entrepreneur",
    img: "/assist/img/sarah.jpg",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const IndTestomonial = () => {
  return (
    <div className="xl:mt-20 mt-10 max-w-7xl mx-auto xl:pb-20 pb-0 font-montserrat">
      <IndMidHeader
        title="Client Testimonials"
        subtitle="What are they talking about?"
        desc=""
      />
      
      <motion.div
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-6 gap-3 mt-12 justify-items-center px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={cardVariants}
            className="w-full [perspective:1000px] group"
          >
            <div className="relative w-full h-104 transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              <div className="absolute inset-0 bg-[#fffbfb] py-10 px-6 rounded-2xl border border-[#F5F5F5] [backface-visibility:hidden] shadow-md">
                <Icons name="Quote" />
                <p className="text-lg font-medium mt-6">{review.text}</p>
                <div className="flex gap-6 absolute bottom-5 left-6">
                  <Image
                    src={review.img}
                    alt="Review"
                    width={55}
                    height={55}
                    className="rounded-full w-24 h-24 object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-2xl text-gray-400 font-semibold">
                      {review.name}
                    </h4>
                    <p className="text-lg text-gray-200 font-medium">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg">
                <Image
                  src={review.img}
                  alt={review.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IndTestomonial;
