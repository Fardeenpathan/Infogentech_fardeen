
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceDesc from "@/components/india/IndServiceDesc";
import IndServiceCard from "@/components/india/IndServiceCard";
import MovingTextBanner from "@/components/MovingTextBanner";
const Content = () => {
const categories = [
  {
    id: "01",
    title: "Photo & Video Production",
    description: "High-quality video and photography solutions to bring your brand story to life visually.",
    image: "/images/services/photo-video.jpg", // Replace with actual path
    subServices: [
      { id: "01", title: "Video Production & Motion Design" },
      { id: "02", title: "Video Production" },
      { id: "03", title: "Commercials & Hero Videos" },
      { id: "04", title: "Product Demo Videos" },
      { id: "05", title: "Animated Explainer Videos" },
      { id: "06", title: "2D/3D Animations & AR Design" },
      { id: "07", title: "Social Media Video Content" },
      { id: "08", title: "Promotional & Marketing Videos" },
      { id: "09", title: "Video Editing & Post-Production" },
      { id: "10", title: "Interactive Animations" },
      { id: "11", title: "Sound & Music Design" },
    ],
  },
  {
    id: "02",
    title: "Visual Content Design",
    description: "Strategic visuals and storytelling to engage audiences across platforms with impactful design.",
    image: "/images/services/visual-content.jpg",
    subServices: [
      { id: "01", title: "Infographic Design" },
      { id: "02", title: "Visual & Written Content" },
      { id: "03", title: "Brand Storytelling & Messaging" },
      { id: "04", title: "Content Strategy & Execution" },
    ],
  },
  {
    id: "03",
    title: "Audio & Motion Graphics",
    description: "Dynamic audio and motion design to elevate digital experiences and captivate your audience.",
    image: "/images/services/audio-motion.jpg",
    subServices: [
      { id: "01", title: "Sound & Music Design" },
      { id: "02", title: "Video Production & Motion Design" },
      { id: "03", title: "Interactive Animations" },
      { id: "04", title: "Explainer Video Scripting" },
    ],
  },
  {
    id: "04",
    title: "Blog Posts & Articles",
    description: "SEO-optimized blog writing and professional content tailored for traffic and engagement.",
    image: "/images/services/blog-articles.jpg",
    subServices: [
      { id: "01", title: "Blog Writing & SEO Articles" },
      { id: "02", title: "Case Studies & Whitepapers" },
      { id: "03", title: "Website & Landing Page Copy" },
      { id: "04", title: "Email Content & Newsletters" },
    ],
  },
];





  return (
    <>
      <IndServicesHeader />
        <IndAllServices activeService="Content" />
      
       <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2">
        <div className="lg:pb-20 pb-4">
          <IndServiceDesc/>
        </div>
        <IndServiceCard categories={categories} />
      </div>
      <MovingTextBanner />
    </>
  );
};

export default Content;
