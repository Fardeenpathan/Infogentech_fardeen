export const metadata = {
  title: "Content Marketing | End-to-End Content Marketing Services",
  description:
    "Our complete content marketing solutions include marketing strategies, content marketing approaches at every stage of their buying process.",
  keywords: [
      "content marketing agency",
      "content marketing agency near me",
      "content company",
      "digital content company",
      "content for digital marketing agency"
    ],
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/digital-marketing/content-marketing",
    languages: {
      "en-US": "/services/digital-marketing/content-marketing",
    },
  },
  openGraph: {
    title: "Content Marketing | End-to-End Content Marketing Services",
    description:
      "Our complete content marketing solutions include marketing strategies, content marketing approaches at every stage of their buying process.",
    url: "https://infogentech.com/services/digital-marketing/content-marketing",
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
    title: "Content Marketing | End-to-End Content Marketing Services",
    description:
      "Our complete content marketing solutions include marketing strategies, content marketing approaches at every stage of their buying process.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/digital-marketing/content-marketing",
    languages: {
      "en-US": "https://infogentech.com/services/digital-marketing/content-marketing",
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

const contentmarketing = () => {
  const servicedetailheader =
  {
    name: 'Content Marketing',
    des: 'Content Marketing Services That Build Authority & Accelerate Growth',
  } 

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895470/content_hero_aw6ucj.jpg',
    heading1: '1. Strategic Content Marketing That Builds Authority and Engagement',
    para1: 'Infogentech uses storytelling techniques with messaging methods and customer interaction efforts to help brands achieve business growth. Our content marketing services create brand recognition, generate sales leads, and build enduring customer trust. The leading content marketing agency India produces effective digital marketing campaigns using its research capabilities with creative abilities, and advanced technological resources. Our company creates content in various formats, from social media posts to complete articles and SEO optimized materials, helping businesses reach their target audience and enhance their online presence.',
    heading2: '2. End-to-End Content Marketing Services for Measurable Growth',
    para2: 'Our complete content marketing solutions include marketing strategies, content marketing approaches, and social media content that reach customers at every stage of their buying process. Our content marketing agency India creates various content types, including blog posts, videos, infographics, and campaigns, to meet your business objectives. Our seo content writing helps businesses to achieve better search engine results, higher website traffic, and ',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895474/content_1_ncwdqe.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895477/content_2_nno0fs.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770895485/content_3_ss8udl.png',
    para3: 'increased customer conversions. The content marketing solutions developed by Infogentech use artistic storytelling techniques combined with analytical data information to help organizations establish their authority and enhance their online brand presence.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "How is social media content creation solving businesses' problems today?",
        answer: "Social media content creation is a way for brands to be seen and considered at all times. It is a way to share stories, updates, and visuals that are not just valuable but also very attractive to the audience. The right way of doing it brings community engagement, increases trust, and makes it possible for the followers to mingle with your brand more frequently.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "How does Digital content marketing support brand growth?",
        answer: "Digital content marketing is an excellent method for connecting with the audience on different online platforms with helpful and entertaining information. It builds up the brand, increases trustworthiness, and invites customers to check your brand. Slowly but surely, it attracts more visitors, leads, and customer interest by being the one with the message in the places where your audience is most active online.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What are the ways marketing services help a business?",
        answer: "Content marketing services enable businesses to share essential information in a systematic and consistent way. Among the advantages are brand authority, search visibility, and getting the correct audience. These services are able to create trust, promote interactions, and give any brand steady, long-term growth through the regular provision of useful content.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "How does seo content writing improve online visibility?",
        answer: "seo content writing uses researched keywords and helpful information to match what people search for. If your content provides clear answers to actual queries, then search engines will place it higher in their rankings. This results in an increase in organic traffic, authority establishment, and your website will attract regular and loyal users for a long time.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is content marketing?",
        answer: "Content marketing is the creation and distribution of content tailored to a business's needs to attract its target audience. It is a marketing approach. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why is the importance of content marketing for a business?",
        answer: "Good content is a source of knowledge for the audience. Although content marketing boosts SEO, it is also cost-effective and builds trust for the business. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What ways are included in digital content marketing?",
        answer: "Digital content marketing includes blog posts for information and emails for updates and news. Videos are used to elaborate on the information in creative ways. Podcasts and ebooks are also used. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What does a content marketing agency India do? ",
        answer: "A content marketing agency India conducts content audits and research activities. It also develops a content strategy, produces various types of content to define brand voice and messaging, and delivers precise performance reports. ",
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

export default contentmarketing;