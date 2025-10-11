
import IndAboutImage from "@/components/india/IndAboutImage";
import IndAboutDesc from "@/components/india/IndAboutDesc";
import IndHeroCTA from "@/components/india/IndHeroCTA";
import IndAchievements from "@/components/india/IndAchievements";
const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-[#E6DBFF] h-158 justify-center items-center flex">
        <p className="font-avalors font-normal text-[80px] leading-[1.6] tracking-[3px] align-middle text-primary">
          ABOUT US
        </p>
      </div>
      <IndAboutImage />
      <IndAboutDesc />
      <IndAchievements />
     <IndHeroCTA />
    </>
  );
};

export default AboutUs;
