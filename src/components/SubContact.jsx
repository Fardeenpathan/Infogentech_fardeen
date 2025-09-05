import React from "react";
import MidHeader from "./MidHeader";
import Image from "next/image";
export default function SubContact() {
  return (
    <>
      <MidHeader
        name="We’d love to hear from you!"
        subheading="With teams across the globe, we’re ready to connect and support you wherever you are."
        paragraph="We are currently based at"
      />
      <div
        className=" mt-36 bg-transparent h-128 border border-white/10 rounded-2xl pl-7 pr-7 pt-13 mx-38  backdrop-blur-[51.97px] z-20
               shadow-[inset_0px_0px_95.27px_0px_rgba(242,242,242,0.5),
                        inset_0px_0px_0px_4.33px_rgba(153,153,153,1),
                        inset_-8.66px_-8.66px_4.33px_-8.66px_rgba(179,179,179,1),
                        inset_8.66px_8.66px_4.33px_-8.66px_rgba(179,179,179,1),
                        inset_12.99px_12.99px_2.17px_-15.16px_rgba(255,255,255,0.5)]"
      >
        <div className="flex mb-8 gap-9">
          
          <div className="flex justify-center items-center flex-col"></div>
        </div>
      </div>
    </>
  );
}
