import React from "react";

export default function GradientButton({ children, className = "" , bg="bg-[#15152a]" , paddingX="px-7" , paddingY="py-3"}) {
  return (
    <div
      className={`p-[4px] rounded-[10px] bg-gradient-to-r from-[#7544E4] to-[#FFFFFF] inline-block font-jost font-medium ${className}`}
    >
      <div className={ `rounded-md   text-white text-center cursor-pointer ${paddingX} ${paddingY} ${bg}`}>
        {children}
      </div>
    </div>
  );
}