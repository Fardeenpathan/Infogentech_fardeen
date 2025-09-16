"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Search,
  Download,
  Eye,
  MessageSquare
} from 'lucide-react';
import adminApiService from '@/lib/adminApi';
import { useDebounce } from '@/hooks/useDebounce';
import Loader from "@/components/loader/Loader";
import config from '@/config';

const ITEMS_PER_PAGE = config.app.pagination.defaultLimit;

const STATUS_COLORS = {
  pending: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  'in-progress': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  resolved: 'bg-green-500/20 text-green-400 border border-green-500/30',
  closed: 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
};

const PRIORITY_COLORS = {
  low: 'bg-green-500/20 text-green-400 border border-green-500/30',
  medium: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  high: 'bg-red-500/20 text-red-400 border border-red-500/30'
};

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    priority: '',
    page: 1,
    limit: ITEMS_PER_PAGE
  });
  const [pagination, setPagination] = useState({});
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Debounce search term to avoid too many API calls
  const debouncedSearchTerm = useDebounce(searchTerm, config.app.debounce.searchDelay);

  useEffect(() => {
    // Initialize filters from URL params
    const initialFilters = {
      search: searchParams.get('search') || '',
      status: searchParams.get('status') || '',
      priority: searchParams.get('priority') || '',
      page: parseInt(searchParams.get('page')) || 1,
      limit: ITEMS_PER_PAGE
    };
    setFilters(initialFilters);
    setSearchTerm(initialFilters.search);
  }, [searchParams]);

  // Update search in filters when debounced search term changes
  useEffect(() => {
    if (debouncedSearchTerm !== filters.search) {
      setFilters(prev => ({
        ...prev,
        search: debouncedSearchTerm,
        page: 1
      }));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    fetchContacts();
  }, [filters]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await adminApiService.getContacts(filters);
      if (response.data) {
        setContacts(response.data);
        setPagination({
          total: response.total,
          count: response.count,
          currentPage: filters.page,
          totalPages: Math.ceil(response.total / filters.limit)
        });
      }
    } catch (error) {
      setError('Failed to load contacts');
      console.error('Contacts fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    if (key === 'search') {
      // Update search term immediately for UI responsiveness
      setSearchTerm(value);
      return;
    }
    
    const newFilters = { ...filters, [key]: value, page: 1 };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const updateURL = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach(key => {
      if (newFilters[key] && newFilters[key] !== '') {
        params.set(key, newFilters[key]);
      }
    });
    router.push(`/admin/contacts?${params.toString()}`);
  };

  const handlePageChange = (page) => {
    const newFilters = { ...filters, page };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const handleSelectContact = (contactId) => {
    setSelectedContacts(prev => 
      prev.includes(contactId)
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };


  const handleExport = async () => {
    try {
      const response = await adminApiService.exportContacts();
      if (response.data) {
        const csvContent = convertToCSV(response.data);
        downloadCSV(csvContent, 'contacts.csv');
      }
    } catch (error) {
      console.error('Export error:', error);
    }
  };

  const convertToCSV = (data) => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Question', 'Status', 'Priority', 'Created At'];
    const rows = data.map(contact => [
      contact.id,
      contact.name,
      contact.email,
      contact.phoneNumber,
      contact.productQuestion,
      contact.status,
      contact.priority,
      new Date(contact.createdAt).toLocaleDateString()
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const downloadCSV = (content, filename) => {
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader/>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Contacts</h1>
          <p className="text-gray-400 mt-1">
            Manage and respond to customer inquiries
          </p>
        </div>
        <button
          onClick={handleExport}
          className="inline-flex items-center px-4 py-2 bg-[#6A27FF] hover:bg-[#5a1fdd] text-white rounded-lg transition-colors"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A27FF]"
            />
            {searchTerm && searchTerm !== debouncedSearchTerm && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin h-4 w-4 border-2 border-gray-400 border-t-[#6A27FF] rounded-full"></div>
              </div>
            )}
          </div>

          {/* Status Filter */}
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="px-4 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#6A27FF]"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>

          {/* Priority Filter */}
          <select
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
            className="px-4 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#6A27FF]"
          >
            <option value="">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSearchTerm('');
              setFilters({
                search: '',
                status: '',
                priority: '',
                page: 1,
                limit: ITEMS_PER_PAGE
              });
              router.push('/admin/contacts');
            }}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>
          Showing {((filters.page - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(filters.page * ITEMS_PER_PAGE, pagination.total)} of {pagination.total} contacts
        </span>
        {selectedContacts.length > 0 && (
          <span>{selectedContacts.length} selected</span>
        )}
      </div>

      {/* Contacts Table */}
      <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0A0A0A] border-b border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">
                 S.No
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Question Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {contacts.map((contact , index) => (
                <tr key={contact._id} className="hover:bg-[#0A0A0A] transition-colors">
                  <td className="px-4 py-3">
                   {index+1}
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <div className="text-sm font-medium text-white">
                        {contact.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {contact.email}
                      </div>
                      <div className="text-xs text-gray-500">
                        {contact.phoneNumber}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-300">
                      {contact.productQuestion}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[contact.status] || 'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${PRIORITY_COLORS[contact.priority] || 'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
                      {contact.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {formatDate(contact.createdAt)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <button
                        onClick={() => router.push(`/admin/contacts/${contact._id}`)}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="px-4 py-3 border-t border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(filters.page - 1)}
                disabled={filters.page === 1}
                className="px-3 py-1 text-sm bg-[#0A0A0A] border border-gray-600 rounded-lg text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 text-sm rounded-lg ${
                    page === filters.page
                      ? 'bg-[#6A27FF] text-white'
                      : 'bg-[#0A0A0A] border border-gray-600 text-gray-400 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(filters.page + 1)}
                disabled={filters.page === pagination.totalPages}
                className="px-3 py-1 text-sm bg-[#0A0A0A] border border-gray-600 rounded-lg text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {contacts.length === 0 && !loading && (
        <div className="text-center py-12">
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-white">No contacts found</h3>
          <p className="mt-1 text-sm text-gray-400">
            {filters.search || filters.status || filters.priority
              ? 'Try adjusting your filters'
              : 'No contacts have been submitted yet'}
          </p>
        </div>
      )}
    </div>
  );
}