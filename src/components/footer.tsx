import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Infogentech logo"
                width={43}
                height={42}
              />
              <Image
                src="/CompanyName.svg"
                alt="Infogentech"
                width={169}
                height={42}
                className="ml-2"
              />
            </div>
            <p className="text-gray-400 text-sm">
              We become your digital department bringing strategy, creativity, and technical expertise to accelerate your business growth.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Blogs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              123 Digital Street, Tech City, 90210
            </p>
            <p className="text-gray-400 text-sm">
              Email: info@infogentech.com
            </p>
            <p className="text-gray-400 text-sm">
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Infogentech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
