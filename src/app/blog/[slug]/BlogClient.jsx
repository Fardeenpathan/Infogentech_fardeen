
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
      <div className="relative w-full h-200 flex items-center justify-start">
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
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between -top-14">
          <div className="w-full text-center md:text-left space-y-4">
            <div className="mb-20">
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
            <h2 className="text-gray-400 text-3xl md:text-[46px] font-bold leading-[1.2] font-avalors tracking-wider mr-150">
              {blog.title}
            </h2>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl mt-15">
            {blog.excerpt}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between container mx-auto gap-20 relative -top-24">
        <div>
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              width={1400}
              height={460}
              className="w-full h-180 object-cover -z-10 rounded-3xl"
            />
          )}
          <div
            className="mt-18 font-montserrat text-[20px] leading-[30px]  w-full"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <IndSharePost />
          <IndFaqsBlog blog={blog} />
        </div>
        <div className="min-w-112 flex flex-col gap-y-20 lg:block hidden">
          <IndBlogDetails data={blog} />
          <IndSideLinks data={blog}/>
        </div>
      </div>
    </>
  );
}
