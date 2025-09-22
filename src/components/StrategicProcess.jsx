import Image from "next/image";
import TopicHeader from "./TopicHeader";

const strategicItems = [
  {
    image: "/assist/img/Setting.png",
    text: "Discover & Consultation",
  },
  {
    image: "/assist/img/TechnicalAss.png",
    text: "Technical Strategy & Architecture",
  },
  {
    image: "/assist/img/UserFirst.png",
    text: "User-First Design Approach",
  },
  {
    image: "/assist/img/Agile.png",
    text: "Agile Development",
  },
  {
    image: "/assist/img/TestingQA.png",
    text: "End-to-End QA & Testing",
  },
  {
    image: "/assist/img/Launch.png",
    text: "Launch & Continued Support",
  },
];
export default function StrategicProcess() {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 xl:mt-30 md:mt-20 mt-10">
      <div>
        <TopicHeader
          name="A Strategic Process"
          subheading="Driving Your Digital Success"
        />
      </div>
         
      <div className="grid grid-cols-2">
        {strategicItems.map((item, index) => (
          <div
            key={index}
            className="relative h-30 flex flex-row items-center"
          >
            <Image src={item.image} alt="valueImg" width={92} height={131} />
            <p className="font-jost  md:text-xl  text-sm leading-[120%] tracking-[0.03em]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
