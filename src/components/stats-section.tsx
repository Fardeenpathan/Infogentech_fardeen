
import StatsItem from "./stats-item";
import { VerticalLine } from "./ui/vertical-line";

interface StatItemProps {
  number: string;
  label: string;
  color: "purple" | "blue" | "green" | "orange";
}

function StatItem({ number, label, color }: StatItemProps) {
  const colorClasses = {
    purple: "text-purple-400",
    blue: "text-blue-400",
    green: "text-green-400",
    orange: "text-orange-400",
  };

  return (
    <div className="text-center">
      <div
        className={`text-5xl lg:text-6xl font-bold mb-3 ${colorClasses[color]}`}
      >
        {number}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { number: "250+", label: "Projects Delivered", color: "purple" as const },
    { number: "7+", label: "Years of Experience", color: "blue" as const },
    { number: "25+", label: "Professional Team", color: "green" as const },
    { number: "80%", label: "Active Client", color: "orange" as const },
  ];

  return (

    <div className="mt-39 mx-14 h-85 border  border-[#15152A] px-23">
      <div className="flex flex-row py-12">
        <div className="flex flex-row   space-x-8 ">
          {/* <div className="flex flex:row border-1  border-[#8752FF]  px-7 h-11  space-x-2 w-auto  justify:center rounded-2xl items-center  ">
            <SVGImage width="16" height="16" name="globe" />

            <div className="text-[#8752FF] font-Jost  text-xl vertical-trim leading-[100%] tracking-tight-3">
              Top US Agency 2025
            </div>
          </div> */}

          <div className="flex flex:row border-1 border-[#8752FF]  px-7 h-11  space-x-2 w-auto  justify:center rounded-2xl items-center ">
            {/* <SVGImage width="16" height="13" name="award" /> */}

            <div className="text-[#8752FF] font-Jost  text-xl vertical-trim leading-[100%] tracking-tight-3">
              2023 Best Agency
            </div>
          </div>
        </div>

        <div className="flex flex-row ml-7 space-x-4 ">
          {/* Left Ray */}
          <div className="flex flex-row mt-8">
            {/* Dot */}
            <span className="mt-[-1px] w-1 h-1 rounded-full bg-[#8752FF]"></span>

            {/* Line */}
            <span className="h-[1px] w-60 bg-[#8752FF] "></span>
          </div>

          <div className="mt-0 flex flex-col space-y-3">
            <div className="font-avalors text-[#8752FF] leading-6  h-6 text-3xl ml-10">
              FACTS AND NUMBERS
            </div>
            <div className="font-Jost text-[#FFFFFF] leading-6  h-6 text-xl ml-1">
              Our dedication to delivering exceptional results
            </div>
          </div>

          <div className="flex flex-row mt-8">
            {/* Line */}
            <span className="h-[1px] w-60 bg-[#8752FF] "></span>
            {/* Dot */}
            <span className="mt-[-1px] w-1 h-1 rounded-full bg-[#8752FF]"></span>
          </div>

          <div className="flex mt-4">
            {/* Circle 1 */}
            <div className="w-8 h-8 border-2 border-[#8752FF] rounded-full"></div>

            {/* Circle 2 (overlaps) */}
            <div className="w-8 h-8 border-2 border-[#8752FF] rounded-full -ml-2"></div>

            {/* Circle 3 (overlaps) */}
            <div className="w-8 h-8 border-2 border-[#8752FF] rounded-full -ml-2"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row ">
        <StatsItem value="250" suffix="+" label="Projects Delivered" />

        <VerticalLine height={18} color="gray-400" className="mx-34" />
        <StatsItem value="7" suffix="+" label="Years of Experience" />

        <VerticalLine height={18} color="gray-400" className="mx-34" />

        <StatsItem value="25" suffix="+" label="Professional Teams" />

        <VerticalLine height={18} color="gray-400" className="mx-34" />

        <StatsItem value="80" suffix="%" label="Active Client" />
      </div>

      
    </div>
  );
}
