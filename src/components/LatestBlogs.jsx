
"use client";
import { useState, useEffect } from "react";
import MidHeader from "./MidHeader";
import Icons from "./ui/Icon";
import HomeBlogCardsd from "./HomeBlogCardsd";

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?page=1&limit=3`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            setBlogs(data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);
  return (
    <div className="py-8 lg:py-20 ">
      <MidHeader
        name="Latest Blogs"
        subheading="Explore Ideas, Trends, and Strategies Shaping Digital Success."
      />
      <a
        href="/us/blogs"
        className="gap-8 items-center justify-end mr-10 relative -top-10 hidden xl:flex"
      >
        <p className="font-jost font-semibold text-lg leading-[120%] capitalize ">
          See Our <br /> More Blogs
        </p>
        <Icons name="Arrow" width={62} height={28} />
      </a>
      <div className="relative flex flex-col items-center justify-center mt-5">
        {loading ? (
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
            {blogs.map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-700 h-48 rounded-xl mb-4"></div>
                <div className="bg-gray-700 h-4 rounded mb-2"></div>
                <div className="bg-gray-700 h-3 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
            {blogs.map((blog) => (
              <HomeBlogCardsd key={blog.id || blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
      <a
        href="/us/blogs"
        className="gap-8 items-center justify-end mr-2 relative -top-10  flex xl:hidden mt-14"
      >
        <p className="font-jost font-semibold  text-sm leading-[120%] capitalize ">
          See Our <br /> More Blogs
        </p>
        <Icons name="Arrow" height={14} width={31}/>
      </a>
    </div>
  );
}
