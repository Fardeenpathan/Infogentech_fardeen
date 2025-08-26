import { Button } from '@/components/ui/button'
import "../app/globals.css"

export function HeroSection() {
  return (
    <div className="flex items-center">
      {/* <div className=" ml-38 mt-56 "> */}
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
          {/* Left side - Content */}
          {/* <div className="space-y-8"> */}
            {/* Glass card container */}
            <div className="ml-38 mt-56 w-190 relative bg-[#1A1A1A] h-128  border border-white/10 rounded-2xl pl-7 pr-12 py-13   backdrop-blur-2xl">
              {/* Icon */}
              {/* <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
                </div>
              </div> */}
              
              {/* Main heading */}
              <h1 className="text-5xl lg:text-6xl font-avalors mb-6 uppercase align-middle bg-gradient-to-r from-[#6A27FF]  to-[#FFFFFF] 
              bg-clip-text text-transparent leading-[120%] tracking-[-0.75px]">
                <span className="">Best Design. </span>
                <br />
                <span className="">Development.</span>
                <br />
                <span className="">Marketing.</span>
              </h1>
              
              {/* Description */}
              <p className="text-gray-300 text-lg font-Jost mb-8 font-medium align-middle">
                We become your digital department bringing strategy, creativity,
                and technical expertise to accelerate your business growth.
              </p>
              
              {/* CTA Button */}
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg 
              font-medium text-lg group">
                Get Start 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}
