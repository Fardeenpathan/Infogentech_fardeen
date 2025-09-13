import Image from "next/image";
import Icons from "./ui/Icon";
import Link from "next/link";

export default function HomeBlogCardsd({ blog }) {
  return (
    <div
      key={blog.id}
      className="relative p-2.5 rounded-xl  h-[475px] bg-[#15152A] shadow-[0px_0px_54px_24px_#1C1C38]"
    >
      <div className="flex flex-col justify-between h-full">
          <Image
            src={blog.img}
            alt="Blogs"
            width={502}
            height={277}
            className="w-full h-auto"
            objectFit="cover rounded-xl"
          />
        <div className="px-2.5 pb-2.5 flex justify-between flex-col h-[180px] relative">
          <div>
            <p className="font-jost font-medium text-xl leading-[120%] mt-3">
              {blog.title}
            </p>
            <p className="font-kumbh-sans text-lg text-[#73737F] leading-[120%] mt-1 font-kumbh-sans">
              {blog.content}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[#8752FF] bottom-4 ">
              <p className="text-[#73737F] font-jost font-medium text-sm leading-[120%] ">
                {blog.date}
              </p>
              <Link href={`/blogs/${blog.slug}`}>
                <Icons name="Arrow" height={14} width={31} color="#8752FF" />
              </Link>
            </div>
      </div>
    </div>
  );
}
