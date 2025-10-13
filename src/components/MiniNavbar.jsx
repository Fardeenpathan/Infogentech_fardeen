import Link from "next/link";
import Icons from "./ui/Icon";
import { useState } from "react";
import GradientButton from "./ui/GradientButton";
import { motion, AnimatePresence } from "framer-motion";
export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <div className=" bg-transparent mt-3 h-15 mx-auto z-50 container px-2 w-full">
      <div className="flex items-center border border-[#dfdcdc] rounded-md justify-between px-2 py-3">
        <div className="flex items-center  space-x-1.5">
          <Link href="/" className="flex items-center gap-1.5">
            <svg
              width="45"
              height="45"
              viewBox="0 0 32 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.7387 13.7865C29.487 13.7865 29.2809 13.5936 29.2809 13.3543V9.75194C29.2809 9.33094 29.0411 8.94024 28.6543 8.73134L16.2156 1.95071C16.023 1.84546 15.8085 1.79124 15.5923 1.79124C15.3761 1.79124 15.1599 1.84546 14.969 1.94911L2.52693 8.73134C2.14012 8.94024 1.90026 9.33094 1.90026 9.75194V23.3132C1.90026 23.7342 2.14012 24.1265 2.52355 24.3354L14.9656 31.116C15.349 31.3281 15.8288 31.3281 16.2139 31.116L28.6543 24.3354C29.0411 24.1265 29.2809 23.7342 29.2809 23.3132V19.0203C29.2809 18.5243 28.8553 18.1225 28.33 18.1225H20.609C20.0837 18.1225 19.658 17.7206 19.658 17.2247V16.8515C19.658 16.3556 20.0837 15.9537 20.609 15.9537H30.2319C30.7572 15.9537 31.1829 16.3556 31.1829 16.8515V23.3132C31.1829 24.3721 30.5799 25.3608 29.6069 25.8886L17.1665 32.6708C16.6818 32.934 16.1362 33.0679 15.5923 33.0679C15.0484 33.0679 14.5028 32.934 14.018 32.6708L1.57595 25.8886C0.603016 25.3608 0 24.3721 0 23.3132V9.75194C0 8.69306 0.603016 7.70754 1.57595 7.17651L14.0163 0.395882C14.9876 -0.131961 16.1936 -0.131961 17.1649 0.395882L29.6052 7.17651C30.5782 7.70754 31.1812 8.69306 31.1812 9.75194V13.3543C31.1812 13.592 30.9768 13.7865 30.7234 13.7865H29.737H29.7387Z"
                fill="url(#paint0_linear_2834_9273)"
              />
              <path
                d="M16.7374 16.5022V17.8577C16.7374 19.3583 18.0262 20.5735 19.614 20.5735H22.5243C22.9297 20.5735 23.2067 20.9546 23.0682 21.315C22.9534 21.6164 22.7693 21.8859 22.5328 22.1076C22.1173 22.4999 21.543 22.7423 20.9095 22.7423H16.734C15.4689 22.7423 14.4402 21.7711 14.4402 20.5735V13.7865H14.4351C14.4351 13.1885 14.6936 12.6479 15.1074 12.254C15.5229 11.8617 16.0972 11.6193 16.7323 11.6193H25.6509C25.9718 11.6193 26.232 11.3737 26.232 11.0707C26.232 10.8586 26.1103 10.6657 25.9195 10.5588L15.9013 5.0986C15.8033 5.04757 15.6952 5.01886 15.5888 5.01886C15.4824 5.01886 15.3743 5.04757 15.2763 5.0986L5.25813 10.5588C5.06557 10.6641 4.94564 10.8586 4.94564 11.0707V21.9928C4.94564 22.2017 5.06726 22.3978 5.25813 22.5015L8.41679 24.2237C8.8036 24.4342 9.28669 24.1711 9.28669 23.7485V13.2188C9.28669 12.2827 9.91673 11.4837 10.7968 11.1808C11.1785 11.05 11.5822 11.3115 11.5822 11.6942V25.6319C11.5822 25.828 11.6937 26.0082 11.8727 26.1071L15.278 27.9617C15.4706 28.0669 15.707 28.0669 15.9013 27.9617L25.9195 22.5015C26.112 22.3978 26.232 22.2017 26.232 21.9928V19.1C26.232 18.797 26.4921 18.5514 26.813 18.5514H27.9481C28.269 18.5514 28.5292 18.797 28.5292 19.1V21.9928C28.5292 22.9751 27.9667 23.8889 27.0664 24.3816L17.0482 29.8418C16.5972 30.0874 16.0938 30.2102 15.5888 30.2102C15.0838 30.2102 14.5787 30.0874 14.1294 29.8418L4.11122 24.3816C3.20923 23.8904 2.64844 22.9751 2.64844 21.9928V11.0707C2.64844 10.0884 3.20754 9.17463 4.11122 8.68187L14.1294 3.22165C15.0297 2.73048 16.1496 2.73048 17.0499 3.22165L27.0681 8.68187C27.9684 9.17304 28.5309 10.0884 28.5309 11.0707V13.2363C28.5309 13.5393 28.2707 13.7849 27.9498 13.7849H19.614C18.0245 13.7849 16.7374 15.0016 16.7374 16.5006V16.5022Z"
                fill="url(#paint1_linear_2834_9273)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2834_9273"
                  x1="6.66696"
                  y1="29.1147"
                  x2="23.1283"
                  y2="3.07436"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#522BBF" />
                  <stop offset="1" stopColor="#9169FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2834_9273"
                  x1="7.53844"
                  y1="26.4962"
                  x2="22.462"
                  y2="5.78025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#522BBF" />
                  <stop offset="1" stopColor="#9169FF" />
                </linearGradient>
              </defs>
            </svg>

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
          className={`fixed top-0 left-0 w-full sm:w-full bg-[#1d1d38] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 pt-2.5 px-5 pb-8
            ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex justify-between px-5 py-2 border-[1px] radius">
            <div className="flex items-center ">
              <Link href="/" className="flex items-center gap-1.5">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 32 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.7387 13.7865C29.487 13.7865 29.2809 13.5936 29.2809 13.3543V9.75194C29.2809 9.33094 29.0411 8.94024 28.6543 8.73134L16.2156 1.95071C16.023 1.84546 15.8085 1.79124 15.5923 1.79124C15.3761 1.79124 15.1599 1.84546 14.969 1.94911L2.52693 8.73134C2.14012 8.94024 1.90026 9.33094 1.90026 9.75194V23.3132C1.90026 23.7342 2.14012 24.1265 2.52355 24.3354L14.9656 31.116C15.349 31.3281 15.8288 31.3281 16.2139 31.116L28.6543 24.3354C29.0411 24.1265 29.2809 23.7342 29.2809 23.3132V19.0203C29.2809 18.5243 28.8553 18.1225 28.33 18.1225H20.609C20.0837 18.1225 19.658 17.7206 19.658 17.2247V16.8515C19.658 16.3556 20.0837 15.9537 20.609 15.9537H30.2319C30.7572 15.9537 31.1829 16.3556 31.1829 16.8515V23.3132C31.1829 24.3721 30.5799 25.3608 29.6069 25.8886L17.1665 32.6708C16.6818 32.934 16.1362 33.0679 15.5923 33.0679C15.0484 33.0679 14.5028 32.934 14.018 32.6708L1.57595 25.8886C0.603016 25.3608 0 24.3721 0 23.3132V9.75194C0 8.69306 0.603016 7.70754 1.57595 7.17651L14.0163 0.395882C14.9876 -0.131961 16.1936 -0.131961 17.1649 0.395882L29.6052 7.17651C30.5782 7.70754 31.1812 8.69306 31.1812 9.75194V13.3543C31.1812 13.592 30.9768 13.7865 30.7234 13.7865H29.737H29.7387Z"
                    fill="url(#paint0_linear_2834_9273)"
                  />
                  <path
                    d="M16.7374 16.5022V17.8577C16.7374 19.3583 18.0262 20.5735 19.614 20.5735H22.5243C22.9297 20.5735 23.2067 20.9546 23.0682 21.315C22.9534 21.6164 22.7693 21.8859 22.5328 22.1076C22.1173 22.4999 21.543 22.7423 20.9095 22.7423H16.734C15.4689 22.7423 14.4402 21.7711 14.4402 20.5735V13.7865H14.4351C14.4351 13.1885 14.6936 12.6479 15.1074 12.254C15.5229 11.8617 16.0972 11.6193 16.7323 11.6193H25.6509C25.9718 11.6193 26.232 11.3737 26.232 11.0707C26.232 10.8586 26.1103 10.6657 25.9195 10.5588L15.9013 5.0986C15.8033 5.04757 15.6952 5.01886 15.5888 5.01886C15.4824 5.01886 15.3743 5.04757 15.2763 5.0986L5.25813 10.5588C5.06557 10.6641 4.94564 10.8586 4.94564 11.0707V21.9928C4.94564 22.2017 5.06726 22.3978 5.25813 22.5015L8.41679 24.2237C8.8036 24.4342 9.28669 24.1711 9.28669 23.7485V13.2188C9.28669 12.2827 9.91673 11.4837 10.7968 11.1808C11.1785 11.05 11.5822 11.3115 11.5822 11.6942V25.6319C11.5822 25.828 11.6937 26.0082 11.8727 26.1071L15.278 27.9617C15.4706 28.0669 15.707 28.0669 15.9013 27.9617L25.9195 22.5015C26.112 22.3978 26.232 22.2017 26.232 21.9928V19.1C26.232 18.797 26.4921 18.5514 26.813 18.5514H27.9481C28.269 18.5514 28.5292 18.797 28.5292 19.1V21.9928C28.5292 22.9751 27.9667 23.8889 27.0664 24.3816L17.0482 29.8418C16.5972 30.0874 16.0938 30.2102 15.5888 30.2102C15.0838 30.2102 14.5787 30.0874 14.1294 29.8418L4.11122 24.3816C3.20923 23.8904 2.64844 22.9751 2.64844 21.9928V11.0707C2.64844 10.0884 3.20754 9.17463 4.11122 8.68187L14.1294 3.22165C15.0297 2.73048 16.1496 2.73048 17.0499 3.22165L27.0681 8.68187C27.9684 9.17304 28.5309 10.0884 28.5309 11.0707V13.2363C28.5309 13.5393 28.2707 13.7849 27.9498 13.7849H19.614C18.0245 13.7849 16.7374 15.0016 16.7374 16.5006V16.5022Z"
                    fill="url(#paint1_linear_2834_9273)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2834_9273"
                      x1="6.66696"
                      y1="29.1147"
                      x2="23.1283"
                      y2="3.07436"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#522BBF" />
                      <stop offset="1" stopColor="#9169FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2834_9273"
                      x1="7.53844"
                      y1="26.4962"
                      x2="22.462"
                      y2="5.78025"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#522BBF" />
                      <stop offset="1" stopColor="#9169FF" />
                    </linearGradient>
                  </defs>
                </svg>

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
          <nav className="pt-10 space-y-4 border-b border-[#0A071B]/10">
          <div
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="hover:text-[#dfdcdc] font-bold text-[28px] border-b-[1px] flex items-center gap-2 cursor-pointer"
            >
              Services
              <Icons
                name="Arrowdown"
                className={`transition-transform duration-300 hover:text-[#dfdcdc] ${
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
                      className="block hover:text-[#dfdcdc] text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/development"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-[#dfdcdc] text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/marketing"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-[#dfdcdc] text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Marketing
                    </Link>
                  </li>
                   <li>
                    <Link
                      href="/services/content"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-[#dfdcdc] text-[22px] mb-2 font-jost border-b-[1px]"
                    >
                      Content
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
            <Link
              href="/portfolio/design"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#dfdcdc] font-bold text-[28px]  border-b-[1px]"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#dfdcdc] font-bold text-[28px]  border-b-[1px]"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#dfdcdc] font-bold text-[28px]  border-b-[1px]"
            >
              Contact us
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#dfdcdc] font-bold text-[28px] mb-2"
            >
              About us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className=" hover:text-[#dfdcdc] font-bold mt-2 text-[28px]  flex justify-center "
            >
              <GradientButton
                className="!text-sm mt-4 "
                paddingX="px-8"
                paddingY="py-3"
              >
                Free Consultation
              </GradientButton>
            </Link>
            <div className="flex gap-8 justify-center mt-24">
              <Link href="#">
                <Icons name="Facebook" />
              </Link>
              <Link href="#">
                <Icons name="Twitter" />
              </Link>
              <Link href="#">
                <Icons name="LinkedIn" />
              </Link>
            </div>
          </nav>
        </aside>
      )}
    </div>
  );
}
