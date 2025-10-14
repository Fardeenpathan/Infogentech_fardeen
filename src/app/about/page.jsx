
import IndAboutImage from "@/components/india/IndAboutImage";
import IndAboutDesc from "@/components/india/IndAboutDesc";
import IndHeroCTA from "@/components/india/IndHeroCTA";
import IndAchievements from "@/components/india/IndAchievements";
import IndInfoCards from "@/components/india/IndInfoCards";
<<<<<<< HEAD
export const metadata = {
  title: "About Us | Infogentech Softwares LLP",
  description:
    "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
  keywords: "Leading IT Services",
  openGraph: {
    title: "About Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements.",
    url: "https://infogentech.com/about.php",
    siteName: "infogentech",
    type: "website",
    images: [
      {
        url: "https://infogentech.com/assets/images/logo-light.webp",
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
    images: ["https://infogentech.com/assets/images/logo-light.webp"],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/about.php",
    languages: {
      "en-US": "https://infogentech.com/about.php",
    },
  },
  other: {
    "geo.region": "US",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};

const AboutUs = () => {
=======
const about = () => {
>>>>>>> 70ca1e9170f59f6edc2b096e1c7b9614fe4f0840
  return (
    <>
      <div className="w-full bg-[#E6DBFF] h-158 justify-center items-center flex">
        <p className="font-avalors font-normal text-[80px] leading-[1.6] tracking-[3px] align-middle text-primary">
          ABOUT US
        </p>
      </div>
      <IndAboutImage />
      <IndAboutDesc />
      <IndAchievements />
      <IndInfoCards/>
     <IndHeroCTA />
    </>
  );
};

export default about;
