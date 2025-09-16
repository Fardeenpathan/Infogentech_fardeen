"use client";
import { useState, useEffect } from 'react';
import { Bell, User, Check } from 'lucide-react';
import adminApiService from '@/lib/adminApi';

export default function AdminHeader() {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    fetchUser();
    fetchNotifications();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await adminApiService.getCurrentUser();
      if (response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  const fetchNotifications = async () => {
    try {
      // Get unread contacts as notifications
      const response = await adminApiService.getContacts({ limit: 5, isRead: false });
      if (response.data) {
        setNotifications(response.data);
        setUnreadCount(response.data.filter(contact => !contact.isRead).length);
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  const markAsRead = async (contactId) => {
    try {
      await adminApiService.updateContact(contactId, { isRead: true });
      // Refresh notifications
      await fetchNotifications();
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <header className="bg-[#1A1A1A] border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-white">
            Admin Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-400 hover:text-white transition-colors relative"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-[#1A1A1A] border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="text-sm font-medium text-white">Recent Contacts</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((contact) => (
                      <div key={contact._id} className="p-4 border-b border-gray-700 hover:bg-[#0A0A0A] transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{contact.name}</p>
                            <p className="text-xs text-gray-400">{contact.email}</p>
                            <p className="text-xs text-gray-500 mt-1">{contact.productQuestion}</p>
                            <p className="text-xs text-gray-600 mt-1">{formatDate(contact.createdAt)}</p>
                          </div>
                          {!contact.isRead && (
                            <button
                              onClick={() => markAsRead(contact._id)}
                              className="ml-2 p-1 text-gray-400 hover:text-green-400 transition-colors"
                              title="Mark as read"
                            >
                              <Check size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-400">
                      <p className="text-sm">No recent contacts</p>
                    </div>
                  )}
                </div>
                <div className="p-3 border-t border-gray-700">
                  <a
                    href="/admin/contacts"
                    className="block text-center text-sm text-[#6A27FF] hover:text-[#5a1fdd] transition-colors"
                    onClick={() => setShowNotifications(false)}
                  >
                    View all contacts
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* User info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#6A27FF] rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="text-sm">
              <div className="text-white font-medium">
                {user?.name || 'Admin User'}
              </div>
              <div className="text-gray-400">
                {user?.email || 'admin@yourcompany.com'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close notifications */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowNotifications(false)}
        />
      )}
    </header>
  );
}