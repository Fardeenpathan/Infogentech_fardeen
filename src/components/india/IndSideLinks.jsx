"use client";
import { useState } from "react";

export default function IndSideLinks() {
  const links = [
    "Exploring Generative AI in Content Creation",
    "Steering Clear of Common AI Writing Pitfalls",
    "Understanding ChatGPT Capabilities - Define Your Style",
    "Understand Your Readers",
    "Creating Quality AI-powered Blogs that Stand Out",
    "Conclusion: Embracing AI in Blog Creation",
    "Afterword: The AI Behind This Article",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 w-full md:w-[500px] gap-[10px] ">
      <h3 className="font-montserrat font-semibold text-[20px] text-[#252525] mb-5">
        In this article
      </h3>

      <ul className="flex flex-col gap-3">
        {links.map((text, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveIndex(index)}
              className={`font-montserrat text-left p-3 transition-all duration-200 text-[24px] leading-[100%] tracking-[0%] ${
                activeIndex === index
                  ? "font-semibold text-[#3D22CF] border-l-[3px] border-[#3D22CF] pl-3"
                  : "font-medium text-[#252525] hover:text-[#3D22CF] pl-[15px]"
              }`}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
