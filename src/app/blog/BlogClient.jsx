"use client";
import IndButton from "@/components/india/ui/IndButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import IndBlogCard from "@/components/india/IndBlogCard";
import Link from "next/link";
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
    setCurrentPage,
    fetchBlogs,
    handleCategoryChange,
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
        const fallbackCategories = category.map((cat) => ({
          name: cat,
          slug: cat.toLowerCase().replace(/\s+/g, "-"),
        }));
        setCategories(fallbackCategories);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      fetchBlogs();
    }
  }, [activeCategory, categories, currentPage, fetchBlogs]);

  if (categories.length == 0) {
    return <Loader />;
  } else {
    return (
      <div>
        <div className="relative w-full py-32 flex items-center justify-start">
          <Image
            src="/assist/IndImg/blogBg.jpg"
            alt="Blog"
            width={1200}
            height={660}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#d4d2f5] opacity-95 -z-10" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full rounded-xl overflow-hidden">
              {recentBlog && recentBlog.featuredImage.url ? (
                <Image
                  src={recentBlog.featuredImage.url}
                  alt="Article Thumbnail"
                  width={600}
                  height={400}
                  className="lg:w-170 lg:h-108  h-52 object-fill rounded-xl"
                />
              ) : null}
            </div>
            {recentBlog && (
              <div className="w-full text-left lg:space-y-4 mt-4 space-x-2">
                <p className="text-gray-600 font-montserrat font-semibold lg:text-2xl text-lg ">
                  {dayjs(recentBlog.formatDate).format("DD MMM YYYY")}
                </p>
                <h1 className="text-gray-400 text-2xl md:text-[46px] font-bold leading-[1.2] font-avalors tracking-wider">
                  {recentBlog.title}
                </h1>
                <h3 className="text-gray-600 font-montserrat font-semibold text-2xl">
                  {recentBlog.excerpt}
                </h3>
                <Link href={`/blog/${recentBlog.slug}`}>
                  <IndButton
                    variant="outline"
                    className="!border-[#d4d2f5] mt-4"
                  >
                    Read This Article
                  </IndButton>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 container mx-auto px-4">
          <h4 className="text-gray-600 font-montserrat font-semibold text-xl md:text-2xl max-w-2xl">
            Stay updated with the latest tech insights, client success stories,
            and opportunities from our community and IT industry network.
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 items-center min-w-7 md:min-w-fit px-4">
            <select
              value={activeCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full sm:w-fit border cursor-pointer rounded-sm px-4 py-2 font-medium text-sm font-montserrat border-b border-gray-300 bg-transparent  focus:outline-none focus:border-primary"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat.name || cat} className="border-b border-gray-300 bg-transparent">
                  {cat.name || cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="container mx-auto pb-10">
          <div className="flex justify-center items-center flex-col"></div>
          <div className="lg:mt-20 mt-10 mx-4">
            <p className="text-gray-600 font-montserrat font-semibold text-xl border-l-4 border-[#7544E4] p-4">
              Must Read Articles:
            </p>
            <div className="mt-12">
              {loading ? (
                <Loader />
              ) : blogs.length > 0 ? (
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:grid-cols-4 gap-12 xl:gap-8 px-4 md:px-0">
                  {blogs.map((blog) => (
                    <IndBlogCard key={blog.id || blog._id} blog={blog} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-xl text-gray-400 mb-2">
                    No blogs found
                  </div>
                  <div className="text-sm text-gray-500">
                    {activeCategory === "All"
                      ? "No blogs available at the moment"
                      : `No blogs found in "${activeCategory}" category`}
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
          </div>
        </div>
      </div>
    );
  }
};

export default Blogs;
