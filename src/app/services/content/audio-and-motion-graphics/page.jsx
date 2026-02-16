import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
import IndServicesDetailsidebar from "@/components/india/IndServicesDetailsidebar";
import IndServicesDetailCategoryFaqs from "@/components/india/IndServicesDetailsCategoryFaqs";

const audioandmotiongraphics = () => {
  const servicedetailheader =
  {
    name: 'Audio and Motion Graphics',
    des: 'Turning Audio and Animation Into Powerful Visual Stories',
  }

  const servicedetailcontent = {
    img1: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770897059/motion_hero_k23wva.png',
    heading1: '1. Audio and Motion Graphics That Bring Stories to Life',
    para1: 'At Infogentech, Audio and Motion Graphics create interactive digital experiences through the combination of sound elements, motion design, and storytelling techniques. Our team uses music design, professional audio editing tools, and visual motion graphics to deliver clear and impactful messages. The production process delivers all elements through script to video conversion and concept animation. The brand message improvement is to create an understandable and unforgettable audience experience. We produce content that maintains viewer interest while creating emotional bonds through our synchronized audio and animation, and video production methods.',
    heading2: '2. Strategic Motion Design and Video Production Solutions',
    para2: 'Our motion design and video production services create visuals that serve specific purposes, making complex concepts easier to understand and better engaging viewers. Our process starts with explainer scripts and ends with fully animated sequences to create smooth transitions and clear messaging. Visual designers who work as motion graphics designers create artistic content that meets practical requirements, while our audio editing team guarantees high-quality sound across different platforms.',
    img2: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1770897062/motion_1_muzuul.jpg',
    img3: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1771231728/motion_1_agatj7.png',
    img4: 'https://res.cloudinary.com/dx2di0mvx/image/upload/v1771231732/Motion_2_toqc4g.png',
    para3: 'By combining script to video workflows, animation, and music design, Infogentech produces motion graphics solutions that support marketing, education, and corporate communication goals.',

  }

  const servicedetailsfaqs = {
    faqs: [
      {
        id: 1,
        question: "What does animate from audio mean?",
        answer: "It means creating motion visuals synchronized with sound, allowing audio elements to drive animation and visual storytelling.",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "Why should I convert video to audio?",
        answer: "The process of transforming video into audio serves to repurpose the content of podcasts, audio-based marketing, and learning platforms, thus making the content more accessible and usable.",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "Do you provide custom motion graphics design?",
        answer: "Yes, our motion graphics designers are there to create a custom visual that specifically fits a brand, message, and target audience.",
        order: 3,
        isActive: true,
      },


      {
        id: 4,
        question: "Can you handle both audio editing and motion design?",
        answer: "Absolutely. Our integrated workflow encompasses professional audio editing services and advanced motion design, delivering seamless results.",
        order: 4,
        isActive: true,
      },
    ],
  };


  const servicedetailscategorysidebarfaqs = {
    faqs: [
      {
        id: 1,
        question: "1. What is motion graphics?",
        answer: "When talking about motion graphic design, creatives refer to the combination of text and design elements set in motion. ",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        question: "2. What are motion graphics used for? ",
        answer: "Motion graphics are used for TV opening credits and advertising credits. It is also used for news broadcasting and social media memes. ",
        order: 2,
        isActive: true,
      },

      {
        id: 3,
        question: "3. Why are motion graphics important for a brand?",
        answer: "Motion Graphics are great for explaining complex concepts and products while conveying your brand. A service explanation can be more straightforward as well. ",
        order: 3,
        isActive: true,
      },

      {
        id: 4,
        question: "4. What does a motion graphic designer do?",
        answer: "A motion graphic designer is to create purposeful animations for the brand. ",
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

export default audioandmotiongraphics;