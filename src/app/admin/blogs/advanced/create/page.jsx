"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AdvancedCreateBlogPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link 
          href="/admin/blogs" 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>

      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Advanced Block Editor</h1>
        <p className="text-gray-400 mb-6">
          This is a placeholder for the advanced block editor. 
          Currently, please use the Rich Text Editor for creating blogs.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/admin/blogs/create">
            <Button variant="primary">
              Use Rich Text Editor
            </Button>
          </Link>
          <Link href="/admin/blogs">
            <Button variant="secondary">
              Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}