export const metadata = {
  title: "Performance Marketing | Strategies That Deliver Real Results",
  description:
    "Infogentech operates as a performance marketing agency that drives brand expansion through its precision marketing.",
  keywords: [
      "Performance Marketing", 
      "online performance marketing",
       "performance marketing digital", 
       "social performance marketing", 
       "campaign performance"
    ],
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/digital-marketing/performance-marketing",
    languages: {
      "en-US": "/services/digital-marketing/performance-marketing",
    },
  },
  openGraph: {
    title: "Performance Marketing | Strategies That Deliver Real Results",
    description:
      "Infogentech operates as a performance marketing agency that drives brand expansion through its precision marketing.",
    url: "https://infogentech.com/services/digital-marketing/performance-marketing",
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
    title: "Performance Marketing | Strategies That Deliver Real Results",
    description:
      "Infogentech operates as a performance marketing agency that drives brand expansion through its precision marketing.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/digital-marketing/performance-marketing",
    languages: {
      "en-US": "https://infogentech.com/services/digital-marketing/performance-marketing",
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

const performancemarketing = () => {
  const servicedetailheader =
  {
    name: 'Performance Marketing',
    des: 'Accelerate Growth with precise Performance Marketing That Delivers Real Results',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896036/perform_hero_izh8zl.jpg',
    heading1: '1. Performance Marketing Strategies That Deliver Real Business Results',
    para1: 'Infogentech operates as a performance marketing agency that drives brand expansion through its precision marketing. Our performance marketing services help businesses achieve actual results by creating multiple digital marketing channels that generate leads and drive conversions. We use analytics and targeting methods to boost our clients investment returns through our performance marketing services. Among leading performance marketing companies, Infogentech stands out with transparent processes and measurable results, making us a reliable choice for businesses seeking performance marketing companies in India that deliver consistent and scalable growth.',
    heading2: '2. Scalable Performance Marketing Services Built for Conversions',
    para2: 'Our performance marketing services use strategic planning, multi-channel advertising, and conversion-focused funnels to achieve significant outcomes. Infogentech operates as a contemporary performance marketing agency that designs advertising campaigns according to the specific objectives and target audience, and financial resources of each brand. We use',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896041/perform_2_jqlcx2.jpg',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896126/perform_3_ca4vfj.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896198/perform_3_c84gbz.png',
    para3: 'actual data and insights to enhance our marketing methods. We, as a performance marketing agency, help growing businesses achieve better engagement and success through our services.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "What makes Performance marketing important for growing a business today?",
        answer: "When companies do performance marketing, they can focus entirely on activities that deliver real, concrete results, such as new clients or sales. It results in less spending on non-productive ads, has better audience segmentation, and makes the marketing activities measurable, thus allowing controlled and predictable business growth.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "How can a Performance marketing agency support my brand better than traditional marketing?",
        answer: "A Performance marketing agency meticulously monitors every customer movement and makes campaign decisions based on the data. As a result, you get a sharper understanding, greater power, and better profits than the usual methods, which mostly depend on intuition and assumptions.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "Why should a business work with a Performance marketing company?",
        answer: "The performance marketing company provides its expertise through tested equipment and proven techniques that help businesses avoid costly errors. The company handles all aspects of advertising, which enables its clients to achieve dependable results while managing their advertising expenses.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "How do the right Performance marketing services contribute to business growth?",
        answer: "When using performance marketing services, you will empathize with your audience, get your campaigns more targeted, and see a gradual increase in conversions. There is always openness, optimization, and data-driven decision-making, which not only help increase your brand's online performance but also support its long-term expansion.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. How to understand performance marketing?",
        answer: "In performance marketing, a digital marketing strategy, an advertiser pays for a specific action once it is completed. This includes a click or a sale. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What are the benefits of performance marketing?",
        answer: "Performance marketing allows efficient ad spend and insights. It also provides greater control and flexibility for businesses of all sizes. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What is a performance marketing agency?",
        answer: "A performance marketing agency uses digital ads to track results and develop business insights for the next steps. The most recognized performance marketing channels for businesses include Google Ads, social ads, and content marketing. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What are the important performance marketing channels?",
        answer: "This includes paid search and social media advertising. Other examples are email marketing, affiliate marketing, and influencer marketing. ",
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
 
export default performancemarketing;