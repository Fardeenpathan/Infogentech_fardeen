


export const metadata = {
  title: "About Us | Infogentech Softwares LLP",
  description:
    "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
  keywords: "Leading IT Services",
    metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/about",
    },
  },
  openGraph: {
    title: "About Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
    url: "https://infogentech.com/about",
    siteName: "Infogentech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
        width: 200,
        height: 60,
        alt: "Infogentech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/about",
    languages: {
      "en-US": "https://infogentech.com/about",
    },
  },
  other: {
    "geo.region": "IN",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};

import IndAboutImage from "@/components/india/IndAboutImage";
import IndAboutDesc from "@/components/india/IndAboutDesc";
import IndHeroCTA from "@/components/india/IndHeroCTA";
import IndAchievements from "@/components/india/IndAchievements";
import IndInfoCards from "@/components/india/IndInfoCards";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full bg-[#E6DBFF] lg:h-158 h-140 justify-center items-center flex">
        <h1 className="font-avalors font-normal md:text-[80px] text-[46px] leading-[1.6] tracking-[3px] align-middle text-primary">
          ABOUT US 
        </h1>
      </div>
      <IndAboutImage />
      <IndAboutDesc />
      <IndAchievements />
      <IndInfoCards />
      <IndHeroCTA />
    </div>
  );
};

export default AboutUs;
