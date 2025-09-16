"use client";
import { useState, useEffect } from 'react';
import { 
  User, 
  Lock, 
  Save, 
  Eye, 
  EyeOff,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import adminApiService from '@/lib/adminApi';

export default function AdminSettings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await adminApiService.getCurrentUser();
      if (response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear message when user starts typing
    if (message) {
      setMessage('');
      setMessageType('');
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validatePassword = () => {
    if (!passwordData.currentPassword) {
      return 'Current password is required';
    }
    if (!passwordData.newPassword) {
      return 'New password is required';
    }
    if (passwordData.newPassword.length < 6) {
      return 'New password must be at least 6 characters long';
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return 'New passwords do not match';
    }
    if (passwordData.currentPassword === passwordData.newPassword) {
      return 'New password must be different from current password';
    }
    return null;
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    
    const validationError = validatePassword();
    if (validationError) {
      setMessage(validationError);
      setMessageType('error');
      return;
    }

    setSaving(true);
    try {
      await adminApiService.updatePassword(
        passwordData.currentPassword,
        passwordData.newPassword
      );
      
      setMessage('Password updated successfully');
      setMessageType('success');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage(error.message || 'Failed to update password');
      setMessageType('error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-white">Loading settings...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">
          Manage your admin account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Information */}
        <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <User className="h-5 w-5 text-[#6A27FF]" />
            <h3 className="text-lg font-semibold text-white">Profile Information</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <div className="px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white">
                {user?.name || 'N/A'}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <div className="px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white">
                {user?.email || 'N/A'}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Role
              </label>
              <div className="px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white">
                <span className="inline-flex px-2 py-1 bg-[#6A27FF] text-white text-xs font-semibold rounded-full">
                  {user?.role || 'N/A'}
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Created At
              </label>
              <div className="px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="h-5 w-5 text-[#6A27FF]" />
            <h3 className="text-lg font-semibold text-white">Change Password</h3>
          </div>
          
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            {/* Current Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.current ? 'text' : 'password'}
                  value={passwordData.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A27FF] pr-10"
                  placeholder="Enter current password"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.new ? 'text' : 'password'}
                  value={passwordData.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A27FF] pr-10"
                  placeholder="Enter new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 6 characters long
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? 'text' : 'password'}
                  value={passwordData.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A27FF] pr-10"
                  placeholder="Confirm new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Message */}
            {message && (
              <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                messageType === 'success'
                  ? 'bg-green-900/20 text-green-400 border border-green-800'
                  : 'bg-red-900/20 text-red-400 border border-red-800'
              }`}>
                {messageType === 'success' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <span className="text-sm">{message}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={saving}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#6A27FF] hover:bg-[#5a1fdd] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="mr-2 h-4 w-4" />
              {saving ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>

      {/* Security Information */}
      <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Security Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Current Session</h4>
            <p className="text-white text-sm">
              You are currently logged in. Your session will expire automatically after a period of inactivity.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Password Requirements</h4>
            <ul className="text-white text-sm space-y-1">
              <li>• Minimum 6 characters</li>
              <li>• Must be different from current password</li>
              <li>• Should contain a mix of letters and numbers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}