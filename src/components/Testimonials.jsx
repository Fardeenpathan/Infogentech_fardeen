import MidHeader from "./MidHeader";
import { useState } from "react";
import Icons from "./ui/Icon";
const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Mickael Grants",
    role: "CEO of Apples to Oranges",
    img: "https://via.placeholder.com/50",
    rating: 5,
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Jane Cooper",
    role: "CTO of TechFlow",
    img: "https://via.placeholder.com/50",
    rating: 4,
  },
  {
    id: 3,
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    name: "John Doe",
    role: "Founder of NextGen",
    img: "https://via.placeholder.com/50",
    rating: 3,
  },
];
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <div className="mt-8">
      <MidHeader
        name="Testimonials"
        subheading="Don’t Take Our Word for It. Over 100+ People Trust Us"
      />

      <div className="relative flex flex-col items-center justify-center py-16 bg-[#0B0B24] text-white">
        {/* Slider */}
        <div className="flex items-center justify-center gap-6">
          {reviews.map((review, index) => {
            const isActive = index === current;
            return (
              <div
                key={review.id}
                className={`p-6 rounded-xl border transition-all duration-500 max-w-md ${
                  isActive
                    ? "border-[#6D18EF] bg-[#111132] scale-105 opacity-100"
                    : "border-transparent bg-[#111132]/40 scale-90 opacity-40"
                }`}
              >
                <p className="mb-4 text-sm md:text-base leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-purple-500" : "text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-[#6D18EF] w-6" : "bg-gray-500"
              } transition-all`}
            />
          ))}
        </div>
        <div className="absolute bottom-10 flex justify-between items-center  w-full px-12">
          <button
            onClick={prevSlide}
            className="font-jost font-semibold text-[20px] leading-[20px] flex gap-2 items-center cursor-pointer"
          >
            <Icons name="ArrowPortfolioLeft" /> Previous
          </button>
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
