export default function MissionAbout() {
  return (
    <div className="flex container justify-between mx-auto">
      <div className="flex justify-center items-center mb-10 flex-col ">
        <div className=" w-12 h-12 ">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-0.5 h-[400px] xl:h-[300px] rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
      </div>
      <div className="flex pl-10 gap-50 left-10">
        <div className="flex flex-col basis-[50%]">
          <p className="text-[32px] leading-[150%] capitalize font-avalors text-[#8752FF]">
            Our Vision And Mission
          </p>
          <p className="lg:text-[26px] font-medium leading-[150%]  align-middle font-jost text-[#C9C9C9] xl:text-xl">
            We at Infogentech are working towards creating the future through
            new thought, smart automation, and strong strategy. Our Vision is to
            develop a stable provider that offers innovative solutions that will
            drive the industry and define the future. We are on a mission to
            fulfill the potential of advanced technologies that create a
            tangible effect, a sustainable development, and a meaningful change
            in this dynamic environment. We aspire to make complicated problems
            easier, thus helping partners to grow and remain competitive in a
            fast-changing digital world.
          </p>
        </div>
        <div className="basis-[30%]">
          <img src="/assist/video/about.gif" alt="" className="opacity-40" />
        </div>
      </div>
    </div>
  );
}
