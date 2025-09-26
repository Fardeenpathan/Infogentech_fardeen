import Icons from "@/components/ui/Icon";

const PortfolioHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="absolute overflow-hidden xl:block hidden">
        <Icons name="BlurEffectLeft" />
      </div>
       <div className="absolute overflow-hidden right-0 ">
        <Icons name="BlurEffectRight" />
      </div>
      <Icons name="PortHome" />
      <div className="flex gap-7 flex-row justify-center items-center md:mt-43 mt-20">
        <div className="flex justify-center items-center flex-col">
          <p className="font-avalors font-normal md:text-[75px] text-5xl leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
            Our Work
          </p>
          <p className="font-avalors font-normal md:text-[75px] text-5xl text-nowrap leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
            Our <span className="text-primary">Projects</span>
          </p>
          <p className="font-jost md:text-lg text-[16px] font-medium leading-6 tracking-normal text-center align-middle mt-6">
            At Infogentech, every project shows our focus on innovation,
            quality, and making a difference. Take a look at the solutions we've
            built and meet the team that turns ideas into reality.
          </p>
          <div className="w-0.5 md:h-28 h-20 rounded-full md:mb-10 md-5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
          <div className="relative w-12 h-12">
            <img
              src="/assist/video/pentagonVideo.gif"
              alt="valueImg"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Icons name="PortHomeRight" />
    </div>
  );
};

export default PortfolioHeader;
