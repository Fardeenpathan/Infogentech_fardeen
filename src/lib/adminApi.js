import config from '@/config';

const appendFaqsToFormData = (formData, faqs) => {
  if (!faqs || !Array.isArray(faqs)) return;
  
  faqs.forEach((faq, index) => {
    formData.append(`faqs[${index}][question]`, faq.question?.trim() || '');
    formData.append(`faqs[${index}][answer]`, faq.answer?.trim() || '');
    formData.append(`faqs[${index}][order]`, faq.order !== undefined ? faq.order : index);
    formData.append(`faqs[${index}][isActive]`, faq.isActive !== false);
  });
};

class AdminApiService {
  constructor() {
    this.token = null;
  }

  setToken(token) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminToken', token);
    }
  }

  getToken() {
    if (!this.token && typeof window !== 'undefined') {
      this.token = localStorage.getItem('adminToken');
    }
    return this.token;
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    const token = this.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${config.api.baseUrl}${endpoint}`;
    const requestConfig = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, requestConfig);
      
      if (!response.ok) {
        let errorMessage = 'API request failed';
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = response.statusText || errorMessage;
        }

        if (response.status === 401) {
          this.logout();
          throw new Error('Session expired. Please login again.');
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Unable to connect to server. Please check your connection and try again.');
      }
      
      throw error;
    }
  }

  async login(email, password) {
    const response = await this.request(config.api.endpoints.login, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async getCurrentUser() {
    return await this.request(config.api.endpoints.me);
  }

  async updatePassword(currentPassword, newPassword) {
    return await this.request(config.api.endpoints.updatePassword, {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  logout() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
      window.location.href = '/admin/login';
    }
  }

  async getContacts(params = {}) {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== '') {
        searchParams.append(key, params[key]);
      }
    });
    
    const queryString = searchParams.toString();
    const endpoint = `${config.api.endpoints.adminContacts}${queryString ? `?${queryString}` : ''}`;
    
    return await this.request(endpoint);
  }

  async getContact(id) {
    return await this.request(config.api.endpoints.adminContactById(id));
  }

  async updateContact(id, data) {
    return await this.request(config.api.endpoints.adminContactById(id), {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteContact(id) {
    return await this.request(config.api.endpoints.adminContactById(id), {
      method: 'DELETE',
    });
  }

  async addContactNote(id, content) {
    return await this.request(config.api.endpoints.adminContactNotes(id), {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  async getContactStats() {
    return await this.request(config.api.endpoints.adminContactsStats);
  }

  async exportContacts() {
    return await this.request(config.api.endpoints.adminContactsExport);
  }

  async healthCheck() {
    return await this.request(config.api.endpoints.health);
  }

  // Categories API
  async getCategories() {
    return this.request('/api/categories');
  }

  async getCategory(id) {
    return this.request(`/api/admin/categories/${id}`);
  }

  async createCategory(categoryData) {
    const formData = new FormData();
    
    // Add basic fields
    formData.append('name', categoryData.name);
    formData.append('description', categoryData.description || '');
    formData.append('isActive', categoryData.isActive || true);
    
    // Add image file if provided
    if (categoryData.imageFile) {
      formData.append('image', categoryData.imageFile);
    }

    const token = this.getToken();
    const response = await fetch(`${config.api.baseUrl}/api/categories/admin`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async updateCategory(id, categoryData) {
    const formData = new FormData();
    
    // Add basic fields
    formData.append('name', categoryData.name);
    formData.append('description', categoryData.description || '');
    formData.append('isActive', categoryData.isActive || true);
    
    // Add image file if provided
    if (categoryData.imageFile) {
      formData.append('image', categoryData.imageFile);
    }

    const token = this.getToken();
    const response = await fetch(`${config.api.baseUrl}/api/categories/admin/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async deleteCategory(id) {
    return this.request(`/api/categories/admin/${id}`, {
      method: 'DELETE',
    });
  }

  // Blogs API
  async getBlogs(params = {}) {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== '') {
        searchParams.append(key, params[key]);
      }
    });
    
    const queryString = searchParams.toString();
    const endpoint = `/api/blogs${queryString ? `?${queryString}` : ''}`;
    return this.request(endpoint);
  }

  async getBlog(id) {
    return this.request(`/api/blogs/${id}`);
  }

  async createBlog(blogData) {
    const formData = new FormData();
    
    // Add basic fields
    formData.append('title', blogData.title);
    formData.append('slug', blogData.slug || '');
    formData.append('excerpt', blogData.excerpt);
    formData.append('category', blogData.category);
    formData.append('status', blogData.status || 'draft');
    formData.append('priority', blogData.priority || 'medium');
    formData.append('isFeatured', blogData.isFeatured || false);
    formData.append('language', blogData.language || 'en');
    formData.append('country', blogData.country || 'global');
    formData.append('region', blogData.region || 'global');

    // Add tags
    if (blogData.tags && Array.isArray(blogData.tags)) {
      blogData.tags.forEach(tag => {
        formData.append('tags[]', tag);
      });
    }

    // Add blocks
    if (blogData.blocks && Array.isArray(blogData.blocks)) {
      blogData.blocks.forEach((block, index) => {
        formData.append(`blocks[${index}][type]`, block.type);
        formData.append(`blocks[${index}][order]`, block.order || index);
        
        // Handle block data
        if (block.data) {
          Object.keys(block.data).forEach(key => {
            const value = block.data[key];
            if (key === 'items' && Array.isArray(value)) {
              // Handle list items as separate array entries
              value.forEach((item, itemIndex) => {
                formData.append(`blocks[${index}][data][items][${itemIndex}]`, item);
              });
            } else {
              formData.append(`blocks[${index}][data][${key}]`, value);
            }
          });
        }
        
        // Handle block settings
        if (block.settings) {
          Object.keys(block.settings).forEach(key => {
            formData.append(`blocks[${index}][settings][${key}]`, block.settings[key]);
          });
        }
      });
    }

    // Add SEO data
    if (blogData.seo) {
      if (blogData.seo.title) formData.append('seo[title]', blogData.seo.title);
      if (blogData.seo.description) formData.append('seo[description]', blogData.seo.description);
      if (blogData.seo.keywords && Array.isArray(blogData.seo.keywords)) {
        blogData.seo.keywords.forEach((keyword, index) => {
          formData.append(`seo[keywords][${index}]`, keyword);
        });
      }
    }

    appendFaqsToFormData(formData, blogData.faqs);

    if (blogData.featuredImageFile) {
      formData.append('featuredImage', blogData.featuredImageFile);
    }

    const token = this.getToken();
    const response = await fetch(`${config.api.baseUrl}/api/blogs/admin`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async updateBlog(id, blogData) {
    const formData = new FormData();
    
    // Add basic fields
    formData.append('title', blogData.title);
    formData.append('slug', blogData.slug || '');
    formData.append('excerpt', blogData.excerpt);
    formData.append('category', blogData.category);
    formData.append('status', blogData.status || 'draft');
    formData.append('priority', blogData.priority || 'medium');
    formData.append('isFeatured', blogData.isFeatured || false);
    formData.append('language', blogData.language || 'en');
    formData.append('country', blogData.country || 'global');
    formData.append('region', blogData.region || 'global');

    // Add tags
    if (blogData.tags && Array.isArray(blogData.tags)) {
      blogData.tags.forEach(tag => {
        formData.append('tags[]', tag);
      });
    }

    // Add blocks
    if (blogData.blocks && Array.isArray(blogData.blocks)) {
      blogData.blocks.forEach((block, index) => {
        formData.append(`blocks[${index}][type]`, block.type);
        formData.append(`blocks[${index}][order]`, block.order || index);
        
        // Handle block data
        if (block.data) {
          Object.keys(block.data).forEach(key => {
            const value = block.data[key];
            if (key === 'items' && Array.isArray(value)) {
              // Handle list items as separate array entries
              value.forEach((item, itemIndex) => {
                formData.append(`blocks[${index}][data][items][${itemIndex}]`, item);
              });
            } else {
              formData.append(`blocks[${index}][data][${key}]`, value);
            }
          });
        }
        
        // Handle block settings
        if (block.settings) {
          Object.keys(block.settings).forEach(key => {
            formData.append(`blocks[${index}][settings][${key}]`, block.settings[key]);
          });
        }
      });
    }

    // Add SEO data
    if (blogData.seo) {
      if (blogData.seo.title) formData.append('seo[title]', blogData.seo.title);
      if (blogData.seo.description) formData.append('seo[description]', blogData.seo.description);
      if (blogData.seo.keywords && Array.isArray(blogData.seo.keywords)) {
        blogData.seo.keywords.forEach((keyword, index) => {
          formData.append(`seo[keywords][${index}]`, keyword);
        });
      }
    }

    appendFaqsToFormData(formData, blogData.faqs);

    // Add featured image if it's a file
    if (blogData.featuredImageFile) {
      formData.append('featuredImage', blogData.featuredImageFile);
    }

    const token = this.getToken();
    const response = await fetch(`${config.api.baseUrl}/api/blogs/admin/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        // Don't set Content-Type for FormData, let browser set it with boundary
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async deleteBlog(id) {
    return this.request(`/api/blogs/admin/${id}`, {
      method: 'DELETE',
    });
  }

  async getBlogStats() {
    return this.request('/api/blogs/admin/stats');
  }

  // Image upload for blog content
  async uploadImage(formData) {
    const token = this.getToken();
    const response = await fetch(`${config.api.baseUrl}/api/blogs/admin/upload-image`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData, // Don't set Content-Type for FormData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Upload failed' }));
      throw new Error(errorData.message || 'Upload failed');
    }

    const result = await response.json();
    return result.data; // Return the data object which contains url, public_id, etc.
  }

  // FAQ API methods
  async getFaqs(params = {}) {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== '') {
        searchParams.append(key, params[key]);
      }
    });
    
    const queryString = searchParams.toString();
    const endpoint = `/api/faqs${queryString ? `?${queryString}` : ''}`;
    return this.request(endpoint);
  }

  async getBlogFaqs(blogId) {
    return this.request(`/api/blogs/${blogId}/faqs`);
  }

  async createBlogFaq(blogId, faqData) {
    return this.request(`/api/blogs/${blogId}/faqs`, {
      method: 'POST',
      body: JSON.stringify(faqData),
    });
  }

  async updateBlogFaq(blogId, faqId, faqData) {
    return this.request(`/api/blogs/${blogId}/faqs/${faqId}`, {
      method: 'PUT',
      body: JSON.stringify(faqData),
    });
  }

  async deleteBlogFaq(blogId, faqId) {
    return this.request(`/api/blogs/${blogId}/faqs/${faqId}`, {
      method: 'DELETE',
    });
  }
}

const adminApiService = new AdminApiService();

export default adminApiService;