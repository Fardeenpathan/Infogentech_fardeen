import Button from "@/components/ui/Button";
import Image from "next/image";
const Blogs = () => {
  return (
    <div className="container mx-auto mt-24 overflow-hidden">
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          Insights & Innovation
        </p>
        <p className="font-jost text-[18px] font-medium leading-[24px] text-center mt-6">
          Check out our latest ideas, tech trends, and success stories where
          smart planning meets real results and creative ideas make an impact.
        </p>
        <div className="flex w-[504px] h-[74px] items-center border border-gray-600 rounded-[10px] overflow-hidden bg-transparent p-1 mt-11">
          <input
            type="text"
            placeholder="Search article"
            className="flex-1 h-full text-white placeholder-gray-600 bg-transparent focus:outline-none  pl-8 py-6 font-jost text-[20px] leading-[100%] tracking-[0.03em]"
          />
          <Button text="Explore" className="!text-black" />
        </div>
        <div className="w-0.5 h-28 rounded-full mb-10 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
        <div className="relative w-12 h-12">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mt-8 w-[1200px] rounded-2xl shadow-lg">
          <Image
            src="/assist/img/blogImg.png"
            alt="Blog"
            width={1200}
            height={660}
            className="object-cover"
          />
          <div className="absolute -bottom-16  bg-[#15152A] p-6 text-white rounded-b-2xl mx-30">
            <div className="flex items-center gap-4 mb-3">
              <span className="border border-white rounded-md px-4 py-1 text-sm">
                Popular
              </span>
              <span className="text-sm text-[#7E8EF1]">April 28, 2024</span>
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              10 Best Design Resources for 2024: After trying 100+ Here are My
              Top Picks
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              In the ever-evolving world of design, where innovation meets
              aesthetics, finding the perfect resources to fuel your creative
              journey can be a rewarding yet daunting ...
              <a href="#" className="text-[#7E8EF1] underline">
                Continue reading
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
