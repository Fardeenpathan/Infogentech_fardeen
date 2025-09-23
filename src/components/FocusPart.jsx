"use client";
import Icons from "@/components/ui/Icon";

const focuses = [
  {
    icon: "GoalAbout",
    title: "Goal-Focused",
    desc: "Your goals guide the solutions we create.",
    position: "absolute top-[25%] md:-left-[380px] -left-[150px] -translate-y-1/2 text-right",
  },
  {
    icon: "QualtiyAbout",
    title: "Quality-Driven",
    desc: "We don’t just deliver; we deliver with excellence.",
    position: "absolute top-[25%] md:-right-[380px] -right-[150px] -translate-y-1/2 text-left",
  },
  {
    icon: "DigitalAbout",
    title: "Digital Experts",
    desc: "We solve problems using creativity and the latest technology.",
    position:
      "absolute bottom-[8px] -left-[20%] md:-translate-x-[140%] -translate-x-[100%] text-right",
  },
  {
    icon: "AgileAbout",
    title: "Agile & Adaptive",
    desc: "We move quickly and adapt to keep you ahead.",
    position:
      "absolute bottom-[8px] -right-[20%] md:translate-x-[140%] translate-x-[100%] text-left",
  },
];

const FocusPart = () => {
  return (
    <div className="relative flex items-center justify-center py-40">
      {/* central box */}
      <div className="relative bg-[#15152A] shadow-[0px_0px_40px_5px_rgba(106,39,255,0.35)] rounded-xl md:px-8 md:py-6 py-3 px-3 border-2 border-[#8752FF]">
        <div className="flex items-center gap-2 z-50">
          <div className="md:flex hidden">
            <Icons name="LogoFooter" />
          </div>
          <p className="font-avalors md:text-[24px] text-[10px] leading-8 tracking-[3px] font-bold">
            INFOGENTECH
          </p>
        </div>

        {/* decorative curves */}
        <div className="absolute md:-top-20 -top-18 md:-right-26.5 -right-6.5 -z-50">
          <Icons name="RightCurve" />
        </div>
        <div className="absolute md:-bottom-15 -bottom-18 md:-right-26.5 -right-6.5 -z-10">
          <Icons name="RightCurveBottom" />
        </div>
        <div className="absolute md:-top-20 -top-18 md:-left-26.5 -left-6.5 -z-10">
          <Icons name="LeftCurve" />
        </div>
        <div className="absolute md:-bottom-15 -bottom-18 md:-left-26.5 -left-6.5 -z-10">
          <Icons name="leftCurveBottom" />
        </div>
      </div>

      {/* floating focus items */}
      {focuses.map((item, index) => {
        const isRightAligned = item.position.includes("text-right");

        return (
          <div
            key={index}
            // restrict width and let it be responsive so text can wrap
            className={`${item.position} max-w-[230px] w-full flex flex-col gap-2 ${
              isRightAligned ? "items-end" : "items-start"
            }`}
          >
            <Icons name={item.icon} className="w-8 h-8" />

            <p className="font-jost font-medium md:text-[20px] text-sm tracking-[0.03em]">
              {item.title}
            </p>

            {/* Fixed: allow wrapping, break long words, and align text to match items-* */}
            <p
              className={`font-kumbh-sans font-medium md:text-[20px] text-sm leading-[120%] whitespace-normal break-words ${
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
