import Image from "next/image";
import Icons from "./ui/Icon";
import Link from "next/link";

export default function HomeBlogCardsd({ blog }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getImageUrl = () => {
    if (blog.featuredImage && blog.featuredImage.url) {
      return blog.featuredImage.url;
    }
    if (blog.img) {
      return blog.img;
    }
    if (blog.image) {
      return blog.image;
    }
    return "/assist/img/blogs.png"; 
  };

  const getContent = () => {
    if (blog.excerpt) {
      return blog.excerpt.length > 100 ? blog.excerpt.substring(0, 100) + '...' : blog.excerpt;
    }
    if (blog.content) {
      return blog.content.length > 100 ? blog.content.substring(0, 100) + '...' : blog.content;
    }
    return '';
  };

  return (
    <div
      key={blog.id || blog._id}
      className="relative p-2.5 rounded-xl h-[475px] bg-[#15152A] shadow-[0px_0px_54px_24px_#1C1C38]"
    >
      <div className="flex flex-col justify-between h-full">
        <Image
          src={getImageUrl()}
          alt={blog.title || "Blog Image"}
          width={502}
          height={277}
          className="w-full h-64 rounded-xl object-cover"
        />
        <div className="px-2.5 pb-2.5 flex justify-between flex-col h-[180px] relative">
          <div>
            <p className="font-jost font-medium text-xl leading-[120%] mt-3 text-white line-clamp-2">
              {blog.title}
            </p>
            <p className="font-kumbh-sans text-lg text-[#73737F] leading-[120%] mt-1 line-clamp-5">
              {getContent()}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between text-primary bottom-4">
          <p className="text-[#73737F] font-jost font-medium text-sm leading-[120%]">
            {formatDate(blog.publishedAt || blog.createdAt || blog.date)}
          </p>
          <Link href={`/blog/${blog.slug}`}>
            <Icons name="Arrow" height={14} width={31} color="#8752FF" />
          </Link>
        </div>
      </div>
    </div>
  );
}
