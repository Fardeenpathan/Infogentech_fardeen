export const metadata = {
  title: "Marketing Strategy & Performance | SEO & CRM Solutions | Infogentech Softwares LLP",
  description:
    "Boost your business with expert Marketing Strategy, Performance Marketing, CRM & Automation, SEO, Content Marketing, and Audience Engagement Strategy.",
  keywords: [
    "B2B Content Strategies",
    "ROI-Driven Campaign Strategies",
    "Google Ads Campaign Management",
    "Pay-Per-Click Advertising (PPC)",
    "Conversion Tracking & Optimization",
    "Email Marketing Services",
    "Social Media Marketing (SMO)",
    "Local SEO for Businesses",
    "Keyword Research & Competitor Analysis",
    "Blog Writing & SEO Copy",
    "Google Analytics Setup",
  ],
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/digital-marketing",
    languages: {
      "en-US": "/services/digital-marketing",
    },
  },
  openGraph: {
    title: "Marketing Strategy & Performance | SEO & CRM Solutions | Infogentech Softwares LLP",
    description:
      "Boost your business with expert Marketing Strategy, Performance Marketing, CRM & Automation, SEO, Content Marketing, and Audience Engagement Strategy.",
    url: "https://infogentech.com/services/digital-marketing",
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
    title: "Marketing Strategy & Performance | SEO & CRM Solutions | Infogentech Softwares LLP",
    description:
      "Boost your business with expert Marketing Strategy, Performance Marketing, CRM & Automation, SEO, Content Marketing, and Audience Engagement Strategy.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/digital-marketing",
    languages: {
      "en-US": "https://infogentech.com/services/digital-marketing",
    },
  },
  other: {
    "geo.region": "IN",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};

import IndServiceCard from "@/components/india/IndServiceCard";
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceDesc from "@/components/india/IndServiceDesc";
import MovingTextBanner from "@/components/MovingTextBanner";

const Marketing = () => {
  const categories = [
    {
      id: "01",
      title: "Marketing Strategy",
      description:
        "Create comprehensive strategies focused on long-term brand growth, audience engagement, and ROI.",
       image: [
        {
          src: "/assist/img/blogs.png",
          link: "/project/1",
        },
        {
          src: "/assist/img/blogs.png",
          link: "/project/2",
        },
      ],
    
      icon: "Servicemarketing",
     link: "/services/marketing-strategy",
    },
    {
      id: "04",
      title: "Social Media marketing",
      description:
        "Grow and retain loyal audiences through social campaigns, influencer outreach, and strategic content.",
        image: [
        {
          src: "/assist/img/blogs.png",
          link: "/project/1",
        },
        {
          src: "/assist/img/blogs.png",
          link: "/project/2",
        },
      ],
      icon: "Servicesocialmedia",
      link:"/services/digital-marketing/social-media-marketing",
    },
    {
      id: "05",
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimize your website for better visibility, organic traffic, and search engine rankings.",
        image: [
        {
          src: "/assist/img/blogs.png",
          link: "/project/1",
        },
        {
          src: "/assist/img/blogs.png",
          link: "/project/2",
        },
      ],
       icon: "Serviceseo",
      link: "/services/digital-marketing/seo-services"
    },
    {
      id: "06",
      title: "Content Marketing",
      description:
        "Create valuable and consistent content to attract, engage, and convert your target audience.",
      image: [
        {
          src: "/assist/img/blogs.png",
          link: "/project/1",
        },
        {
          src: "/assist/img/blogs.png",
          link: "/project/2",
        },
      ],
      icon: "Servicecontent",
      subServices: [
        { id: "01", title: "Blog Writing & SEO Copy" },
        { id: "02", title: "Social Content & Captions" },
        { id: "03", title: "Video Scripts & Storytelling" },
        { id: "04", title: "Marketing Copywriting" },
        { id: "05", title: "Content Calendar Planning" },
      ],
    },
    {
      id: "07",
      title: "Analytics & Reporting",
      description:
        "Track campaign performance with custom dashboards and actionable insights to guide decision-making.",
        image: [
        {
          src: "/assist/img/blogs.png",
          link: "/project/1",
        },
        {
          src: "/assist/img/blogs.png",
          link: "/project/2",
        },
      ],
      icon: "Serviceanalytics",
      subServices: [
        { id: "01", title: "Google Analytics Setup" },
        { id: "02", title: "Performance Monitoring & CRO" },
        { id: "03", title: "Custom Dashboards & Reporting" },
        { id: "04", title: "ROI & Insight Reports" },
      ],
    },
     {
      id: "02",
      title: "Performance Marketing",
      description:
        "Targeted, measurable campaigns to drive traffic, sales, and conversion through various ad platforms.",
      image: [
        {
          src: "/assist/img/blogs.png",
          link: "/project/1",
        },
        {
          src: "/assist/img/blogs.png",
          link: "/project/2",
        },
      ],
      icon: "Serviceperformance",
      subServices: [
        { id: "01", title: "Pay-Per-Click Advertising (PPC)" },
        { id: "02", title: "Google Ads Campaign Management" },
        { id: "03", title: "Display Ads & Retargeting" },
        { id: "04", title: "Shopping Ads & Product Listings" },
        { id: "05", title: "Conversion Tracking & Optimization" },
        { id: "06", title: "E-commerce Marketing" },
        { id: "07", title: "Online Store Optimization" },
        { id: "08", title: "Shopping Campaign Management" },
        { id: "09", title: "Shopping Ads & Product Listings" },
        { id: "10", title: "Cart Abandonment Recovery" },
        { id: "11", title: "CLV Optimization" },
        { id: "12", title: "Marketplace Marketing (Amazon, eBay)" },
      ],
    },
    {
      id: "03",
      title: "CRM & Automation",
      description:
        "Automate marketing flows and nurture customer relationships through personalized messaging.",
      image: [
        {
          src: "/assist/img/blogs.png",
          link: "/project/1",
        },
        {
          src: "/assist/img/blogs.png",
          link: "/project/2",
        },
      ],
      icon: "Serviceautomation",
      subServices: [
        { id: "01", title: "Email Marketing" },
        { id: "02", title: "Email Campaign Design" },
        { id: "03", title: "Newsletter Creation & Management" },
        { id: "04", title: "Automation Sequences" },
        { id: "05", title: "Customer Retention Strategies" },
        { id: "06", title: "List Building & Segmentation" },
      ],
    },
  ];

  return (
    <>
      <IndServicesHeader />
      <IndAllServices activeService="Digital Marketing" />
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

export default Marketing;
