"use client";
import Image from "next/image";
import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import IndSideLinks from "@/components/india/IndSideLinks";
import IndSharePost from "@/components/india/IndSharePost";
import IndBlogDetails from "@/components/india/IndBlogDetails";
import IndFaqsBlog from "@/components/india/IndFaqsBlog";
import { serviceContent } from "../contentServices";
import { useParams } from "next/navigation";
const ServiceShow = () => {
  const params = useParams();
  const service = serviceContent.find((item) => item.slug === params.slug);
  return (
    <>
      <section className="pb-10">
        <div className="w-full bg-[#E6DBFF] lg:h-158 h-100 justify-center items-center flex flex-col">
          <h1 className="font-avalors font-normal lg:text-[80px] md:text-[46px] text-2xl leading-[1.6] tracking-[3px] align-middle text-primary uppercase">
            services Details
          </h1>
          <p className="font-montserrat lg:text-lg text-sm max-w-4xl mx-auto text-center text-gray-600 font-medium px-2">
            Smart IT solutions that optimize operations, strengthen security,
            and drive business growth.
          </p>
        </div>
      </section>

      <div className="flex justify-between container mx-auto md:gap-10 gap-4 relative lg:-top-24 -top-36 px-4">
        <div>
          {service.image && (
            <Image
              src={service.image}
              alt={service.title}
              width={1400}
              height={460}
              className="w-full lg:h-140 h-84 object-fill -z-10 rounded-3xl"
            />
          )}
          <div
            className="md:mt-18 mt-4 font-montserrat text-xl leading-[30px]  w-full px-2"

          />
          <IndSharePost />
          {/* <IndFaqsBlog blog={blog} /> */}
        </div>
        <div className="min-w-112 flex flex-col gap-y-20 lg:block hidden">
          {/* <IndBlogDetails data={blog} />
          <IndSideLinks data={blog} /> */}
        </div>
      </div>
    </>
  );
};
export default ServiceShow;