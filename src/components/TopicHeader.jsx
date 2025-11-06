
import Icons from "./ui/Icon";

export default function TopicHeader({
  name = "Our Services",
  subheading = "Explore Our Digital Solutions",
}) {
  return (
    <div className="flex gap-7 flex-row text-nowrap">
      <div className="flex justify-center items-center flex-col ">
        <div className="relative w-12 h-12">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className="absolute inset-0 w-full h-full "
          />
        </div>

        <div className="w-0.5 md:h-28 h-18 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
      </div>
      <div>
        <p className="font-avalors font-normal md:text-[32px] text-2xl leading-6 align-middle text-primary">
          {name}
        </p>
        <p className="font-jost font-medium md:text-lg  text-sm leading-6 align-middle md:mt-3 mt-1">
          {subheading}
        </p>
      </div>
    </div>
  );
}
