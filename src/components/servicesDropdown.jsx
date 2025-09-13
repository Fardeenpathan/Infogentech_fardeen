"use client";
import Link from "next/link";
import { useState } from "react";
import Icons from "./ui/Icon";

const servicesMenu = [
  {
    label: "Design",
    description: "Crafting visually stunning and user-friendly designs.",
    subcategories: [
      {
        href: "/services/design",
        label: "Graphic Design",
        icon: "GraphicDesign",
        description: "Designing impactful graphics for various media.",
      },
      {
        href: "/services/design",
        label: "UI/UX Design",
        icon: "UIUXDesign",
        description: "Creating intuitive and engaging user experiences.",
      },
      {
         href: "/services/design",
        label: "Branding",
        icon: "Branding",
        description: "Creating intuitive and engaging user experiences.",
      },
      {
         href: "/services/design",
        label: "Logo Design",
        icon: "Logo",
        description: "Creating intuitive and engaging user experiences.",
      },
    ],
  },
  {
    label: "Development",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/development",
        label: "Web & App Development",
        icon: "Branding",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/services/development",
        label: "CMS Development",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/development",
        label: "Custom Integrations",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/development",
        label: "AI & Cloud Solutions",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
  {
    label: "Content",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/content",
        label: "Photo & Video Production",
        icon: "Branding",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/services/content",
        label: "Visual Content Design",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/content",
        label: "Auto & Motion Graphics",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/content",
        label: "Blog Posts & Articles",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
  {
    label: "Digital Marketing",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/marketing",
        label: "Marketing Strategy",
        icon: "Branding",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/services/marketing",
        label: "Performance Marketing",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/marketing",
        label: "CRM & Automation",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/marketing",
        label: "Audience Engagement Strategy",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },

      {
        href: "/services/marketing",
        label: "Search Engine Optimization (SEO)",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/marketing",
        label: "Content Marketing",
        icon: "Branding",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
];

export function ServicesDropdown() {
  const [activeItem, setActiveItem] = useState(servicesMenu[0].label);

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <div className="inline-flex relative group">
      <p className="cursor-pointer focus:outline-none">Services</p>
      <div className="absolute group-hover:flex hidden shadow-lg  -left-26 z-50 cursor-pointer">
        <div className="pt-12 flex">
          <div className="bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)]  pl-1 pt-1 rounded-l-md h-[500px]">
            {servicesMenu.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleItemClick(item.label)}
                className={`flex flex-col py-5.5 w-96 xl:w-74 h-31 pl-4 xl:py-2 rounded-l-md ${
                  item.label === activeItem
                    ? "bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)]"
                    : "hover:bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)]"
                }`}
              >
                <div className="font-medium text-2xl xl:text-lg">{item.label}</div>
                <div className="justify-center font-['Jost'] leading-6 font-light xl:text-sm">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute font-['Jost'] right-1/6 font-medium text-[124px] leading-[120%] tracking-[0.03em] top-8 bg-gradient-to-b from-white to-[#15152A] bg-clip-text text-transparent opacity-10">
            Services
          </div>
          <div className="grid grid-cols-2 font-Jost gap-[1px] w-[950px] xl:w-[800px] bg-[#535353] ">
            {servicesMenu
              .find((item) => item.label === activeItem)
              ?.subcategories.map((subcategory, index) => (
                <div key={index}>
                  <Link href={subcategory.href}>
                    <div className="flex flex-col pl-12.5 xl:pl-8.5 xl:pt-14 pt-18 pb-10 border-[1px] bg-[#15152A] h-full">
                      <Icons name={subcategory.icon} width={53} height={53} />
                      <div className="xl:text-lg">{subcategory.label}</div>
                      <div className="w-85 xl:text-sm">{subcategory.description}</div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

