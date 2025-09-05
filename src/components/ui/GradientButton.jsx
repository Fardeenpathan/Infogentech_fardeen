import React from "react";

export default function GradientButton({ children, className = "" , bg="#15152a" , paddingX="6" , paddingY="3"}) {
  return (
    <div
      className={`p-[4px] rounded-[10px] bg-gradient-to-r from-[#7544E4] to-[#FFFFFF] inline-block font-jost font-medium ${className}`}
    >
      <div className={ `rounded-md  px-${paddingX} py-${paddingY} text-white text-center cursor-pointer bg-[${bg}]`}>
        {children}
      </div>
    </div>
  );
}