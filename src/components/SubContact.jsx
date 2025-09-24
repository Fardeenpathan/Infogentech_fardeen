import MidHeader from "./MidHeader";
import Image from "next/image";
import Icons from "./ui/Icon";
export default function SubContact() {
  return (
    <>
      <MidHeader
        name="We’d love to hear from you!"
        subheading="With teams across the globe, we’re ready to connect and support you wherever you are."
        paragraph="We are currently based at"
      />

      {/* India  */}
      <div className="flex justify-center items-center">
        <div className="relative w-[415px] h-[200px] ">
          <Image
            src="/assist/img/glassSlab.png"
            alt="valueImg"
            width={415}
            height={200}
            className="rounded-lg object-cover"
          />

          <div className="absolute inset-0 p-5 text-[#CECECE]">
            <div className=" flex justify-between items-center ">
              <p className="flex gap-2 font-jost font-semibold text-[30px] tracking-[0.03em] uppercase items-center">
                <Icons name="India" width={29} height={20} /> <span>India</span>
              </p>
              <Icons name="Globe" width={23} height={23} color="#8F8F9B" />
            </div>
            <p className="font-jost font-semibold text-lg tracking-[0.03em] items-center pr-2">
              {/* Proudly Headquartered in the INDIA, Digital solutions the Digital */}
              {/* World. */}
            </p>
            <div className="flex gap-2 font-jost font-semibold text-[20px] tracking-[0.03em] mt-5 items-center">
              <Icons name="Building" /> <span>Delhi, India</span>
            </div>
          </div>
        </div>
      </div>
      {/* USA OFFICE */}

      <MidHeader
      />
      <div className="flex justify-center items-center">
        <div className="relative w-[415px] h-[200px] ">
          <Image
            src="/assist/img/glassSlab.png"
            alt="valueImg"
            width={415}
            height={200}
            className="rounded-lg object-cover"
          />

          <div className="absolute inset-0 p-5 text-[#CECECE]">
            <div className=" flex justify-between items-center ">
              <p className="flex gap-2 font-jost font-semibold text-[30px] tracking-[0.03em] uppercase items-center">
                <Icons name="UsaFlag" width={29} height={20} /> <span>USA</span>
              </p>
              <Icons name="Globe" width={23} height={23} color="#8F8F9B" />
            </div>
            <p className="font-jost font-semibold text-lg tracking-[0.03em] items-center pr-2">
              {/* Proudly Headquartered in the USA, Digital solutions the Digital
              World. */}
            </p>
            <div className="flex gap-2 font-jost font-semibold text-[20px] tracking-[0.03em] mt-5 items-center">
              <Icons name="Building" /> <span>Texas, USA</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
