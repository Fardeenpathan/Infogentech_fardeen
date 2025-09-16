import StatsItem from "@/components/stats-item";
import SubscribeContact from "@/components/SubscribeContact";
import FocusPart from "@/components/FocusPart";
import Icons from "@/components/ui/Icon";
import MissionAbout from "@/components/MissionAbout";
import MidHeader from "@/components/MidHeader";
const stats = [
  { value: "250", suffix: "+", label: "Projects Delivered" },
  { value: "7", suffix: "+", label: "Years of Experience" },
  { value: "25", suffix: "+", label: "Professional Teams" },
  { value: "80", suffix: "%", label: "Active Client" },
];
const AboutUs = () => {
  return (
    <>
      <div className=" h-85 mt-30 bg-[url('/assist/img/aboutBg.png')]  container mx-auto relative px-10">
        <div className="flex gap-10 absolute top-2">
          <div className="flex justify-center items-center mb-40 flex-col shrink-0">
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-0.5 h-[600px] xl:h-[400px] rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </div>
          <div className="flex flex-col">
            <p className="font-avalors font-normal text-[75px] leading-none  bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_-19.98%,_#6A27FF_70.29%)] bg-clip-text text-transparent">
              About Us
            </p>
            <p className="font-jost font-medium text-[26px] xl:text-xl leading-[150%] align-middle mt-4 text-[#C9C9C9]">
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
            <div className="flex flex-row justify-between items-center font-jost mt-10 mr-10 xl:mt-20">
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
      <div className="mt-96 xl:mt-60  container mx-auto relative px-10">
        <MissionAbout />
      </div>
      <MidHeader
        name="Quality-driven digital solutions"
        subheading="We move quickly and adapt to keep you ahead."
      />
      <div className="flex justify-center flex-col items-center gap-32">
        <FocusPart />
        <Icons name="LinesAbout" />
      </div>
      <SubscribeContact />
    </>
  );
};

export default AboutUs;
