import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";
const GraphicDesign = () => {
  const servicedetailheader =
  {
    name: 'Graphic Design',
    des: 'Transforming Ideas Into Impactful Visuals - Professional Graphic Design That Elevates Your Brand',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    heading1:'Creative Graphic Design Services for Strong Brand Identity',
    para1: 'Infogentech provides businesses with professional graphic design services that deliver effective visual solutions to create strong corporate identities. Strong visual elements are crucial components for both brand image development and customer trust. Our designers develop powerful design solutions that execute our clients branding message through their logo, website, and marketing materials design needs. Our design services create unique visual content while maintaining consistent branding elements, innovative solutions, and targeted objectives. The strategic design process and meticulous work make us a trustworthy partner for businesses seeking graphic design services.',
    heading2: 'Complete Design Solutions That Drive Engagement',
    para2: 'Our graphic design services start with branding and website visuals and extend to creating social media graphics. Designers create designs to meet your brand objectives while establishing connections with your audience on different platforms. Infogentech functions as a reliable graphic design company merging artistic talent with business knowledge for measurable outcomes.',
    img2: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img3: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'Our graphic design portfolio displays successful projects for different industries. Our design solutions help clients improve their brand visibility, build brand trust, and create long-term effects.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "How can my business grow with design services?",
        answer: "Professional design significantly impacts brand perception. Simple, consistent, and fresh designs make communication more accessible. This increases audience involvement and trust, leading to greater brand visibility and impact across digital and print platforms.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Why is having a strong design logo essential for a brand?",
        answer: "A graphic design logo is the visual identity that typically the majority of people remember first. A well-designed logo provides a brand with clarity, conveys its character, and makes it visible in the marketplace. In addition, it is a type of glue that combines all the marketing materials, handling them so that customers will easily recognize and trust your business.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "How do social media graphics improve online engagement?",
        answer: "Social​‍​‌‍​‍‌​‍​‌‍​‍‌ media graphics not only make your post visually attractive but also allow it to be noticed in a very busy ​‍​‌‍​‍‌​‍​‌‍​‍‌feed. Connecting is quicker when the visual aspects align with your brand's style and message. This will result in your posts receiving likes, shares, and interaction with your audience on various channels as a consequence.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Why should I review a designer’s graphic design portfolio before hiring them?",
        answer: "A​‍​‌‍​‍‌​‍​‌‍​‍‌ graphic design portfolio is a collection of real examples of the designer's past work, which helps the viewer to understand the designer's personality, creativity, and ​‍​‌‍​‍‌​‍​‌‍​‍‌proficiency. In addition, it provides assurance that the artist can produce images that are in line with your objectives, be it branding, website components, or marketing designs, which makes the whole process less risky.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "What are the services included in the graphic design services? ",
        answer: "The services include Logo design, web design, email marketing templates, print design, merchandise design, digital marketing materials, illustrations, and typography, together called Graphic design services. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "How to understand Graphic design? ",
        answer: "Graphic design is the science behind creating visual content to deliver more messages in less space. By using visual hierarchy and page layout, professionals meet users’ specific needs and focus.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What are social media graphics?",
        answer: "Social media graphics is a special form of graphic design where designers take social media platforms such as Instagram, Twitter, and Facebook.",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "Why is graphic design important for companies?",
        answer: "Graphic design shapes and forms ways to process information by the human brain, making it utterly important to deliver the brand messages, values, and goals in easy and fast ways.",
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


export default GraphicDesign