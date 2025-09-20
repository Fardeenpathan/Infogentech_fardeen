"use client";
import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Filter, Calendar, ImageIcon, Info } from 'lucide-react';
import Button from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import adminApiService from '@/lib/adminApi';
import { formatDate } from '@/lib/utils';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    isActive: true
  });
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await adminApiService.getCategories();
      console.log('Categories response:', response); // Debug log
      setCategories(response.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const categoryData = { ...formData };

      // Pass the image file directly
      if (imageFile) {
        categoryData.imageFile = imageFile;
      }

      if (editingCategory) {
        await adminApiService.updateCategory(editingCategory._id, categoryData);
        toast.success('Category updated successfully!');
      } else {
        await adminApiService.createCategory(categoryData);
        toast.success('Category created successfully!');
      }

      fetchCategories();
      handleCloseModal();
    } catch (error) {
      console.error('Error saving category:', error);
      toast.error(error.message || 'Failed to save category');
    } finally {
      setSubmitting(false);
    }
  };

  // Handle delete category
  const handleDelete = async (categoryId) => {
    if (!confirm('Are you sure you want to delete this category?')) return;

    try {
      await adminApiService.deleteCategory(categoryId);
      toast.success('Category deleted successfully!');
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Failed to delete category');
    }
  };

  // Open modal for creating/editing
  const handleOpenModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        description: category.description,
        image: category.image || '',
        isActive: category.isActive
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        description: '',
        image: '',
        isActive: true
      });
    }
    setImageFile(null);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      description: '',
      image: '',
      isActive: true
    });
    setImageFile(null);
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
          <h1 className="text-3xl font-bold text-white">Categories</h1>
          <p className="text-gray-400 mt-1">Manage your blog categories</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div key={category._id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            {/* Category Image */}
            <div className="h-48 bg-gray-700 relative overflow-hidden">
              {category.image.url ? (
                <img 
                  src={category.image.url} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-gray-500" />
                </div>
              )}
              
              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                  category.isActive 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {category.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => handleOpenModal(category)}
                  className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(category._id)}
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Category Content */}
            <div className="p-4">
              <h3 className="font-semibold text-white text-lg mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{category.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(category.createdAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Info className="h-3 w-3" />
                  <span>{category.blogCount || 0} blogs</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
            <Filter className="h-full w-full" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No categories found</h3>
          <p className="text-gray-400 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first category.'}
          </p>
          {!searchTerm && (
            <Button 
              onClick={() => handleOpenModal()}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          )}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg border border-gray-700 w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                {editingCategory ? 'Edit Category' : 'Create Category'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter category name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter category description"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
                  />
                  {formData.image && !imageFile && (
                    <div className="mt-2">
                      <img 
                        src={formData.image} 
                        alt="Current" 
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Status */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded"
                  />
                  <label htmlFor="isActive" className="ml-2 text-sm text-gray-300">
                    Active Category
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseModal}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {submitting ? 'Saving...' : (editingCategory ? 'Update' : 'Create')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}