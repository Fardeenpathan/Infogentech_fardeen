import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const analyticsandreporting = () => {
  const servicedetailheader =
  {
    name: 'Analytics and Reporting',
    des: 'Smart Analytics for Better Performance and Conversions',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895746/analytics_hero_jzqcqj.png',
    heading1: '1. Data-Driven Analytics and Reporting for Smarter Decisions',
    para1: 'Infogentech delivers comprehensive analytical report and performance analytics solutions that help businesses understand user behavior and improve results. Our team provides Google Analytics and GA4 Setup in Delhi to establish precise tracking systems and goal configurations while delivering valuable insights. We transform unprocessed data into understandable reports that show website performance and campaign success. With expert  tracking systems and detailed analytical reports, Infogentech enables businesses to discover growth prospects  and make established decisions for their digital expansion.',
    heading2: '2. GA4, Tag Manager, and CRO Monitoring Services in Delhi',
    para2: 'Our Analytics & Reporting services include GA4 setup for business in Delhi, Google Tag Manager setup Delhi, and advanced CRO & Performance Monitoring Services in Delhi. Our company delivers precise event tracking, conversion goals, and performance dashboards, all designed to meet your specific business needs. Infogentech combines performance analytics with conversion rate optimization, ensuring every campaign and page delivers measurable value.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895668/analytics_1_njiyny.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895672/analytics_3_bgabpw.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895850/analytics_2_rsa5yz.png',
    para3: 'Our solutions start from technical setup and continue through ongoing analysis to provide businesses with solutions that deliver better results through data-driven strategies.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "Why should I choose Google Analytics & GA4 Setup in Delhi for my website?",
        answer: "The GA4 Setup ensures proper tracking and reliable data collection. It also provides clear performance insights for smarter marketing decisions.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "How does Google Tag Manager setup Delhi improve analytics and reporting?",
        answer: "Google Tag Manager setup Delhi simplifies tracking and manages tags easily. It also ensures accurate data collection for better performance monitoring.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What is the path to understanding customer behaviour?",
        answer: "Analytics shows how visitors find your site and what they click. It also shows how long they stay and where they drop off. All this helps you understand behavior and improve experiences.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "How do CRO & Performance Monitoring Services in Delhi help businesses?",
        answer: "CRO & Performance Monitoring Services in Delhi use performance analytics and testing to improve conversions and optimize user journeys. It also increases overall marketing effectiveness.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is analytics and reporting?",
        answer: "Analytics and reporting are the processes of tracking and analyzing data to understand performance. This results in better business decisions. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why are analytics and reporting helpful for businesses?",
        answer: "Analytics and reporting are important because they show and measure performance. These results for businesses make smarter and data-driven decisions. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. How does performance analytics help improve results?",
        answer: "Performance analytics improves results by identifying what works and what doesn’t. It also helps to understand where strategies should be optimized. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What does GA4 setup do for a website or app?",
        answer: "GA4 setup tracks user behavior, conversions, and engagement to provide accurate insights for marketing and product improvements. ",
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

export default analyticsandreporting;