import Image from "next/image";
import MidHeader from "./MidHeader";
import Icons from "./ui/Icon";
const latest = [
  {
    id: 1,
    title: "Madhya Pradesh Partners with Submer for AI‑Ready Data Centres",
    content:
      "What happens when a middle school friendship, a shared love for music, and a global pandemic come together? In...",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
  },
  {
    id: 2,
    title: "Centre of Excellence for Emerging Tech at DAVV, Indore.",
    content:
      "DAVV University me AI aur emerging tech ka Centre of Excellence banega, jisme students aur teachers dono ko upskill kiya jayega.",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
  },
  {
    id: 3,
    title: "AI Summit in Vizag This Month",
    content:
      "Vizag me 25–26 July ko Fusion AI Summit hoga, jahan startups, experts aur govt milke AI future pe baat karenge.",
    date: "19 Jul, 2025",
    img: "/assist/img/blogs.png",
  },
];
export default function LatestBlogs() {
  return (
    <div className="mt-8">
      <MidHeader
        name="Latest Blogs"
        subheading="Explore Ideas, Trends, and Strategies Shaping Digital Success."
      />

      <div className="relative flex flex-col items-center justify-center py-16  text-white">
        <div className="flex items-center justify-center gap-6">
          {latest.map((blog) => {
            return (
              <div key={blog.id}>
                <div>
                  <Image
                    src={blog.img}
                    alt="Blogs"
                    width={502}
                    height={207}
                    objectFit="cover"
                  />
                  <p className="font-[jost] font-medium text-xl leading-[120%] ">{blog.title}</p>
                  <p className="font-[kumbh] text-[18px] text-[#73737F] leading-[120%]">{blog.content}</p>
                  <div className="flex items-center justify-between mt-4 text-[#8752FF]">
                   <p className="text-[#73737F] font-[jost] font-medium text-sm leading-[120%] ">{blog.date}</p> 
                   <Icons name="Arrow" height={14} width={31} />
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
