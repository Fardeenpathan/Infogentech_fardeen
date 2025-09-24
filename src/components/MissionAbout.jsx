export default function MissionAbout() {
  return (
<div className="flex justify-between mx-auto">
  <div className=" items-center mb-10 flex-col lg:flex hidden">
    <div className="w-12 h-12">
      <img
        src="/assist/video/pentagonVideo.gif"
        alt="valueImg"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-0.5 h-[250px] xl:h-[300px] rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
  </div>

  <div className="flex flex-col-reverse lg:flex-row md:pl-10 pl-2 md:gap-10 gap-6 items-center">
    <div className="flex flex-col lg:basis-1/2">
      <p className="md:text-[32px] text-2xl leading-[150%] capitalize font-avalors text-primary">
        Our Vision And Mission
      </p>
      <p className="2xl:text-[26px]  md:text-lg  font-medium leading-[150%] text-sm align-middle font-jost text-[#C9C9C9]">
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
    <div className="lg:basis-[30%] flex justify-center md:justify-start shrink-0 items-center">
      <img
        src="/assist/video/about.gif"
        alt=""
        className="opacity-40 max-w-full h-auto"
      />
    </div>
  </div>
</div>

  );
}
