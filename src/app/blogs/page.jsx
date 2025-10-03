"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import HomeBlogCardsd from "@/components/HomeBlogCardsd";
import SubscribeContact from "@/components/SubscribeContact";
import Icons from "@/components/ui/Icon";
import Loader from "@/components/loader/Loader";
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState(blogData);
  const [categories, setCategories] = useState(category);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://97fzff04-5000.inc1.devtunnels.ms/api/categories');
        if (response.ok) {
          const data = await response.json();
          console.log('Categories from API:', data);
          const dynamicCategories = [
            { name: "All", slug: "all" },
            ...data.data.map(cat => ({ name: cat.name, slug: cat.slug }))
          ];
          setCategories(dynamicCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        const fallbackCategories = category.map(cat => ({ name: cat, slug: cat.toLowerCase().replace(/\s+/g, '-') }));
        setCategories(fallbackCategories);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        let url = 'https://97fzff04-5000.inc1.devtunnels.ms/api/blogs';
        
        const selectedCategory = categories.find(cat => cat.name === activeCategory);
        
        // console.log('Selected category:', selectedCategory);
        // console.log('Active category:', activeCategory);
        
        if (activeCategory !== "All" && selectedCategory && selectedCategory.slug !== "all") {
          url = `https://97fzff04-5000.inc1.devtunnels.ms/api/blogs/category/${selectedCategory.slug}`;
        }
        
        //console.log('Fetching blogs from:', url);
        
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          // console.log('API Response:', data);
          
          if (data.success && data.data) {
            // console.log('Setting blogs:', data.data);
            setBlogs(data.data);
          } else {
            console.log('No data in API response, using fallback');
            const filteredBlogs = activeCategory === "All" 
              ? blogData 
              : blogData.filter(blog => blog.category === activeCategory);
            setBlogs(filteredBlogs);
          }
        } else {
          console.log('API request failed, using fallback');
          const filteredBlogs = activeCategory === "All" 
            ? blogData 
            : blogData.filter(blog => blog.category === activeCategory);
          setBlogs(filteredBlogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        const filteredBlogs = activeCategory === "All" 
          ? blogData 
          : blogData.filter(blog => blog.category === activeCategory);
        setBlogs(filteredBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [activeCategory, categories]); 
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
          <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
            Insights & Innovation
          </p>
          <p className="font-jost text-lg font-medium leading-6 text-center mt-6">
            Check out our latest ideas, tech trends, and success stories where
            smart planning meets real results and creative ideas make an impact.
          </p>
          <div className="flex w-[504px] h-[74px] items-center border border-gray-600 rounded-[10px] overflow-hidden bg-transparent p-1 mt-11">
            <input
              type="text"
              placeholder="Search article"
              className="flex-1 h-full text-white placeholder-gray-600 bg-transparent focus:outline-none  pl-8 py-6 font-jost text-[20px] leading-[100%] tracking-[0.03em]"
            />
            <Button text="Explore" className="!text-black" />
          </div>
          <div className="w-0.5 h-28 rounded-full mb-10 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
          <div className="relative w-12 h-12">
            <img
              src="/assist/video/pentagonVideo.gif"
              alt="valueImg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative mt-8 w-[1200px] rounded-2xl shadow-lg">
            <Image
              src="/assist/img/blogImg.png"
              alt="Blog"
              width={1200}
              height={660}
              className="object-cover rounded-2xl"
            />
            <div className="absolute -bottom-16  bg-[#15152A] p-6 text-white rounded-4xl mx-30">
              <div className="flex items-center gap-4 mb-3">
                <span className="border border-white rounded-md px-4 py-1 text-sm font-jost">
                  Popular
                </span>
                <span className="text-sm text-primary font-jost">
                  April 28, 2024
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-2 font-jost">
                10 Best Design Resources for 2024: After trying 100+ Here are My
                Top Picks
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-kumbh-sans">
                In the ever-evolving world of design, where innovation meets
                aesthetics, finding the perfect resources to fuel your creative
                journey can be a rewarding yet daunting ...
                <a href="#" className="text-primary underline">
                  Continue reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-36 px-10">
          <p className="text-primary font-avalors text-[32px] leading-6">
            Select Your Category
          </p>
          <div className="flex gap-16 text-[#C4C4C4] mt-13 font-kumbh-sans">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(item.name || item)}
                className={`relative pb-1 transition-all duration-300 cursor-pointer ${
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
          </div>
          <div className="text-[#82828C] mt-24 border-2 container mx-auto px-10"></div>
          <SubscribeContact />
        </div>
      </div>
    </div>
  );
};

export default Blogs;   
