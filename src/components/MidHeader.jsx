
export default function MidHeader({ name = "", subheading = "", paragraph="", className=""}) {
  return (
    <div className="flex gap-7 flex-row justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <div className="w-0.5 h-28 rounded-full md:mb-10 mb-5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
         <div className="relative w-12 h-12">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-avalors font-normal md:text-[32px] text-2xl leading-6 align-middle text-primary mt-4">
          {name}
        </p>
        <p className="font-jost font-medium md:text-lg  text-sm leading-6 align-middle md:mt-3 mt-1 text-center">
          {subheading}
        </p>
        {paragraph && (
          <p className="font-jost font-medium text-lg leading-6 align-middle mt-6 text-[#79787B]">{paragraph}</p>
        )}
      </div>
    </div>
  );
}
