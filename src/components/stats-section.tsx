import { Badge } from "@/components/ui/badge";
import { SVGImage } from "@/components/ui/svgImage";

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
    // <div className="relative py-20 px-6">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Awards badges */}
    //     <div className="flex flex-wrap justify-center gap-4 mb-16">
    //       <Badge variant="outline" className="bg-purple-950/50 border-purple-500 text-purple-300 px-6 py-2 text-sm">
    //         <span className="mr-2">🏆</span>
    //         Top US Agency 2025
    //       </Badge>
    //       <Badge variant="outline" className="bg-purple-950/50 border-purple-500 text-purple-300 px-6 py-2 text-sm">
    //         <span className="mr-2">📅</span>
    //         2023 Best Agency
    //       </Badge>
    //     </div>

    //     {/* Main content area */}
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl lg:text-5xl font-bold mb-4">
    //         <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
    //           Fact And Numbers
    //         </span>
    //       </h2>
    //       <p className="text-gray-400 text-lg">
    //         Our dedication to delivering exceptional results
    //       </p>
    //     </div>

    //     {/* Stats grid */}
    //     <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
    //       {stats.map((stat, index) => (
    //         <StatItem
    //           key={index}
    //           number={stat.number}
    //           label={stat.label}
    //           color={stat.color}
    //         />
    //       ))}
    //     </div>

    //     {/* Company logos section - placeholder for the circular logos */}
    //     <div className="flex justify-center mt-16">
    //       <div className="flex items-center space-x-4 opacity-30">
    //         {[...Array(3)].map((_, i) => (
    //           <div key={i} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
    //             <div className="w-6 h-6 bg-white/20 rounded-full"></div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // ------------------------------------------------------
    <div className="mt-39 mb-200 mx-14 h-85 border  border-white px-23">
      <div className="flex flex-row py-12">
        <div className="flex flex-row   space-x-8 ">
          <div className="flex flex:row border-1  border-[#8752FF]  px-7 h-11  space-x-2 w-auto  justify:center rounded-2xl items-center  ">
            <SVGImage width="16" height="16" name="globe" />

            <div className="text-[#8752FF] font-Jost  text-xl vertical-trim leading-[100%] tracking-tight-3">
              Top US Agency 2025
            </div>
          </div>

          <div className="flex flex:row border-1 border-[#8752FF]  px-7 h-11  space-x-2 w-auto  justify:center rounded-2xl items-center ">
            <SVGImage width="16" height="13" name="award" />

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

        <div className="flex flex-col space-y-3">

          <div className="flex flex-row font-Jost font-bold text-6xl leading-[100%]  tracking-[-0.03em] uppercase">
            <div className=" bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent ml-7">
              250
            </div>
            <div className="text-[#8752FF] font-bold">
              +
            </div>

          </div>

          <div className="font-Jost text-[#FFFFFF] text-2xl leading-6  h-6 mt-3">
            Projects Delivered
          </div>

        </div>

        <div className="h-18 border-l border-gray-400 mx-34"></div>
        <div className="flex flex-col space-y-3">

          <div className="flex flex-row font-Jost font-bold text-6xl leading-[100%]  tracking-[-0.03em] uppercase">
            <div className=" bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent ml-15">
              7
            </div>
            <div className="text-[#8752FF] font-bold">
              +
            </div>

          </div>

          <div className="font-Jost text-[#FFFFFF] text-2xl leading-6  h-6 mt-3">
            Years of Experience
          </div>

        </div>

         <div className="h-18 border-l border-gray-400 mx-34"></div>

          <div className="flex flex-col space-y-3">

          <div className="flex flex-row font-Jost font-bold text-6xl leading-[100%]  tracking-[-0.03em] uppercase">
            <div className=" bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent ml-12">
              25
            </div>
            <div className="text-[#8752FF] font-bold">
              +
            </div>

          </div>

          <div className="font-Jost text-[#FFFFFF] text-2xl leading-6  h-6 mt-3">
           Professional Teams
          </div>

        </div>

         <div className="h-18 border-l border-gray-400 mx-34"></div>

           <div className="flex flex-col space-y-3">

          <div className="flex flex-row font-Jost font-bold text-6xl leading-[100%]  tracking-[-0.03em] uppercase">
            <div className=" bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent ml-1">
              80
            </div>
            <div className="text-[#8752FF] font-bold">
              %
            </div>

          </div>

          <div className="font-Jost text-[#FFFFFF] text-2xl leading-6  h-6 mt-3">
           Active Client
          </div>

        </div>

      </div>

      {/* <div className="h-[2px] w-full bg-gradient-to-r from-[#A177FF] to-[#523399]"></div> */}
    </div>
  );
}
