import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit3, Save, X, ChevronUp, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import adminApiService from '@/lib/adminApi';

const DEFAULT_FAQ = {
  question: '',
  answer: '',
  order: 0,
  isActive: true
};

// FAQ validation utility
const validateFaq = (faq) => {
  if (!faq.question?.trim()) {
    return 'Please fill in the question';
  }
  
  if (!faq.answer?.trim()) {
    return 'Please fill in the answer';
  }
  
  return null; // No errors
};

// Format FAQ for API submission
const formatFaqForApi = (faq, index = 0) => {
  return {
    question: faq.question?.trim() || '',
    answer: faq.answer?.trim() || '',
    order: faq.order !== undefined ? faq.order : index,
    isActive: faq.isActive !== false
  };
};

// Sort FAQs by order
const sortFaqsByOrder = (faqs) => {
  if (!Array.isArray(faqs)) return [];
  return [...faqs].sort((a, b) => (a.order || 0) - (b.order || 0));
};

// Format FAQs for display
const formatFaqsForDisplay = (faqs) => {
  if (!Array.isArray(faqs)) return [];
  
  return faqs.map((faq, index) => ({
    ...faq,
    id: faq._id || faq.id || `faq-${index}`,
    order: faq.order !== undefined ? faq.order : index
  }));
};

// Append FAQ data to FormData (simplified without categories)
const appendFaqsToFormData = (formData, faqs) => {
  if (!faqs || !Array.isArray(faqs)) return;
  
  faqs.forEach((faq, index) => {
    const formattedFaq = formatFaqForApi(faq, index);
    formData.append(`faqs[${index}][question]`, formattedFaq.question);
    formData.append(`faqs[${index}][answer]`, formattedFaq.answer);
    formData.append(`faqs[${index}][order]`, formattedFaq.order);
    formData.append(`faqs[${index}][isActive]`, formattedFaq.isActive);
  });
};

