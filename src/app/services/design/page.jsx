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
      description:
        "Creative visual content for print and digital platforms to elevate your brand presence.",
      image: "/assist/services/design/graphic.jpeg",
      subServices: [
        { id: "01", title: "Print and Digital Graphic Design" },
        { id: "02", title: "Presentation Design" },
        { id: "03", title: "Ad Creative Design" },
        { id: "04", title: "Illustrations & Iconography" },
        { id: "05", title: "Print & Packaging Design" },
        { id: "06", title: "Product Sheets & One Pagers" },
        { id: "07", title: "Corporate Reports" },
      ],
    },
    {
      id: "02",
      title: "UI/UX Design",
      description:
        "User-centered design strategies to create engaging and functional digital experiences.",
      image: "/assist/services/design/ui.png",
      subServices: [
        { id: "01", title: "UI/UX Design & Wireframing" },
        { id: "02", title: "Mobile-first Responsive Design" },
        { id: "03", title: "Visual Design Systems & Style Guides" },
        { id: "04", title: "Website Design (Desktop, Mobile, eCommerce)" },
        { id: "05", title: "Landing Page Design" },
      ],
    },
    {
      id: "03",
      title: "Branding",
      description:
        "Craft a powerful brand identity with strategic design and messaging.",
    image: "/assist/services/design/branding.png",
      subServices: [
        { id: "01", title: "Corporate Identity Design" },
        { id: "02", title: "Brand Guidelines" },
        { id: "03", title: "Brand Identity Messaging" },
        { id: "04", title: "Rebranding Services" },
      ],
    },
    {
      id: "04",
      title: "Logo Design",
      description:
        "Custom logo designs that capture your brand’s personality and values.",
       image: "/assist/services/design/logo.jpeg",
      subServices: [
        { id: "01", title: "Minimalist logo" },
        { id: "02", title: "Animated logo" },
        { id: "03", title: "Custom Logo Design" },
        { id: "04", title: "3D Logo" },
      ],
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
