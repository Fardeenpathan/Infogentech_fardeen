export const metadata = {
  title: "Graphic Design| UI/UX Design | Branding & Logo Design | Infogentech Softwares LLP",
  description:
    "Enhance your brand with expert Graphic Design, UI/UX Design, Branding, and Logo Design services that create impactful digital experiences.",
  keywords: [
    "Graphic Design",
    "UI/UX Design",
    "Branding",
    "Landing Page Design",
    "Corporate Identity Design",
    "Logo Design",
  ], 
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/design",
    languages: {
      "en-US": "/services/design",
    },
  },
  openGraph: {
    title: "Graphic Design, UI/UX Design, Branding & Logo Design | Infogentech Softwares LLP",
    description:
      "Enhance your brand with expert Graphic Design, UI/UX Design, Branding, and Logo Design services that create impactful digital experiences.",
    url: "https://infogentech.com/services/design",
    siteName: "Infogentech",
    images: [
      {
        url: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
        width: 200,
        height: 60,
        alt: "Infogentech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design, UI/UX Design, Branding & Logo Design | Infogentech Softwares LLP",
    description:
      "Enhance your brand with expert Graphic Design, UI/UX Design, Branding, and Logo Design services that create impactful digital experiences.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/design",
    languages: {
      "en-US": "https://infogentech.com/services/design",
    },
  },
  other: {
    "geo.region": "IN",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};

import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceCard from "@/components/india/IndServiceCard";
import IndServiceDesc from "@/components/india/IndServiceDesc";
import MovingTextBanner from "@/components/MovingTextBanner";
const Design = () => {
  const categories = [
    {
      id: "01",
      title: "Graphic Design", 
      link: '/services/design/graphicDesign',
      description:
        "Creative visual content for print and digital platforms to elevate your brand presence.",
         image: [
        {
          src: "/assist/portfolio/design/birtishRajDesign02.png",
          link: "/portfolio/design/british-raj",
        },
        {
          src: "/assist/portfolio/design/logos.png",
          link: "/portfolio/design/portfolio-logo",
        },
      ],
       icon: "ServiceGraphic",
    },
    {
      id: "02",
      title: "UI/UX Design",
      link: '/services/design/ui-ux-design',
      description:
        "User-centered design strategies to create engaging and functional digital experiences.",
      image: [
        {
          src: "/assist/portfolio/development/dryCleaning.webp",
          link: "/portfolio/development/laraClean-service",
        },
        {
          src: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761551557/blog-app/blogs/blogs/1761551548973-shaddikarvado.jpg",
          link: "/portfolio/development/shaadiKarwadu-wedding-planning",
        },
      ],
       icon: "ServiceUiUX",
    },
    {
      id: "03",
      title: "Branding",
      link: '/services/design/brandingdesign',
      description:
        "Craft a powerful brand identity with strategic design and messaging.",
   image: [
        {
          src: "/assist/services/design/Branding1.png",
          link: "/project/1",
        },
        {
          src: "/assist/services/design/Branding2.png",
          link: "/project/2",
        },
      ],
      icon: "ServiceBranding",
    },
    {
      id: "04",
      title: "Logo Design",
      link: '/services/design/logodesign',
      description:
        "Custom logo designs that capture your brand’s personality and values.",
        image: [
        {
          src: "/assist/services/design/LOGO1.png",
          link: "/project/1",
        },
        {
          src: "/assist/services/design/LOGO2.png",
          link: "/project/2",
        },
      ],
      icon: "Servicelogo",
    },
  ];

  return (
    <>
      <IndServicesHeader />
      <IndAllServices activeService="Design" />
      <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2">
        <div className="lg:pb-20 pb-4">
          <IndServiceDesc />
        </div>
        <IndServiceCard categories={categories} />
      </div>
      <MovingTextBanner />
    </>
  );
};

export default Design;
