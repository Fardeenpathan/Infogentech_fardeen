"use client"
import { useState , useEffect} from "react";

export default function IndSideLinks({data}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [heading, setHeadings] = useState([]);
     useEffect(() => {
       if (data?.content) {
         const parser = new DOMParser();
         const doc = parser.parseFromString(data.content, "text/html");
         const headingElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
   
         const extracted = Array.from(headingElements).map((el) => ({
           text: el.innerText,
           id: el.id || el.innerText.toLowerCase().replace(/\s+/g, "-"), // auto id
           tag: el.tagName.toLowerCase(),
         }));
   
         setHeadings(extracted);
       }
     }, [data]);
  return (
    <aside className=" p-6 w-full md:w-[500px] gap-[10px] ">
      <h3 className="font-montserrat font-semibold text-xl text-[#252525] mb-5">
        In this article
      </h3>

      <ul className="flex flex-col gap-3">
        {heading.map((text, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveIndex(index)}
              className={`font-montserrat text-left p-3 transition-all duration-200 text-2xl  ${
                activeIndex === index
                  ? "font-semibold text-[#3D22CF] border-l-[3px] border-[#3D22CF] pl-3"
                  : "font-medium text-[#252525] hover:text-[#3D22CF] pl-3"
              }`}
            >
              {text.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
