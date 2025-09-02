import React from "react";

const DotIndicators = ({ slides, currentIndex, setCurrentIndex }) => {
  return (
    <div className="border px-5 py-6 rounded-sm flex items-center shadow-[0px_0px_4px_0px_#8955FF]">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className={`w-2.5 h-2.5 rounded-full mx-1 ${
            currentIndex === index ? "bg-[#6D18EF] px-4" : "bg-white"
          }`}
          onClick={() => setCurrentIndex(index)}
        ></button>
      ))}
    </div>
  );
};

export default DotIndicators;
