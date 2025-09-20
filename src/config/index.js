// Configuration file for API endpoints and app settings
const config = {
  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
    endpoints: {
      // Auth endpoints
      login: '/api/auth/login',
      me: '/api/auth/me',
      updatePassword: '/api/auth/updatepassword',
      
      // Public endpoints
      contact: '/api/contact',
      health: '/api/health',
      
      // Admin endpoints
      adminContacts: '/api/admin/contacts',
      adminContactsStats: '/api/admin/contacts/stats',
      adminContactsExport: '/api/admin/contacts/export',
      adminContactById: (id) => `/api/admin/contacts/${id}`,
      adminContactNotes: (id) => `/api/admin/contacts/${id}/notes`,
      
      // Blog endpoints
      blogs: '/api/blogs',
      adminBlogs: '/api/blogs/admin',
      adminBlogStats: '/api/blogs/admin/stats',
      adminBlogById: (id) => `/api/blogs/admin/${id}`,
      adminUploadImage: '/api/blogs/admin/upload-image',
      
      // Category endpoints
      categories: '/api/categories',
      adminCategories: '/api/categories/admin',
      adminCategoryById: (id) => `/api/categories/admin/${id}`,
    }
  },

  app: {
    name: 'Infogentech Admin',
    version: '1.0.0',
    pagination: {
      defaultLimit: 10,
      maxLimit: 100
    },
    debounce: {
      searchDelay: 500 
    }
  },

  // reCAPTCHA Configuration
  recaptcha: {
    siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY  || 'your-recaptcha-site-key'
  }
};

export default config;