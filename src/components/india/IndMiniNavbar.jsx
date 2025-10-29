import Link from "next/link";
import Icons from "@/components/ui/Icon";
import { useState } from "react";
import IndButton from "./ui/IndButton";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export function IndMiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <div className=" absolute bg-transparent mt-3 h-15 mx-auto z-50 container px-2 w-full text-white font-montserrat">
      <div className=" relative flex items-center border border-white rounded-md justify-between px-2 py-3 overflow-hidden">
        <div className="flex items-center  space-x-1.5">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/logoGroup.png"
              alt="Infogentech"
              width={212}
              height={46}
            />
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
        <div className="absolute top-0 left-0 w-full h-full bg-[#312f2f59] -z-10" />
      </div>

      {isOpen && (
        <aside
          className={`fixed top-0 left-0 w-full sm:w-full bg-[#140f0ff8] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 pt-2.5 px-5 pb-8
            ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex justify-between px-5 py-2 border-[1px] radius">
            <div className="flex items-center ">
              <Link href="/" className="flex items-center gap-1.5">
                <Image
                  src="/logoGroup.png"
                  alt="Infogentech"
                  width={212}
                  height={46}
                />
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
          <nav className="pt-10 space-y-4 ">
            <div
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="hover:text-primary font-bold text-[28px] border-b-[1px] flex items-center gap-2 cursor-pointer"
            >
              Services
              <Icons
                name="Arrowdown"
                className={`transition-transform duration-300 hover:text-primary ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.ul
                  className="flex flex-col pl-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <li>
                    <Link
                      href="/services/design"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-primary text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/development"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-primary text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/digital-marketing"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-primary text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/content"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-primary text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Content
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block hover:text-primary font-bold text-[28px]  border-b-[1px]"
            >
              Blog
            </Link>
            <Link
              href="/portfolio/design"
              onClick={() => setIsOpen(false)}
              className="block hover:text-primary font-bold text-[28px]  border-b-[1px]"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-primary font-bold text-[28px]  border-b-[1px]"
            >
              Contact us
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block hover:text-primary font-bold text-[28px] mb-2"
            >
              About us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className=" hover:text-primary font-bold mt-6 text-[28px]  flex justify-center "
            >
              <IndButton variant="primary">Let's Talk</IndButton>
            </Link>
          </nav>
        </aside>
      )}
    </div>
  );
}
