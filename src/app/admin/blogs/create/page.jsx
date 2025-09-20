"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import adminApiService from '@/lib/adminApi';
import RichTextEditor from '@/components/admin/RichTextEditor';
import Link from 'next/link';

export default function CreateBlogPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    featuredImage: '',
    category: '',
    tags: [],
    status: 'draft',
    content: '', // HTML content from rich text editor
    priority: 'medium',
    isFeatured: false,
    language: 'en',
    seo: {
      title: '',
      description: '',
      keywords: []
    }
  });
  const [featuredImageFile, setFeaturedImageFile] = useState(null);
  const [tagInput, setTagInput] = useState('');

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await adminApiService.getCategories();
        console.log('Categories response:', response); // Debug log
        setCategories(response.data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
      }
    };
    fetchCategories();
  }, []);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title]);

  // Auto-generate excerpt from content
  useEffect(() => {
    if (formData.content && !formData.excerpt) {
      // Extract text from HTML and create excerpt
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = formData.content;
      const textContent = tempDiv.textContent || tempDiv.innerText || '';
      const excerpt = textContent.substring(0, 150).trim();
      if (excerpt) {
        setFormData(prev => ({ ...prev, excerpt: excerpt + (textContent.length > 150 ? '...' : '') }));
      }
    }
  }, [formData.content]);

  // Convert HTML content to blocks array for backend
  const convertHtmlToBlocks = (htmlContent) => {
    if (!htmlContent) return [];
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const blocks = [];
    let order = 0;

    // Parse HTML and convert to blocks matching your backend schema
    const children = tempDiv.children;
    
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      const tagName = element.tagName.toLowerCase();
      
      if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'h4' || tagName === 'h5' || tagName === 'h6') {
        blocks.push({
          type: 'heading',
          data: {
            content: element.textContent || '',
            level: parseInt(tagName.charAt(1))
          },
          order: order++,
          settings: {}
        });
      } else if (tagName === 'p') {
        const textContent = element.textContent || '';
        if (textContent.trim()) {
          blocks.push({
            type: 'paragraph',
            data: {
              content: textContent
            },
            order: order++,
            settings: {}
          });
        }
      } else if (tagName === 'ul' || tagName === 'ol') {
        const items = Array.from(element.children).map(li => li.textContent || '');
        blocks.push({
          type: 'list',
          data: {
            style: tagName === 'ul' ? 'unordered' : 'ordered',
            items: items
          },
          order: order++,
          settings: {}
        });
      } else if (tagName === 'blockquote') {
        blocks.push({
          type: 'quote',
          data: {
            content: element.textContent || '',
            author: '',
            alignment: 'left'
          },
          order: order++,
          settings: {}
        });
      } else if (tagName === 'pre') {
        blocks.push({
          type: 'code',
          data: {
            content: element.textContent || '',
            language: 'javascript'
          },
          order: order++,
          settings: {}
        });
      } else if (tagName === 'img') {
        blocks.push({
          type: 'image',
          data: {
            url: element.src || '',
            alt: element.alt || '',
            caption: '',
            withBorder: false,
            withBackground: false,
            stretched: false
          },
          order: order++,
          settings: {}
        });
      } else if (element.textContent && element.textContent.trim()) {
        // Fallback for other elements - treat as paragraph
        blocks.push({
          type: 'paragraph',
          data: {
            content: element.textContent
          },
          order: order++,
          settings: {}
        });
      }
    }

    // If no blocks were created, create a single paragraph with all text
    if (blocks.length === 0 && tempDiv.textContent) {
      blocks.push({
        type: 'paragraph',
        data: {
          content: tempDiv.textContent
        },
        order: 0,
        settings: {}
      });
    }

    return blocks;
  };

  // Handle featured image upload
  const handleFeaturedImageUpload = async (file) => {
    if (!file) return;

    try {
      const formDataUpload = new FormData();
      formDataUpload.append('image', file);
      
      const response = await adminApiService.uploadImage(formDataUpload);
      setFormData(prev => ({ 
        ...prev, 
        featuredImage: {
          public_id: response.public_id || '',
          url: response.url,
          alt: ''
        }
      }));
      toast.success('Featured image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading featured image:', error);
      toast.error('Failed to upload featured image');
    }
  };

  // Handle tag management
  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim().toLowerCase())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim().toLowerCase()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Handle form submission
  const handleSubmit = async (status = 'draft') => {
    if (!formData.title.trim()) {
      toast.error('Please enter a blog title');
      return;
    }

    if (!formData.category) {
      toast.error('Please select a category');
      return;
    }

    if (!formData.content.trim()) {
      toast.error('Please write some content');
      return;
    }

    setLoading(true);
    try {
      const blocks = convertHtmlToBlocks(formData.content);
      
      const blogData = {
        title: formData.title,
        excerpt: formData.excerpt,
        category: formData.category,
        status,
        priority: formData.priority,
        isFeatured: formData.isFeatured,
        tags: formData.tags,
        blocks: blocks,
        language: formData.language,
        seo: formData.seo
      };

      // Add featured image file if exists
      if (featuredImageFile) {
        blogData.featuredImageFile = featuredImageFile;
      }

      console.log('Sending blog data:', blogData); // Debug log

      const response = await adminApiService.createBlog(blogData);
      console.log('Blog creation response:', response); // Debug log
      
      toast.success(response.message || 'Blog created successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error(error.message || 'Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Create Blog Post</h1>
            <p className="text-gray-400 mt-1">Write with Medium-style editor</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => handleSubmit('draft')}
            disabled={loading}
            variant="outline"
          >
            Save Draft
          </Button>
          <Button
            onClick={() => handleSubmit('published')}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Save className="h-4 w-4 mr-2" />
            {loading ? 'Publishing...' : 'Publish'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Title */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="Enter your blog title..."
              className="w-full text-3xl font-bold bg-transparent border-none text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Rich Text Editor */}
          <div>
            <label className="block text-lg font-semibold text-white mb-3">Content</label>
            <RichTextEditor
              content={formData.content}
              onChange={(content) => setFormData({...formData, content})}
              placeholder="Start writing... You can copy-paste from anywhere and format with toolbar!"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Settings */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
            
            <div className="space-y-4">
              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Excerpt
                </label>
                <textarea
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Brief description (auto-generated)"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Priority
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Featured */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({...formData, isFeatured: e.target.checked})}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded"
                />
                <label htmlFor="isFeatured" className="ml-2 text-sm text-gray-300">
                  Featured Post
                </label>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Featured Image</h3>
            
            <div className="space-y-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setFeaturedImageFile(e.target.files[0]);
                  if (e.target.files[0]) {
                    handleFeaturedImageUpload(e.target.files[0]);
                  }
                }}
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />
              
              {formData.featuredImage && formData.featuredImage.url && (
                <img 
                  src={formData.featuredImage.url} 
                  alt="Featured" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Category */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Category</h3>
            
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Add a tag"
                />
                <Button onClick={addTag} size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SEO Fields */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">SEO Settings</h3>
            
            <div className="space-y-4">
              {/* SEO Title */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={formData.seo.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { ...formData.seo, title: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="SEO title for search engines"
                />
              </div>

              {/* SEO Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Description
                </label>
                <textarea
                  rows={3}
                  value={formData.seo.description}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { ...formData.seo, description: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Meta description for search engines"
                />
              </div>

              {/* SEO Keywords */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Keywords (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.seo.keywords.join(', ')}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { 
                      ...formData.seo, 
                      keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k) 
                    }
                  })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}