export const metadata = {
  title: "Web & App Development | Delivering Digital Solutions",
  description:
    "Infogentech provides mobile app development services in India, which enable customers to build applications for Android and iOS, and hybrid platforms",
  keywords: [
    "web application development",
    "web app agency",
    "website building apps", 
    "web development agency",
    "web development company",
    "best web development companies"
  ], 
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/development/web-app-development",
    languages: {
      "en-US": "/services/development/web-app-development",
    },
  },
  openGraph: {
    title: "Web & App Development | Delivering Digital Solutions",
    description:
      "Infogentech provides mobile app development services in India, which enable customers to build applications for Android and iOS, and hybrid platforms",
    url: "https://infogentech.com/services/development/web-app-development",
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
    title: "Web & App Development | Delivering Digital Solutions",
    description:
      "Infogentech provides mobile app development services in India, which enable customers to build applications for Android and iOS, and hybrid platforms",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  // alternates: {
  //   canonical: "https://infogentech.com/services/development/web-app-development",
  //   languages: {
  //     "en-US": "https://infogentech.com/services/development/web-app-development",
  //   },
  // },
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

const webandappdevelopment = () => {
  const servicedetailheader =
  {
    name: 'Web & App Development',
    des: 'Building Digital Experiences That Drive Growth',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770889955/web_hero_ziuz94.png',
    heading1: '1. Website Development Company Delivering Scalable Digital Solutions',
    para1: 'Infogentech is a trusted Website development company delivering innovative web development services for businesses building high-performing digital platforms. We create websites and systems that enhance user engagement and drive measurable growth. Our team creates fast and reliable solutions through our development of dynamic interfaces and secure back end web systems. The businesses we help through our web application development services gain improved workflow management. The Website development cost in India is fully transparent to us, which enables companies to budget their expenses while delivering professional results.',
    heading2: '2. End-to-End Mobile App Development for Modern Businesses',
    para2: 'Infogentech provides mobile app development services in India, which enable customers to build applications for Android and iOS, and hybrid platforms. Our experienced team develops user-friendly applications that deliver high performance for businesses that search for "app developers near me". We develop applications that fulfill customer requirements through our ',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770889835/web_2_mkdczw.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770889829/web_3_pe2gqv.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770889838/web_1_diukj5.png',
    para3: 'intuitive design and seamless performance. Our transparent approach includes clear estimates of App development cost in India, enabling smarter decisions and better planning. Our web development services and apps provide brands with digital growth solutions that support their development.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "How do I choose the right Website development company?",
        answer: "You should check the experience, technology skillset, communication, and portfolio of a website development company before choosing them. Make sure the company smartly understands your business goals and presents transparent and budget pricing. This will give a good idea of a development company, resulting in high-quality development, scaling, security, and delivery of premium digital solutions.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Does it take much time to build a website? ",
        answer: "The time taken is affected by design, content, and features. The process could be sped up, but planning is important. Understanding the Website development cost in India alongside the timeline also helps you plan your project smoothly and set realistic expectations.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "Why do businesses invest in web development services?",
        answer: "Companies invest in web development services in order to enhance their online existence, attract users, and increase transactions. Web development services that meet industry standards establish a professional image for businesses while enhancing their digital functions and delivering customers a consistent online experience on multiple devices.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Do mobile apps need regular updates after they are launched?",
        answer: "Yes, continued updates for new devices and up-to-date operating systems will benefit the stability and availability of any particular application. While planning updates, many businesses also consider the App development cost in India so they can maintain their app properly and keep users satisfied over time.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What are the web development services? ",
        answer: "Web development stands for the process of creating a finished website or web application. This includes the initial site concept, then a project plan is created, and web developers create a design for developers. The services include front-end development, back end web development, and full-stack development. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What are the benefits of web development services?",
        answer: "Increased online visibility and Accessibility aim at enhancing a better user experience through brands and companies, leading to higher sales and Return on Investment. The data collection becomes easier and more correct. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What is mobile app development?",
        answer: "All processes that are involved in making an app and launching it come under mobile app development. It could especially refer to the coding and deployment of the app. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What does a mobile app development process include?",
        answer: "A mobile app development process includes making a strategy and planning the process. Then, designing and developing the app. Finally, testing and release of the product. ",
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

export default webandappdevelopment; 