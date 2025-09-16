import config from '@/config';

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
        } catch (parseError) {
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
}

const adminApiService = new AdminApiService();

export default adminApiService;