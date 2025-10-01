"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  Users, 
  LogOut,
  Menu,
  X,
  Tag,
  FileText
} from 'lucide-react';
import adminApiService from '@/lib/adminApi';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Contacts',
    href: '/admin/contacts',
    icon: MessageSquare,
  },
  {
    title: 'Categories',
    href: '/admin/categories',
    icon: Tag,
  },
  // {
  //   title: 'Blogs',
  //   href: '/admin/blogs',
  //   icon: FileText,
  // },
  // {
  //   title: 'Settings',
  //   href: '/admin/settings',
  //   icon: Settings,
  // },
];

export default function AdminSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    adminApiService.logout();
  };

  const isActive = (href) => pathname === href;

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#1A1A1A] text-white rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#1A1A1A] border-r border-gray-700 
        transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-gray-700">
            <div className="text-xl font-bold text-white">
              Infogentech Admin
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                    ${isActive(item.href)
                      ? 'bg-[#6A27FF] text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="px-4 py-4 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors w-full"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}