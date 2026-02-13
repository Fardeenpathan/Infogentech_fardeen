import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const visualcontentdesign = () => {
  const servicedetailheader =
  {
    name: 'Visual Content Design',
    des: 'Clear Visuals That Turn Information Into Impact',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896760/visual_hero_ibopgn.png',
    heading1: '1. Strategic Visual Content Design for Clear Communication',
    para1: 'Infogentech approaches Visual Content Design through a strategic process uniting creative elements with purposeful design. Our main objective is to establish clarity and usability that support business objectives. Our visual designs use typography and layout systems with an organized content plan to deliver messages effectively. Our designs create brand identity, enhance audience engagement, and enable unified messaging. Infogentech links visual components to audience needs; this approach enables all assets to deliver meaningful results that organizations can assess.',
    heading2: '2. Infographic Design and Content Strategy Services That Engage',
    para2: 'Our content strategy services focus on creating visuals that support storytelling and enhance user understanding. We create content that includes infographic design and complete visual systems to help users understand complex information and remember it better. The organization maintains uniformity across its digital platforms through a strategic implementation of typography, layout design, and messaging elements.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896836/visual_1_n4gzo8.jpg',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896932/visual_3_m9knif.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770896928/visual_2_ek47ns.jpg',
    para3: 'Infogentech uses its creative abilities with a solid content strategy to create informative infographics and complete visual campaigns. This enables brands to grow while providing compelling digital experiences.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What does Visual Content Design include?",
        answer: "Visual Content Design includes layout design, typography systems, visual storytelling, and infographic creation aligned with your content strategy.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Does visual content improve with typography?",
        answer: "Yes, Typography improves readability and sets tone. It also strengthens brand identity, making content easier to understand and more engaging.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. How do your content strategy services support visual design?",
        answer: "Our content strategy services ensure visuals align with messaging, user needs, and business goals for consistent communication.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "4. Why are infographics important in visual content?",
        answer: "An infographic helps simplify complex information and improve engagement. It also increases retention by visual storytelling.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is typography?",
        answer: "Typography simply is a technique in user interface design to create readable, appealing, attractive, and easy-to-read text for users to read. It plays an integral role in any website's design. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why is typography important?",
        answer: "Typography has two primary functions in graphic design. The first function helps readers understand the text easily, and the second helps designers communicate their work's message and emotional atmosphere to the audience. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What is visual content design?",
        answer: "Visual content design refers to the placement of visual components, such as images and videos, to make message delivery easier and more effective. This also includes infographics and typography. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What are the different types of visual content design?",
        answer: "Different types of Visual content design are images and videos. It also includes infographics and GIFs. ",
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

export default visualcontentdesign;