"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import HomeBlogCardsd from "@/components/HomeBlogCardsd";
import SubscribeContact from "@/components/SubscribeContact";
import Icons from "@/components/ui/Icon";
import Loader from "@/components/loader/Loader";
import { useBlogsPagination } from "@/hooks/useBlogsPagination";
import BlogPagination from "@/components/BlogPagination";
import dayjs from "dayjs";
const Blogs = () => {
   const [categories, setCategories] = useState([{ name: "All", slug: "all" }]);
  const {
    activeCategory,
    blogs,
    loading,
    recentBlog,
    searchTerm,
    currentPage,
    pagination,
    totalBlogs,
    setSearchTerm,
    setCurrentPage,
    fetchBlogs,
    handleCategoryChange,
    handleSearch
  } = useBlogsPagination(categories, 12);

   useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
        );
        if (response.ok) {
          const data = await response.json();
          const dynamicCategories = [
            { name: "All", slug: "all" },
            ...data.data.map((cat) => ({ name: cat.name, slug: cat.slug })),
          ];
          setCategories(dynamicCategories);
          
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      fetchBlogs();
    }
  }, [activeCategory, categories, currentPage, searchTerm, fetchBlogs]); 
  return (
    <div className="flex justify-between">
      <div className="absolute overflow-hidden -top-20">
        <Icons name="BlogBlurLeft" />
      </div>
      <div className="absolute overflow-hidden right-0 -top-20">
        <Icons name="BlogBlurRight" />
      </div>
      <div className="container mx-auto mt-24">
        <div className="flex justify-center items-center flex-col ">
          <p className="font-avalors font-normal lg:text-[75px] text-3xl leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
            Insights & Innovation
          </p>
          <p className="font-jost lg:text-lg text-sm font-medium leading-6 text-center mt-6">
            Check out our latest ideas, tech trends, and success stories where
            smart planning meets real results and creative ideas make an impact.
          </p>
          <div className="flex max-w-2xl lg:h-[74px] h-11 items-center border border-gray-600 rounded-[10px] overflow-hidden bg-transparent p-1 mt-11">
            <input
              type="text"
              placeholder="Search article"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              className="flex-1 h-full text-white placeholder-gray-600 bg-transparent focus:outline-none  pl-2 lg:pl-8 lg:py-6 py-2 font-jost text-xl leading-[100%] tracking-[0.03em]"
            />
            <Button 
              text="Search" 
              className="!text-black" 
              onClick={handleSearch}
            />
          </div>
          <div className="w-0.5 h-28 rounded-full mb-10 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
          <div className="relative w-12 h-12">
            <img
              src="/assist/video/pentagonVideo.gif"
              alt="valueImg"
              className="w-full h-full object-cover"
            />
          </div>
         <div className="relative mt-8 w-full max-w-[1200px] rounded-2xl shadow-lg px-4 mx-auto ">
  {recentBlog && recentBlog.featuredImage.url ? (
    <Image
      src={recentBlog.featuredImage.url}
      alt="Article Thumbnail"
      width={1200}
      height={660}
      className="lg:h-108 h-52 object-cover rounded-xl w-full"
    />
  ) : null}

  {recentBlog && (
<div className="absolute lg:-bottom-16 -bottom-30 left-1/2 transform -translate-x-1/2 bg-[#15152A] p-6 text-white rounded-4xl max-w-5xl w-[calc(100%-2rem)]">
  <div className="flex items-center gap-4 mb-3">
    <span className="border border-white rounded-md px-4 py-1 text-sm font-jost">
      Popular
    </span>
    <span className="text-sm text-primary font-jost">
      {dayjs(recentBlog.formatDate).format("DD MMM YYYY")}
    </span>
  </div>

  <h3 className="lg:text-2xl text-lg font-semibold mb-2 font-jost">
    {recentBlog.title}
  </h3>
  <p className="text-gray-300 lg:text-base text-sm leading-relaxed font-kumbh-sans line-clamp-2">
    {recentBlog.excerpt}
    <a href={`/us/blog/${recentBlog.slug}`} className="text-primary underline">
      Continue reading
    </a>
  </p>
</div>

  )}
</div>

        </div>
        <div className="mt-36 lg:px-10 px-4 ">
          <p className="text-primary font-avalors lg:text-[32px] text-2xl leading-6">
            Select Your Category
          </p>
          <div className="flex gap-16 text-[#C4C4C4] mt-13 font-kumbh-sans overflow-hidden">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(item.name || item)}
                className={`relative pb-1 transition-all duration-300 cursor-pointer text-nowarp ${
                  activeCategory === (item.name || item)
                    ? "text-primary opacity-100 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#8752FF] after:rounded-full "
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {item.name || item}
              </button>
            ))}
          </div>
          <div className="mt-12">
            {loading ? (
              <Loader/>
            ) : blogs.length > 0 ? (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:grid-cols-4 gap-12 xl:gap-8">
                {blogs.map((blog) => (
                  <HomeBlogCardsd key={blog.id || blog._id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-xl text-gray-400 mb-2">No blogs found</div>
                <div className="text-sm text-gray-500">
                  {activeCategory === "All" 
                    ? "No blogs available at the moment" 
                    : `No blogs found in "${activeCategory}" category`
                  }
                </div>
              </div>
            )}
            
            <BlogPagination 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pagination={pagination}
              totalBlogs={totalBlogs}
              limit={12}
            />
          </div>
          <div className="text-[#82828C] mt-24 border-2 container mx-auto px-10"></div>
          <SubscribeContact />
        </div>
      </div>
    </div>
  );
};

export default Blogs;   
