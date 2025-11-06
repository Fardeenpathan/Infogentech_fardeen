"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import MidHeader from "./MidHeader";
import Icons from "./ui/Icon";
import HomeBlogCardsd from "./HomeBlogCardsd";
import { addCountryFilters, getRouteType } from "@/utils/countryUtils";
import axios from "axios";
export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get country code from Redux store and pathname for country-specific filtering
  const countryCode = useSelector((state) => state.countryCode.value);
  const pathname = usePathname();

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setLoading(true);

        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/`;
        const params = new URLSearchParams();
        params.append("page", "1");
        params.append("limit", "3");

        if (countryCode && pathname) {
          const routeType = getRouteType(pathname);
          addCountryFilters(params, countryCode, routeType);
        }

        url += "?" + params.toString();

        const response = await axios.get(url);
        if (response.data.success && response.data.data) {
          setBlogs(response.data.data);
          console.log("Fetched blogs:", response.data.data);
          }
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, [countryCode, pathname]);
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
        <Icons name="Arrow" height={14} width={31} />
      </a>
    </div>
  );
}
