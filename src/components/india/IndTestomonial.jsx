"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Icons from "@/components/ui/Icon";
import IndMidHeader from "./IndMidHeader";

const reviews = [
  {
    id: 1,
    text: "I hired Infogentech for SEO services, and they really improved my website’s ranking. My traffic has increased, and I’m seeing real results.",
    name: "Vipin Roy",
    role: "Entrepreneur",
    img: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761126237/blog-app/blogs/blogs/1761126235663-content-confident-young-man-leaning-railing-modern-office.jpg",
    
  },
  {
    id: 2,
    text: "I highly recommend Infogentech for PPC services. They optimized my campaigns perfectly, and my sales inquiries have increased.",
    name: "Gautam Singh",
    role: "Manager",
    img: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761126289/blog-app/blogs/blogs/1761126287051-successful-businessman.jpg",
   
  },
  {
    id: 3,
    text: "Infogenetch built my Shopify eCommerce store with amazing design, smooth functionality, and quick delivery. Great communication and excellent post-launch support.",
    name: "Neha Gupta",
    role: "Founder StartTech",
     img: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761126387/blog-app/blogs/blogs/1761126384911-indian-woman-posing-cute-stylish-outfit-camera-smiling.jpg",
  },
  {
    id: 4,
    text: "Their digital marketing services are excellent. Infogentech helped my brand reach the right audience and grow online. ",
    name: "Kriti Sharma",
    role: "Entrepreneur",
    img: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761126328/blog-app/blogs/blogs/1761126326558-writing-dairy-note-coffee-shop-concept-as-memory-life-woman-coffee-shop-smiling-woman-making-notes-notepad.jpg",
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
                    className="rounded-full w-24 h-24 md:w-14 md:h-14 object-cover shrink-0"
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
