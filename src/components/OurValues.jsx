import Image from "next/image";
import TopicHeader from "./TopicHeader";
const services = [
  {
    id: "01",
    title: "Client-First Approach",
    desc: "We focus on truly understanding our clients’ goals and vision. By working closely together, we become partners in your digital journey, not just a service provider.",
    imageIcon: "/assist/img/Client-FirstApproach.png",
    width: 99,
    height: 65,
  },
  {
    id: "02",
    title: "Affordability with Quality",
    desc: "We believe great digital solutions shouldn’t break the bank. That’s why we offer top-quality work at fair, transparent prices you can trust.",
    imageIcon: "/assist/img/AffordabilityQuality.png",
    width: 94,
    height: 69,
  },
  {
    id: "03",
    title: "Excellence & Integrity",
    desc: "We hold ourselves to high standards, built on honesty, ethics, and accountability. You can count on us for reliable, professional results every time.",
    imageIcon: "/assist/img/ExcellenceIntegrity.png",
    width: 70,
    height: 75,
  },
  {
    id: "04",
    title: "Trust That Lasts",
    desc: "We earn trust through clear communication, dependable service, and a true commitment to helping your business grow for the long term.",
    imageIcon: "/assist/img/trustQuality.png",
    width: 80,
    height: 78,
  },
];

export default function OurValues() {
  return (
    <div className="xl:mt-30 md:mt-20 mt-10">
      <TopicHeader
        name="Our Values"
        subheading="Core beliefs behind everything we build"
      />
      <div className="flex justify-between flex-col xl:flex-row relative lg:-top-15">
        <div className=" flex justify-center items-center flex-col xl:flex-row">
          <div
            className="w-50 h-56 bg-transparent border border-white/10 rounded-2xl  flex justify-center items-center backdrop-blur-[51.97px]
         custom-shadow absolute"
          >
            <Image
              src="/assist/img/valueImg.png"
              alt="valueImg"
              width={100}
              height={99}
              objectFit="cover"
            />
          </div>
          <Image
            src="https://res.cloudinary.com/dpmceu66e/image/upload/v1761296966/blog-app/blogs/blogs/1761296960707-gettyimages-1208502399-unscreen.gif"
            alt="valueImg"
            width={640}
            height={150}
            objectFit="cover"
            className="w-[640px] md:h-72 h-40 relative transform xl:scale-x-[-1] overflow-hidden -z-40 xl:-right-62 xl:-top-6 scale-x-[-1] rotate-90 xl:rotate-0 md:top-60 top-45 -right-5"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-56 xl:mt-0 gap-6 max-w-3xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#15152A] rounded-md  p-5 shadow-[12px_12px_13px_2px_#1C1C38] flex justify-center items-center flex-col"
            >
              <div className="flex flex-col items-center font-kumbh-sans">
                <Image
                  src={service.imageIcon}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  objectFit="cover"
                />
                <h2 className="font-jost font-medium text-2xl leading-[120%] tracking-[0.03em] mt-6">
                  {service.title}
                </h2>
                <p className=" text-lg mt-3 leading-[120%] flex text-center xl:text-lg text-[#73737F]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
