"use client";
import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Filter, Calendar, Eye, ImageIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import adminApiService from '@/lib/adminApi';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const params = {};
      if (countryFilter && countryFilter !== '') {
        params.country = countryFilter;
      }
      
      // console.log('Fetching blogs with params:', params);
      const response = await adminApiService.getBlogs(params);
      // console.log('API Response:', response);
      
      const blogs = response.data || response.blogs || [];
      // console.log('Extracted blogs:', blogs);
      setBlogs(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await adminApiService.getCategories();
      const categories = response.data || response.categories || [];
      setCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    // fetchBlogs();
    fetchCategories();
  }, []);

// when we have applied country filter from frontend 
  useEffect(() => {
    fetchBlogs();
  }, [countryFilter]);

  // Filter blogs
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || blog.category._id === selectedCategory;
    const matchesStatus = !statusFilter || blog.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Handle delete blog
  const handleDelete = async (blogId) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      await adminApiService.deleteBlog(blogId);
      toast.success('Blog deleted successfully!');
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog');
    }
  };

  // Toggle blog status
  const toggleStatus = async (blogId, currentStatus) => {
    try {
      const newStatus = currentStatus === 'published' ? 'draft' : 'published';
      await adminApiService.updateBlog(blogId, { status: newStatus });
      toast.success(`Blog ${newStatus === 'published' ? 'published' : 'drafted'} successfully!`);
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog status:', error);
      toast.error('Failed to update blog status');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Blogs</h1>
          <p className="text-gray-400 mt-1">Manage your blog posts</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/blogs/create">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Rich Text Editor
            </Button>
          </Link>
          <Link href="/admin/blogs/advanced/create">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Advanced Blocks
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">All Status</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <select
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">All Countries</option>
          <option value="global">Global</option>
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
          <option value="es">Spain</option>
          <option value="it">Italy</option>
          <option value="jp">Japan</option>
          <option value="br">Brazil</option>
        </select>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <div key={blog._id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            {/* Featured Image */}
            <div className="h-48 bg-gray-700 relative overflow-hidden">
              {blog.featuredImage && blog.featuredImage.url ? (
                <img 
                  src={blog.featuredImage.url} 
                  alt={blog.featuredImage.alt || blog.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-gray-500" />
                </div>
              )}
              
              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <button
                  onClick={() => toggleStatus(blog._id, blog.status)}
                  className={`px-2 py-1 text-xs rounded-full font-medium transition-colors ${
                    blog.status === 'published' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30'
                  }`}
                >
                  {blog.status === 'published' ? 'Published' : 'Draft'}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2">
                <Link href={`/admin/blogs/edit/${blog._id}`}>
                  <button className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors" title="Edit Blog">
                    <Edit className="h-4 w-4" />
                  </button>
                </Link>
                <Link href={`/blog/${blog.slug}`} target="_blank">
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                  {blog.category?.name || 'Uncategorized'}
                </span>
                <span className="text-xs text-gray-500">
                  {blog.readTime} min read
                </span>
              </div>
              
              <h3 className="font-semibold text-white text-lg mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <span>{blog.views || 0} views</span>
                  <span>•</span>
                  <span>{blog.content?.length || 0} blocks</span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
            <Filter className="h-full w-full" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No blogs found</h3>
          <p className="text-gray-400 mb-4">
            {searchTerm || selectedCategory || statusFilter 
              ? 'Try adjusting your search terms or filters.' 
              : 'Get started by creating your first blog post.'}
          </p>
          {!searchTerm && !selectedCategory && !statusFilter && (
            <Link href="/admin/blogs/create">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create Blog
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}