

export default function StatsItem({value, suffix, label}: {value: string, suffix: string, label: string}) {
    return (
          <div className="flex flex-col space-y-3 items-center">

          <div className="inline-block flex-row font-Jost font-bold text-6xl leading-[100%]  tracking-[-0.03em] uppercase">
            <div className="inline-block bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent ">
              {value}
            </div>
            <div className="text-[#8752FF] font-bold inline-block">
             {suffix}
            </div>

          </div>

          <div className="inline-block font-Jost text-[#FFFFFF] text-2xl leading-6  h-6 mt-3">
           {label}
          </div>

        </div>

    );

}
