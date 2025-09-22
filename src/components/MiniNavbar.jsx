import Link from "next/link";
import Icons from "./ui/Icon";
import { useState } from "react";
import GradientButton from "./ui/GradientButton";

export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-transparent mt-3 h-15 mx-auto z-50 container px-2 w-full ">
      <div className="flex items-center border border-[#8E8E8E] rounded-md justify-between px-2">
        <div className="flex items-center pl-3.5 space-x-1.5">
          <Link href="/" className="flex items-center gap-1.5">
            <Icons name="LogoFooter" />
            <p className="font-avalors text-xl leading-8 tracking-[3px] font-bold">
              INFOGENTECH
            </p>
          </Link>
        </div>
        <button onClick={() => setIsOpen(true)} className="cursor-pointer">
          <svg
            width="29"
            height="21"
            viewBox="0 0 29 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6484 2H27.5682"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M2 10.3174L27.5681 10.3174"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M2 18.6343L17.8937 18.6343"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <aside
          className={`fixed top-0 left-0 w-full sm:w-full bg-[#111123] shadow-2xl transform transition-transform duration-300 ease-in-out z-50
            ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex justify-between px-2 py-2 border-b">
            <div className="flex items-center pl-3.5 space-x-1.5">
              <Link href="/" className="flex items-center gap-1.5">
                <p className="font-avalors text-xl leading-8 tracking-[3px] font-bold">
                  INFOGENTECH
                </p>
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 text-white cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className=" py-4 space-y-4 text-white linearGradientFaq border-b border-[#0A071B]/10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#8E8E8E] text-lg px-2 linearGradientFaq"
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#8E8E8E] text-lg px-2 linearGradientFaq "
            >
              Services
            </Link>
            <Link
              href="/services/design"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#8E8E8E] text-lg px-2 linearGradientFaq"
            >
              Portfolio
            </Link>
            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#8E8E8E] text-lg px-2 linearGradientFaq"
            >
              Blog
            </Link>
            <Link
              href="/contactUs"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#8E8E8E] text-lg px-2 linearGradientFaq"
            >
              Contact us
            </Link>
            <Link
              href="/aboutUs"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#8E8E8E] text-lg px-2 linearGradientFaq mb-2"
            >
              About us
            </Link>
            <Link
              href="/contactUs"
              onClick={() => setIsOpen(false)}
              className=" hover:text-[#8E8E8E] mt-2 text-lg px-2 flex justify-center linearGradientFaq"
            >
              <GradientButton
                className="!text-sm mt-4"
                paddingX="px-3"
                paddingY="py-2"
              >
                Free Consultation
              </GradientButton>
            </Link>
          </nav>
        </aside>
      )}
    </div>
  );
}
