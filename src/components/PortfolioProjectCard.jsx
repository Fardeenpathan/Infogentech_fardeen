"use client"
import Image from "next/image";
import Link from "next/link";
import Icons from "@/components/ui/Icon";
import { motion } from "framer-motion";

const PortfolioProjectCard = ({ project, index , route }) => {
  return (
    <motion.div
      key={project.id}
      className="p-2.5 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-[774px]">
        <div className="w-full max-w-[774px] h-70 md:h-110 lg:h-120">
          <Image
            src={project.subImage}
            alt={project.title}
            width={774}
            height={380}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="px-2.5 pb-2.5 flex justify-between flex-col">
          <div className="flex items-center justify-between mt-4">
            <p className="font-montserrat lg:text-2xl md:text-xl text-sm font-normal leading-7 tracking-normal">
              {project.title}
            </p>
            <Link
              href={`/portfolio/${route}/${project.slug}`}
              className="hidden lg:block"
            >
              <Icons
                name="Arrow"
                height={26}
                width={59}
                color="#141313"
              />
            </Link>
            <Link
              href={`/portfolio/${route}/${project.slug}`}
              className="block lg:hidden"
            >
              <Icons
                name="Arrow"
                height={14}
                width={26}
                color="#141313"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectCard;
