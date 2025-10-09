// // Achievements.jsx
// "use client";

// import { useEffect, useState, useRef } from "react";

// const achievements = [
//   { value: 80, suffix: "+", label: "Active Clients" },
//   { value: 100, suffix: "+", label: "Projects Completed" },
//   { value: 3, suffix: "+", label: "Glorious Years" },
//   { value: 50, suffix: "+", label: "Professional Team" },
// ];

// // Count-up hook
// const useCountUp = (end, duration = 2000, trigger = false) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!trigger) return;
//     let start = 0;
//     const increment = end / (duration / 50);
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         start = end;
//         clearInterval(interval);
//       }
//       setCount(Math.floor(start));
//     }, 50);

//     return () => clearInterval(interval);
//   }, [end, duration, trigger]);

//   return count;
// };

// const Achievements = () => {
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   // Trigger animation when section is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-gradient-to-r from-[#F3E8FF] to-[#E6DBFF] py-16 flex justify-center items-center"
//     >
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-10 w-full max-w-[1266px]">
//         {achievements.map((achievement, index) => {
//           const count = useCountUp(achievement.value, 2000, inView);
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center relative"
//             >
//               {/* Count + Suffix */}
//               <div className="flex justify-center items-end font-avalors leading-[160%] tracking-[3px] text-[50px] sm:text-[64px]">
//                 <span className="text-[#7C4DFF]">{count}</span>
//                 <span className="text-[#8752FF] ml-1 relative top-[-6px]">
//                   {achievement.suffix}
//                 </span>
//               </div>

//               {/* Label (directly under count) */}
//               <p className="font-montserrat font-semibold text-[18px] leading-[110%] text-[#252525] capitalize mt-1">
//                 {achievement.label}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Achievements;




"use client";

import { useEffect, useState, useRef } from "react";

const achievements = [
  { value: 80, suffix: "+", label: "Active Clients" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Glorious Years" },
  { value: 50, suffix: "+", label: "Professional Team" },
];

// Count-up hook
const useCountUp = (end, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = end / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [end, duration, trigger]);

  return count;
};

const Achievements = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#F3E8FF] to-[#E6DBFF] py-16 flex justify-center items-center"
    >
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-8 w-full max-w-[1266px] px-4 sm:px-6 md:px-8">

        {achievements.map((achievement, index) => {
          const count = useCountUp(achievement.value, 2000, inView);
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Count + Suffix */}
              <div className="flex items-end font-avalors leading-[160%] tracking-[3px] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                <span className="text-[#7C4DFF]">{count}</span>
                <span className="text-[#8752FF] relative top-[-8px] ml-[2px]">
                  {achievement.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="font-montserrat font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[110%] text-[#252525] capitalize mt-2 whitespace-nowrap">
                {achievement.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
