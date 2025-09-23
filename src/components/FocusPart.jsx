"use client";
import Icons from "@/components/ui/Icon";

const focuses = [
  {
    icon: "GoalAbout",
    title: "Goal-Focused",
      desc: (
      <>
        Your goals guide the <br /> solutions we create.
      </>
    ),
    position: "absolute md:top-[25%]  lg:top-[23%] top-[28%] xl:-left-[380px]  lg:-left-[350px] md:-left-[290px] -left-[130px] -translate-y-1/2 text-right",
  },
  {
    icon: "QualtiyAbout",
    title: "Quality-Driven",
      desc: (
      <>
      We don’t just deliver; <br /> we deliver with excellence.
      </>
    ),
    position: "absolute md:top-[25%]  lg:top-[23%] top-[30%] xl:-right-[380px] lg:-right-[350px]  md:-right-[290px] -right-[130px] -translate-y-1/2 text-left",
  },
  {
    icon: "DigitalAbout",
    title: "Digital Experts",
     desc: (
      <>
     We solve problems using<br />creativity and the latest technology.
      </>
    ),
    position:
      "absolute bottom-[8px] md:bottom-[13px]  lg:bottom-[33px]  xl:-bottom-[13px] -left-[20%]   lg:-left-8  md:left-8 md:-translate-x-[140%] xl:-translate-x-[150%] -translate-x-[80%] text-right",
  },
  {
    icon: "AgileAbout",
    title: "Agile & Adaptive",
     desc: (
      <>
     We move quickly and<br />adapt to keep you ahead.
      </>
    ),
    position:
      "absolute bottom-[10px] md:bottom-[8px] lg:bottom-[48px]  xl:bottom-[16px] -right-[20%] lg:-right-8 md:right-8 md:translate-x-[140%] xl:translate-x-[150%] translate-x-[80%] text-left",
  },
];

const FocusPart = () => {
  return (
    <div className="relative flex items-center justify-center py-40">
      <div className="relative bg-[#15152A] shadow-[0px_0px_40px_5px_rgba(106,39,255,0.35)] rounded-xl md:px-8 md:py-6 py-3 px-3 border-2 border-[#8752FF]">
        <div className="flex items-center gap-2 z-50">
          <div className="lg:flex hidden">
            <Icons name="LogoFooter" />
          </div>
          <p className="font-avalors md:text-[24px] text-[10px] leading-8 tracking-[3px] font-bold">
            INFOGENTECH
          </p>
        </div>
        <div className="absolute md:-top-15 -top-18 xl:-right-26.5  md:-right-15.5 -right-0 -z-50">
          <Icons name="RightCurve" />
        </div>
        <div className="absolute md:-bottom-15 -bottom-18 xl:-right-26.5  md:-right-15.5 -right-0 -z-10">
          <Icons name="RightCurveBottom" />
        </div>
        <div className="absolute md:-top-15  -top-18 xl:-left-26.5 md:-left-15.5  -left-0 -z-10">
          <Icons name="LeftCurve" />
        </div>
        <div className="absolute md:-bottom-15 -bottom-18 xl:-left-26.5 md:-left-15.5 -left-0 -z-10">
          <Icons name="leftCurveBottom" />
        </div>
      </div>
      {focuses.map((item, index) => {
        const isRightAligned = item.position.includes("text-right");

        return (
          <div
            key={index}
            className={`${item.position} max-w-[230px] w-full flex flex-col gap-2 ${
              isRightAligned ? "items-end" : "items-start"
            }`}
          >
            <Icons name={item.icon} className="w-8 h-8" />

            <p className="font-jost font-medium xl:text-[20px] md:text-lg text-sm tracking-[0.03em]">
              {item.title}
            </p>
            <p
              className={`font-kumbh-sans font-medium xl:text-[20px]  text-sm leading-[120%] whitespace-normal break-words ${
                isRightAligned ? "text-right" : "text-left"
              }`}
            >
            {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FocusPart;
``
