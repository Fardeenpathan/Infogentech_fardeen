import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const cmsdevelopment = () => {
  const servicedetailheader =
  {
    name: 'CMS Development',
    des: 'Smart, Scalable & Future-Ready Content Management Solutions',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    heading1: '1. Comprehensive CMS Development for Seamless Content Control',
    para1: 'Infogentech offers comprehensive CMS Development services that enable businesses to maintain full control over their digital content management processes. Our company develops custom software solutions that create user-friendly, secure systems that adapt to our clients specific operations. Our expert WordPress developer team builds flexible platforms that simplify content updates while improving team productivity and collaboration. By integrating modern digital transformation services, software development services, and application development services, we create CMS environments that eliminate technical complexity and empower businesses to maintain a strong, consistent online presence.',
    heading2: '2. Scalable Custom Software Solutions Built for Long-Term Growth',
    para2: 'Infogentech develops custom software solutions through its strategic development process to create enterprise-level content management systems that enable automated operations and system integrations. Our software development services create systems that perform reliably by integrating with customer relationship management systems, enterprise resource planning systems, and marketing software tools to support efficient digital operations. Our specialized application development services, together with expert WordPress developer support, enable us to develop content management solutions. Infogentech develops advanced content ',
    img2: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img3: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'management systems that combine technology, usability, and digital transformation services to help modern organizations create efficient workflows.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. How do you make CMS platforms easy to use for teams?",
        answer: "We create CMS platforms that come with user-friendly dashboards, clean interfaces, and seamless workflows, enabling your staff to manage content efficiently and accurately. If your system is being created under the supervision of an experienced WordPress developer, then you are getting a natural interaction that will cut down on the need for training and will increase the output of content.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Do you handle CMS projects for businesses of any size?",
        answer: "Yes, we do cooperate with startups, medium sized companies, and large corporations. A custom software development company that is dependable, we specifically design each CMS for your structure, workflows, and aims. No matter if you are looking for simple content tools or a massive content system, we guarantee the whole process will be very efficient.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. Can your CMS solutions support larger digital goals?",
        answer: "Absolutely. Our CMS tools are designed for growth and connectivity with the tools that foster marketing, operations, and customer interaction. The coupling of the CMS with the right digital transformation services makes it a key component in the modernization of company processes and in the improvement of online content management.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "4. Do you provide integration support for existing software tools?",
        answer: "Yes, we do integrate CMS platforms with third party applications like CRMs, ERPs, and analytics systems, among others. It is through the fusion of our solid architecture with our expertise in application development that we create a seamless digital environment where data is transmitted easily among all the key business tools.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is CMS development?",
        answer: "CMS development is the creation, customization, and upkeep of software enabling users to build and manage website content without advanced coding. CMS stands for custom software development. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What is the importance of Custom software development?",
        answer: "CMS development enables developers to build websites that can grow while providing users with easy navigation and content management solutions that require less coding work. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What are digital transformation services?",
        answer: "Digital transformation is the integration and involvement of digital technology in all areas of business, changing how to operate it operates and resulting in maximum output and workflow. The technology included AI, cloud computing, and automation. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. Why businesses should adopt Digital transformation services?",
        answer: "Innovation in Digital transformation has superpowered businesses by increasing operational efficiencies, lowering errors, and improving customer experiences. The involvement of digital technology helps reduce the time in processes that take hours if done manually. ",
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

export default cmsdevelopment; 