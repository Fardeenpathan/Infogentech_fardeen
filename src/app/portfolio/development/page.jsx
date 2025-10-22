"use client"
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import Link from "next/link";
import developmentProjects from "./developmentProjects";
import IndCustomLine from "@/components/india/IndCustomLine";
import { motion } from "framer-motion";

const DigitalMarketing = () => {
  return (
    <>
      <IndServicesHeader />
      <IndProtfolioAll activeService="development" />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          {developmentProjects?.map((project, index) => (
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
                      href={`/portfolio/development/${project.slug}`}
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
                      href={`/portfolio/development/${project.slug}`}
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
          ))}
        </div>
        <IndCustomLine />
      </div>
    </>
  );
};

export default DigitalMarketing;
