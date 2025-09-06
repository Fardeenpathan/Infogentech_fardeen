import Icons from "@/components/ui/Icon";
export default function MissionAbout() {
  return (
    <div className="flex container mx-auto relative px-30">
      <div className="flex justify-center flex-col shrink-0 ">
        <div className="relative w-12 h-12">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" ml-5 mt-8">
          <Icons name="BigCurve" />
        </div>
      </div>
      <div className="flex absolute left-50">
        <div className="flex flex-col justify-between basis-[60%]">
          <p className="text-[32px] leading-[150%] capitalize font-avalors text-[#8752FF]">
            Our Vision And Mission
          </p>
          <p className="text-[26px] font-medium leading-[150%]  align-middle font-jost text-[#C9C9C9]">
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
          <img src="/assist/img/sphere.png" alt="" className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
}
