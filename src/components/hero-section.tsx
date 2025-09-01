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
      <div
        className="max-w-3xl mt-36 bg-transparent h-128 border border-white/10 rounded-2xl pl-7 pr-7 pt-13 mx-38  backdrop-blur-[51.97px] z-20
         shadow-[inset_0px_0px_95.27px_0px_rgba(242,242,242,0.5),
                  inset_0px_0px_0px_4.33px_rgba(153,153,153,1),
                  inset_-8.66px_-8.66px_4.33px_-8.66px_rgba(179,179,179,1),
                  inset_8.66px_8.66px_4.33px_-8.66px_rgba(179,179,179,1),
                  inset_12.99px_12.99px_2.17px_-15.16px_rgba(255,255,255,0.5)]"
      >
        <div className="flex mb-8 gap-9">
          <div className="flex justify-center items-center flex-col">
            <Image
              src="/assist/img/Polygon.png"
              alt="Best Design. Development. Marketing."
              width={46}
              height={46}
              objectFit="cover"
            />
            <div className="w-0.5 h-40 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </div>
          <div className="">
            <h1
              className="text-7xl lg:text-6xl font-avalors uppercase align-middle bg-[linear-gradient(91.32deg,#6A27FF_-32.61%,#FFFFFF_19.98%,#6A27FF_112.29%)]
              bg-clip-text text-transparent leading-[120%] tracking-[-0.75px]"
            >
              <span className="">Best Design. </span>
              <br />
              <span className="">Development.</span>
              <br />
              <span className="">Marketing.</span>
            </h1>
          </div>
        </div>

        <p className="text-gray-300 text-lg font-Jost mb-8 font-medium align-middle">
          We become your digital department bringing strategy, creativity, and
          technical expertise to accelerate your business growth.
        </p>
       {/* <Button className="" variant="primary" children="Get Started" /> */}
      </div>
    </div>
  );
}
