"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const servicesMenu = [
  {
    label: "Design",
    description: "Crafting visually stunning and user-friendly designs.",
    subcategories: [
      {
        href: "/services/graphic-design",
        label: "Graphic Design",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Designing impactful graphics for various media.",
      },
      {
        href: "/services/ui-ux-design",
        label: "UI/UX Design",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating intuitive and engaging user experiences.",
      },
      {
        href: "/services/branding",
        label: "Branding",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating intuitive and engaging user experiences.",
      },
      {
        href: "/services/logo-design",
        label: "Logo Design",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating intuitive and engaging user experiences.",
      },
    ],
  },
  {
    label: "Development",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/web-development",
        label: "Web & App Development",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/services/mobile-app-development",
        label: "CMS Development",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Custom Integrations",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "AI & Cloud Solutions",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
  {
    label: "Content",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/web-development",
        label: "Photo & Video Production",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Visual Content Design",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Auto & Motion Graphics",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Blog Posts & Articles",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
  {
    label: "Digital Marketing",
    description: "Building robust and scalable web applications.",
    subcategories: [
      {
        href: "/services/web-development",
        label: "Marketing Strategy",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Developing responsive and high-performance websites.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Performance Marketing",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "CRM & Automation",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Audience Engagement Strategy",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },

      {
        href: "/services/mobile-app-development",
        label: "Search Engine Optimization (SEO)",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Content Marketing",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
      {
        href: "/services/mobile-app-development",
        label: "Analysis & Reporting",
        imgUrl: "/ServicesSubcategory.svg",
        description: "Creating mobile applications for iOS and Android.",
      },
    ],
  },
];

export function ServicesDropdown() {
  const [activeItem, setActiveItem] = useState(servicesMenu[0].label);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <div className="inline-flex relative group">
      <button className="cursor-pointer  focus:outline-none">Services</button>
      <div className="absolute group-hover:flex  shadow-lg  -left-26 z-50 cursor-pointer ">
        <div className="pt-12 flex">
          <div className="bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)]  pl-1 pt-1 rounded-l-md">
            {servicesMenu.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item.label)}
                className="flex flex-col py-5.5 w-96 pl-4 hover:bg-[linear-gradient(213deg,rgba(162,121,255,1)_0%,rgba(63,26,147,1)_89%)] rounded-l-md "
              >
                <div className="font-medium text-2xl">{item.label}</div>
                <div className="justify-center font-['Jost'] leading-6 font-light">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 font-Jost bg-[#15152A] w-[950px] border-[#15152A]">
            {servicesMenu
              .find((item) => item.label === activeItem)
              ?.subcategories.map((subcategory, index) => (
                <div key={index}>
                  <Link href={subcategory.href}>
                    <div className="flex flex-col pl-12.5 pt-18 pb-10  border-[1px] border-[#535353]">
                      <Image
                        src={subcategory.imgUrl}
                        alt={"infogentech"}
                        width={52}
                        height={52}
                      />

                      <div>{subcategory.label}</div>
                      <div className="w-85">{subcategory.description}</div>
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
