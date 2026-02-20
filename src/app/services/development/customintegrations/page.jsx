export const metadata = {
  title: "Custom Integrations | Connect Your Business with Systems",
  description:
    "Our custom integration approach includes saas integration services, data integration services, and software automation services that simplify complex operations.",
  keywords: [
    "custom integrations",
     "custom integrations services"
  ], 
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/development/customintegrations",
    languages: {
      "en-US": "/services/development/customintegrations",
    },
  },
  openGraph: {
    title: "Custom Integrations | Connect Your Business with Systems",
    description:
      "Our custom integration approach includes saas integration services, data integration services, and software automation services that simplify complex operations.",
    url: "https://infogentech.com/services/development/customintegrations",
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
    title: "Custom Integrations | Connect Your Business with Systems",
    description:
      "Our custom integration approach includes saas integration services, data integration services, and software automation services that simplify complex operations.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/development/customintegrations",
    languages: {
      "en-US": "https://infogentech.com/services/development/customintegrations",
    },
  },
  other: {
    "geo.region": "IN",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};


import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const customintegrations = () => {
  const servicedetailheader =
  {
    name: 'Custom Integrations',
    des: 'Connecting Your Tools, Data, and Platforms Into One Powerful System',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1771231307/Custom_hero_a9cyyf.png',
    heading1: '1. Custom Integration Services That Connect Your Business Systems',
    para1: 'Infogentech delivers custom integration solutions that connect your tools, platforms, and workflows into one seamless environment. Our crm integration services and ERP and crm integration solutions ensure smooth data flow between sales, operations, and finance systems. Whether you need crm integration with ERP, payment gateway integration, or a secure payment gateway integration api, we build reliable connections tailored to your needs. Through our system integration services and api integration services, we eliminate manual tasks, reduce errors, and create efficient, scalable processes for modern businesses.',
    heading2: '2. Scalable SaaS and Data Integration for Smarter Automation',
    para2: 'Our custom integration approach includes saas integration services, data integration services, and software automation services that simplify complex operations. Infogentech connects cloud platforms, internal tools, and third-party applications into a unified ecosystem. From crm integration services to full system integration services, we focus on security, performance, and flexibility.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770891368/cust_1_uswhk0.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770891377/cust_2_z2cyxz.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770891385/cust_3_c730px.png',
    para3: 'Whether it’s payment gateway integration, syncing customer records, or automating workflows through api integration services, our solutions help businesses operate faster, reduce operational friction, and support long-term digital growth.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "What are crm integration services, and why are they important?",
        answer: "CRM integration services connect customer data across systems and enable better sales tracking. It also automates and reports while ensuring accurate information flows between applications and teams.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "How does erp and crm integration benefit business operations?",
        answer: "ERP and CRM integration connect financial and operational data along with customer data. It improves decision-making and reduces manual work. ERP and crm integration also ensures seamless communication across departments and business systems.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What is the role of api integration services in software automation?",
        answer: "API integration services connect applications and enable software automation services. It also allows systems to exchange data securely, improving efficiency, reducing manual tasks, and streamlining workflows.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "How do saas integration services and data integration services help businesses grow?",
        answer: "SaaS integration services and data integration services connect cloud tools, synchronize information, automate processes, and provide a unified system that improves productivity and scalability.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What are crm integration services for businesses?",
        answer: "CRM integration services connect customer data across platforms and help teams manage leads. It also automates tasks and improves sales and service efficiency. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why is ERP and crm integration important?",
        answer: "ERP and CRM integration connect operations and customer data and reduce manual work. It also improves reporting accuracy and helps teams make better decisions. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What is payment gateway integration?",
        answer: "Payment gateway integration is the technical process of linking a website, app, or system with a payment processor to handle online transactions securely. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. How do api integration services improve automation?",
        answer: "API integration services connect different software systems and automate data exchange. It also reduces manual tasks and helps businesses run faster and more efficiently. ",
        order: 4,
        isActive: true,
      },

    ],
  };



  return (
    <>
      <IndServicesDetailHeader servicedetailheader={servicedetailheader} />
      <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2 mb-12 pt-12 lg:py-0 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 items-start">
          <IndServiceDetails servicedetailcontent={servicedetailcontent} />
          <div>
            <IndServicesDetailCategoryFaqs servicedetailscategorysidebarfaqs={servicedetailscategorysidebarfaqs} />
              <IndServicesDetailsidebar />
          </div>
        </div>
        <div className="pt-12">
          <hr className="w-full border-t-4 border-[#EBE8FD]" />
        </div>
        <IndServicesDetailFaqs servicedetailsfaqs={servicedetailsfaqs} />
      </div>
    </>
  );
}

export default customintegrations; 