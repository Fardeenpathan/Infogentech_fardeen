import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const seoperformance = () => {
  const servicedetailheader =
  {
    name: 'SEO Performance',
    des: 'SEO Services: Rank Higher. Grow Faster. Thrive Digitally.',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    heading1: '1. SEO Services That Improve Rankings and Visibility',
    para1: 'Infogentech offers SEO services based on performance metrics to boost online visibility and drive sustainable business growth. Our company operates as a reliable seo agency India, while our expertise enables us to provide complete search engine optimization services that help businesses achieve higher search engine rankings. Our method combines natural optimization strategies with paid search advertising to achieve maximum audience reach and optimized conversion rates. Our customized digital marketing strategies provide measurable outcomes and enhanced brand visibility, and continuous market expansion for businesses searching for the best SEO companies.',
    heading2: '2. Strategic Search Engine Marketing for Long-Term Digital Success',
    para2: 'Our comprehensive seo services India cover technical SEO, on-page optimization, content creation, and high-quality link building to strengthen your website’s foundation. Recognized among the best seo agencies and best seo companies, Infogentech focuses on ethical, data-driven practices that deliver lasting performance. Our marketing solutions begin with local SEO agency near me services and extend to developing national marketing campaigns. Our ',
    img2: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img3: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'transparent reporting system, combined with continuous improvement strategies, will help your business generate leads and increase conversion rates to achieve digital success.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "Why do businesses need strong seo services today?",
        answer: "When carried out correctly, SEO services guarantee that your site is found by the right audience. A constant trickle of visitors, development of trust, and eventually, long-term digital growth, which is not dependent on ads or short-term marketing tactics, are the results of higher rankings.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "How does search engine marketing support business visibility?",
        answer: "Search engine marketing is about reaching customers, prospecting customers already searching for products and services similar to what you provide. Showing ads and having campaigns that are well thought out and targeted makes it easier to spot potential customers at the precise time when they require your assistance.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "What makes choosing an seo agency near me helpful for my business?",
        answer: "Communicating with an SEO agency near me is quite easy and fast. They are familiar with the local audience, the regional trends, and the competitors in the area, which supports the growth of your business and the attraction of customers who will interact with your business more.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "How can the best seo company in India support long-term growth?",
        answer: "The best SEO agency in India employs white hat techniques, thorough research, and gradual optimization. This method allows your brand to secure long-term visibility, better positions on the search engines, and unceasingly increasing organic traffic that is not affected by the changes in the market trends.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. How to understand SEO?",
        answer: "SEO, according to which related terms and keywords should be optimized on a page to help with the visibility of one's online importance or ranking when indexed by search engine servers. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why seo services are important for businesses? ",
        answer: "SEO services deliver three main benefits, which include generating complementary permanent website traffic and attracting the right customers and establishing brand authority and trustworthiness, and delivering enduring advantages. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What is an seo agency? ",
        answer: "A search engine optimization agency (or SEO agency or marketing agency) is a business organization devoted to optimizing and enhancing the visibility of a webpage on major search engines, such as Google, through the use of selected keywords and the creation of high-quality content. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What are the benefits of seo company in India?",
        answer: "An SEO company in India can significantly improve your search engine ranking, increasing your website’s visibility. ",
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

export default seoperformance;