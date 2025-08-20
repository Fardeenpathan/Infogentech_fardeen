import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="flex bg-transparent top-6.25 fixed w-full justify-between items-center z-50 ">
      {/* Logo and brand */}
      <div className="flex items-center ml-38 border-1 border-[#8E8E8E] rounded-md ">
        <div className="flex items-center pl-3.75 py-2.25 space-x-1.5">
          {/* Logo icon - exact purple grid */}
          {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md flex items-center justify-center p-1">
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
          </div> */}
          <Image 
            src="/logo.svg" 
            alt="Infogentech logo" 
            width={43} 
            height={42} 
             />

            {/* <img src="/logo.webp" alt="Infogentech" /> */}


          <Image 
            src="/CompanyName.svg" 
            alt="Infogentech" 
            width={169} 
            height={42} 
             />

          


          {/* <span className="text-white font-semibold text-lg">infogentech</span> */}
        </div>
        <div className="space-x-12.5 py-4.5 px-12.5">
        {/* Navigation links */}
        {/* <div className="md:flex items-center space-x-8"> */}
          <Link href="#" className="text-lg font-medium font-Jost transition-colors">
            Services
          </Link>
          <Link href="#" className="text-lg font-medium font-Jost  transition-colors">
            Portfolio
          </Link>
          </div>
        </div>
      {/* </div> */}

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
