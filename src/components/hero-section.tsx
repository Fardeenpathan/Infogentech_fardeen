import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Glass card container */}
            <div className="relative bg-black/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-lg">
              {/* Icon */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
                </div>
              </div>
              
              {/* Main heading */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Best </span>
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Design</span>
                <span className="text-white">.</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Development</span>
                <span className="text-white">.</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Marketing</span>
                <span className="text-white">.</span>
              </h1>
              
              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We become your digital department bringing strategy, creativity,
                and technical expertise to accelerate your business growth.
              </p>
              
              {/* CTA Button */}
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-medium text-lg group">
                Get Start 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
          
          {/* Right side - Visual space for the geometric background */}
          <div className="hidden lg:block">
            {/* This space is for the background geometric elements */}
          </div>
        </div>
      </div>
    </div>
  )
}
