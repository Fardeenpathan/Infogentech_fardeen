"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Eye } from "lucide-react";

// Simple date formatting function
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function BlogSlugPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch blog by slug from public API (no auth needed)
        const response = await fetch(`http://localhost:5000/api/blogs/slug/${params.slug}`);
        
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        
        const data = await response.json();
        setBlog(data.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  // Convert blocks to rendered content
  const renderBlocks = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return null;
    
    const sortedBlocks = blocks.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    return sortedBlocks.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={index} className="mb-4 text-gray-300 leading-relaxed">
              {block.data.content || block.data.text}
            </p>
          );
        case 'heading':
          const level = block.data.level || 2;
          const HeadingTag = `h${level}`;
          const headingClasses = {
            1: 'text-3xl font-bold mb-6 text-white',
            2: 'text-2xl font-bold mb-4 text-white',
            3: 'text-xl font-bold mb-3 text-white',
            4: 'text-lg font-bold mb-2 text-white',
            5: 'text-base font-bold mb-2 text-white',
            6: 'text-sm font-bold mb-2 text-white'
          };
          return (
            <HeadingTag key={index} className={headingClasses[level]}>
              {block.data.content || block.data.text}
            </HeadingTag>
          );
        case 'list':
          const items = block.data.items || [];
          if (block.data.style === 'ordered') {
            return (
              <ol key={index} className="mb-4 pl-6 list-decimal text-gray-300">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">{item}</li>
                ))}
              </ol>
            );
          } else {
            return (
              <ul key={index} className="mb-4 pl-6 list-disc text-gray-300">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">{item}</li>
                ))}
              </ul>
            );
          }
        case 'quote':
          return (
            <blockquote key={index} className="mb-4 pl-4 border-l-4 border-purple-500 italic text-gray-300">
              {block.data.content || block.data.text}
            </blockquote>
          );
        case 'code':
          return (
            <pre key={index} className="mb-4 p-4 bg-gray-800 rounded-lg overflow-x-auto">
              <code className="text-green-400 text-sm">
                {block.data.content || block.data.text}
              </code>
            </pre>
          );
        case 'image':
          return (
            <div key={index} className="mb-6">
              <img 
                src={block.data.url} 
                alt={block.data.alt || 'Blog image'} 
                className="w-full h-auto rounded-lg"
              />
              {block.data.caption && (
                <p className="text-sm text-gray-400 mt-2 text-center italic">
                  {block.data.caption}
                </p>
              )}
            </div>
          );
        default:
          return null;
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading blog...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">Blog not found</div>
          <Link href="/blogs" className="text-purple-400 hover:text-purple-300">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Featured Image */}
        {blog.featuredImage && blog.featuredImage.url && (
          <div className="mb-8">
            <img 
              src={blog.featuredImage.url} 
              alt={blog.featuredImage.alt || blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Blog Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {blog.title}
          </h1>
          
          {blog.excerpt && (
            <p className="text-xl text-gray-400 mb-6">
              {blog.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(blog.publishedAt || blog.createdAt)}
            </div>
            
            {blog.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {blog.author.name || 'Admin'}
              </div>
            )}

            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {blog.views || 0} views
            </div>

            {blog.readTime && (
              <div>
                {blog.readTime} min read
              </div>
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-none">
          {renderBlocks(blog.blocks)}
        </div>

        {/* Category */}
        {blog.category && (
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-sm text-gray-400">
              Published in: 
              <span className="text-purple-400 ml-1">
                {blog.category.name}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}