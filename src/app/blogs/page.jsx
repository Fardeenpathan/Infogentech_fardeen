"use client";
import IndButton from "@/components/india/ui/IndButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import IndBlogCard from "@/components/india/IndBlogCard";
import SubscribeContact from "@/components/SubscribeContact";
import Icons from "@/components/ui/Icon";
import Loader from "@/components/loader/Loader";
import { useBlogsPagination } from "@/hooks/useBlogsPagination";
import BlogPagination from "@/components/BlogPagination";
const blogData = [
  {
    id: 1,
    title: "Madhya Pradesh Partners with Submer for AI‑Ready Data Centres",
    content:
      "What happens when a middle school friendship, a shared love for music, and a global pandemic come together? In...",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
    slug: "madhya-pradesh-partners-with-submer-for-ai-ready-data-centres",
  },
  {
    id: 2,
    title: "Centre of Excellence for Emerging Tech at DAVV, Indore.",
    content:
      "DAVV University me AI aur emerging tech ka Centre of Excellence banega, jisme students aur teachers dono ko upskill kiya jayega.",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
    slug: "centre-of-excellence-for-emerging-tech-at-davv-indore",
  },
  {
    id: 3,
    title: "AI Summit in Vizag This Month",
    content:
      "Vizag me 25–26 July ko Fusion AI Summit hoga, jahan startups, experts aur govt milke AI future pe baat karenge.",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
    slug: "ai-summit-in-vizag-this-month",
  },
  {
    id: 4,
    title: "Madhya Pradesh Partners with Submer for AI‑Ready Data Centres",
    content:
      "What happens when a middle school friendship, a shared love for music, and a global pandemic come together? In...",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
    slug: "madhya-pradesh-partners-with-submer-for-ai-ready-data-centres-2",
  },
  {
    id: 5,
    title: "Centre of Excellence for Emerging Tech at DAVV, Indore.",
    content:
      "DAVV University me AI aur emerging tech ka Centre of Excellence banega, jisme students aur teachers dono ko upskill kiya jayega.",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
    slug: "centre-of-excellence-for-emerging-tech-at-davv-indore-2",
  },
  {
    id: 6,
    title: "AI Summit in Vizag This Month",
    content:
      "Vizag me 25–26 July ko Fusion AI Summit hoga, jahan startups, experts aur govt milke AI future pe baat karenge.",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
    slug: "ai-summit-in-vizag-this-month-2",
  },
];
const category = [
  // "All",
  // "Tech Trends",
  // "Case Studies",
  // "Development",
  // "UI/UX Design",
  // "Cybersecurity",
  // "Digital Strategy",
];

const Blogs = () => {
  const [categories, setCategories] = useState(category);

  //  custom hook for pagination and search
  const {
    activeCategory,
    blogs,
    loading,
    searchTerm,
    currentPage,
    pagination,
    totalBlogs,
    setSearchTerm,
    setCurrentPage,
    fetchBlogs,
    handleCategoryChange,
    handleSearch,
  } = useBlogsPagination(categories, 12);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Categories from API:", data);
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
      fetchBlogs(blogData);
    }
  }, [activeCategory, categories, currentPage, searchTerm, fetchBlogs]);
  return (
    <div>
      <div className="relative w-full h-200 flex items-center justify-start">
        <Image
          src="/assist/IndImg/blogBg.jpg"
          alt="Blog"
          width={1200}
          height={660}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#d4d2f5] opacity-95 -z-10" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src="/assist/IndImg/homePage/service2.jpg"
              alt="Article Thumbnail"
              width={600}
              height={400}
              className="w-170 h-108 object-cover rounded-xl"
            />
          </div>
          <div className="w-full text-center md:text-left space-y-4">
            <p className="text-[#252525] font-montserrat font-semibold text-2xl">
              20 Aug 2025
            </p>
            <h2 className="text-gray-400 text-3xl md:text-[46px] font-bold leading-[1.2] font-avalors tracking-wider">
              WHAT IS GENERATIVE ENGINE OPTIMIZATION (GEO) AND HOW IT WORKS?
            </h2>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl">
              What Is Generative Engine Optimization
            </p>

            <IndButton variant="outline" className="!border-[#d4d2f5]">
              Read This Article
            </IndButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 container mx-auto">
        <p className="text-[#252525] font-montserrat font-semibold text-xl md:text-2xl max-w-2xl">
          Stay updated with the latest tech insights, client success stories,
          and opportunities from our community and IT industry network.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <select
            value={activeCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 font-medium text-sm"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat.name || cat}>
                {cat.name || cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col"></div>
        <div className="mt-20">
          <p className="text-[#252525] font-montserrat font-semibold text-xl border-l-4 border-[#7544E4] p-4">
            Must Read Articles:
          </p>
          <div className="mt-12">
            {loading ? (
              <Loader />
            ) : blogs.length > 0 ? (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:grid-cols-4 gap-12 xl:gap-8">
                {blogs.map((blog) => (
                  <IndBlogCard key={blog.id || blog._id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-xl text-gray-400 mb-2">No blogs found</div>
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
};

export default Blogs;
