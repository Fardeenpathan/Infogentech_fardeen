import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const socialmediamarketing = () => {
  const servicedetailheader =
  {
    name: 'Social Media Marketing',
    des: 'Amplify your brand. Engage your audience. Accelerate growth.',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770894723/social_hero_h9pnsc.jpg',
    heading1: '1. Results-Driven Social Media Marketing Agency for Modern Brands',
    para1: 'Infogentech is a reliable social media marketing agency that helps businesses increase their online presence, connect with their audience, and drive business growth. The combination of our strategic content creation methods, our community management approach, and dedicated social media advertising creates measurable outcomes at our organization. Our social media marketing agency Delhi develops tailored marketing campaigns that help businesses achieve their objectives through improved audience reach and customer interaction. The companies that need trustworthy social media marketing services select Infogentech to deliver effective social media marketing services.',
    heading2: '2. Comprehensive Social Media Marketing Services That Convert',
    para2: 'We provide complete social media marketing services, which include organic growth, paid advertising, performance analysis, and reputation management. Our team delivers creative content through posts and videos while developing social media ads that generate actual customer conversions and build brand loyalty. The top social media marketing companies have recognized our company because we use data insights and performance metrics to',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770892202/social_1_j71ojw.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770892220/social_2_xbjnmz.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770892416/social_3_wfnu7z.png',
    para3: 'improve our marketing strategies. Infogentech provides customized solutions that enable businesses to expand their online presence through social media marketing better than traditional social media marketing agencies.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "Can social media marketing services help a business make connections with its audience?",
        answer: "The services of social media marketing assist companies in establishing tighter relations by producing pertinent content, answering clients, and understanding the likes and dislikes of the target group. Through active communication and well-directed tactics, companies earn confidence, better their interaction.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Why do many businesses decide to choose social media marketing companies near me?",
        answer: "A lot of companies tend to look for social media marketing companies near me as they prioritize fast interaction, comprehension of the area, and a less complicated partnership. The local crew can come up with tactics that are in line with the prevailing trends and also assist in making the campaigns more appealing to the target audience.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "Why should small businesses focus on marketing regularly?",
        answer: "Through social media marketing, small businesses achieve multiple benefits which include reaching local customers and building customer relationships while they promote their services and grow their business in an economical way.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Why choose Infogentech over other social media marketing companies near me?",
        answer: "Infogentech provides customized approaches that combine data-backed marketing efforts with imaginative narrative development and open assessment methods to achieve steady business expansion while delivering specific outcomes.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is social media advertising?",
        answer: "Social media advertising is a type of digital marketing where paid ads are shown to a target audience for growth via social media networks. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why is there a need for social media advertising?",
        answer: "It is necessary to engage in social media marketing because social media applications are now the most visited websites on the internet. This can be used for more views. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What is social media marketing?",
        answer: "Social media marketing uses social media platforms which users use to create social networks and share information to develop a company's brand and boost sales while increasing website visits. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. Why is SMM, i.e., Social media marketing is powerful?",
        answer: "There are several factors that determine the power of SMM, but the main ones are connections, interactions, and customer data. ",
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

export default socialmediamarketing;