import MidHeader from "./MidHeader";
import { useState, useEffect } from "react";
import Image from "next/image";
import DotIndicators from "./DotIndicators";
import Icons from "./ui/Icon";
const reviews = [
  {
    id: 1,
    text: "Their SEO work took us from barely showing up in searches to ranking on the first page for important keywords. They clearly know the healthcare space inside and out.",
    name: "— Ethan Roberts",
    role: "Owner, Cascade Remodeling",
    img: "/assist/img/blogs.png",
    rating: 5,
  },
  {
    id: 2,
    text: "From a new logo to a refreshed social media strategy, they completely elevated our brand. Customer engagement is way up, and foot traffic to our store has been better than eve",
    name: "Jessica Collins",
    role: "Marketing Director, Nova Dental Group",
    img: "/assist/img/blogs.png",
    rating: 4,
  },
  {
    id: 3,
    text: "They brought our vision to life with modern design and a smart strategy that really connects with our clients. We constantly get compliments on our new website and branding",
    name: "Marcus Lee",
    role: " Co-Founder, Leaf & Brew",
    img: "/assist/img/blogs.png",
    rating: 3,
  },
  {
    id: 4,
    text: "Their SEO work took us from barely showing up in searches to ranking on the first page for important keywords. They clearly know the healthcare space inside and out.",
    name: "— Ethan Roberts",
    role: "Owner, Cascade Remodeling",
    img: "/assist/img/blogs.png",
    rating: 5,
  },
  {
    id: 5,
    text: "From a new logo to a refreshed social media strategy, they completely elevated our brand. Customer engagement is way up, and foot traffic to our store has been better than eve",
    name: "Jessica Collins",
    role: "Marketing Director, Nova Dental Group",
    img: "/assist/img/blogs.png",
    rating: 4,
  },
  {
    id: 6,
    text: "They brought our vision to life with modern design and a smart strategy that really connects with our clients. We constantly get compliments on our new website and branding",
    name: "Marcus Lee",
    role: " Co-Founder, Leaf & Brew",
    img: "/assist/img/blogs.png",
    rating: 3,
  },
];
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };
  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i - 1 + reviews.length) % reviews.length;
      visibleReviews.push({ ...reviews[index], originalIndex: index });
    }
    return visibleReviews;
  };

  return (
    <div className="mt-8">
      <MidHeader
        name="Testimonials"
        subheading="Don’t Take Our Word for It. Over 100+ People Trust Us"
      />

      <div className="relative flex flex-col items-center justify-center py-8 md:py-16 text-white overflow-hidden">
        <div
          className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 px-2 w-full longContainer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleReviews().map((review, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`
                  md:px-8 md:pt-6 pt-2 md:pb-8 pb-3 px-3 rounded-xl border transition-all duration-500 
                  ease-in-out 
                   md:min-h-[250px] lg:min-h-[272px] 
                  flex flex-col justify-between transform cursor-pointer min-w-[251px] sm:min-w-[450px] md:minw-[500px] xl:max-w-[549px]
                  hover:scale-105 group
                  ${
                    isCenter
                      ? `border-[#6D18EF] bg-[#111132] scale-105 opacity-100`
                      : `border-transparent bg-[#111132]/40 scale-90 opacity-40`
                  }
                `}
                style={{
                  filter: isCenter ? "brightness(1.1)" : "brightness(0.7)",
                  transform: isCenter
                    ? "translateY(-10px) scale(1.05)"
                    : "translateY(0) scale(0.9)",
                }}
              >
                <p
                  className={`
                  mb-4 md:text-base text-[12px]  leading-relaxed font-jost
                `}
                >
                  {review.text}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-4">
                    <Image
                      src={review.img}
                      alt="Review"
                      width={55}
                      height={55}
                      className=" rounded-full sm:w-14 sm:h-14 object-cover w-6 h-6"
                    />

                    <div>
                      <h4 className="font-jost sm:text-lg text-[12px] text-[#C2C4C8] font-bold">
                        {" "}
                        {review.name}{" "}
                      </h4>
                      <p className="md:text-sm text-[8px] text-[#C2C4C8] mt-1.5">
                        {" "}
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-1 bg-[#2F3E42] border-2 rounded-3xl border-[#372E4C] sm:px-2.5 px-1.5 sm:py-1.5 py-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < review.rating
                            ? "text-purple-500"
                            : "text-gray-500"
                        }`}
                      >
                        <Icons name="Star" className="hidden md:block" />
                        <Icons name="SmallStar" className="block md:hidden" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex  w-full items-center justify-between mt-5 xl:hidden">
          <button
            onClick={prevSlide}
            className="font-jost font-semibold  leading-5  gap-2 border border-white rounded-sm flex justify-center items-center md:px-5 md:py-2 py-1 px-3 cursor-pointer"
          >
            <Icons name="ArrowPortfolioLeft" width={45} height={20} />
          </button>
          <DotIndicators
            slides={reviews}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />

          <button
            onClick={nextSlide}
            className="font-jost font-semibold  leading-5  gap-2  border border-white rounded-sm flex justify-center items-center md:px-5 md:py-2 py-1 px-3 cursor-pointer"
          >
            <Icons name="ArrowPortfolioRight" width={45} height={20} />
          </button>
        </div>
        <div className="hidden xl:flex justify-between w-full mt-5.5">
          <button
            onClick={prevSlide}
            className="font-jost font-semibold  leading-5 flex gap-2 items-center cursor-pointer"
          >
            <Icons name="ArrowPortfolioLeft" /> Previous
          </button>
          <DotIndicators
            slides={reviews}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <button
            onClick={nextSlide}
            className="font-jost font-semibold  leading-5 flex gap-2 items-center cursor-pointer "
          >
            Next <Icons name="ArrowPortfolioRight" />
          </button>
        </div>
      </div>
    </div>
  );
}
