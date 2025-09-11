import StatsItem from "./stats-item";
import Icons from "./ui/Icon";
import { VerticalLine } from "./ui/vertical-line";

export function StatsSection() {
  return (
    <div className="mx-14 h-85 px-23 mt-76 bg-[url('/assist/img/stateBackGround.png')]  hover:bg-[url('/assist/img/statebackGroundHover.png')] longContainer mx-auto">
      <div className="flex md:flex-row flex-col items-center justify-between mb-10 py-12 container mx-auto">
        <div className="flex flex-row  space-x-8 ">
          <div className="flex flex:row border-1 border-[#8752FF]  px-7 h-11  space-x-2 w-auto  rounded-md items-center ">
            <div className="text-[#8752FF] font-Jost  md:text-xl text-lg vertical-trim  tracking-tight-3 flex justify-center items-center gap-2 text-nowrap">
              <Icons name="Globe" />
              2023 Best Agency
            </div>
          </div>
          <div className="flex flex:row border-1 border-[#8752FF]  px-7 h-11  space-x-2 w-auto  rounded-md items-center ">
            <div className="text-[#8752FF] font-Jost  text-xl vertical-trim  tracking-tight-3 flex justify-center items-center gap-2 text-nowrap">
              <Icons name="Crown" /> 2023 Best Agency
            </div>
          </div>
        </div>
        <div className="flex flex-row px-2">
          <span className="mt-[-1px] w-1 h-1 rounded-full bg-[#8752FF]"></span>
          <span className="h-[1px] w-60 xl:w-30 md:w-20 bg-[#8752FF] "></span>
        </div>
        <div className="mt-0 flex flex-col space-y-2 justify-center items-center md:px-2 px-1">
          <div className="font-avalors font-normal lg:text-[32px]  xl:text-[26px] md:text-[22px] leading-[24px] tracking-[0] align-middle text-[#8752FF] text-center text-nowrap">
            FACTS AND NUMBERS
          </div>
          <div className="font-jost font-medium text-lg leading-[24px] text-[16px] align-middle text-center text-nowrap">
            Our dedication to delivering exceptional results
          </div>
        </div>
        <div className="flex flex-row px-2">
          <span className="h-[1px] w-60 xl:w-30 md:w-20 bg-[#8752FF] "></span>
          <span className="mt-[-1px] w-1 h-1 rounded-full bg-[#8752FF]"></span>
        </div>
        <div className="flex">
          <Icons name="Circles" />
        </div>
      </div>

      <div className="flex flex-row justify-between font-jost">
        <StatsItem value="250" suffix="+" label="Projects Delivered" />
        <VerticalLine height={18} color="gray-400" />
        <StatsItem value="7" suffix="+" label="Years of Experience" />
        <VerticalLine height={18} color="gray-400" />
        <StatsItem value="25" suffix="+" label="Professional Teams" />
        <VerticalLine height={18} color="gray-400" />
        <StatsItem value="80" suffix="%" label="Active Client" />
      </div>
    </div>
  );
}
