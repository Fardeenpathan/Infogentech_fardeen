import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo and brand */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3">
          {/* Logo icon - exact purple grid */}
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md flex items-center justify-center p-1">
            <div className="grid grid-cols-3 gap-0.5 w-full h-full">
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
            </div>
          </div>
          <span className="text-white font-semibold text-lg">infogentech</span>
        </div>
        
        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
            Services
          </Link>
          <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
            Portfolio
          </Link>
        </div>
      </div>

      {/* Right side navigation */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
            Blogs
          </Link>
          <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
            Contact us
          </Link>
          <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
            About us
          </Link>
        </div>
        <Button 
          variant="outline" 
          className="bg-transparent border-purple-500 text-white hover:bg-purple-600 hover:border-purple-600 text-sm px-4 py-2"
        >
          Free Consultation
        </Button>
      </div>
    </nav>
  )
}
