
export const dynamic = 'force-static';

export const metadata = {
  title: "About Us | Infogentech Softwares LLP",
  description:
    "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
  keywords: "Leading IT Services",
  openGraph: {
    title: "About Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
    url: "https://infogentech.com/about",
    siteName: "Infogentech",
    type: "website",
    images: [
      {
        url: "/public/logoGroup.png",
        alt: "Infogentech Office",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
    images: [
      "/public/logoGroup.png",
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
