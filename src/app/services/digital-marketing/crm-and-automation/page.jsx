export const metadata = {
  title: "CRM and Automation | CRM Integration Services",
  description:
    "Infogentech offers reliable crm integration services that connect your customer data with core business systems for smoother operations.",
  keywords: [
      "CRM and Automation", 
      "crm automation software", 
      "automation in crm"
    ],
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/digital-marketing/crm-and-automation",
    languages: {
      "en-US": "/services/digital-marketing/crm-and-automation",
    },
  },
  openGraph: {
    title: "CRM and Automation | CRM Integration Services",
    description:
      "Infogentech offers reliable crm integration services that connect your customer data with core business systems for smoother operations.",
    url: "https://infogentech.com/services/digital-marketing/crm-and-automation",
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
    title: "CRM and Automation | CRM Integration Services",
    description:
      "Infogentech offers reliable crm integration services that connect your customer data with core business systems for smoother operations.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/digital-marketing/crm-and-automation",
    languages: {
      "en-US": "https://infogentech.com/services/digital-marketing/crm-and-automation",
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

const crmandautomation = () => {
  const servicedetailheader =
  {
    name: 'CRM and Automation',
    des: 'Seamless CRM Integration and Automation for Efficient Businesses',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896397/crm_hero_ggfkgp.png',
    heading1: '1. CRM Integration Services for Connected Business Operations',
    para1: 'Infogentech offers reliable crm integration services that connect your customer data with core business systems for smoother operations. Our expertise in ERP and crm integration. CRM integration with ERP ensures real-time data flow between sales, finance, and support teams. We deliver secure system integration services, api integration services, and payment gateway integration to streamline processes and improve accuracy. Whether you need payment gateway integration api or advanced data integration services, Infogentech builds scalable solutions that eliminate manual tasks and support faster decision-making.',
    heading2: '2. Automation and SaaS Integration for Smarter Workflows',
    para2: 'Our solutions go beyond integration by providing powerful software automation services and saas integration services tailored to your business needs. Infogentech connects cloud tools, internal platforms, and third-party systems into one efficient ecosystem. Our company achieves productivity improvements through three integration service offerings: API integration services, data integration services, and system integration services. Our complete integration',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896316/crm_1_nviupd.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896319/crm_3_l8zim5.jpg',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896437/crm_2_jpw0sh.png',
    para3: 'solution for businesses includes crm integration services and payment gateway integration services, which create smooth operational processes and produce precise reports.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "What CRM integration services do?",
        answer: "CRM integration services connect customer data across platforms and help teams manage leads. It also automates tasks and improves sales while supporting processes.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Why is erp and crm integration important?",
        answer: "ERP and CRM integration connect operations and customer data. This reduces manual work and improves reporting accuracy, resulting in streamlined business workflows.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What is payment gateway integration?",
        answer: "Payment gateway integration connects your website or app to secure payment systems which enabling fast, safe, and automated online transactions.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "How do SAAS integration services and software automation services help?",
        answer: "SaaS integration services and software automation services connect tools, automate tasks, and improve efficiency by reducing manual processes across business systems.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is CRM and automation?",
        answer: "CRM and automation combine customer management systems with automated processes to manage data and streamline tasks. It also improves business efficiency. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why is CRM and automation important for businesses?",
        answer: "CRM and automation reduce manual work and improve customer communication. It also helps businesses operate faster and more efficiently. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. How does CRM automation improve daily operations?",
        answer: "CRM automation handles repetitive tasks, such as data updates. It also handles notifications and saves time by reducing human errors. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What problems can CRM and automation solve?",
        answer: "CRM and automation solve issues like scattered data and slow processes. It can also solve missed customer interactions by creating organized, automated workflows. ",
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

export default crmandautomation;