const BlogFAQManager = React.forwardRef(({ blogId, isEditMode = false, initialFaqs = [] }, ref) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newFaq, setNewFaq] = useState({ ...DEFAULT_FAQ });

  useEffect(() => {
    if (isEditMode && initialFaqs && initialFaqs.length > 0) {
      // Use initial FAQs passed from parent (already loaded blog data)
      const formattedFaqs = formatFaqsForDisplay(initialFaqs);
      setFaqs(sortFaqsByOrder(formattedFaqs));
    } else if (isEditMode && blogId) {
      // Fallback to API call if initial FAQs not provided
      loadFaqs();
    }
  }, [blogId, isEditMode, initialFaqs]);

  const loadFaqs = async () => {
    try {
      setLoading(true);
      const response = await adminApiService.getBlogFaqs(blogId);
      const faqsData = response?.data || response || [];
      // Ensure we always have an array and format with utilities
      const formattedFaqs = Array.isArray(faqsData) ? formatFaqsForDisplay(faqsData) : [];
      setFaqs(sortFaqsByOrder(formattedFaqs));
    } catch (error) {
      console.error('Error loading FAQs:', error);
      toast.error('Failed to load FAQs');
      setFaqs([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleAddFaq = async () => {
    const validationError = validateFaq(newFaq);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      if (isEditMode && blogId) {
        // Add FAQ to existing blog
        const response = await adminApiService.createBlogFaq(blogId, {
          ...newFaq,
          order: Array.isArray(faqs) ? faqs.length : 0
        });
        
        setFaqs((prevFaqs) => {
          const currentFaqs = Array.isArray(prevFaqs) ? prevFaqs : [];
          return [...currentFaqs, response.data || response];
        });
        toast.success('FAQ added successfully');
      } else {
        const localFaq = {
          id: Date.now(), 
          ...newFaq,
          order: Array.isArray(faqs) ? faqs.length : 0,
          isLocal: true 
        };
        setFaqs((prevFaqs) => {
          const currentFaqs = Array.isArray(prevFaqs) ? prevFaqs : [];
          return [...currentFaqs, localFaq];
        });
      }

      setNewFaq({ ...DEFAULT_FAQ });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding FAQ:', error);
      toast.error('Failed to add FAQ');
    }
  };

  const handleUpdateFaq = async (faqId, updatedData) => {
    try {
      if (isEditMode && blogId && !updatedData.isLocal) {
        // Update FAQ on server
        await adminApiService.updateBlogFaq(blogId, faqId, updatedData);
        toast.success('FAQ updated successfully');
      }

      // Update local state
      setFaqs((prevFaqs) => {
        if (!Array.isArray(prevFaqs)) return [];
        return prevFaqs.map(faq => 
          faq.id === faqId ? { ...faq, ...updatedData } : faq
        );
      });
      setEditingFaq(null);
    } catch (error) {
      console.error('Error updating FAQ:', error);
      toast.error('Failed to update FAQ');
    }
  };

  const handleDeleteFaq = async (faqId) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;

    try {
      if (!Array.isArray(faqs)) {
        toast.error('No FAQs to delete');
        return;
      }

      const faq = faqs.find(f => f.id === faqId);
      
      if (isEditMode && blogId && faq && !faq.isLocal) {
        await adminApiService.deleteBlogFaq(blogId, faqId);
        toast.success('FAQ deleted successfully');
      }

      setFaqs((prevFaqs) => {
        if (!Array.isArray(prevFaqs)) return [];
        return prevFaqs.filter(faq => faq.id !== faqId);
      });
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      toast.error('Failed to delete FAQ');
    }
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedFaqs = [...faqs];
    const [movedItem] = updatedFaqs.splice(fromIndex, 1);
    updatedFaqs.splice(toIndex, 0, movedItem);
    
    // Update order property
    updatedFaqs.forEach((faq, index) => {
      faq.order = index;
    });
    
    setFaqs(updatedFaqs);
  };

  const getFaqsForSave = () => {
    if (!Array.isArray(faqs)) {
      return [];
    }
    return faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      order: faq.order,
      isActive: faq.isActive
    }));
  };

  React.useImperativeHandle(ref, () => ({
    getFaqsForSave
  }));

  const FAQItem = ({ faq, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [editData, setEditData] = useState({
      question: faq.question,
      answer: faq.answer,
      isActive: faq.isActive
    });

    const isEditing = editingFaq === faq.id;

    return (
      <div className="border border-gray-600 rounded-lg bg-gray-700 overflow-hidden">
        <div className="p-4">
          {isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Question
                </label>
                <input
                  type="text"
                  value={editData.question}
                  onChange={(e) => setEditData({...editData, question: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter FAQ question"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Answer
                </label>
                <textarea
                  value={editData.answer}
                  onChange={(e) => setEditData({...editData, answer: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Enter FAQ answer"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`active-${faq.id}`}
                  checked={editData.isActive}
                  onChange={(e) => setEditData({...editData, isActive: e.target.checked})}
                  className="rounded border-gray-600 bg-gray-800 text-purple-500"
                />
                <label htmlFor={`active-${faq.id}`} className="text-sm text-gray-300">
                  Active
                </label>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => handleUpdateFaq(faq.id, editData)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Save
                </Button>
                <Button
                  onClick={() => setEditingFaq(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 text-sm"
                >
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                    {faq.isLocal && (
                      <span className="px-2 py-1 bg-orange-600 text-white text-xs rounded-full">
                        Not Saved
                      </span>
                    )}
                    {!faq.isActive && (
                      <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                        Inactive
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Hide Answer
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Show Answer
                      </>
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-3 p-3 bg-gray-800 rounded-lg">
                      <p className="text-gray-300 whitespace-pre-wrap">{faq.answer}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <div className="flex flex-col gap-1">
                    {index > 0 && (
                      <button
                        onClick={() => moveItem(index, index - 1)}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                        title="Move up"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                    )}
                    {index < faqs.length - 1 && (
                      <button
                        onClick={() => moveItem(index, index + 1)}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                        title="Move down"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  <Button
                    onClick={() => setEditingFaq(faq.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    onClick={() => handleDeleteFaq(faq.id)}
                    className="bg-red-600 hover:bg-red-700 text-white p-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Blog FAQs ({faqs.length})
        </h3>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add FAQ
        </Button>
      </div>

      {showForm && (
        <div className="border border-gray-600 rounded-lg p-4 bg-gray-700">
          <h4 className="text-md font-medium text-white mb-4">Add New FAQ</h4>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Question *
              </label>
              <input
                type="text"
                value={newFaq.question}
                onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter FAQ question"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Answer *
              </label>
              <textarea
                value={newFaq.answer}
                onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Enter FAQ answer"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="newFaqActive"
                checked={newFaq.isActive}
                onChange={(e) => setNewFaq({...newFaq, isActive: e.target.checked})}
                className="rounded border-gray-600 bg-gray-800 text-purple-500"
              />
              <label htmlFor="newFaqActive" className="text-sm text-gray-300">
                Active
              </label>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleAddFaq}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Add FAQ
              </Button>
              <Button
                onClick={() => {
                  setShowForm(false);
                  setNewFaq({ ...DEFAULT_FAQ });
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-400">Loading FAQs...</p>
          </div>
        ) : !Array.isArray(faqs) || faqs.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p>No FAQs added yet. Click "Add FAQ" to get started.</p>
          </div>
        ) : (
          faqs.map((faq, index) => (
            <FAQItem key={faq.id || faq._id || index} faq={faq} index={index} />
          ))
        )}
      </div>
    </div>
  );
});

export default BlogFAQManager;