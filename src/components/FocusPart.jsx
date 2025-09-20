"use client";
import Icons from "@/components/ui/Icon";

const focuses = [
  {
    icon: "GoalAbout",
    title: "Goal-Focused",
    desc: "Your goals guide the solutions we create.",
    position: "absolute top-[25%] -left-[380px] -translate-y-1/2 text-right",
  },
  {
    icon: "QualtiyAbout",
    title: "Quality-Driven",
    desc: "We don’t just deliver; we deliver with excellence.",
    position: "absolute top-[25%] -right-[380px] -translate-y-1/2 text-left",
  },
  {
    icon: "DigitalAbout",
    title: "Digital Experts",
    desc: "We solve problems using creativity and the latest technology.",
    position:
      "absolute bottom-[8px] -left-[20%] -translate-x-[140%] text-right",
  },
  {
    icon: "AgileAbout",
    title: "Agile & Adaptive",
    desc: "We move quickly and adapt to keep you ahead.",
    position: "absolute bottom-[8px] -right-[20%] translate-x-[140%]",
  },
];

const FocusPart = () => {
  return (
    <div className="relative flex items-center justify-center  py-40">
      <div className="relative  bg-[#15152A] shadow-[0px_0px_40px_5px_rgba(106,39,255,0.35)] rounded-xl px-8 py-6 border-2 border-[#8752FF]">
        <div className="flex items-center gap-2 z-50">
          <Icons name="LogoFooter" />
          <p className="font-avalors text-[24px] leading-8 tracking-[3px] font-bold">
            INFOGENTECH
          </p>
        </div>

        <div className="absolute -top-15 -right-26.5 -z-50">
          <Icons name="RightCurve" />
        </div>
        <div className="absolute -bottom-15 -right-26.5 -z-10">
          <Icons name="RightCurveBottom" />
        </div>
        <div className="absolute -top-15 -left-26.5 -z-10">
          <Icons name="LeftCurve" />
        </div>
        <div className="absolute -bottom-15 -left-26.5 -z-10">
          <Icons name="leftCurveBottom" />
        </div>
      </div>
      {focuses.map((item, index) => (
        <div
          key={index}
          className={`${item.position} max-w-[230px] flex flex-col gap-2 ${
            item.position.includes("text-right") ? "items-end" : "items-start"
          }`}
        >
          <Icons name={item.icon} className="w-8 h-8" />
          <p className="font-jost font-medium text-[26px] tracking-[0.03em]">
            {item.title}
          </p>
          <p className="font-[Kumbh_Sans] font-medium text-[20px] leading-[120%]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FocusPart;
