
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceCard from "@/components/india/IndServiceCard";
import IndServiceDesc from "@/components/india/IndServiceDesc";

const Design = () => {
 const categories = [
  {
    id: "01",
    title: "Graphic Design",
    subServices: [
      { id: "01", title: "Print and Digital Graphic Design" },
      { id: "02", title: "Presentation Design" },
      { id: "03", title: "Ad Creative Design" },
      { id: "04", title: "Illustrations & Iconography" },
      { id: "05", title: "Print & Packaging Design" },
      { id: "06", title: "Product Sheets & One Pagers" },
      { id: "07", title: "Corporate Reports" },
    ],
  },
  {
    id: "02",
    title: "UI/UX Design",
    subServices: [
      { id: "01", title: "UI/UX Design & Wireframing" },
      { id: "02", title: "Mobile-first Responsive Design" },
      { id: "03", title: "Visual Design Systems & Style Guides" },
      { id: "04", title: "Website Design (Desktop, Mobile, eCommerce)" },
      { id: "05", title: "Landing Page Design" },
    ],
  },
  {
    id: "03",
    title: "Branding",
    subServices: [
      { id: "01", title: "Corporate Identity Design" },
      { id: "02", title: "Brand Guidelines" },
      { id: "03", title: "Brand Identity Messaging" },
      { id: "04", title: "Rebranding Services" },
    ],
  },
  {
    id: "04",
    title: "Logo Design",
    subServices: [],
  },
];
  return (
    <>
      <IndServicesHeader />
      <IndAllServices activeService="Design" />
      <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2">
        <div className="lg:pb-20 pb-4">
          <IndServiceDesc/>
        </div>
        <IndServiceCard categories={categories} />
      </div>
    </>
  );
};

export default Design;
