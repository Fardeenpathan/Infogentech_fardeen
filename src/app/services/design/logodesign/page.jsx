export const metadata = {
  title: "Logo Design | Custom Logo Design Services",
  description:
    "Our complete logo design services provide customized solutions for startups and enterprises, including creative professionals.",
  keywords: [
    "logo designer near me",
    "professional logo design",
    "best logo design company",
    "logo design near me",
    "best logo designers",
    "best logo design company"
  ], 
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/services/design/logodesign",
    languages: {
      "en-US": "/services/design/logodesign",
    },
  },
  openGraph: {
    title: "Logo Design | Custom Logo Design Services",
    description:
      "Our complete logo design services provide customized solutions for startups and enterprises, including creative professionals.",
    url: "https://infogentech.com/services/design/logodesign",
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
    title: "Logo Design | Custom Logo Design Services",
    description:
      "Our complete logo design services provide customized solutions for startups and enterprises, including creative professionals.",
    site: "@infogentech",
    images: [
      "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
    ],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services/design/logodesign",
    languages: {
      "en-US": "https://infogentech.com/services/design/logodesign",
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

const logodesign = () => {
  const servicedetailheader =
  {
    name: 'Logo Design',
    des: 'Where Strategic Logo Creation Builds Lasting Brand Identity',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1771231101/logo_hero_v27yuf.png',
    heading1: '1. Strategic Logo Design That Builds a Powerful Brand Identity',
    para1: 'At Infogentech, we believe a strong logo design is the foundation of every successful brand. Your logo serves as your businesses visual identity, which displays core values and brand identity. Our logo design services combine three elements: strategic planning, research, and creative design. Creative design is to create distinctive brand identities. Our process begins with designing thoughtful logo concepts, which we refine into precise company logos that demonstrate clear design principles. Businesses trust Infogentech for creative logo design ideas that build recognition and establish a memorable presence in competitive markets.',
    heading2: '2. Custom Logo Design Services Tailored for Every Industry',
    para2: 'Our complete logo design services provide customized solutions for startups and enterprises, including creative professionals. We use a systematic approach that begins with brand discovery and concept development and ends with our final delivery. Our team provides flexible solutions that include professional company logo design for corporate needs, bold creative logo design for contemporary brands, and distinctive music logo design that shows artistic expression.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888842/logo_3_g7vb2m.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888437/logo_2_ewpjbl.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888430/logo_1_d4hva3.png',
    para3: 'At Infogentech, we create visual designs that transform ideas into adaptable solutions for websites, packaging, and promotional materials, maintaining brand identity over time.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "Why is a strong logo design important for any brand?",
        answer: "A well-made logo design is a powerful tool that allows people to quickly identify your brand and understand the meaning of your business. It turns into the face of your image, gains trust, makes your brand remembered, and aids your marketing in every way through the internet, printed materials, and every place where you interact with your customers.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "How is a good company logo design process done?",
        answer: "A well-executed company logo design process takes understanding your brand's values, industry, and target audience as its starting point. You receive a number of ideas, updates, and the final visuals that are appropriate for packing, online use, signs, and other marketing tools, which helps you to have a uniform and professional image all over the places.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "How does creative logo design help a business stand out?",
        answer: "Creative logo design enables a brand to express its character through its fundamental elements, colors, and overall style. It is a way to get noticed in a flash and create an unforgettable identity, particularly in the competitive markets where distinct visuals can alter customers' feelings and connections with your enterprise.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Why is music logo design different from regular logos?",
        answer: "Music logo design is about conveying the feeling, the artistic identity, style of the musicians, studios, or performers. It merges art and symbols together, thus giving artists a chance to visually depict their sound, genre, and personality, which later helps fans recognize their work.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What advantages of having a good logo?",
        answer: "A good company logo demands attention and creates a lasting first impression to serve as a foundation of your brand identity. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What is a logo design?",
        answer: "Logo design is the science and art of creating a visual symbol that shows the brand's identity and differentiates it from other brands. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What should be considered for a company logo design?",
        answer: "The logo should tell the brand and show the colour directly related to the company's values and purposes. The logo should be in an attractive, unique, and simple way that can also tell the brand's identity. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What is the music logo design? ",
        answer: "When the logo design process is done in a way that it shows for a musical brand, company, label, etc, it's called a music logo design. ",
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

export default logodesign; 