import Image from "next/image";
import TopicHeader from "./TopicHeader";
import Icons from "./ui/Icon";
import { useState, useEffect } from "react";
import DotIndicators from "./DotIndicators";

const contentMap = {
  Design: [
    {
      id: "design-1",
      title: (
        <>
          LaraClean Dry <span className="text-[#A855F7]">Cleaning Website</span>
        </>
      ),
      desc: "This project highlights the design process of developing a clean, functional, and engaging website for LaraClean. It was designed to offer an easy booking experience to users and demonstrate the professionalism and trust of the brand. ",
      points: [
        "Wireframes, Prototypes, and High-fidelity design were created to be understandable and easy to use.",
        "Customization of WordPress using Elementor, styling of the theme, and integration of plugins.",
        "The use of custom typography, colors, and visual hierarchy ensures the brand identity is consistent.",
      ],
      image: "/assist/img/homePortfolio/laraClean.png",
    },
    {
      id: "design-2",
      title: (
        <>
          British Raj to India
          <span className="text-[#A855F7]"> A Historical Video Project</span>
        </>
      ),
      desc: "This project highlights how Infogentech transformed a complex historical subject into an engaging and visually compelling video using motion graphics, narration, and storytelling design.",
      points: [
        "Research & Scriptwriting: Crafted a cohesive storyline with key events, cultural shifts & independence milestones.",
        "Storyboarding & Design: Used maps, archival images, animated timelines, historical palettes & typography.",
        "Video Production: Motion graphics, character illustrations, cinematic transitions, narration & score.",
      ],
      image: "/assist/img/homePortfolio/britishRaj.png",
    },
  ],

  Development: [
    {
      id: "dev-1",
      title: (
        <>
          API Integration
          <span className="text-[#A855F7]"> Performance Optimization</span>
        </>
      ),
      desc: "Soouqna, a growing e-commerce platform, partnered with Zebra to enhance logistics and delivery. API connectivity enabled seamless barcode scanning, better printer efficiency, and improved operational accuracy for faster, more reliable customer service.",
      points: [
        "Secure Login: Added OTP & email/password authentication.",
        "Smart Search: Enabled location, QR & image-based product discovery.",
        "Faster Performance: Optimized backend for speed & stability.",
      ],
      image: "/assist/img/homeportfolio/soouqna.png",
    },
    {
      id: "dev-2",
      title: (
        <>
          Shaadikarwadu
          <span className="text-[#A855F7]"> Wedding Planning App</span>
        </>
      ),
      desc: "Shaadikarwadu is a wedding planner application that makes the whole process one-stop as it puts the venues, vendors, outfits, and invitations on the same platform. It assists the users in saving time, stress, and control of all details effectively.",
      points: [
        "Centralized Platform: Combined venues, vendors, outfits, and invitations in one app.",
        "Modern UI: Designed clean, user-friendly screens with consistent style.",
        "Smooth Workflows: Built booking, orders, and vendor task flows for easy planning.",
      ],
      image: "/assist/img/homeportfolio/shaadi.png",
    },
  ],

  "Digital Marketing": [
    {
      id: "dm-1",
      title: (
        <>
          The Exam Questions
          <span className="text-[#A855F7]"> From Views to Learners</span>
        </>
      ),
      desc: "The Exam Questions, a New York-based SAP certification platform, helps learners succeed with guides, FAQs, and career insights. We aimed at transforming their disjointed branding into a professional learning center that would attract engagement and course enrollment.",
      points: [
        "Branding: Coherent visuals on Instagram and YouTube (reels, carousels, thumbnails).",
        "Content Strategy: Guide, FAQ, and career tips posting plans.",
        "Growth: Optimized bio, playlists, and highlights to increase engagement and course inquiries",
      ],
      image: "/assist/img/homeportfolio/theexamques.png",
    },
    {
      id: "dm-2",
      title: (
        <>
          AirlineReservationWindow.com
          <span className="text-[#A855F7]"> online flight booking</span>
        </>
      ),
      desc: "Intensive efforts are being made to make air travel more affordable, accessible, and convenient to leisure and business travelers. It has a dynamic interface, options of multiple airlines, low fares, and 24/7 customer care that helps users to book flights easily and securely in a saturated travel market",
      points: [
        "Branding and Content: Cohesive images and organized content to attract audiences",
        "Growth & SEO: SEO, website optimization, and traffic and conversion campaigns.",
        "Customer Experience: Better satisfaction and loyalty towards 24/7 customer care and information-based optimization.",
      ],
      image: "/assist/img/homeportfolio/airline.png",
    },
    {
      id: "dm-3",
      title: (
        <>
          @ananyakhurana_30
          <span className="text-[#A855F7]"> Instagram profile</span>
        </>
      ),
      desc: "Ananya Khurana is an upcoming fashion leader and is recognized for clean edits, stylish outfits, styling guidelines, and tutorials. She combines creative minimalist fashion with relatability, which appeals to brand associations and a modern crowd.",
      points: [
        "Content: Planned posts, reels, and calendar.",
        "Optimization: Made profile brand-ready with CTAs.s",
        "Growth: Increased engagement and brand inquiries.",
      ],
      image: "/assist/img/homeportfolio/ananya.png",
    },
    {
      id: "dm-4",
      title: (
        <>
          ExamStudyZone.com
          <span className="text-[#A855F7]"> Educational Platform </span>
        </>
      ),
      desc: "ExamStudyZone.com is an educational platform offering SAP study materials, practice exams, and PDFs for modules like S/4HANA, MM, SD, and ABAP, helping students learn systematically outside regular classes..",
      points: [
        "SEO & Content: Optimized keywords, meta tags, and guides.",
        "Technical: Improved speed, mobile usability, and navigation.",
        "Growth: Tracked performance, increased clicks, and engagement.",
      ],
      image: "/assist/img/homeportfolio/examStudy.png",
    },
  ],

  Content: [
    {
      id: "content-1",
      title: (
        <>
          CertStudyMaterial Boosting IT Certification
          <span className="text-[#A855F7]">Visibility</span>
        </>
      ),
      desc: "CertStudyMaterial is an IT certification study resource that offers exam guides, practice tests, and PDFs of CompTIA, Cisco, Oracle, AWS, and Microsoft to its users so that they can study efficiently without training.",
      points: [
        "SEO Content: Optimized meta-titles, meta-descriptions, and keywords.",
        "Resource Creation: Development of study guides, practice documents, and articles with a focus on certification.",
        "Updating of Contents: Frequent updating of contents to keep up to date and relevant.",
      ],
      image: "/assist/img/homeportfolio/certStudy.png",
    },
    {
      id: "content-2",
      title: (
        <>
          BookPremiumFare.com Driving Travel
          <span className="text-[#A855F7]"> Website Growth </span>
        </>
      ),
      desc: "BookPremiumFare.com is a travel booking platform offering premium and discounted airfares. It offers convenient booking, up-to-date airfare, and secure checkout, and draws organic traffic.",
      points: [
        "SEO Content: Keyword-optimized pages and meta tags.",
        "Blog & Guides: Composed travel tips, offers, and destination pieces.",
        "Content Updates: Updating content regularly to enhance relevance and search performance.",
      ],
      image: "/assist/img/homeportfolio/Bookpremiumfare.png",
    },
  ],
};

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
  const activeServiceObj = services.find((s) => s.active) || services[0];
  const [subIndex, setSubIndex] = useState(0);

  const activeLabel = activeServiceObj.label;
  const slides = contentMap[activeLabel] || contentMap.Design;
  const currentSlide = slides[subIndex];

  useEffect(() => {
    setSubIndex(0);
  }, [activeLabel]);

  const nextSlide = () => {
    setSubIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSubIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
              onClick={() =>
                setServices(
                  services.map((s) =>
                    s.id === service.id
                      ? { ...s, active: true }
                      : { ...s, active: false }
                  )
                )
              }
            >
              <Icons name={service.icon} />
              <p className="text-sm font-jost ">{service.label}</p>
            </button>
          ))}
        </div>
        <a href="/portfolio" className="flex gap-8 items-center justify-center">
          <p className="font-jost font-semibold text-lg leading-[120%] capitalize ">
            See Our <br /> More Projects
          </p>
          <Icons name="Arrow" width={62} height={28} />
        </a>
      </div>
      <div className="px-4 pt-4 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] min-h-[682px] overflow-hidden">
        <div className="w-full h-full bg-black rounded-lg p-6 grid grid-cols-2 gap-4 overflow-hidden relative">
          
          <div className="ml-6.5 transition-all duration-500 ease-in-out flex flex-col justify-between mb-6">
            <div className="flex items-center gap-3">
                <Icons name="DotCircle" />
                <p className="font-jost font-medium text-sm leading-6 align-middle">
                  Why Enjoy alone?
                </p>
              </div>
              <p className="font-jost font-semibold md:text-5xl leading-[150%] capitalize  pr-20">
                {currentSlide?.title}
              </p>
            <div>
              
              <div className="float-right relative -top-20">
                <Icons name="ArrowDirection" />
                <div className="w-28 flex justify-end">
                  <Icons name="PaperPlane" />
                </div>
              </div>
              <p className="font-kumbh-sans font-medium text-lg leading-[150%] align-middle text-[#73737F] mr-10">
                {currentSlide?.desc}
              </p>
              <ul className="flex flex-col gap-2 text-[#73737F] leading-[150%] text-[16px] font-medium pt-4.5">
                {currentSlide?.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2.5 items-center">
                    <Icons name="LiIcon" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-x-10 items-center mt-10">
              <DotIndicators
                slides={slides}
                currentIndex={subIndex}
                setCurrentIndex={setSubIndex}
              />

              <button
                onClick={prevSlide}
                className={`border border-white rounded-sm flex justify-center items-center px-5 py-2 cursor-pointer ${
                  subIndex === 0 ? "opacity-30" : ""
                }`}
              >
                <Icons name="ArrowPortfolioLeft" width={45} height={20} />
              </button>

              <button
                onClick={nextSlide}
                className={`border border-white rounded-sm flex justify-center items-center px-5 py-2 cursor-pointer ${
                  subIndex === slides.length - 1 ? "opacity-30" : ""
                }`}
              >
                <Icons name="ArrowPortfolioRight" width={45} height={20} />
              </button>
            </div>
          </div>

          <div className="px-2 pt-2 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] mt-34 rotate-[-5.03deg] shadow-[7px_-4px_108px_-43px_#8955FF] relative -right-5 transition-all duration-500 ease-in-out">
            <div className="w-full min-h-[580px] bg-black rounded-xl flex justify-between overflow-hidden h-full">
              {currentSlide?.image ? (
                <Image
                  src={currentSlide?.image}
                  alt="valueImg"
                  width={800}
                  height={500}
                  objectFit="cover"
                  className="object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
