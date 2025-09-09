import Image from "next/image";
import Icons from "./ui/Icon";
import Link from "next/link";

export default function HomeBlogCardsd({ blog }) {
  return (
    <div
      key={blog.id}
      className="p-2.5 rounded-xl w-[522px] h-[475px] bg-[#15152A] shadow-[0px_0px_54px_24px_#1C1C38]"
    >
      <div>
        <Image
          src={blog.img}
          alt="Blogs"
          width={502}
          height={277}
          objectFit="cover rounded-xl"
        />
        <div className="px-2.5 pb-2.5 flex justify-between flex-col h-[180px]">
          <div>
            <p className="font-[jost] font-medium text-xl leading-[120%] mt-3">
              {blog.title}
            </p>
            <p className="font-[kumbh] text-[18px] text-[#73737F] leading-[120%] mt-1 font-kumbh-sans">
              {blog.content}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4 text-[#8752FF]">
            <p className="text-[#73737F] font-[jost] font-medium text-sm leading-[120%] ">
              {blog.date}
            </p>
            <Link href={`/blogs/${blog.slug}`}>
              <Icons
                name="Arrow"
                height={14}
                width={31}
                color="#8752FF"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
