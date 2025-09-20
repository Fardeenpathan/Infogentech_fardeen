"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  Save, 
  ArrowLeft, 
  Plus, 
  Type, 
  List, 
  Code, 
  Quote, 
  Image as ImageIcon, 
  Video, 
  Grid,
  Trash2,
  GripVertical,
  Eye
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import adminApiService from '@/lib/adminApi';
import Link from 'next/link';

// Import the same ContentBlockEditor component logic
const ContentBlockEditor = ({ block, updateBlock, deleteBlock, moveBlock, index, totalBlocks }) => {
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (file) => {
    if (!file) return;
    
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await adminApiService.uploadImage(formData);
      updateBlock(block.id, { ...block, content: response.url });
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const renderBlockEditor = () => {
    switch (block.type) {
      case 'paragraph':
        return (
          <textarea
            value={block.content || ''}
            onChange={(e) => updateBlock(block.id, { ...block, content: e.target.value })}
            placeholder="Enter paragraph content..."
            rows={4}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        );

      case 'heading':
        return (
          <div className="space-y-2">
            <select
              value={block.level || 'h2'}
              onChange={(e) => updateBlock(block.id, { ...block, level: e.target.value })}
              className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm"
            >
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
              <option value="h4">Heading 4</option>
            </select>
            <input
              type="text"
              value={block.content || ''}
              onChange={(e) => updateBlock(block.id, { ...block, content: e.target.value })}
              placeholder="Enter heading text..."
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            <select
              value={block.listType || 'ul'}
              onChange={(e) => updateBlock(block.id, { ...block, listType: e.target.value })}
              className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm"
            >
              <option value="ul">Bullet List</option>
              <option value="ol">Numbered List</option>
            </select>
            <textarea
              value={block.items ? block.items.join('\n') : ''}
              onChange={(e) => updateBlock(block.id, { 
                ...block, 
                items: e.target.value.split('\n').filter(item => item.trim()) 
              })}
              placeholder="Enter list items (one per line)..."
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
        );

      case 'code':
        return (
          <div className="space-y-2">
            <input
              type="text"
              value={block.language || ''}
              onChange={(e) => updateBlock(block.id, { ...block, language: e.target.value })}
              placeholder="Programming language (e.g., javascript, python)"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <textarea
              value={block.content || ''}
              onChange={(e) => updateBlock(block.id, { ...block, content: e.target.value })}
              placeholder="Enter code here..."
              rows={6}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none font-mono text-sm"
            />
          </div>
        );

      case 'quote':
        return (
          <div className="space-y-2">
            <textarea
              value={block.content || ''}
              onChange={(e) => updateBlock(block.id, { ...block, content: e.target.value })}
              placeholder="Enter quote content..."
              rows={3}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
            <input
              type="text"
              value={block.author || ''}
              onChange={(e) => updateBlock(block.id, { ...block, author: e.target.value })}
              placeholder="Quote author (optional)"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        );

      case 'image':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setImageFile(e.target.files[0]);
                  if (e.target.files[0]) {
                    handleImageUpload(e.target.files[0]);
                  }
                }}
                className="hidden"
                id={`image-upload-${block.id}`}
              />
              <label
                htmlFor={`image-upload-${block.id}`}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg cursor-pointer transition-colors text-sm"
              >
                {uploading ? 'Uploading...' : 'Upload Image'}
              </label>
              {block.content && (
                <span className="text-sm text-green-400">✓ Image uploaded</span>
              )}
            </div>
            
            {block.content && (
              <div className="space-y-2">
                <img 
                  src={block.content} 
                  alt="Preview" 
                  className="max-w-full h-48 object-cover rounded-lg"
                />
                <input
                  type="text"
                  value={block.alt || ''}
                  onChange={(e) => updateBlock(block.id, { ...block, alt: e.target.value })}
                  placeholder="Alt text for accessibility"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="text"
                  value={block.caption || ''}
                  onChange={(e) => updateBlock(block.id, { ...block, caption: e.target.value })}
                  placeholder="Image caption (optional)"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
        );

      case 'video':
        return (
          <div className="space-y-2">
            <input
              type="url"
              value={block.content || ''}
              onChange={(e) => updateBlock(block.id, { ...block, content: e.target.value })}
              placeholder="Video URL (YouTube, Vimeo, etc.)"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="text"
              value={block.title || ''}
              onChange={(e) => updateBlock(block.id, { ...block, title: e.target.value })}
              placeholder="Video title (optional)"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        );

      default:
        return (
          <div className="text-gray-400 text-center py-4">
            Unknown block type: {block.type}
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <GripVertical className="h-4 w-4 text-gray-500 cursor-move" />
          <span className="text-sm font-medium text-gray-300 capitalize">
            {block.type} Block
          </span>
        </div>
        <div className="flex items-center gap-2">
          {index > 0 && (
            <button
              onClick={() => moveBlock(index, index - 1)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              title="Move up"
            >
              ↑
            </button>
          )}
          {index < totalBlocks - 1 && (
            <button
              onClick={() => moveBlock(index, index + 1)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              title="Move down"
            >
              ↓
            </button>
          )}
          <button
            onClick={() => deleteBlock(block.id)}
            className="p-1 text-red-400 hover:text-red-300 transition-colors"
            title="Delete block"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      {renderBlockEditor()}
    </div>
  );
};

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id;
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    featuredImage: '',
    category: '',
    tags: [],
    status: 'draft',
    content: []
  });
  const [featuredImageFile, setFeaturedImageFile] = useState(null);
  const [tagInput, setTagInput] = useState('');

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await adminApiService.getBlog(blogId);
        const blog = response.blog;
        
        // Ensure content blocks have IDs
        const contentWithIds = blog.content.map((block, index) => ({
          ...block,
          id: block.id || `block-${index}-${Date.now()}`
        }));
        
        setFormData({
          title: blog.title || '',
          slug: blog.slug || '',
          excerpt: blog.excerpt || '',
          featuredImage: blog.featuredImage || '',
          category: blog.category?._id || '',
          tags: blog.tags || [],
          status: blog.status || 'draft',
          content: contentWithIds
        });
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Failed to load blog');
        router.push('/admin/blogs');
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId, router]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await adminApiService.getCategories();
        setCategories(response.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Block management functions
  const addBlock = (type) => {
    const newBlock = {
      id: `block-${Date.now()}`,
      type,
      content: '',
      order: formData.content.length
    };

    // Add type-specific default properties
    switch (type) {
      case 'heading':
        newBlock.level = 'h2';
        break;
      case 'list':
        newBlock.listType = 'ul';
        newBlock.items = [];
        break;
      case 'code':
        newBlock.language = '';
        break;
      case 'quote':
        newBlock.author = '';
        break;
      case 'image':
        newBlock.alt = '';
        newBlock.caption = '';
        break;
      case 'video':
        newBlock.title = '';
        break;
    }

    setFormData(prev => ({
      ...prev,
      content: [...prev.content, newBlock]
    }));
  };

  const updateBlock = (blockId, updatedBlock) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.map(block =>
        block.id === blockId ? updatedBlock : block
      )
    }));
  };

  const deleteBlock = (blockId) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.filter(block => block.id !== blockId)
    }));
  };

  const moveBlock = (fromIndex, toIndex) => {
    setFormData(prev => {
      const newContent = [...prev.content];
      const [movedBlock] = newContent.splice(fromIndex, 1);
      newContent.splice(toIndex, 0, movedBlock);
      
      // Update order property
      return {
        ...prev,
        content: newContent.map((block, index) => ({
          ...block,
          order: index
        }))
      };
    });
  };

  // Handle featured image upload
  const handleFeaturedImageUpload = async (file) => {
    if (!file) return;

    try {
      const formDataUpload = new FormData();
      formDataUpload.append('image', file);
      
      const response = await adminApiService.uploadImage(formDataUpload);
      setFormData(prev => ({ ...prev, featuredImage: response.url }));
      toast.success('Featured image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading featured image:', error);
      toast.error('Failed to upload featured image');
    }
  };

  // Handle tag management
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

  // Handle form submission
  const handleSubmit = async (status = null) => {
    if (!formData.title.trim()) {
      toast.error('Please enter a blog title');
      return;
    }

    if (!formData.category) {
      toast.error('Please select a category');
      return;
    }

    setSaving(true);
    try {
      const blogData = {
        ...formData,
        status: status || formData.status,
        content: formData.content.map((block, index) => ({
          ...block,
          order: index
        }))
      };

      await adminApiService.updateBlog(blogId, blogData);
      toast.success('Blog updated successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error(error.message || 'Failed to update blog');
    } finally {
      setSaving(false);
    }
  };

  const blockTypes = [
    { type: 'paragraph', icon: Type, label: 'Paragraph' },
    { type: 'heading', icon: Type, label: 'Heading' },
    { type: 'list', icon: List, label: 'List' },
    { type: 'code', icon: Code, label: 'Code' },
    { type: 'quote', icon: Quote, label: 'Quote' },
    { type: 'image', icon: ImageIcon, label: 'Image' },
    { type: 'video', icon: Video, label: 'Video' }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
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
            <h1 className="text-3xl font-bold text-white">Edit Blog Post</h1>
            <p className="text-gray-400 mt-1">Update your blog content</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => handleSubmit('draft')}
            disabled={saving}
            variant="outline"
          >
            Save Draft
          </Button>
          <Button
            onClick={() => handleSubmit('published')}
            disabled={saving}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Update & Publish'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="url-friendly-slug"
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
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Brief description of your blog post"
                />
              </div>
            </div>
          </div>

          {/* Content Blocks */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Content</h2>
              <div className="flex gap-2 flex-wrap">
                {blockTypes.map(({ type, icon: Icon, label }) => (
                  <Button
                    key={type}
                    onClick={() => addBlock(type)}
                    size="sm"
                    variant="outline"
                    className="text-xs"
                  >
                    <Icon className="h-3 w-3 mr-1" />
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {formData.content.map((block, index) => (
                <ContentBlockEditor
                  key={block.id}
                  block={block}
                  updateBlock={updateBlock}
                  deleteBlock={deleteBlock}
                  moveBlock={moveBlock}
                  index={index}
                  totalBlocks={formData.content.length}
                />
              ))}
              
              {formData.content.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-gray-600 rounded-lg">
                  <Plus className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-4">No content blocks yet</p>
                  <p className="text-sm text-gray-500 mb-4">Add content blocks to start writing your blog post</p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    {blockTypes.slice(0, 3).map(({ type, icon: Icon, label }) => (
                      <Button
                        key={type}
                        onClick={() => addBlock(type)}
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        <Icon className="h-3 w-3 mr-1" />
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
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
              
              {formData.featuredImage && (
                <img 
                  src={formData.featuredImage} 
                  alt="Featured" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Category */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
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
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

          {/* Status */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Status</h3>
            
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}