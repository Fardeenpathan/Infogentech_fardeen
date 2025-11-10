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
          LaraClean Dry <span className="text-primary">Cleaning Website</span>
        </>
      ),
      desc: "This project highlights the design process of developing a clean, functional, and engaging website for LaraClean. It was designed to offer an easy booking experience to users and demonstrate the professionalism and trust of the brand. ",
      points: [
        "Wireframes, Prototypes, and High-fidelity design were created to be understandable and easy to use.",
        "Customization of WordPress using Elementor, styling of the theme, and integration of plugins.",
        "The use of custom typography, colors, and visual hierarchy ensures the brand identity is consistent.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761997370/blog-app/blogs/blogs/1761997363077-laraclean.jpg",
    },
    {
      id: "design-2",
      title: (
        <>
          British Raj to India
          <span className="text-primary"> A Historical Video Project</span>
        </>
      ),
      desc: "This project highlights how Infogentech transformed a complex historical subject into an engaging and visually compelling video using motion graphics, narration, and storytelling design.",
      points: [
        "Research & Scriptwriting: Crafted a cohesive storyline with key events, cultural shifts & independence milestones.",
        "Storyboarding & Design: Used maps, archival images, animated timelines, historical palettes & typography.",
        "Video Production: Motion graphics, character illustrations, cinematic transitions, narration & score.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761998088/blog-app/blogs/blogs/1761998068898-britishraj.jpg",
    },
  ],

  Development: [
    {
      id: "dev-1",
      title: (
        <>
          API Integration
          <span className="text-primary"> Performance Optimization</span>
        </>
      ),
      desc: "Soouqna, a growing e-commerce platform, partnered with Zebra to enhance logistics and delivery. API connectivity enabled seamless barcode scanning, better printer efficiency, and improved operational accuracy for faster, more reliable customer service.",
      points: [
        "Secure Login: Added OTP & email/password authentication.",
        "Smart Search: Enabled location, QR & image-based product discovery.",
        "Faster Performance: Optimized backend for speed & stability.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761997813/blog-app/blogs/blogs/1761997806677-sooquna.jpg",
    },
    {
      id: "dev-2",
      title: (
        <>
          Shaadikarwadu
          <span className="text-primary"> Wedding Planning App</span>
        </>
      ),
      desc: "Shaadikarwadu is a wedding planner application that makes the whole process one-stop as it puts the venues, vendors, outfits, and invitations on the same platform. It assists the users in saving time, stress, and control of all details effectively.",
      points: [
        "Centralized Platform: Combined venues, vendors, outfits, and invitations in one app.",
        "Modern UI: Designed clean, user-friendly screens with consistent style.",
        "Smooth Workflows: Built booking, orders, and vendor task flows for easy planning.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761997731/blog-app/blogs/blogs/1761997723525-shaadi.jpg",
    },
  ],

  "Digital Marketing": [
    {
      id: "dm-1",
      title: (
        <>
          The Exam Questions
          <span className="text-primary"> From Views to Learners</span>
        </>
      ),
      desc: "The Exam Questions, a New York-based SAP certification platform, helps learners succeed with guides, FAQs, and career insights. We aimed at transforming their disjointed branding into a professional learning center that would attract engagement and course enrollment.",
      points: [
        "Branding: Coherent visuals on Instagram and YouTube (reels, carousels, thumbnails).",
        "Content Strategy: Guide, FAQ, and career tips posting plans.",
        "Growth: Optimized bio, playlists, and highlights to increase engagement and course inquiries",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761997588/blog-app/blogs/blogs/1761997582083-examstudy.png",
    },
    {
      id: "dm-2",
      title: (
        <>
          AirlineReservationWindow.com
          <span className="text-primary"> online flight booking</span>
        </>
      ),
      desc: "Intensive efforts are being made to make air travel more affordable, accessible, and convenient to leisure and business travelers. It has a dynamic interface, options of multiple airlines, low fares, and 24/7 customer care that helps users to book flights easily and securely in a saturated travel market",
      points: [
        "Branding and Content: Cohesive images and organized content to attract audiences",
        "Growth & SEO: SEO, website optimization, and traffic and conversion campaigns.",
        "Customer Experience: Better satisfaction and loyalty towards 24/7 customer care and information-based optimization.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761997664/blog-app/blogs/blogs/1761997657375-airline.jpg",
    },
    {
      id: "dm-3",
      title: (
        <>
          @ananyakhurana_30
          <span className="text-primary"> Instagram profile</span>
        </>
      ),
      desc: "Ananya Khurana is an upcoming fashion leader and is recognized for clean edits, stylish outfits, styling guidelines, and tutorials. She combines creative minimalist fashion with relatability, which appeals to brand associations and a modern crowd.",
      points: [
        "Content: Planned posts, reels, and calendar.",
        "Optimization: Made profile brand-ready with CTAs.s",
        "Growth: Increased engagement and brand inquiries.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761998524/blog-app/blogs/blogs/1761998514987-ananya.png",
    },
    {
      id: "dm-4",
      title: (
        <>
          ExamStudyZone.com
          <span className="text-primary"> Educational Platform </span>
        </>
      ),
      desc: "ExamStudyZone.com is an educational platform offering SAP study materials, practice exams, and PDFs for modules like S/4HANA, MM, SD, and ABAP, helping students learn systematically outside regular classes..",
      points: [
        "SEO & Content: Optimized keywords, meta tags, and guides.",
        "Technical: Improved speed, mobile usability, and navigation.",
        "Growth: Tracked performance, increased clicks, and engagement.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761998303/blog-app/blogs/blogs/1761998296435-theexamques.jpg",
    },
  ],

  Content: [
    {
      id: "content-1",
      title: (
        <>
          CertStudyMaterial Boosting IT Certification
          <span className="text-primary">Visibility</span>
        </>
      ),
      desc: "CertStudyMaterial is an IT certification study resource that offers exam guides, practice tests, and PDFs of CompTIA, Cisco, Oracle, AWS, and Microsoft to its users so that they can study efficiently without training.",
      points: [
        "SEO Content: Optimized meta-titles, meta-descriptions, and keywords.",
        "Resource Creation: Development of study guides, practice documents, and articles with a focus on certification.",
        "Updating of Contents: Frequent updating of contents to keep up to date and relevant.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761997622/blog-app/blogs/blogs/1761997616036-certstudy.jpg",
    },
    {
      id: "content-2",
      title: (
        <>
          BookPremiumFare.com Driving Travel
          <span className="text-primary"> Website Growth </span>
        </>
      ),
      desc: "BookPremiumFare.com is a travel booking platform offering premium and discounted airfares. It offers convenient booking, up-to-date airfare, and secure checkout, and draws organic traffic.",
      points: [
        "SEO Content: Keyword-optimized pages and meta tags.",
        "Blog & Guides: Composed travel tips, offers, and destination pieces.",
        "Content Updates: Updating content regularly to enhance relevance and search performance.",
      ],
      image: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761998424/blog-app/blogs/blogs/1761998417470-bookpremiumfare.jpg",
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
    <div className=" xl:mt-30 md:mt-20 mt-10">
      <TopicHeader
        name="Our Portfolio"
        subheading="Check Out Our Recently Completed Projects"
      />
      <div className="flex justify-between xl:mx-14 ml-14 xl:ml-20  relative xl:-top-11 -top-20 ">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 sm:gap-6 text-nowrap w-full xl:flex">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex gap-2 items-center justify-center border-[1px] border-white  rounded-md sm:px-7 py-2 px-4 cursor-pointer ${
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
              <p className="sm:text-sm font-jost text-[12px]">
                {service.label}
              </p>
            </button>
          ))}
        </div>
        <a
          href="/us/portfolio"
          className="hidden xl:flex gap-8 items-center justify-center"
        >
          <p className="font-jost font-semibold text-lg leading-[120%] capitalize text-nowrap">
            See Our <br /> More Projects
          </p>
          <Icons name="Arrow" width={62} height={28} />
        </a>
      </div>
      <div className="xl:px-4 px-2 pt-2 xl:pt-4 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] min-h-[682px] overflow-hidden">
        <div className="w-full h-full bg-black rounded-lg xl:p-6 p-4  grid xl:grid-cols-2 grid-cols-1 gap-4 overflow-hidden relative">
          <div className="xl:ml-6.5 ml-0 transition-all duration-500 ease-in-out flex flex-col justify-between mb-6 order-2 xl:order-1">
             <div className="flex gap-x-3 md:gap-x-10 items-center justify-between mt-5 xl:hidden">
                <button
                  onClick={prevSlide}
                  className={`border border-white rounded-sm flex justify-center items-center md:px-5 md:py-2 py-1 px-3 cursor-pointer ${
                    subIndex === 0 ? "opacity-30" : ""
                  }`}
                >
                  <Icons name="ArrowPortfolioLefts" width={45} height={20} />
                </button>
                <DotIndicators
                  slides={slides}
                  currentIndex={subIndex}
                  setCurrentIndex={setSubIndex}
                />

                <button
                  onClick={nextSlide}
                  className={`border border-white rounded-sm flex justify-center items-center md:px-5 md:py-2 py-1 px-3 cursor-pointer ${
                    subIndex === slides.length - 1 ? "opacity-30" : ""
                  }`}
                >
                  <Icons name="ArrowPortfolioRight" width={45} height={20} />
                </button>
              </div>
            <div className="flex items-center gap-3 xl:mt-0 mt-10">

              <Icons name="DotCircle" />
              <p className="font-jost font-medium text-sm leading-6 align-middle">
                Why Enjoy alone?
              </p>
            </div>
            <p className="font-jost font-semibold md:text-5xl leading-[150%] capitalize mt-5 xl:mt-0 md:pr-20 pr-0">
              {currentSlide?.title}
            </p>
            <div>
             
              <div className="float-right relative -top-20 hidden xl:block">
                <Icons name="ArrowDirection" />
                <div className="w-28 flex justify-end">
                  <Icons name="PaperPlane" />
                </div>
              </div>
              <p className="font-kumbh-sans font-medium md:text-lg text-xs leading-[150%] align-middle text-[#73737F] mr-10">
                {currentSlide?.desc}
              </p>
              <ul className="flex flex-col gap-2 text-[#73737F] leading-[150%] md:text-base text-xs font-medium pt-4.5">
                {currentSlide?.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2.5 items-center">
                    <Icons name="LiIcon" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden xl:flex gap-x-3 md:gap-x-10 items-center mt-10">

              <DotIndicators
                slides={slides}
                currentIndex={subIndex}
                setCurrentIndex={setSubIndex}
              />

              <button
                onClick={prevSlide}
                className={`border border-white rounded-sm flex justify-center items-center md:px-5 md:py-2 py-1 px-3 cursor-pointer ${
                  subIndex === 0 ? "opacity-30" : ""
                }`}
              >
                <Icons name="ArrowPortfolioLeft" width={45} height={20} />
              </button>

              <button
                onClick={nextSlide}
                className={`border border-white rounded-sm flex justify-center items-center md:px-5 md:py-2 py-1 px-3 cursor-pointer ${
                  subIndex === slides.length - 1 ? "opacity-30" : ""
                }`}
              >
                <Icons name="ArrowPortfolioRight" width={45} height={20} />
              </button>
            </div>
            
          </div>
            
          <div className="md:px-2 px-1 pt-1  md:pt-2 order-1 xl:order-2 rounded-lg border-b-0 bg-[linear-gradient(180deg,#8752FF_0%,#513199_38.59%)] xl:mt-34 mt-4 rotate-[-5.03deg] shadow-[7px_-4px_108px_-43px_#8955FF] relative xl:-right-5 right-0 transition-all duration-500 ease-in-out">
            <div className="w-full xl:min-h-[580px] bg-black rounded-xl flex justify-between overflow-hidden h-auto">
              {currentSlide?.image ? (
                <Image
                  src={currentSlide?.image}
                  alt="valueImg"
                  width={800}
                  height={500}
                  style={{ objectFit: 'cover' }}
                  className="object-fit rounded-xl "
                />
              ) : (
                <div className="w-full h-auto flex items-center justify-center">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
       <a
        href="/us/portfolio/design"
        className="gap-8 items-center justify-end mr-2 relative -top-10  flex xl:hidden mt-14"
      >
        <p className="font-jost font-semibold  text-sm leading-[120%] capitalize ">
          See Our <br /> More Projects
        </p>
        <Icons name="Arrow" height={14} width={31}/>
      </a>
    </div>
  );
}
