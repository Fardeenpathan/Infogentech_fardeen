

export default function StatsItem({value, suffix, label ,color ="text-primary"}) {
    return (
          <div className="flex flex-col space-y-3 items-center text-nowrap">

          <div className="inline-block flex-row font-Jost font-bold xl:text-6xl md:text-5xl sm:text-4xl text-3xl  tracking-[-0.03em] uppercase">
            <div className="inline-block bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] bg-clip-text text-transparent ">
              {value}
            </div>
            <div className={ `font-bold inline-block ${color}`}>
             {suffix}
            </div>
          </div>
          <div className="inline-block font-Jost text-[#FFFFFF] xl:text-2xl text-[16px]  leading-6  h-6 mt-3">
           {label}
          </div>

        </div>

    );

}
