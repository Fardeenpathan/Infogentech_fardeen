
import IndAboutImage from "@/components/india/IndAboutImage";
import IndAboutDesc from "@/components/india/IndAboutDesc";
import IndHeroCTA from "@/components/india/IndHeroCTA";
import IndAchievements from "@/components/india/IndAchievements";
import IndInfoCards from "@/components/india/IndInfoCards";
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
    siteName: "infogentech",
    type: "website",
    images: [
      {
        url: "https://infogentech.com/public/CompanyName.svg",
        alt: "Infogentech",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
    site: "@infogentech",
    images: ["https://infogentech.com/public/CompanyName.svg"],
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
    "geo.region": "US",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};

const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-[#E6DBFF] h-158 justify-center items-center flex">
        <h1 className="font-avalors font-normal text-[80px] leading-[1.6] tracking-[3px] align-middle text-primary">
          ABOUT US
        </h1>
      </div>
      <IndAboutImage />
      <IndAboutDesc />
      <IndAchievements />
      <IndInfoCards/>
     <IndHeroCTA />
    </>
  );
};

export default AboutUs;
