import Image from "next/image";
import Icons from "@/components/ui/Icon";
import Link from "next/link";
import dayjs from "dayjs";
export default function HomeBlogCardsd({ blog }) {
  return (
    <div
      key={blog.id || blog._id}
      className="relative rounded-xl h-[475px]"
    >
      <div className="flex flex-col justify-between h-full">
        {blog.featuredImage?.url ? (
          <Image
            src={blog.featuredImage.url}
            alt={blog.title || "Blog Image"}
            width={502}
            height={277}
            className="w-full h-64 rounded-xl object-fill"
          />
        ) : null}
        <div className="flex items-center justify-between text-primary py-5">
          <p className=" font-jost font-medium text-sm leading-[120%] bg-orange-300 py-1 px-2 text-black rounded-sm">
            {dayjs(blog.publishedAt).format("DD MMM YYYY")}
          </p>
        </div>
        <div className=" pb-2.5 flex justify-between flex-col h-[180px] relative">
          <div>
            <h4 className="text-gray-600 font-montserrat font-semibold text-xl line-clamp-2 flex justify-between">
              {blog.title}  <Link href={`/blog/${blog.slug}`}>
                <Icons name="BlogArrow" />
              </Link>
            </h4>
            <p className="font-montserrat font-medium text-lg leading-[32px] tracking-normal mt-1 line-clamp-4">
              {blog.excerpt}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
