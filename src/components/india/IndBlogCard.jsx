import Image from "next/image";
import Icons from "@/components/ui/Icon";
import Link from "next/link";
import dayjs from "dayjs";
export default function HomeBlogCardsd({ blog }) {
  return (
    <div
      key={blog.id || blog._id}
      className="relative rounded-xl "
    >
      <div className="flex flex-col justify-between h-full">
        {blog.featuredImage?.url ? (
          <Image
            src={blog.featuredImage.url}
            alt={blog.title || "Blog Image"}
            width={502}
            height={277}
            className="w-full h-70 rounded-xl object-fit"
          />
        ) : null}
        <div className="flex items-center justify-between text-primary py-5">
          <p className=" font-jost font-medium md:text-sm text-xs leading-[120%] bg-orange-300 py-1 px-2 text-black rounded-sm">
            {dayjs(blog.publishedAt).format("DD MMM YYYY")}
          </p>
        </div>
        <div className="md:pb-2.5 flex justify-between flex-col md:h-44 h-32 relative">
          <div>
            <h4 className="text-gray-600 font-montserrat font-semibold md:text-2xl text-base line-clamp-2 flex justify-between">
              {blog.title}  <Link href={`/blog/${blog.slug}`}>
                <Icons name="BlogArrow" />
              </Link>
            </h4>
            <p className="font-montserrat font-medium md:text-lg md:leading-8 leading-5 text-sm tracking-normal mt-1 line-clamp-4">
              {blog.excerpt}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
