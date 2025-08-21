'use client';

// src/components/ui/dropdown.tsx
import Link from "next/link";
import { useState } from "react";

interface ItemsSubcategory{
  href: string;
  label: string;
  imgUrl: string;
  description:string;
}

interface ServicesMenuItem {
  label: string;
  description:string;
  subcategories: ItemsSubcategory[];

}

const servicesMenu: ServicesMenuItem[] = [
  {
    label: "Design",
    description: "Crafting visually stunning and user-friendly designs.",
    subcategories: [
      {
        href: "/services/graphic-design",
        label: "Graphic Design",
        imgUrl: "/images/graphic-design.svg",
        description: "Designing impactful graphics for various media."
      },
      {
        href: "/services/ui-ux-design",
        label: "UI/UX Design",
        imgUrl: "/images/ux-ui-design.svg",
        description: "Creating intuitive and engaging user experiences."
      },
      {
        href: "/services/branding",
        label: "Branding",
        imgUrl: "/images/ux-ui-design.svg",
        description: "Creating intuitive and engaging user experiences."
      },
       {
        href: "/services/logo-design",
        label: "Logo Design",
        imgUrl: "/images/ux-ui-design.svg",
        description: "Creating intuitive and engaging user experiences."
      },
      
    ]
  },
  {
    label: "Development",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/web-development",
        label: "Web & App Development",
        imgUrl: "/images/web-development.svg",
        description: "Developing responsive and high-performance websites."
      },
      {
        href: "/services/mobile-app-development",
        label: "CMS Development",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
       {
        href: "/services/mobile-app-development",
        label: "Custom Integrations",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
 {
        href: "/services/mobile-app-development",
        label: "AI & Cloud Solutions",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },

    ]
  },
     {
    label: "Content",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/web-development",
        label: "Photo & Video Production",
        imgUrl: "/images/web-development.svg",
        description: "Developing responsive and high-performance websites."
      },
      {
        href: "/services/mobile-app-development",
        label: "Visual Content Design",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
       {
        href: "/services/mobile-app-development",
        label: "Auto & Motion Graphics",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
 {
        href: "/services/mobile-app-development",
        label: "Blog Posts & Articles",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },

    ]
  },
   {
    label: "Digital Marketing",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/web-development",
        label: "Marketing Strategy",
        imgUrl: "/images/web-development.svg",
        description: "Developing responsive and high-performance websites."
      },
      {
        href: "/services/mobile-app-development",
        label: "Performance Marketing",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
       {
        href: "/services/mobile-app-development",
        label: "CRM & Automation",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
 {
        href: "/services/mobile-app-development",
        label: "Audience Engagement Strategy",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },

       {
        href: "/services/mobile-app-development",
        label: "Search Engine Optimization (SEO)",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
       {
        href: "/services/mobile-app-development",
        label: "Content Marketing",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },
       {
        href: "/services/mobile-app-development",
        label: "Analysis & Reporting",
        imgUrl: "/images/mobile-app-development.svg",
        description: "Creating mobile applications for iOS and Android."
      },

    ]
  },
];

export function ServicesDropdown() {

  const [activeItem, setActiveItem] = useState<string>(servicesMenu[0].label);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
     <div className="flex relative  group">
      <button className="cursor-pointer focus:outline-none">Services</button>
      <div className="absolute group-hover:flex hidden top-12 bg-white shadow-lg rounded-md ">
        {/* Main Items */}
        <ul className="py-2 w-48 border-r">
          {servicesMenu.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleItemClick(item.label)}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left ${
                  activeItem === item.label ? "bg-gray-100" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Subcategories */}
      
          <div className="flex-1">
            {servicesMenu
              .find((item) => item.label === activeItem)
              ?.subcategories.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    href={subcategory.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {subcategory.label}
                  </Link>
                </li>
             
            ))}
   
      </div>
      </div>
      </div>
  );
}