import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const blogpostsandarticles = () => {
  const servicedetailheader =
  {
    name: 'Blog Posts And Articles',
    des: 'From Blog Posts to Case Studies, We Write for Impact',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770897273/blog_hero_s741pe.jpg',
    heading1: '1. Strategic Blog Writing and Article Writing for Better Visibility',
    para1: 'Infogentech provides professional blog and article writing services designed to improve visibility, build authority, and communicate ideas clearly. Our team follows a structured article writing format and a proven blog writing format to create content that is engaging, informative, and SEO-friendly. We handle all aspects of our work from research to delivering the finished product. Every content piece we create serves a purpose: matching search intent and preserving brand voice while achieving measurable results across digital platforms.',
    heading2: '2. Structured Case Studies and Newsletter Content That Builds Trust',
    para2: 'Beyond blogs and articles, Infogentech creates compelling case study content and professional email campaigns. The case study format that we develop results into persuasive marketing stories that support sales activities. We know how to write attractive newsletters and create content that your audience will find interesting every time they read it.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770897190/2_2_h3yc5o.jpg',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770897212/blog_2_zqzsbx.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'Our structured formats and strategic storytelling method work together to create content that is both informative and helps brands get more exposure on a variety of platforms.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "How does Infogentech ensure blogs are SEO-friendly?",
        answer: "We research keywords and apply a structured blog writing format. Then we follow our best practices on how to write a blog that aligns with search intent and user needs.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Do you follow a specific article writing format?",
        answer: "Yes, we employ the structured article writing format for making sure that all of our articles are clear to a human reader, have good readability, and rank well.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "Can blogs be reused for newsletters?",
        answer: "Absolutely. Our blogs are written with writing a newsletter in mind and can easily be adapted to a professional newsletter format.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Do you include case studies in blog content?",
        answer: "Yes, when relevant, we integrate case study elements using a clear case study format to support credibility and storytelling.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What should be focused on for article writing?",
        answer: "In writing an article, clarity and conciseness are of top priority, along with great accuracy. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. How are an article and a blog different?",
        answer: "Articles use a formal and professional tone. We see blogs using a more casual and conversational tone. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What is a case study?",
        answer: "Let's say I did work on a project. To demonstrate the project work, I will create a case study. Hence, a case study is a detailed examination for in-depth analysis. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What is a blog writing format?",
        answer: "A blog writing format includes a catchy title, an introduction, body paragraphs, and a subheading. It also includes CTA and a summary. ",
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

export default blogpostsandarticles;