"use client";

// src/components/ui/dropdown.tsx
import Link from "next/link";
import { useState } from "react";
import Image  from "next/image";

interface ItemsSubcategory {
  href: string;
  label: string;
  imgUrl: string;
  description: string;
}

interface ServicesMenuItem {
  label: string;
  description: string;
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
  const [activeItem, setActiveItem] = useState<string>(servicesMenu[0].label);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <div className="inline-flex relative group">
      <button className="cursor-pointer focus:outline-none">Services</button>
      <div className=" absolute group-hover:flex hidden  shadow-lg    top-12 -left-38 backdrop-blur-3xl">  
        {/* Main Items */}
        <div className=" bg-gradient-to-b from-[#A279FF] to-[#3B1C83] pl-1 pt-1">
          {servicesMenu.map((item, index) => (
            <div key={index} onClick={() => handleItemClick(item.label)} className="flex flex-col w-99 pl-4 my-5 font-Jost  leading-[120%] tracking-[0.72px] bg-clip-text text-transparent bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] background-blur-2xl hover:bg-gradient-to-r hover:from-[#3F1A93] hover:to-[#A279FF] text-left hover:backdrop-blur-2xl">
              {/* <button
                onClick={() => handleItemClick(item.label)}
                className={
                  "block w-99 left-71.5 mt-6.5 font-Jost text-2xl leading-[120%] tracking-[0.72px] bg-clip-text text-transparent bg-gradient-to-r from-[#C4C4C4] to-[#FFFFFF] background-blur-2xl   h-31.5 px-4 py-2  hover:bg-gradient-to-r hover:from-[#3F1A93] hover:to-[#A279FF] text-left hover:backdrop-blur-2xl  "
                }
              > */}
                {/* <div className="flex flex-col pl-5 pt-6.5 space-y-1.25"> */}
                <div className="font-medium text-2xl">{item.label}</div>
                <div className="font-normal text-sm">{item.description}</div>

                {/* </div> */}
              {/* </button> */}
            </div>
          ))}
        </div>

        {/* Subcategories */}

        <div className=" grid grid-cols-2 bg-slate-950 gap-x-100 font-Jost">
          {servicesMenu
            .find((item) => item.label === activeItem)
            ?.subcategories.map((subcategory) => (
              <div>
                 <Link
                  href={subcategory.href}
                >

                  <div className="flex flex-col w-470 p-12">

                    <Image
                      src={subcategory.imgUrl}
                      alt={"infogentech"}
                      width={52}
                      height={52}/>
                    <div>
                       {subcategory.label}

                    </div>

                    <div className="w-85">
                        {subcategory.description}

                    </div>
                    
                  
                    
                  </div>
                 
                </Link>

              </div>
               
            ))}
      </div>
      </div>
    </div>
  );
}
