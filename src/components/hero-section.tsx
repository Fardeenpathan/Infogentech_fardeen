import Image from "next/image";


export function HeroSection() {
  return (
    <div>
       <video
        className="absolute top-0 left-0 w-full h-240  object-cover bg-transparent -z-10"
        src="/assist/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className=" max-w-4xl mt-56  bg-transparent h-128  border border-white/10 rounded-2xl pl-7 pr-12 py-13   backdrop-blur-2xl mx-38">
        <h1
          className="text-5xl lg:text-6xl font-avalors  uppercase align-middle bg-gradient-to-r from-[#6A27FF]  to-[#FFFFFF] 
              bg-clip-text text-transparent leading-[120%] tracking-[-0.75px]"
        >
        <Image
          src="/assist/img/Polygon.png"
          alt="Best Design. Development. Marketing."
          layout="fill"
          width={46}
          height={46}
          objectFit="cover"
        />
          <span className="">Best Design. </span>
          <br />
          <span className="">Development.</span>
          <br />
          <span className="">Marketing.</span>
        </h1>
        <p className="text-gray-300 text-lg font-Jost mb-8 font-medium align-middle">
          We become your digital department bringing strategy, creativity, and
          technical expertise to accelerate your business growth.
        </p>
        {/* <Button
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg 
              font-medium text-lg group"
        >
          Get Start
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Button> */}
      </div>
    </div>
  );
}
