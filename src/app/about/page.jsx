
import IndAboutImage from "@/components/india/IndAboutImage";
import IndAboutDesc from "@/components/india/IndAboutDesc";
import IndHeroCTA from "@/components/india/IndHeroCTA";
import IndAchievements from "@/components/india/IndAchievements";
import IndInfoCards from "@/components/india/IndInfoCards";
import Head from "next/head";
const AboutUs = () => {
  return (
    <>
    <Head>
      <title>About Us | Infogentech Softwares LLP</title>
<meta name="description"
    content="Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements."/>
<meta name="keywords" content="Leading IT Services"/>

<meta property="og:title" content="About Us | Infogentech Softwares LLP"/>
<meta property="og:description"
    content="Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements."/>
<meta property="og:keywords" content="Leading IT Services"/>
<meta property="og:image" content="https://infogentech.com/public/CompanyName.svg" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="About Us | Infogentech Softwares LLP" />
<meta name="twitter:description"
    content="Infogentech Softwares LLP is a leading digital marketing company in India. Our team of experts delivers top-notch services to meet client business requirements." />
<meta name="twitter:site" content="@infogentech" />
<meta name="twitter:image" content="https://infogentech.com/public/CompanyName.svg" />

<meta property="og:site_name" content="infogentech"/>
<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
<meta property="og:type" content="Website"/>

<meta name="robots" content="index, follow"/>
<meta name="author" content="InfoGenTech"/>
<meta name="publisher" content="InfoGenTech"/>
<meta name="distribution" content="global"/>

<meta property="og:url" content="https://infogentech.com/about"/>
<link rel="canonical" href="https://infogentech.com/about" />
<link rel="alternate" href="https://infogentech.com/about" hreflang="en-us"/>

<meta name="geo.region" content="US" />

    </Head>
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

export default AboutUs;
