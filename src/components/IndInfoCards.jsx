// "use client";
// import React from "react";
// import Icons from "./ui/Icon";

// const cards = [
//   {
//     icon: "WhoWeAre",
//     title: "WHO ARE WE",
//     text: `We are located in US/India, We offer all-inclusive services and complete solutions for your company's marketing requirements. We promise to offer you cutting- edge services. Furthermore, we ensure that we get precise information about your business in order to carry out a comprehensive assessment and analysis. From website building to internet marketing, SEO, and much more, we offer a comprehensive solution. We are the most productive and successful service providers to advertise your business's goods and services to the intended market.`,
//     imageRight: true,
//   },
//   {
//     icon: "OurGoal",
//     title: "OUR GOAL",
//     text: `Our goal as a digital marketing agency is to help our clients expand more quickly. Our goal is to offer our clients cost-effective digital marketing services. We genuinely care about comprehending and evaluating the needs and difficulties of our customers. Strong marketing is the cornerstone of sustainable growth, which is why we assist you in building a powerful online presence. Our schemes are simple yet efficient.`,
//     imageRight: false,
//   },
//   {
//     icon: "OurServices",
//     title: "OUR SERVICES",
//     text: `We are a leading Digital Marketing, Web Development and Web Designing company. As we all know competition is high in the business industry and to turn a profit, everyone has to draw in an ever-growing clientele. Furthermore, everything is now digital, even organizations. Everything runs on the internet.`,
//     imageRight: true,
//   },
// ];

// export default function InfoCards() {
//   return (
//     <section className="w-full bg-transparent py-[50px] px-[152px] max-lg:px-10 max-md:px-6 max-sm:px-4">
//       <div className="flex flex-col items-center gap-10">
//         {cards.map((c, i) => (
//           <div
//   key={i}
//   style={{
//     borderRadius: "50px", // rounds the outer border
//     padding: "1px",       // border thickness
//     background: "linear-gradient(180deg, rgba(82,151,255,0.3) 0%, rgba(135,82,255,0.3) 100%)", // gradient border
//   }}
// >
//   <div
//     className="relative bg-white/70 backdrop-blur-md flex flex-col md:flex-row items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
//     style={{
//       borderRadius: "49px", // slightly smaller to show outer gradient
//       width: "1160px",
//       maxWidth: "100%",
//       minHeight: "240px",
//       padding: "24px",
//     }}
//   >
//             {/* Top gradient line */}
//             <div className="absolute top-0 left-10 w-[300px] h-[4px] rounded-md bg-gradient-to-r from-violet-700 to-violet-500" />

//             {/* Text Section */}
//             <div
//               className={`w-full md:w-1/2 p-4 flex flex-col justify-center ${
//                 c.imageRight ? "order-1 md:pr-8" : "order-2 md:pl-8"
//               }`}
//             >
//               <h3 className="font-avalors text-[#4C4C4C] text-[46px] font-normal leading-[120%] tracking-normal mb-3 capitalize">
//                 {c.title}
//               </h3>
//               <p
//                 className="text-[#6F6F6F]-500"
//                 style={{
//                   fontFamily: "Montserrat, sans-serif",
//                   fontSize: "18px",
//                   lineHeight: "150%",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 {c.text}
//               </p>
//             </div>

//             {/* Image Section (fixed centering) */}
//             <div
//               className={`w-full md:w-1/2 flex items-center justify-center p-4 ${
//                 c.imageRight ? "order-2" : "order-1"
//               }`}
//             >
//               <div className="max-w-[370px] w-full flex items-center justify-center">
//                 <Icons name={c.icon} />
//               </div>
//             </div>

//             {/* Inner soft glow */}
//             <div
//               aria-hidden
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 borderRadius: "50px",
//                 boxShadow: "inset 0 0 90px rgba(139,92,246,0.06)",
//                 pointerEvents: "none",
//               }}
//             />
//           </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import Icons from "./ui/Icon";

const cards = [
  {
    icon: "WhoWeAre",
    title: "WHO ARE WE",
    text: `We are located in US/India, We offer all-inclusive services and complete solutions for your company's marketing requirements. We promise cutting-edge services. We ensure precise information about your business to carry out a comprehensive assessment and analysis. From website building to internet marketing, SEO, and much more, we offer a complete solution. We are the most productive and successful service providers to advertise your business's goods and services to the intended market.`,
    imageRight: true,
  },
  {
    icon: "OurGoal",
    title: "OUR GOAL",
    text: `Our goal as a digital marketing agency is to help our clients expand more quickly. We offer cost-effective digital marketing services. We genuinely care about evaluating the needs and difficulties of our customers. Strong marketing is the cornerstone of sustainable growth, which is why we assist you in building a powerful online presence. Our schemes are simple yet efficient.`,
    imageRight: false,
  },
  {
    icon: "OurServices",
    title: "OUR SERVICES",
    text: `We are a leading Digital Marketing, Web Development and Web Designing company. Competition is high in the business industry and everyone must draw in an ever-growing clientele. Everything is now digital, even organizations. Everything runs on the internet.`,
    imageRight: true,
  },
];

export default function InfoCards() {
  return (
    <section className="w-full bg-transparent py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center gap-10">
        {cards.map((c, i) => (
          <div
            key={i}
            className="rounded-[50px] p-[2px] bg-gradient-to-b from-blue-300/30 to-purple-300/30 w-full max-w-[1160px]"
          >
            <div className="relative bg-white/70 backdrop-blur-md flex flex-col md:flex-row items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.01] rounded-[49px] p-6">
              <div className="absolute top-0 left-4 sm:left-6 md:left-10 w-[200px] sm:w-[250px] md:w-[300px] h-1 rounded-md bg-gradient-to-r from-violet-700 to-violet-500" />

              <div
                className={`w-full md:w-1/2 flex flex-col justify-center p-4 
    ${
      c.imageRight ? "order-2 md:order-1 md:pr-8" : "order-2 md:order-2 md:pl-8"
    }`}
              >
                <h3 className="font-avalors text-[#4C4C4C] text-3xl sm:text-4xl md:text-[46px] font-normal leading-snug tracking-normal mb-3 capitalize">
                  {c.title}
                </h3>
                <p className="text-[#6F6F6F] text-base sm:text-lg md:text-[18px] leading-relaxed">
                  {c.text}
                </p>
              </div>

              <div
                className={`w-full md:w-1/2 flex items-center justify-center p-4
    ${c.imageRight ? "order-1 md:order-2" : "order-1 md:order-1"}`}
              >
                <div className="max-w-[250px] sm:max-w-[300px] md:max-w-[370px] w-full flex items-center justify-center">
                  <Icons name={c.icon} />
                </div>
              </div>

              <div
                aria-hidden
                className="absolute inset-0 rounded-[50px]"
                style={{
                  boxShadow: "inset 0 0 90px rgba(139,92,246,0.06)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
