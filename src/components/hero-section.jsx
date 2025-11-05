import Icons from "./ui/Icon";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-screen flex items-center md:px-20 px-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
        src="https://res.cloudinary.com/dpmceu66e/video/upload/v1761296720/blog-app/blogs/blogs/1761296714456-homevideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(270deg,rgba(0,0,0,0)_4.64%,rgba(0,0,0,0.63)_82.81%)] -z-10" />
      <div
        className="max-w-3xl  bg-transparent  border border-white/10 rounded-2xl md:px-7 lg:pt-13 pt-10 px-2  backdrop-blur-[51.97px] z-20 
        "
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
                <span>Best Design. </span>
                <br />
                <span>Development.</span>
                <br />
                <span>Marketing.</span>
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
      
    </section>
  );
}
