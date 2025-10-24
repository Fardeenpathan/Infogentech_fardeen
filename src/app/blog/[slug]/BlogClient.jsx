
import Image from "next/image";
import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import IndSideLinks from "@/components/india/IndSideLinks";
import IndSharePost from "@/components/india/IndSharePost";
import IndBlogDetails from "@/components/india/IndBlogDetails";
import IndFaqsBlog from "@/components/india/IndFaqsBlog";
import dayjs from "dayjs";
export default function BlogClient({ blog }) {
  return (
    <>
      <div className="relative w-full py-38 flex items-center justify-start px-4 overflow-hidden">
        <Image
          src="/assist/IndImg/blogBg.jpg"
          alt="Blog"
          width={1200}
          height={660}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#d4d1f4] opacity-95 -z-10" />
        <Image
          src="/assist/IndImg/blogdym.png"
          alt="Blog"
          width={1200}
          height={660}
          className="absolute top-50% -right-30 w-80 h-125 object-cover -z-10 -rotate-12 opacity-20"
        />
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row lg:items-center items-start justify-between">
          <div className="w-full lg:items-center items-start md:text-left space-y-4">
            <div className="lg:mb-20 mb-10">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-[#252525] hover:text-gray-400  font-montserrat"
              >
                <ArrowLeft size={20} />
                Back to Blogs
              </Link>
            </div>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl">
              {dayjs(blog.createdAt).format("DD MMMM YYYY")}
            </p>
            <h1 className="text-gray-400 text-3xl  md:text-[46px] font-bold leading-[1.2] font-avalors tracking-wider lg:mr-150">
              {blog.title}
            </h1>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl lg:mt-15 mt-4">
            {blog.excerpt}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between container mx-auto md:gap-10 gap-4 relative lg:-top-24 -top-36 px-4">
        <div>
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              width={1400}
              height={460}
              className="w-full lg:h-180 h-84 object-cover -z-10 rounded-3xl px-4"
            />
          )}
          <div
            className="md:mt-18 mt-4 font-montserrat text-xl leading-[30px]  w-full px-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <IndSharePost />
          <IndFaqsBlog blog={blog} />
        </div>
        <div className="min-w-112 flex flex-col gap-y-20 lg:block hidden ">
          <IndBlogDetails data={blog} />
          <IndSideLinks data={blog}/>
        </div>
      </div>
    </>
  );
}
