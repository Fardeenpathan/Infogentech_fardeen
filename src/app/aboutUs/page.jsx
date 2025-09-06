"use client";
import Image from "next/image";
import StatsItem from "@/components/stats-item";
import SubscribeContact from "@/components/SubscribeContact";
import Icons from "@/components/ui/Icon";
const stats = [
  { value: "250", suffix: "+", label: "Projects Delivered" },
  { value: "7", suffix: "+", label: "Years of Experience" },
  { value: "25", suffix: "+", label: "Professional Teams" },
  { value: "80", suffix: "%", label: "Active Client" },
];
const AboutUs = () => {
  return (
    <div className="longContainer mx-auto">
      <div className="mx-14 h-85 px-23 mt-30 bg-[url('/assist/img/aboutBg.png')]  longContainer mx-auto relative">
        <div className="flex gap-10 absolute top-10">
          <div className="flex justify-center items-center mb-40 flex-col shrink-0">
            <Image
              src="/assist/img/Polygon.png"
              alt="Best Design. Development. Marketing."
              width={46}
              height={46}
              objectFit="cover w-46 h-46"
            />
            <div className="w-0.5 h-[627px] rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 "></div>
          </div>
          <div className="flex flex-col ">
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_60.29%)] bg-clip-text text-transparent">
              About Us
            </p>
            <p className="font-[Jost] font-medium text-[26px] leading-[150%] align-middle mt-4">
              At Infogentech, our story began with a simple goal: helping
              businesses get noticed online. We saw how, in today’s world,
              people search for everything on the internet and if a company
              isn’t easy to find, it’s almost invisible to potential customers.
              A trusted team devoted to web development and digital marketing
              was built in the USA. We create ingenious websites, optimize SEO
              to boost your search rankings, and run targeted online ads that
              help your business stand out in a crowded market. We back our work
              with friendly support, professional guidance, and a money-back
              guarantee—because your success is what drives us every day.
            </p>
            <div className="flex flex-row justify-between items-center font-[Jost] mt-10 mr-10">
              {stats.map((item, index) => (
                <StatsItem
                  key={index}
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  color="text-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Icons name="LinesAbout" />
      </div>
      <SubscribeContact />
    </div>
  );
};

export default AboutUs;
