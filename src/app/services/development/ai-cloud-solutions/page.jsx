import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const aicloudsolutions = () => {
  const servicedetailheader =
  {
    name: 'AI & Cloud Solutions',
    des: 'Scalable AI & Cloud Solutions Built for the Future of Business',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1771231407/Cloud_hero_xyksnw.png',
    heading1: '1. Intelligent AI & Cloud Solutions for Scalable Digital Transformation',
    para1: 'Infogentech provides advanced cloud solutions and AI in India, which enable operational modernization and workflow automation. As one of the emerging AI companies in India, we integrate AI with secure cloud systems to convert data into actionable business insights. We provide services that include intelligent automation and predictive analytics, and cloud-native systems that enable organizations to achieve better results while decreasing their operational difficulties. Our company develops dependable, scalable systems that utilize Google Cloud AI and top-level architectures.',
    heading2: '2. Google Cloud AI Integration for High-Performance Business Applications',
    para2: 'Our approach focuses on designing, developing, and deploying intelligent systems that use Google Cloud AI and the Google Cloud AI Platform. Infogentech provides complete cloud AI solutions that span AI model training and deployment, cloud hosting, and modern application development. We create high-performance applications while maintaining ongoing development to support business expansion.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770891569/cloud_1_bgaxzx.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770891579/cloud_2_h6ebwb.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770891743/cloud_3_d8jdgf.png',
    para3: 'Our team assists organizations with AI implementation, making Infogentech an authentic partner for AI and cloud transformation projects across industries.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "How do AI & Cloud solutions support business growth in India?",
        answer: "The combination of AI with safe cloud infrastructure, if done correctly, will drive significant expansion in AI development, enabling automation, making data-driven insights more secure, and promoting growth in an even better way.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Why choose Infogentech among AI companies in India?",
        answer: "Infogentech offers customized AI & cloud solutions built on Google Cloud AI, with a focus on scalability and security.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What role does Google Cloud AI play in your services?",
        answer: "Google Cloud AI provides companies with the opportunity to leverage powerful analytics, machine learning, and secure AI deployment across their applications, all of which meet enterprise standards.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Do you use Google Cloud AI Platform for AI deployment?",
        answer: "The Google Cloud AI platform provides training, deployment, and management for AI experiments.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is cloud AI?",
        answer: "The fusion of cloud computing with Artificial intelligence is called Cloud AI. Businesses use AI tools and algorithms on a daily basis for better results and to gain advanced technology. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What technology can cloud AI enable businesses?",
        answer: "Cloud AI enables businesses to access the complete range of artificial intelligence capabilities, which includes machine learning, natural language processing, and computer vision. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What makes cloud AI important?",
        answer: "The ability of cloud AI to handle a large amount of data rapidly and more accurately makes cloud AI extremely important in the present business era. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What is Google Cloud AI?",
        answer: "Google Cloud AI is a bag that has all the tools required to create AI applications and machine learning tools. ",
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

export default aicloudsolutions; 