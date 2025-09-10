
import StatsItem from "./stats-item";
import Icons from "./ui/Icon";
import { VerticalLine } from "./ui/vertical-line";

export function StatsSection() {
  return (
    <div className="mx-14 h-85 px-23 mt-76 bg-[url('/assist/img/stateBackGround.png')]  hover:bg-[url('/assist/img/statebackGroundHover.png')] longContainer mx-auto">
      <div className="flex flex-row  items-center justify-between mb-10 py-12 container mx-auto">
        <div className="flex flex-row  space-x-8 ">
         
          <div className="flex flex:row border-1 border-[#8752FF]  px-7 h-11  space-x-2 w-auto  justify:center rounded-md items-center ">
            <div className="text-[#8752FF] font-Jost  text-xl vertical-trim  tracking-tight-3 flex justify-center items-center gap-2">
              <Icons name="Globe" />
              2023 Best Agency
            </div>
          </div>
          <div className="flex flex:row border-1 border-[#8752FF]  px-7 h-11  space-x-2 w-auto  justify:center rounded-md items-center ">

            <div className="text-[#8752FF] font-Jost  text-xl vertical-trim  tracking-tight-3 flex justify-center items-center gap-2">
              <Icons name="Crown" /> 2023 Best Agency
            </div>
          </div>
        </div>

        <div className="flex flex-row  space-x-8 ">
          <div className="flex flex-row mt-8">
            <span className="mt-[-1px] w-1 h-1 rounded-full bg-[#8752FF]"></span>
            <span className="h-[1px] w-60 bg-[#8752FF] "></span>
          </div>

          <div className="mt-0 flex flex-col space-y-3 justify-center items-center px-2">
            <div className="font-[Avalors] font-normal text-[32px] leading-[24px] tracking-[0] align-middle text-[#8752FF]">
              FACTS AND NUMBERS
            </div>
            <div className="font-[Jost] font-medium text-lg leading-[24px] tracking-[0] align-middle">
              Our dedication to delivering exceptional results
            </div>
          </div>

          <div className="flex flex-row mt-8">
            <span className="h-[1px] w-60 bg-[#8752FF] "></span>
            <span className="mt-[-1px] w-1 h-1 rounded-full bg-[#8752FF]"></span>
          </div>

          <div className="flex mt-4">
           <Icons name="Circles" />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-cente font-[Jost]">
        <StatsItem value="250" suffix="+" label="Projects Delivered" />

        <VerticalLine height={18} color="gray-400" className="mx-32" />
        <StatsItem value="7" suffix="+" label="Years of Experience" />

        <VerticalLine height={18} color="gray-400" className="mx-32" />

        <StatsItem value="25" suffix="+" label="Professional Teams" />

        <VerticalLine height={18} color="gray-400" className="mx-32" />

        <StatsItem value="80" suffix="%" label="Active Client" />
      </div>
    </div>
  );
}
