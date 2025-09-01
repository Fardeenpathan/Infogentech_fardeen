import Image from "next/image";
import Icons from "./ui/Icon";

export default function ScheduleCall() {
  return (
    <div className="bg-[linear-gradient(152.55deg,#7544E4_15.91%,#6B25C0_56.84%,#834EB6_72.43%,#8149B4_84.96%)] h-94 mx-30 rounded-2xl mt-36">
      <div className="flex justify-between px-30 h-full">
        <div className="flex flex-col justify-center items-start py-10">
          <h2 className="text-white text-2xl font-avalors uppercase text-[52px] leading-[150%]">
            Chat With Our Expert Today
          </h2>
          <p className="text-white font-jost text-[18px] mt-4 mb-12">
            Turn Your Idea Into Reality Let’s Make It Happen!
          </p>
          <a
            href="#"
            className="p-[2px] rounded-xl bg-[linear-gradient(95.64deg,#6807FF_31.79%,#5900E5_64.61%,#AB00E6_78.22%)]"
          >
            <span className="flex gap-2 flex-row text-[18px] font-jost px-10 py-3  rounded-[10px]  bg-transparent border border-white/10  justify-center items-center backdrop-blur-[51.97px] shadow-[0px_0px_8px_0px_#FFFFFF_inset]">
              <Icons name="Calls" />
              Schedule a Call
            </span>
          </a>
        </div>
        <div className="flex items-end">
          <Image
            src="/assist/img/call.png"
            alt="valueImg"
            width={455}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
