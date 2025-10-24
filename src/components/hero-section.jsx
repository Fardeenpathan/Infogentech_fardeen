import Icons from "./ui/Icon";

export function HeroSection() {
  return (
    <div className="container mx-auto md:px-10 pl-4 pr-10">
      <video
        className="absolute top-0 left-0 w-full sm:h-240 h-184  object-cover bg-transparent -z-10 "
        src="https://res.cloudinary.com/dpmceu66e/video/upload/v1761296720/blog-app/blogs/blogs/1761296714456-homevideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="max-w-3xl sm:mt-36 mt-12 bg-transparent  border border-white/10 rounded-2xl md:px-7 pt-13 px-2  backdrop-blur-[51.97px] z-20
         shadow-[inset_0px_0px_95.27px_0px_rgba(242,242,242,0.5),
                  inset_0px_0px_0px_4.33px_rgba(153,153,153,1),
                  inset_-8.66px_-8.66px_4.33px_-8.66px_rgba(179,179,179,1),
                  inset_8.66px_8.66px_4.33px_-8.66px_rgba(179,179,179,1),
                  inset_12.99px_12.99px_2.17px_-15.16px_rgba(255,255,255,0.5)]"
      >
        <div className="flex mb-8 md:gap-9 gap-3">
          <div className="flex  items-center flex-col">
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-0.5 h-40 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </div>
          <div>
            <div>
              <h1
                className="text-2xl sm:text-4xl md:text-6xl font-avalors uppercase align-middle bg-[linear-gradient(91.32deg,#6A27FF_-32.61%,#FFFFFF_19.98%,#6A27FF_112.29%)]
              bg-clip-text text-transparent leading-[120%] tracking-[-0.75px]"
              >
                <span className="">Best Design. </span>
                <br />
                <span className="">Development.</span>
                <br />
                <span className="">Marketing.</span>
              </h1>
            </div>
            <div className="mt-3 md:mt-9 mb-10">
              <p className="text-gray-300 text-lg font-jost mb-8 font-medium align-middle">
                We don’t just build solutions – we create possibilities. From
                startups to enterprises, let us make tech work for you, not the
                other way around.
              </p>
              <a
                href="contact"
                className="inline-block p-[2px] rounded-xl 
             [background:linear-gradient(270deg,rgba(0,0,0,0)_4.64%,rgba(0,0,0,0.63)_82.81%)]"
              >
                <span
                  className="flex gap-2 items-center 
                  text-lg font-jost px-10 py-3 
                  rounded-[10px] 
                  bg-[#7544E4] 
                  text-white 
                  custom-shadow"
                >
                  Get Started &nbsp;
                  <Icons name="Arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
