import StatsItem from "./stats-item";
import Icons from "./ui/Icon";
import { VerticalLine } from "./ui/vertical-line";

export function StatsSection() {
  return (
    <div className="mx-14 h-85 xl:px-23 px-0 md:mt-76 sm:mt-102 mt-40 bg-[url('/assist/img/stateBackGround.png')]  hover:bg-[url('/assist/img/statebackGroundHover.png')]  longContainer mx-auto">
      <div className="flex xl:flex-row flex-col items-center justify-between md:mb-10 mb-0  xl:py-12 container mx-auto py-5">
        <div className="flex flex-row  sm:space-x-8 space-x-1.5">
          <div className="flex flex:row border-1 border-[rgb(135,82,255)] sm:px-7 px-2 h-11 space-x-2 w-auto rounded-md items-center">
            <div className="text-[#8752FF] font-Jost  2xl:text-xl text-[15px] md:text-lg vertical-trim  tracking-tight-3 flex justify-center items-center gap-2 text-nowrap">
              <Icons name="Globe" />
              Top US Agency 2025
            </div>
          </div>
          <div className="flex flex:row border-1 border-[#8752FF] sm:px-7 px-2 h-11 space-x-2 w-auto rounded-md items-center">
            <div className="text-[#8752FF] font-Jost  md:text-xl text-[15px] text-lg vertical-trim  tracking-tight-3 flex justify-center items-center gap-2 text-nowrap">
              <Icons name="Crown" /> Awarded Digital Partner
            </div>
          </div>
        </div>
       <div className="hidden xl:flex flex-row items-center px-2 w-full">
  <span className="h-[1px] min-w-[2.5rem] flex-1 bg-[#8752FF]"></span>
  <span className="w-1 h-1 rounded-full bg-[#8752FF]"></span>
</div>
        <div className="xl:mt-0 mt-5 flex flex-col space-y-2 justify-center items-center ml:px-2 px-1">
          <div className="font-avalors font-normal lg:text-[32px]  xl:text-[26px] text-[22px] leading-6 align-middle text-[#8752FF] text-center text-nowrap">
            FACTS AND NUMBERS
          </div>
          <div className="font-jost font-medium md:text-lg leading-6 align-middle text-center text-nowrap text-[15px]">
            Our dedication to delivering exceptional results
          </div>
        </div>
        
      <div className="hidden xl:flex flex-row items-center px-2 w-full">
        <span className="w-1 h-1 rounded-full bg-[#8752FF]"></span>
  <span className="h-[1px] min-w-[2.5rem] flex-1 bg-[#8752FF]"></span>
  
</div>

        <div className="hidden xl:block">
          <Icons name="Circles" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  font-jost md:divide-x divide-gray-200  justify-between">
        <StatsItem value="250" suffix="+" label="Projects Delivered" />
        <StatsItem value="7" suffix="+" label="Years of Expertise" />
        <StatsItem value="25" suffix="+" label="Professional Team" />
        <StatsItem value="80" suffix="+" label="Active Client" />
      </div>
    </div>
  );
}
