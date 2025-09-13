import MidHeader from "./MidHeader";
import { useState } from "react";
import Icons from "./ui/Icon";
import DotIndicators from "./DotIndicators";
import Image from "next/image";
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
  
];
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <div className="mt-8 ">
      <MidHeader
        name="Testimonials"
        subheading="Don’t Take Our Word for It. Over 100+ People Trust Us"
      />

      <div className="relative flex flex-col items-center justify-center py-16  text-white">
        <div className="flex items-center justify-center gap-6">
          {reviews.map((review, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={review.id}
                className={`px-8 pt-6 pb-8 rounded-xl border transition-all duration-500 max-w-[549px] min-h-[272px] flex flex-col justify-between ${
                  isActive
                    ? "border-[#6D18EF] bg-[#111132] scale-105 opacity-100"
                    : "border-transparent bg-[#111132]/40 scale-90 opacity-40"
                }`}
              >
                <p className="mb-4 text-sm md:text-base leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-4">
                    <Image
                      src={review.img}
                      alt="Review"
                      width={55}
                      height={55}
                      className=" rounded-full w-14 h-14 object-cover"
                    />

                    <div>
                      <h4 className="font-jost text-2xl text-[#C2C4C8]">
                        {review.name}
                      </h4>
                      <p className="text-sm text-[#C2C4C8] mt-1.5">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-1 bg-[#2F3E42] border-2 rounded-3xl border-[#372E4C] px-2.5 py-1.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < review.rating
                            ? "text-purple-500"
                            : "text-gray-500"
                        }`}
                      >
                        <Icons name="Star" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" flex justify-between w-full mt-5.5">
          <button
            onClick={prevSlide}
            className="font-jost font-semibold text-[20px] leading-[20px] flex gap-2 items-center cursor-pointer"
          >
            <Icons name="ArrowPortfolioLeft" /> Previous
          </button>{" "}
          <DotIndicators
            slides={reviews}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <button
            onClick={nextSlide}
            className="font-jost font-semibold text-[20px] leading-[20px] flex gap-2 items-center cursor-pointer"
          >
            Next <Icons name="ArrowPortfolioRight" />
          </button>
        </div>
      </div>
    </div>
  );
}
