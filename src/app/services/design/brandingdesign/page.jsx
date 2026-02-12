import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const brandingdesign = () => {
  const servicedetailheader =
  {
    name: 'Branding Design',
    des: 'Branding That Defines Your Business & Drives Recognition.',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
<<<<<<< Updated upstream
    heading1: '1. Design functional website fast',
    para1: 'When you’re designing your site, it’s easy to get caught up in adding too many elements to your pages. You want your site to be visually appealing, you continually add elements to add another dimension of visual interest to your page. This can lead to your site getting cluttered and overwhelming. The other issue is that, if certain elements don’t have a purpose on your site, it can leave your audience confused. Every element on your site should have a purpose. Imagine putting a call to action (CTA) button that doesn’t lead to a new page.',
    heading2: '2. Design for the user first',
    para2: 'People would constantly try to click on the button, and it would leave them confused as to why it doesn’t take them somewhere. Or, think what would happen if a website design prompted users to “Call now” on a top-of-the-funnel blog',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888059/brand_1_lbrfxd.jpg',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888312/brand_3_ptgluu.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888333/brand_2_t5wlrr.jpg',
    para3: 'When you’re design beautiful websites, you want to focus on designs for the user. Your audience will be engaging on your site and learning more about your business. It’s important that you build a site that works for them. As you construct your awesome website design.',
=======
    heading1: '1. Strategic Brand Design That Builds Recognition',
    para1: 'Infogentech is a results-driven branding agency that creates effective Brand Design solutions to help businesses establish a unique market identity. All branding efforts need visual elements to build trust with audiences and drive lasting brand recognition. Through strategic brand identity design, we assist businesses with their core values through all communication channels. Our company provides professional logo design services with branding solutions by combining creativity and storytelling. A branding agency in India, Infogentech, develops brand experiences that allow deep customer connections and drive business growth.',
    heading2: '2. End-to-End Branding Services for Modern Businesses',
    para2: 'Our branding services include brand development with digital branding, designed for scalability and long-term success. The digital branding strategies create unified brand systems that enhance online visibility across websites, social media, and other digital platforms. The initial stage of every project requires us to study your business goals and create brand identity designs that align with your desired visual outcome. Infogentech provides essential branding services, ensuring consistency across new product launches and existing brand',
    img2: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img3: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'transformations. Our branding agency in India helps brands achieve market success with purposeful brand evolution and brand identity development.',
>>>>>>> Stashed changes

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. How does your Brand Design process benefit a growing business?",
        answer: "Our Brand Design procedure is centered around research, transparency, and visual uniformity, thus making your company more visible. Strong planning leads to the creation of brands that are very much in touch with the public and will remain in the market, even as the market changes. Each phase ensures your brand effectively communicates and supports growth that lasts.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. Why should I hire a Branding agency for my business?",
        answer: "A Branding Agency of a professional caliber provides you with the assistance of highly skilled strategists, designers, and storytellers who create a seamless brand experience. They take care of your identity, which is consistent across platforms and is liked by the right audience. This professional technique makes your brand seem trustworthy, unforgettable, and ready for the future.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What does brand identity design include in your service?",
        answer: "Our brand identity design service includes defining your visual identity, tone, colors, logo, messaging, and overall brand structure. This method guarantees that your vision and values are reflected across all touchpoints. Through strategic identity development, your brand is made to be more easily identifiable, and it gradually earns trust in both the digital and physical spaces.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "4. Do you offer digital branding services for online platforms?",
        answer: "The digital branding services we provide enable businesses to create strong online identities, which help them establish their online presence. The visual elements and messaging components, together with our design frameworks, maintain their continuous pattern throughout our website and social media, and digital marketing execution. Your brand achieves both visibility and communication clarity, which allows it to engage with all modern digital audiences.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is branding?",
        answer: "Branding is the process of giving a special meaning to a company, organization, product, or service by creating a brand's shape in the customer's mind. A strategy that gives clarity about your brand identification and gives reasons to choose your brand over competitors. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What is included in brand design services?",
        answer: "A complete brand design service includes logo and corporate identity. Then, brand guidelines and art direction, followed by custom typography, packaging, and campaigns. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. Why are branding services important for business?",
        answer: "In the mind of a customer, branding denotes a feeling, sense, and image that contribute to the overall identification. But if not done properly, branding can have the wrong outputs. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What is digital branding?",
        answer: "Digital branding refers to the brand experience across online platforms that a brand uses to promote its identity and presence. This can be done via website, social media, email marketing, and digital advertising. ",
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

export default brandingdesign; 