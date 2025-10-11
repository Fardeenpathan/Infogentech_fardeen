import { useState, useEffect, useCallback } from 'react';

export const useBlogsPagination = (categories, limit = 12) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [totalBlogs, setTotalBlogs] = useState(0);

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
      let url = 'https://97fzff04-5000.inc1.devtunnels.ms/api/blogs';
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
      
      url += '?' + params.toString();
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        
        if (data.success && data.data) {
          setBlogs(data.data);
          setPagination(data.pagination || {});
          setTotalBlogs(data.total || 0);
        } else {
          // console.log('No data in API response, using fallback');
          const filteredBlogs = activeCategory === "All" 
            ? fallbackData 
            : fallbackData.filter(blog => blog.category === activeCategory);
          setBlogs(filteredBlogs);
          setTotalBlogs(filteredBlogs.length);
        }
      } else {
        // console.log('API request failed, using fallback');
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
  }, [activeCategory, currentPage, searchTerm, categories, limit]);

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
    
    setSearchTerm,
    setCurrentPage,
    
    fetchBlogs,
    handleCategoryChange,
    handleSearch
  };
};