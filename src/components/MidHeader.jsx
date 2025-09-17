
export default function MidHeader({ name = "", subheading = "", paragraph="", className=""}) {
  return (
    <div className="flex gap-7 flex-row justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <div className="w-0.5 h-28 rounded-full mb-10 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
         <div className="relative w-12 h-12">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className="w-full h-full object-cover"
          />
        </div>
{/* shadow-[0px_0px_40px_5px_rgba(106,39,255,0.35)] */}
        <p className="font-avalors font-normal text-[32px] leading-[24px] align-middle text-primary mt-5">
          {name}
        </p>
        <p className="font-jost font-medium text-lg leading-[24px] align-middle mt-3">
          {subheading}
        </p>
        {paragraph && (
          <p className="font-jost font-medium text-lg leading-[24px] align-middle mt-6 text-[#79787B]">{paragraph}</p>
        )}
      </div>
    </div>
  );
}
