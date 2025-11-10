import Image from "next/image";
import Icons from "./ui/Icon";

export default function ScheduleCall() {
  return (
<div className="bg-[linear-gradient(152.55deg,#7544E4_15.91%,#6B25C0_56.84%,#834EB6_72.43%,#8149B4_84.96%)] pt-5 rounded-2xl text-nowrap xl:mt-30 md:mt-20 mt-10">
  <div className="flex justify-between 2xl:px-30 px-4 h-full">
    <div className="flex flex-col justify-center items-start sm:py-10 pb-4">
      <h2 className="text-white text-[15px] font-avalors uppercase sm:text-[22px] xl:text-[50px] leading-[150%] lg:text-[36px]">
        Chat With Our Expert Today
      </h2>
      <p className="text-white font-jost xl:text-lg sm:text-sm sm:mt-4 sm:mb-12 mb-2 mt-1 text-[10px]">
        Turn Your Idea Into Reality — Let’s Make It Happen!
      </p>
      <div className="p-[2px] rounded-xl bg-[linear-gradient(95.64deg,#6807FF_31.79%,#5900E5_64.61%,#AB00E6_78.22%)]">
        <a
          href="/us/contact"
          className="flex gap-2 flex-row sm:text-lg text-nowrap font-jost sm:px-10 px-3 sm:py-3 py-2 text-sm md:radius rounded-sm bg-transparent border border-white/10 justify-center items-center backdrop-blur-[51.97px] custom-shadow"
        >
          <Icons name="Calls" />
          Schedule a Call
        </a>
      </div>
    </div>
    <div className="flex items-end w-1/2">
      <Image
        src="/assist/img/call.png"
        alt="valueImg"
        width={455}
        height={32}
        className="object-contain w-full h-auto"
      />
    </div>
  </div>
</div>

  );
}
