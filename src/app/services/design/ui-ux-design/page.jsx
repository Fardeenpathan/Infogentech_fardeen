import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const uiuixdesign = () => {
  const servicedetailheader =
  {
    name: 'UI/UX Design',
    des: 'Turning Digital Products Into Seamless User Experiences',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770887331/ui_hero_zgw05q.png',
    heading1: '1. UI & UX Design Services That Elevate Digital Experiences',
    para1: 'Infogentech is a leading ui ux design agency delivering strategic ui and ux design solutions that enhance digital experiences and drive user satisfaction. In todays competitive business environment, companies need to understand UI UX design as it determines how users will interact with their products. Our team creates user friendly designs for websites, apps, and platforms, helping businesses turn visitors into regular customers. Infogentech achieves seamless and purposeful digital product interactions, meeting user expectations through a combination of research and design creativity.',
    heading2: '2. User-Centered UI & UX Solutions Built for Growth',
    para2: 'Our UI UX design process involves user research with interaction flows and usability testing. We do interface refinement to achieve valuable outcomes. Infogentech educates businesses about UI UX design while developing solutions that support business growth. From creating structured workflows to developing a strong ui ux designer portfolio, Infogentech supports long-term digital growth.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770887496/ui_1_fysqwz.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770887750/ui_2_vqmzbi.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770887753/ui_3_h2tqlb.jpg',
    para3: 'Companies looking for a “UI UX design course near me” use our design expertise to create accessible, functional experiences that maintain visual design consistency to improve their brand value and product performance.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "How do ui and ux design improve product performance?",
        answer: "An excellent UI and UX design provides users with a better experience by making it easier to browse the site, lessening the obstacles, and providing attractive visual points of interaction. They take design decisions that are supported by research and that help to increase sales, participation, and a seamless customer experience that leads to the lasting success of the product.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Why is a ui ux designer portfolio important when selecting a design partner?",
        answer: "An excellent portfolio of a ui ux designer is like a mirror that reflects the designer's experience, creativity, and problem-solving skills. It is a way for the companies to get a clear picture of the ui ux designer's style, strengths, and methods, and thus make sure that the designer is in line with their brand vision and that a top-notch digital experience is provided.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "How can a ui ux design course near me help teams improve their product quality?",
        answer: "A UI UX design course near me will enhance the understanding of user behavior, accessibility, interface strategy, and usability testing within the team. This education notably helps the companies in making decisions that are design-wise informed, which will, in turn, enhance the performance of the product and ensure that the company builds the experience that really matches the expectations of the user.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "What advantages does a ui ux design agency offer compared to freelancers?",
        answer: "A professional UI UX design agency brings forth several benefits, like a well-organized process, a team of professionals from various sectors, and uniformity. The collaboration of research, design, testing, and iterations in a single agency leads to the development of cohesive results, faster delivery, and strategic solutions that go hand in hand with the long-term business goals of the company.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is Ui Ux design?",
        answer: "The term UI describes User Interface, which controls how users interact with an application or website through its visual elements. User Experience (UX) defines the complete interaction that users have with a particular product application or website. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What is a Ui Ux designer portfolio?",
        answer: "A Ui Ux designer portfolio is the collection of the best work a designer has done, which showcases their skills and creativity. Portfolio can be in digital or paper form. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. Why Ui ux design is important?",
        answer: "Ui Ux design work with the appearance, experience, and user interaction with the product. Having good Ui Ux design for the product helps users have for better useful experience. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What are the components of ui and ux design?",
        answer: "The components include user research to gather information and wireframing to create a blueprint. Then, prototyping to build interactive models, and visual design to work on the visual aspect. Finally, testing to identify any issues. ",
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

export default uiuixdesign; 