"use client";
import Link from "next/link";
import { useState } from "react";
import Icons from "./ui/Icon";

const servicesMenu = [
  {
    label: "Design",
    href: "/us/services/design",
    description: "Crafting visually stunning and user-friendly designs.",
    subcategories: [
      {
        href: "/us/services/design",
        label: "Graphic Design",
        icon: "GraphicDesign",
        description: "Designing impactful graphics for various media.",
      },
      {
        href: "/us/services/design",
        label: "UI/UX Design",
        icon: "UIUXDesign",
        description: "Creating intuitive and engaging user experiences.",
      },
      {
         href: "/us/services/design",
        label: "Branding",
        icon: "Branding",
        description: "Creating intuitive and engaging user experiences.",
      },
      {
         href: "/us/services/design",
        label: "Logo Design",
        icon: "Logo",
        description: "Creating intuitive and engaging user experiences.",
      },
    ],
  },
  
  {
    label: "Development",
    href: "/us/services/development",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/us/services/development",
        label: "Web & App Development",
        icon: "WebApp",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/us/services/development",
        label: "CMS Development",
        icon: "CMS",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/us/services/development",
        label: "Custom Integrations",
        icon: "CustomIntegrations",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/us/services/development",
        label: "AI & Cloud Solutions",
        icon: "AiCloud",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
  {
    label: "Content",
    href: "/us/services/content",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/us/services/content",
        label: "Photo & Video Production",
        icon: "PhotoVideo",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/us/services/content",
        label: "Visual Content Design",
        icon: "VisualContent",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/us/services/content",
        label: "Auto & Motion Graphics",
        icon: "AutoMotion",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/us/services/content",
        label: "Blog Posts & Articles",
        icon: "BlogPosts",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
  {
    label: "Digital Marketing",
    href: "/us/services/marketing",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/us/services/marketing",
        label: "Marketing Strategy",
        icon: "MarketingStrategy",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/us/services/marketing",
        label: "Performance Marketing",
        icon: "PerformanceMarketing",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/us/services/marketing",
        label: "Search Engine Optimization (SEO)",
        icon: "SEO",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/us/services/marketing",
        label: "Content Marketing",
        icon: "ContentMarketing",
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
      <div className="relative group-hover:flex hidden shadow-lg  -left-26 z-50  top-5 group">
          <div className="bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)]  pl-1 pt-1 rounded-l-md h-[500px]">
            {servicesMenu.map((item, index) => (
              <Link key={index} href={item.href}>
              <div
                onMouseEnter={() => handleItemClick(item.label)}
                className={`flex flex-col py-5.5 2xl:w-96 w-54 xl:w-74 h-31 pl-4 xl:py-2 rounded-l-md ${
                  item.label === activeItem
                    ? "bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)]"
                    : "hover:bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)]"
                }`}
              >
                <div className="font-medium text-2xl xl:text-lg">{item.label}</div>
                <div className="justify-center font-jost leading-6 font-light xl:text-sm">
                  {item.description}
                </div>
              </div>
              </Link>
            ))}
          </div>
          <div className="absolute font-jost pointer-events-none select-none right-1/6 font-medium xl:text-[124px] text-7xl leading-[120%] tracking-[0.03em] top-8 bg-gradient-to-b from-white to-[#15152A] bg-clip-text text-transparent opacity-10">
            Services
          </div>
          <div className="grid xl:grid-cols-2 font-jost gap-[1px] 2xl:w-[950px] w-72 xl:w-[700px] grid-cols-1 bg-[#535353] ">
            {servicesMenu
              .find((item) => item.label === activeItem)
              ?.subcategories.map((subcategory, index) => (
                <div key={index}>
                  <Link href={subcategory.href}>
                    <div className="flex flex-col 2xl:pl-12.5 pl-5 xl:pl-8.5 xl:pt-14 2xl:pt-18 2xl:pb-10 py-5 border-[1px] bg-[#15152A] h-full">
                      <Icons name={subcategory.icon}/>
                      <div className="xl:text-lg">{subcategory.label}</div>
                      <div className="max-w-85 xl:text-sm">{subcategory.description}</div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
  );
}

