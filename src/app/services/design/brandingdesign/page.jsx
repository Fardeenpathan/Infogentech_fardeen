export const metadata = {
  title: "Branding Design | Strategic Brand Design",
  description:
    "Our branding services include brand development with digital branding, designed for scalability and long-term success.",
  keywords: [
    "Branding Design",
    "branding designer",  
    "branding and design services"
  ], 
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/design/brandingdesign",
    languages: {
      "en-US": "/services/design/brandingdesign",
    },
  },
  openGraph: {
    title: "Branding Design | Strategic Brand Design",
    description:
      "Our branding services include brand development with digital branding, designed for scalability and long-term success.",
    url: "https://infogentech.com/services/design/brandingdesign",
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
    title: "Branding Design | Strategic Brand Design",
    description:
      "Our branding services include brand development with digital branding, designed for scalability and long-term success.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/design/brandingdesign",
    languages: {
      "en-US": "https://infogentech.com/services/design/brandingdesign",
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

const brandingdesign = () => {
  const servicedetailheader =
  {
    name: 'Branding Design',
    des: 'Branding That Defines Your Business & Drives Recognition.',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1771231013/Branding_hero_wx7oho.png',
    heading1: '1. Strategic Brand Design That Builds Recognition',
    para1: 'Infogentech is a results-driven branding agency that creates effective Brand Design solutions to help businesses establish a unique market identity. All branding efforts need visual elements to build trust with audiences and drive lasting brand recognition. Through strategic brand identity design, we assist businesses with their core values through all communication channels. Our company provides professional logo design services with branding solutions by combining creativity and storytelling. A branding agency in India, Infogentech, develops brand experiences that allow deep customer connections and drive business growth.',
    heading2: '2. End-to-End Branding Services for Modern Businesses',
    para2: 'Our branding services include brand development with digital branding, designed for scalability and long-term success. The digital branding strategies create unified brand systems that enhance online visibility across websites, social media, and other digital platforms. The initial stage of every project requires us to study your business goals and create brand identity designs that align with your desired visual outcome. Infogentech provides essential branding services, ensuring consistency across new product launches and existing brand',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888059/brand_1_lbrfxd.jpg',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888312/brand_3_ptgluu.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888333/brand_2_t5wlrr.jpg',
    para3: 'transformations. Our branding agency in India helps brands achieve market success with purposeful brand evolution and brand identity development.',

  }


  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "How does your Brand Design process benefit a growing business?",
        answer: "Our Brand Design procedure is centered around research, transparency, and visual uniformity, thus making your company more visible. Strong planning leads to the creation of brands that are very much in touch with the public and will remain in the market, even as the market changes. Each phase ensures your brand effectively communicates and supports growth that lasts.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Why should I hire a Branding agency for my business?",
        answer: "A Branding Agency of a professional caliber provides you with the assistance of highly skilled strategists, designers, and storytellers who create a seamless brand experience. They take care of your identity, which is consistent across platforms and is liked by the right audience. This professional technique makes your brand seem trustworthy, unforgettable, and ready for the future.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What does brand identity design include in your service?",
        answer: "Our brand identity design service includes defining your visual identity, tone, colors, logo, messaging, and overall brand structure. This method guarantees that your vision and values are reflected across all touchpoints. Through strategic identity development, your brand is made to be more easily identifiable, and it gradually earns trust in both the digital and physical spaces.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Do you offer digital branding services for online platforms?",
        answer: "The digital branding services we provide enable businesses to create strong online identities, which help them establish their online presence. The visual elements and messaging components, together with our design frameworks, maintain their continuous pattern throughout our website and social media, and digital marketing execution. Your brand achieves both visibility and communication clarity, which allows it to engage with all modern digital audiences.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is branding?",
        answer: "Branding is the process of giving a special meaning to a company, organization, product, or service by creating a brand's shape in the customer's mind. A strategy that gives clarity about your brand identification and gives reasons to choose your brand over competitors. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What is included in brand design services?",
        answer: "A complete brand design service includes logo and corporate identity. Then, brand guidelines and art direction, followed by custom typography, packaging, and campaigns. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. Why are branding services important for business?",
        answer: "In the mind of a customer, branding denotes a feeling, sense, and image that contribute to the overall identification. But if not done properly, branding can have the wrong outputs. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What is digital branding?",
        answer: "Digital branding refers to the brand experience across online platforms that a brand uses to promote its identity and presence. This can be done via website, social media, email marketing, and digital advertising. ",
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

export default brandingdesign; 