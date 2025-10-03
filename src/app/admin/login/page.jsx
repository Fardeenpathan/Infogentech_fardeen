"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://97fzff04-5000.inc1.devtunnels.ms/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', result.token);
        router.push('/admin/dashboard');
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <Image
            src="/logo.svg"
            alt="Infogentech"
            width={120}
            height={40}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Admin Portal
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access the admin dashboard
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A27FF] focus:border-[#6A27FF]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A27FF] focus:border-[#6A27FF]"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#6A27FF] hover:bg-[#5a1fdd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6A27FF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <div className="text-center text-xs text-gray-500">
          <p>Demo credentials:</p>
          <p>Email: admin@yourcompany.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
}