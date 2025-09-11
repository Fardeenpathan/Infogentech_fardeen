import React from 'react';
import Icons from "@/components/ui/Icon";

const SubServiceCard = ({ subService }) => {
  return (
    <div
      className="shadow-[0px_0px_54px_24px_#1C1C38] p-5 rounded-2xl"
    >
      <span className="font-jost font-normal text-[32px] leading-[100%] tracking-[3%] opacity-10">
        {subService.id}
      </span>
      <h2 className="font-jost font-medium text-[32px] leading-[120%] tracking-[0.03em] mt-8">
        {subService.title}
      </h2>
      <p className="font-jost font-normal text-[16px] leading-[140%] tracking-[0.03em] capitalize mt-8 opacity-30 font-kumbh-sans">
        {subService.desc}
      </p>
      <a className="flex justify-end mt-4" href="contactUs">
        <Icons name="Arrow" width={40} height={20} />
      </a>
    </div>
  );
};

export default SubServiceCard;
