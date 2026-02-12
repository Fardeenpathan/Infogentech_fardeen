import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const logodesign = () => {
  const servicedetailheader =
  {
    name: 'Logo Design',
    des: 'Where Strategic Logo Creation Builds Lasting Brand Identity',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
<<<<<<< Updated upstream
    heading1: '1. Design functional website fast',
    para1: 'When you’re designing your site, it’s easy to get caught up in adding too many elements to your pages. You want your site to be visually appealing, you continually add elements to add another dimension of visual interest to your page. This can lead to your site getting cluttered and overwhelming. The other issue is that, if certain elements don’t have a purpose on your site, it can leave your audience confused. Every element on your site should have a purpose. Imagine putting a call to action (CTA) button that doesn’t lead to a new page.',
    heading2: '2. Design for the user first',
    para2: 'People would constantly try to click on the button, and it would leave them confused as to why it doesn’t take them somewhere. Or, think what would happen if a website design prompted users to “Call now” on a top-of-the-funnel blog',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888430/logo_1_d4hva3.png',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888842/logo_3_g7vb2m.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770888437/logo_2_ewpjbl.png',
    para3: 'When you’re design beautiful websites, you want to focus on designs for the user. Your audience will be engaging on your site and learning more about your business. It’s important that you build a site that works for them. As you construct your awesome website design.',
=======
    heading1: '1. Strategic Logo Design That Builds a Powerful Brand Identity',
    para1: 'At Infogentech, we believe a strong logo design is the foundation of every successful brand. Your logo serves as your businesses visual identity, which displays core values and brand identity. Our logo design services combine three elements: strategic planning, research, and creative design. Creative design is to create distinctive brand identities. Our process begins with designing thoughtful logo concepts, which we refine into precise company logos that demonstrate clear design principles. Businesses trust Infogentech for creative logo design ideas that build recognition and establish a memorable presence in competitive markets.',
    heading2: '2. Custom Logo Design Services Tailored for Every Industry',
    para2: 'Our complete logo design services provide customized solutions for startups and enterprises, including creative professionals. We use a systematic approach that begins with brand discovery and concept development and ends with our final delivery. Our team provides flexible solutions that include professional company logo design for corporate needs, bold creative logo design for contemporary brands, and distinctive music logo design that shows artistic expression.',
    img2: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img3: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    img4: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
    para3: 'At Infogentech, we create visual designs that transform ideas into adaptable solutions for websites, packaging, and promotional materials, maintaining brand identity over time.',
>>>>>>> Stashed changes

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. Why is a strong logo design important for any brand?",
        answer: "A well-made logo design is a powerful tool that allows people to quickly identify your brand and understand the meaning of your business. It turns into the face of your image, gains trust, makes your brand remembered, and aids your marketing in every way through the internet, printed materials, and every place where you interact with your customers.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. How is a good company logo design process done?",
        answer: "A well-executed company logo design process takes understanding your brand's values, industry, and target audience as its starting point. You receive a number of ideas, updates, and the final visuals that are appropriate for packing, online use, signs, and other marketing tools, which helps you to have a uniform and professional image all over the places.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. How does creative logo design help a business stand out?",
        answer: "Creative logo design enables a brand to express its character through its fundamental elements, colors, and overall style. It is a way to get noticed in a flash and create an unforgettable identity, particularly in the competitive markets where distinct visuals can alter customers' feelings and connections with your enterprise.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "4. Why is music logo design different from regular logos?",
        answer: "Music logo design is about conveying the feeling, the artistic identity, style of the musicians, studios, or performers. It merges art and symbols together, thus giving artists a chance to visually depict their sound, genre, and personality, which later helps fans recognize their work.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What advantages of having a good logo?",
        answer: "A good company logo demands attention and creates a lasting first impression to serve as a foundation of your brand identity. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What is a logo design?",
        answer: "Logo design is the science and art of creating a visual symbol that shows the brand's identity and differentiates it from other brands. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. What should be considered for a company logo design?",
        answer: "The logo should tell the brand and show the colour directly related to the company's values and purposes. The logo should be in an attractive, unique, and simple way that can also tell the brand's identity. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What is the music logo design? ",
        answer: "When the logo design process is done in a way that it shows for a musical brand, company, label, etc, it's called a music logo design. ",
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

export default logodesign; 