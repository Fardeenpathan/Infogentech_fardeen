"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  Save, ArrowLeft, Plus, Eye, Settings, Image as ImageIcon, 
  Tag, Layout, Calendar, User, Clock, Star, Globe, FileText,
  Upload, X, Copy, RotateCcw, Maximize2, Minimize2, Edit3
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import adminApiService from '@/lib/adminApi';
import RichTextEditor from '@/components/admin/RichTextEditor';
import Link from 'next/link';

export default function BlogFormPage({ mode = 'create' }) {
  const router = useRouter();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(mode === 'edit');
  const [activeTab, setActiveTab] = useState('content');
  const [showPreview, setShowPreview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const autoSaveRef = useRef(null);
  const isEditMode = mode === 'edit';
  const [slugEdited, setSlugEdited] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    featuredImage: '',
    category: '',
    tags: [],
    status: 'draft',
    content: '',
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

  useEffect(() => {
    if (autoSaveRef.current) {
      clearTimeout(autoSaveRef.current);
    }
    
    if (formData.title || formData.content) {
      autoSaveRef.current = setTimeout(() => {
        autoSave();
      }, 3000);
    }
    
    return () => {
      if (autoSaveRef.current) {
        clearTimeout(autoSaveRef.current);
      }
    };
  }, [formData]);

  useEffect(() => {
    const text = (formData.content || '').replace(/<[^>]*>/g, '');
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [formData.content]);

  useEffect(() => {
    if (isEditMode && params?.id) {
      loadBlog();
    }
  }, [isEditMode, params?.id]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await adminApiService.getCategories();
        setCategories(response.data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  const loadBlog = async () => {
    try {
      setLoadingBlog(true);
      const response = await adminApiService.getBlog(params.id);
      const blog = response.data || response;
      
      // Convert blocks to HTML content if blocks exist
      let content = blog.content || '';
      if (blog.blocks && Array.isArray(blog.blocks) && blog.blocks.length > 0) {
        content = convertBlocksToHtml(blog.blocks);
      }
      
      setFormData({
        title: blog.title || '',
        slug: blog.slug || '',
        excerpt: blog.excerpt || '',
        featuredImage: blog.featuredImage?.url || blog.featuredImage || '',
        category: blog.category?._id || blog.category || '',
        tags: blog.tags || [],
        status: blog.status || 'draft',
        content: content,
        priority: blog.priority || 'medium',
        isFeatured: blog.isFeatured || false,
        language: blog.language || 'en',
        seo: blog.seo || {
          title: '',
          description: '',
          keywords: []
        }
      });
      setSlugEdited(false);
    } catch (error) {
      console.error('Error loading blog:', error);
      toast.error('Failed to load blog');
      router.push('/admin/blogs');
    } finally {
      setLoadingBlog(false);
    }
  };

  const convertBlocksToHtml = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return '';
    
    let html = '';
    const sortedBlocks = [...blocks].sort((a, b) => (a.order || 0) - (b.order || 0));
    
    sortedBlocks.forEach(block => {
      if (!block || !block.type) return;
      
      switch (block.type) {
        case 'paragraph':
          html += `<p>${block.data?.content || ''}</p>`;
          break;
        case 'heading':
          const level = block.data?.level || 2;
          html += `<h${level}>${block.data?.content || ''}</h${level}>`;
          break;
        case 'list':
          const listType = block.data?.style === 'ordered' ? 'ol' : 'ul';
          const items = block.data?.items || [];
          html += `<${listType}>`;
          items.forEach(item => {
            html += `<li>${item}</li>`;
          });
          html += `</${listType}>`;
          break;
        case 'quote':
          html += `<blockquote>${block.data?.content || ''}</blockquote>`;
          break;
        case 'code':
          html += `<pre><code>${block.data?.content || ''}</code></pre>`;
          break;
        case 'image':
          html += `<img src="${block.data?.url || ''}" alt="${block.data?.alt || ''}" />`;
          break;
        default:
          if (block.data && typeof block.data === 'object') {
            const text = block.data.content || block.data.text || '';
            if (text) {
              html += `<p>${text}</p>`;
            }
          }
      }
    });
    
    return html;
  };

  const autoSave = async () => {
    if (!formData.title && !formData.content) return;
    
    setIsAutoSaving(true);
    try {
      console.log('Auto-saving draft...');
    } catch (error) {
      console.error('Auto-save failed:', error);
    } finally {
      setIsAutoSaving(false);
    }
  };

  const handleFeaturedImageUpload = async (file) => {
    if (!file) return;
    
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await adminApiService.uploadImage(formData);
      setFormData(prev => ({
        ...prev,
        featuredImage: response.url || response.data?.url
      }));
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
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

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title) => {
    setFormData(prev => {
      const shouldAutoSlug = !isEditMode && !prev.slug && !slugEdited;
      const newSlug = shouldAutoSlug ? generateSlug(title) : prev.slug;
      return {
        ...prev,
        title,
        slug: newSlug,
        seo: {
          ...prev.seo,
          title: title || prev.seo.title
        }
      };
    });
  };

  const convertHtmlToBlocks = (htmlContent) => {
    if (!htmlContent) return [];
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const blocks = [];
    let order = 0;

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
        const htmlContent = element.innerHTML || '';
        const textContent = element.textContent || '';
        if (textContent.trim()) {
          blocks.push({
            type: 'paragraph',
            data: {
              content: htmlContent 
            },
            order: order++,
            settings: {}
          });
        }
      } else if (tagName === 'ul' || tagName === 'ol') {
        const items = Array.from(element.children).map(li => {
         
          let itemContent = li.innerHTML || li.textContent || '';
          itemContent = itemContent.replace(/<\/?p[^>]*>/g, '');
          return itemContent.trim();
        }).filter(item => item.length > 0); // Remove empty items
        
        if (items.length > 0) {
          blocks.push({
            type: 'list',
            data: {
              style: tagName === 'ul' ? 'unordered' : 'ordered',
              items: items
            },
            order: order++,
            settings: {}
          });
        }
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

    if (blocks.length === 0 && tempDiv.textContent && tempDiv.textContent.trim()) {
      blocks.push({
        type: 'paragraph',
        data: {
          content: tempDiv.textContent.trim()
        },
        order: 0,
        settings: {}
      });
    }

    return blocks;
  };

  const handleSubmit = async (status) => {
    if (!formData.title.trim()) {
      toast.error('Please enter a title');
      return;
    }

    if (!formData.content.trim()) {
      toast.error('Please add some content');
      return;
    }

    if (!formData.category) {
      toast.error('Please select a category');
      return;
    }

    setLoading(true);
    try {
      const blocks = convertHtmlToBlocks(formData.content);
      
      const blogData = {
        ...formData,
        blocks: blocks, // Add blocks for backend
        status,
        publishedAt: status === 'published' ? new Date() : null
      };

      if (featuredImageFile) {
        blogData.featuredImageFile = featuredImageFile;
      }

      let response;
      if (isEditMode) {
        response = await adminApiService.updateBlog(params.id, blogData);
      } else {
        response = await adminApiService.createBlog(blogData);
      }
      
      if (response.data || response.success) {
        toast.success(`Blog ${status === 'published' ? 'published' : 'saved as draft'} successfully!`);
        router.push('/admin/blogs');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error(`Failed to ${isEditMode ? 'update' : 'create'} blog`);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'seo', label: 'SEO', icon: Globe },
    { id: 'media', label: 'Media', icon: ImageIcon }
  ];

  if (loadingBlog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading blog...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin/blogs" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Blogs
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-xl font-semibold text-white flex items-center">
                {isEditMode ? <Edit3 className="h-5 w-5 mr-2" /> : <Plus className="h-5 w-5 mr-2" />}
                {isEditMode ? 'Edit Blog' : 'Create New Blog'}
              </h1>
              {isAutoSaving && (
                <div className="flex items-center text-sm text-blue-400">
                  <RotateCcw className="h-4 w-4 mr-1 animate-spin" />
                  Auto-saving...
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-400">
                {wordCount} words
              </div>
              <Button
                onClick={() => setIsFullscreen(!isFullscreen)}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:text-white"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:text-white"
              >
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? 'Edit' : 'Preview'}
              </Button>
              <Button
                onClick={() => handleSubmit('draft')}
                disabled={loading}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white"
              >
                Save Draft
              </Button>
              <Button
                onClick={() => handleSubmit('published')}
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Save className="h-4 w-4 mr-2" />
                {loading ? (isEditMode ? 'Updating...' : 'Publishing...') : (isEditMode ? 'Update' : 'Publish')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-4 space-y-6">
            {/* Title Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl">
              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter your compelling blog title..."
                  className="w-full text-3xl md:text-4xl font-bold bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                />
                <div className="flex items-center text-sm text-gray-400 space-x-4 flex-wrap gap-2">
                  <span>Slug: /{formData.slug || 'auto-generated-from-title'}</span>
                  <Button
                    onClick={() => navigator.clipboard.writeText(formData.slug)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>

                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => {
                      setSlugEdited(true);
                      setFormData(prev => ({...prev, slug: e.target.value}));
                    }}
                    placeholder="Custom slug (optional)"
                    className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-purple-500 focus:border-transparent min-w-0 flex-1 max-w-xs"
                  />

                  {isEditMode && (
                    <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                      Warning: changing the slug will change the post URL and may affect SEO/links.
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-xl">
              <div className="border-b border-gray-700">
                <nav className="flex space-x-8 px-6 overflow-x-auto">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'border-purple-500 text-purple-400'
                            : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        <Icon className="h-4 w-4 inline mr-2" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-lg font-semibold text-white mb-3 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-purple-400" />
                        Content
                      </label>
                      <RichTextEditor
                        content={formData.content}
                        onChange={(content) => setFormData({...formData, content})}
                        placeholder="Start writing your amazing content..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Excerpt
                      </label>
                      <textarea
                        rows={3}
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Brief description of your blog post..."
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Priority
                      </label>
                      <select
                        value={formData.priority}
                        onChange={(e) => setFormData({...formData, priority: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Tags
                      </label>
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                            className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Add a tag"
                          />
                          <Button 
                            onClick={addTag} 
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {formData.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                            >
                              <Tag className="h-3 w-3" />
                              {tag}
                              <button
                                onClick={() => removeTag(tag)}
                                className="text-purple-300 hover:text-purple-100 transition-colors"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex items-center">
                      <input
                        type="checkbox"
                        id="isFeatured"
                        checked={formData.isFeatured}
                        onChange={(e) => setFormData({...formData, isFeatured: e.target.checked})}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded"
                      />
                      <label htmlFor="isFeatured" className="ml-3 text-sm text-gray-300 flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        Featured Post
                      </label>
                    </div>
                  </div>
                )}

                {activeTab === 'seo' && (
                  <div className="space-y-6">
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="SEO title for search engines"
                      />
                    </div>

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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Meta description for search engines"
                      />
                    </div>

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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="keyword1, keyword2, keyword3"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'media' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Featured Image
                      </label>
                      
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setFeaturedImageFile(e.target.files[0]);
                            if (e.target.files[0]) {
                              handleFeaturedImageUpload(e.target.files[0]);
                            }
                          }}
                          className="hidden"
                          id="featured-image"
                        />
                        
                        {formData.featuredImage ? (
                          <div className="space-y-4">
                            <img 
                              src={formData.featuredImage} 
                              alt="Featured" 
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <Button
                              onClick={() => setFormData({...formData, featuredImage: ''})}
                              variant="outline"
                              className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                            >
                              <X className="h-4 w-4 mr-2" />
                              Remove Image
                            </Button>
                          </div>
                        ) : (
                          <label htmlFor="featured-image" className="cursor-pointer">
                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-300 mb-2">Click to upload featured image</p>
                            <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Layout className="h-5 w-5 mr-2 text-purple-400" />
                Quick Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Word Count</span>
                  <span className="text-white font-medium">{wordCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Reading Time</span>
                  <span className="text-white font-medium">{Math.ceil(wordCount / 200)} min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Status</span>
                  <span className="text-yellow-400 font-medium capitalize">{formData.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Priority</span>
                  <span className={`font-medium capitalize ${
                    formData.priority === 'high' ? 'text-red-400' : 
                    formData.priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {formData.priority}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-purple-400" />
                Activity
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {isEditMode ? 'Blog loaded' : 'Draft created'}
                </div>
                {isAutoSaving && (
                  <div className="flex items-center text-blue-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                    Auto-saving...
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-purple-400" />
                Publishing
              </h3>
              
              <div className="space-y-4">
                <Button
                  onClick={() => handleSubmit('draft')}
                  disabled={loading}
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save as Draft
                </Button>
                
                <Button
                  onClick={() => handleSubmit('published')}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {loading ? (isEditMode ? 'Updating...' : 'Publishing...') : (isEditMode ? 'Update & Publish' : 'Publish Now')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}