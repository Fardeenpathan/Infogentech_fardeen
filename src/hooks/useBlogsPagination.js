import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { addCountryFilters, getRouteType } from '@/utils/countryUtils';

export const useBlogsPagination = (categories, limit = 12) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);
   const [recentBlog, setRecentBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [totalBlogs, setTotalBlogs] = useState(0);
  
  // Get country code from Redux store and pathname for country-specific filtering
  const countryCode = useSelector((state) => state.countryCode.value);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        setCurrentPage(1);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchBlogs = useCallback(async (fallbackData = []) => {
    setLoading(true);
    try {
      let url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`;
      const params = new URLSearchParams();
      
      params.append('page', currentPage.toString());
      params.append('limit', limit.toString());
      
      const selectedCategory = categories.find(cat => cat.name === activeCategory);
      if (activeCategory !== "All" && selectedCategory && selectedCategory.slug !== "all") {
        params.append('category', selectedCategory.slug);
      }
      
      if (searchTerm.trim()) {
        params.append('search', searchTerm.trim());
      }
      
      // Add country and region filtering based on detected country and route type
      // Temporarily disabled to debug blog loading issues
      // if (countryCode && pathname) {
      //   const routeType = getRouteType(pathname);
      //   addCountryFilters(params, countryCode, routeType);
      // }
      
      url += '?' + params.toString();
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
         
        if (data.success && data.data) {
          setBlogs(data.data);
          setRecentBlog(data.data[0])
          setPagination(data.pagination || {});
          setTotalBlogs(data.total || 0);
        } else {
          const filteredBlogs = activeCategory === "All" 
            ? fallbackData 
            : fallbackData.filter(blog => blog.category === activeCategory);
          setBlogs(filteredBlogs);
          setTotalBlogs(filteredBlogs.length);
        }
      } else {
        const filteredBlogs = activeCategory === "All" 
          ? fallbackData 
          : fallbackData.filter(blog => blog.category === activeCategory);
        setBlogs(filteredBlogs);
        setTotalBlogs(filteredBlogs.length);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      const filteredBlogs = activeCategory === "All" 
        ? fallbackData 
        : fallbackData.filter(blog => blog.category === activeCategory);
      setBlogs(filteredBlogs);
      setTotalBlogs(filteredBlogs.length);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, currentPage, searchTerm, categories, limit, countryCode, pathname]);

  //  category handle when changes 
  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
    setCurrentPage(1);
  };

  //  search handling 
  const handleSearch = () => {
    setCurrentPage(1);
  };

  return {
    activeCategory,
    blogs,
    loading,
    searchTerm,
    currentPage,
    pagination,
    totalBlogs,
    recentBlog,
    setSearchTerm,
    setCurrentPage,
    
    fetchBlogs,
    handleCategoryChange,
    handleSearch
  };
};