import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const marketingstrategy = () => {
  const servicedetailheader =
  {
    name: 'Marketing Strategy',
    des: 'Marketing Strategy That Turns Vision Into Growth',
  }

  const servicedetailcontent = {
<<<<<<< Updated upstream
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770892005/mark_hero_wgdmnj.png',
    heading1: '1. Design functional website fast',
    para1: 'When you’re designing your site, it’s easy to get caught up in adding too many elements to your pages. You want your site to be visually appealing, you continually add elements to add another dimension of visual interest to your page. This can lead to your site getting cluttered and overwhelming. The other issue is that, if certain elements don’t have a purpose on your site, it can leave your audience confused. Every element on your site should have a purpose. Imagine putting a call to action (CTA) button that doesn’t lead to a new page.',
    heading2: '2. Design for the user first',
    para2: 'People would constantly try to click on the button, and it would leave them confused as to why it doesn’t take them somewhere. Or, think what would happen if a website design prompted users to “Call now” on a top-of-the-funnel blog',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770892013/mark_2_t3ztlq.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770892010/mark_1_z4rf6l.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770892015/mark_3_dmh3rm.png',
    para3: 'When you’re design beautiful websites, you want to focus on designs for the user. Your audience will be engaging on your site and learning more about your business. It’s important that you build a site that works for them. As you construct your awesome website design.',
=======
    img1: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    heading1: '1. Marketing Strategy That Powers Business Growth',
    para1: 'At Infogentech, we create a powerful marketing strategy that transforms business goals into measurable results. The complete marketing strategy directs all marketing activities through all channels. Our approach combines research methods with audience to create effective brand communication that enables your business to compete in the marketplace. We create tailored marketing plans for both startups and established businesses, which develop their messaging strategies and market positioning. Infogentech enables businesses to achieve higher engagement levels and better ROI results, and continuous business expansion by removing uncertainty from their operations.',
    heading2: '2. Strategic Planning and Execution for Brand Success',
    para2: 'Infogentechs process for the right marketing strategy includes your industry, goals, and customer behavior, enabling us to achieve greater resource efficiency. Our marketing strategy plan will be achieved through our chosen channels and established messaging systems. Our company executes a complete brand marketing strategy that establishes brand recognition and customer trust while building customer loyalty.',
    img2: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img3: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'Infogentech creates strategic solutions by combining market knowledge and creative capabilities, helping organizations achieve their goals and develop sustainable competitive advantages.',
>>>>>>> Stashed changes

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. How to understand marketing strategy clearly, and what is the need for it?",
        answer: "A marketing strategy is a carefully crafted plan that lays out the ways a business gets to its target customers, builds up its brand image, and finally, realizes its quantifiable goals. A marketing strategy that is clear and precise not just acts as a compass for the companies to navigate correctly, but also allows them to cut off unnecessary expenses and ensure that there is a uniform communication of the brand message through all the marketing channels.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. How does brand marketing strategy support long-term success?",
        answer: "An effectively planned brand marketing strategy develops recognition, trustworthiness, and an emotional relationship with the consumers. By creating a strong brand identity, along with an overall marketing strategy, it guarantees that there will be a uniform brand message and it enables firms to be visible in the competitive markets for a longer time.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What type of marketing strategy should be preferred?",
        answer: "The marketing strategy shall be aligned with the business objectives, industry attributes, and customer preferences. Digital first or performance driven methods of marketing are more suitable for companies with a growth mindset, whereas the already well-known brands can still keep their confidence and visibility in the market through a potent brand marketing strategy.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "4. How does a marketing strategy plan help improve results?",
        answer: "One of the major instruments in the global marketing plan is the Marketing Strategy Plan, since it comprehensively displays the whole execution process with the goals, target audiences, channels, and performance metrics included. Additionally, when the marketing strategy is wisely planned, the companies get the power to synchronize their departments, monitor their performance, and make constant adjustments to increase their ROI.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What Ps are included in the marketing strategy?",
        answer: "The four Ps of marketing strategy are product, price, place, and promotion. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why is marketing strategy important? ",
        answer: "A marketing strategy is important as it provides a structured roadmap to define goals and understand customer needs, to gives resources for maximum efficiency. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. How to create a marketing strategy?",
        answer: "First, you've to identify goals, and then create a customer profile. After that, develop a message and define your budget. Finally, you've selected your channels and track measurable benchmarks. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What is the type of marketing strategy?",
        answer: "A variety of marketing strategies include Outdoor Marketing, Print Marketing, Direct Marketing, Electronic Marketing, Event Marketing, and Search Engine Marketing etc. ",
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

export default marketingstrategy;