
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceDesc from "@/components/india/IndServiceDesc";
import IndServiceCard from "@/components/india/IndServiceCard";
import MovingTextBanner from "@/components/MovingTextBanner";

const Development = () => {
const categories = [
  {
    id: "01",
    title: "Web & App Development",
    description: "Build high-performing, scalable websites and mobile applications tailored to your business goals.",
    image: "/images/services/web-app-development.jpg",
    subServices: [
      { id: "01", title: "Website Development" },
      { id: "02", title: "Custom Websites & Business Landing Pages" },
      { id: "03", title: "E-commerce Platforms & Online Stores" },
      { id: "04", title: "Personal Portfolios & Showcase Sites" },
      { id: "05", title: "Application Development" },
      { id: "06", title: "Web-based Application Development" },
      { id: "07", title: "Mobile App Development (iOS & Android)" },
      { id: "08", title: "Progressive Web Applications (PWA)" },
      { id: "09", title: "Cross-platform Mobile Solutions" },
      { id: "10", title: "Portal & Dashboard Development" },
      { id: "11", title: "Enterprise App Development" },
      { id: "12", title: "Software Development & SaaS" },
      { id: "13", title: "Custom Software Development" },
      { id: "14", title: "SaaS Platform Setup, Deployment & Support" },
      { id: "15", title: "Scalability & Performance Optimization" },
      { id: "16", title: "Application Maintenance" },
    ],
  },
  {
    id: "02",
    title: "CMS Development",
    description: "Flexible and user-friendly content management systems like WordPress, Shopify, and more.",
    image: "/images/services/cms-development.jpg",
    subServices: [
      { id: "01", title: "WordPress (Custom Themes & Plugins)" },
      { id: "02", title: "Shopify Store Development & Customization" },
      { id: "03", title: "Joomla & WooCommerce Solutions" },
      { id: "04", title: "Custom CMS Development" },
      { id: "05", title: "LMS Development" },
    ],
  },
  {
    id: "03",
    title: "Custom Integrations",
    description: "Seamless integration of APIs, databases, and third-party platforms to enhance functionality.",
    image: "/images/services/custom-integrations.jpg",
    subServices: [
      { id: "01", title: "Database Design & API Integration" },
      { id: "02", title: "System Integration & Custom Software" },
      { id: "03", title: "CRM Integration" },
    ],
  },
  {
    id: "04",
    title: "AI & Cloud Solutions",
    description: "Next-gen solutions using artificial intelligence, cloud hosting, and modern frameworks.",
    image: "/images/services/ai-cloud.jpg",
    subServices: [
      { id: "01", title: "Advanced AI Development" },
      { id: "02", title: "Cloud Hosting Services" },
      { id: "03", title: "Advanced Solutions" },
      { id: "04", title: "Node.js Development" },
      { id: "05", title: "React Development" },
      { id: "06", title: "Laravel Development" },
      { id: "07", title: "No-Code Development" },
    ],
  },
];


  return (
    <>
      <IndServicesHeader />
      <IndAllServices activeService="Development" />
      <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2">
        <div className="lg:pb-20 pb-4">
          <IndServiceDesc/>
        </div>
        <IndServiceCard categories={categories} />
      </div>
      <MovingTextBanner />
    </>
  );
};

export default Development;
