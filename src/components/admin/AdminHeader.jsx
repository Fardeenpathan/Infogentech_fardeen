"use client";
import { useState, useEffect } from 'react';
import {User } from 'lucide-react';
import adminApiService from '@/lib/adminApi';

export default function AdminHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
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

  

  return (
    <header className="bg-[#1A1A1A] border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-white">
            Admin Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
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
    </header>
  );
}