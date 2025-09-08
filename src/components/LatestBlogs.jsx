import Image from "next/image";
import MidHeader from "./MidHeader";
import Icons from "./ui/Icon";
import HomeBlogCardsd from "./HomeBlogCardsd";

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
    <div className="mt-8 ">
      <MidHeader
        name="Latest Blogs"
        subheading="Explore Ideas, Trends, and Strategies Shaping Digital Success."
      />
      <a
        href="#"
        className="flex gap-8 items-center justify-end mr-10 relative -top-10"
      >
        <p className="font-[jost] font-semibold text-[18px] leading-[120%] capitalize ">
          See Our <br /> More Blogs
        </p>
        <Icons name="Arrow" width={62} height={28} />
      </a>
      <div className="relative flex flex-col items-center justify-center   text-white">
        <div className="flex items-center justify-center gap-12">
          {latest.map((blog) => (
            <HomeBlogCardsd key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
