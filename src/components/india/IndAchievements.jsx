
"use client";

import { useEffect, useState, useRef } from "react";

const achievements = [
  { value: 80, suffix: "+", label: "Active Clients" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Glorious Years" },
  { value: 50, suffix: "+", label: "Professional Team" },
];
 
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

const IndAchievements = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

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
      className="relative w-full bg-gradient-to-r from-[#F3E8FF] to-[#E6DBFF] py-16 flex justify-around items-center my-16"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-8 w-full max-w-[1266px] px-4 sm:px-6 md:px-8">

        {achievements.map((achievement, index) => {
          const count = useCountUp(achievement.value, 2000, inView);
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-end font-avalors leading-[1.6] tracking-[3px] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                <span className="text-primary">{count}</span>
                <span className="text-primary relative -top-8 ml-[2px]">
                  {achievement.suffix}
                </span>
              </div>
              <p className="font-montserrat font-semibold text-lg sm:text-[18px] md:text-[20px] leading-[110%] text-[#252525]  capitalize mt-2 whitespace-nowrap">
                {achievement.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndAchievements;

