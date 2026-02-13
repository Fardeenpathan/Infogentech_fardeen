import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const photoandvideo = () => {
  const servicedetailheader =
  {
    name: 'Photo and Video',
    des: 'Creative Photo and Video Production That Brings Brands to Life',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    heading1: '1. Strategic Video Production That Supports Real Marketing Goals',
    para1: 'At Infogentech, photo and video production serve as a creative process that functions as a strategic asset to drive business development. Our video production process creates messages that viewers can easily understand, paired with powerful visual content that aligns with your marketing goals. The team develops all assets to achieve three main objectives: enhancing visibility, increasing user interactions, and driving sales. We create content that delivers value through our visual work, including video editing and image creation, and complete platform-ready visuals that support your brand on websites and marketing campaigns.',
    heading2: '2. Creative 2D animation and 3D Animation for Engaging Brand Stories',
    para2: 'Infogentech uses advanced 2D animation and 3D animation with storytelling techniques to create visual content that attracts viewers while presenting complex concepts. Our team creates animated explainers and product visuals, along with promotional video content, to target various customer journey stages. The team develops projects through a strategy-first approach that establishes a consistent brand voice across all platforms and marketing activities. Our video production solutions use creative elements and technological components, along with ',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896639/photo_1_yoxx8r.jpg',
    img3: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'performance data analysis, to create content that helps brands become known and increase viewer interactions in measurable terms.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. Why is marketing strategy important for Photo & Video Production?",
        answer: "A solid plan aligns visuals with business objectives and targets the right audience. It also yields measurable outcomes rather than merely drawing attention to one aspect, thereby taking aesthetic value for granted.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Can visual content really impact conversions?",
        answer: "Yes. The engagement, trust, and decision-making processes, which are the main factors influencing conversion rates, are all significantly improved by strategically positioned images and videos.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. How do you decide where visuals should be used?",
        answer: "We research the audience's behavior, the platform's performance, and the objectives the campaign hopes to achieve to ensure the best placements and format are created.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "4. Is the photo & video production marketing strategy suitable for startups?",
        answer: "Absolutely. It is a scalable photo and video marketing strategy customized for businesses of all sizes and specific industries.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is a promotional video?",
        answer: "A promotional video or promo video is a video used for the express purpose of promoting a specific marketing initiative, sale, or event. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What are the types of promotional videos?",
        answer: "Promotional videos include product video and intro videos. It also includes product launch, event, and explainer videos. Faq videos and testimonial videos are an important type. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What are the benefits of promotional videos?",
        answer: "Promotional videos boost conversions and sales and deliver strong ROI. It also promotes trust and improves brand recall. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. How to Use 2D Animation in Social Media Marketing?",
        answer: "Businesses should create animated ads and leverage explainer videos to improve understanding. Businesses can use animated GIFs and stickers together with their animated storytelling and reel features. ",
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

export default photoandvideo;