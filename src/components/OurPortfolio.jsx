import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
import { useState } from "react";
import DotIndicators from "./DotIndicators";

const slides = [
  {
    id: 1,
    title: (
      <>
        Learn. Connect. <span className="text-[#A855F7]">Grow!</span>
      </>
    ),
    desc: "This project showcases our exploration into cutting-edge robotics and AI-driven solutions. From conceptual 3D modeling to real-time user interaction, every element is crafted to reflect the future of automation and smart systems.",
    points: [
      "Modern, futuristic designs that capture attention instantly.",
      "User-first layouts crafted for smooth, engaging experiences.",
      "Fast, scalable, and SEO-friendly websites built to perform.",
    ],
    image: "/assist/img/DesignImg.png",
  },
  {
    id: 2,
    title: (
      <>
        Build. Scale. <span className="text-[#A855F7]">Innovate!</span>
      </>
    ),
    desc: "A futuristic platform designed to deliver efficiency and seamless digital experiences. Combining technology and creativity, we help brands shape their future.",
    points: [
      "High-performance solutions for enterprises.",
      "AI-driven features tailored for modern businesses.",
      "Creative visuals to elevate brand presence.",
    ],
    image: "/assist/img/DesignImg.png",
  },
  {
    id: 3,
    title: (
      <>
        Engage. Market. <span className="text-[#A855F7]">Win!</span>
      </>
    ),
    desc: "Our digital marketing projects focus on growth and engagement. Leveraging data and strategy, we create campaigns that leave a strong digital footprint.",
    points: [
      "Targeted campaigns for maximum ROI.",
      "Data-driven strategies for scaling.",
      "Creative storytelling for global impact.",
    ],
    image: "/assist/img/DesignImg.png",
  },
  {
    id: 4,
    title: (
      <>
        Design PPart <span className="text-[#A855F7]">Win!</span>
      </>
    ),
    desc: "Our digital marketing projects focus on growth and engagement. Leveraging data and strategy, we create campaigns that leave a strong digital footprint.",
    points: [
      "Targeted campaigns for maximum ROI.",
      "Data-driven strategies for scaling.",
      "Creative storytelling for global impact.",
    ],
    image: "/assist/img/DesignImg.png",
  },
];

export default function OurPortfolio() {
  const [services, setServices] = useState([
    { id: 1, icon: "Design", label: "Design", active: true },
    { id: 2, icon: "Development", label: "Development", active: false },
    {
      id: 3,
      icon: "DigitalMarketing",
      label: "Digital Marketing",
      active: false,
    },
    { id: 4, icon: "Content", label: "Content", active: false },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className=" mt-36">
      <TopicHeader
        name="Our Portfolio"
        subheading="Check Out Our Recently Completed Projects"
      />
      <div className="flex justify-between mx-14 relative -top-11 ">
        <div className="flex gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex gap-2 items-center justify-center border-[1px] border-white  rounded-md px-7 py-2 cursor-pointer ${
                service.active ? "" : "opacity-30"
              }`}
              onClick={() => {
                setServices(
                  services.map((s) =>
                    s.id === service.id
                      ? { ...s, active: true }
                      : { ...s, active: false }
                  )
                );
              }}
            >
              <Icons name={service.icon} />
              <p className="text-sm font-[jost] ">{service.label}</p>
            </button>
          ))}
        </div>
        <a href="/portfolio" className="flex gap-8 items-center justify-center">
          <p className="font-[jost] font-semibold text-[18px] leading-[120%] capitalize ">
            See Our <br /> More Projects
          </p>
          <Icons name="Arrow" width={62} height={28} />
        </a>
      </div>
      <div className="px-4 pt-4 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] h-[682px] overflow-hidden">
        <div className="w-full h-full bg-black rounded-lg p-6 grid grid-cols-2 gap-4 overflow-hidden relative">
          <div className="ml-6.5 transition-all duration-500 ease-in-out flex flex-col justify-between mb-16">
            <div >
              <div className="flex items-center gap-3">
              <Icons name="DotCircle" />
              <p className="font-jost font-medium text-sm leading-6 align-middle">
                Why Enjoy alone?
              </p>
            </div>
            <p className="font-jost font-semibold text-6xl leading-[150%] capitalize mt-4.5">
              {currentSlide.title}
            </p>
            <div className="float-right relative -top-10 mr-10">
              <Icons name="ArrowDirection" />
              <div className="w-28 flex justify-end">
                <Icons name="PaperPlane" />
              </div>
            </div>
            <p className="font-kumbh font-medium text-[20px] leading-[150%] align-middle text-[#73737F] mt-19 mr-10">
              {currentSlide.desc}
            </p>
            <ul className="flex flex-col gap-2 text-[#73737F] leading-[150%] text-[20px] font-medium pt-4.5">
              {currentSlide.points.map((point, idx) => (
                <li key={idx} className="flex gap-2.5 items-center">
                  <Icons name="LiIcon" />
                  {point}
                </li>
              ))}
            </ul>
            </div>
            
            <div className="flex gap-x-10 items-center">
              <DotIndicators
                slides={slides}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />

              <button
                onClick={prevSlide}
                className={`border border-white rounded-sm flex justify-center items-center px-5 py-2 cursor-pointer ${
                  currentIndex === 0 ? "opacity-30" : ""
                }`}
              >
                <Icons name="ArrowPortfolioLeft" width={45} height={20} />
              </button>

              <button
                onClick={nextSlide}
                className={`border border-white rounded-sm flex justify-center items-center px-5 py-2 cursor-pointer ${
                  currentIndex === slides.length - 1 ? "opacity-30" : ""
                }`}
              >
                <Icons name="ArrowPortfolioRight" width={45} height={20} />
              </button>
            </div>
          </div>

          <div className="px-2 pt-2 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] mt-34 rotate-[-5.03deg] shadow-[7px_-4px_108px_-43px_#8955FF] relative -right-5 transition-all duration-500 ease-in-out">
            <div className="w-full h-[500px] bg-black rounded-xl flex justify-between overflow-hidden">
              <Image
                src={currentSlide.image}
                alt="valueImg"
                width={800}
                height={500}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
