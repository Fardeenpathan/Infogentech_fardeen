import Link from "next/link";
import Image from "next/image";
import Icons from "./ui/Icon";
import Button from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-[#101021] mx-auto mt-56 relative overflow-hidden">
      <div className="container mx-auto pt-11 ">
        <div className="flex justify-between items-center ">
          <div className="w-[162px] h-[162px] -top-[26px] -left-3.5 rounded-[81px] absolute bg-[#8752ff] blur-[100px]" />
          <div className="w-[148px] h-[87px] top-[533px] right-0 rounded-[74px/43.5px] absolute bg-[#8752ff] blur-[100px]" />
          <p className="font-[jost] font-medium text-[45px] leading-[60px]">
            Start Earlier, Grow Faster <br /> Without Hidden Costs.
          </p>
          <div className="w-full md:w-1/2 lg:w-1/3 flex justify-end items-start space-x-5 font-jost">
            <button className="bg-white text-black  py-5 px-12.5 rounded-[10px]">
              Get Started
            </button>
            <Button text="Contact Us" />
          </div>
        </div>
        <div className=" w-full text-white border-1 mt-7.5"></div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full grid grid-cols-3 mt-6.5">
            <div>
              <div className="flex items-center mb-4 gap-1.5">
                <Icons name="LogoFooter" />
                <p className="font-avalors text-[24px] leading-[32px] tracking-[3px] font-bold">
                  INFOGENTECH
                </p>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Infogentech delivers smart digital solutions that move with the
                times, crafted for every generation, inspired by change. We
                focus on achieving real, measurable results, keeping up with the
                trends.
              </p>
              <div className="text-gray-400 text-sm font-kumbh-sans">
                For Infogentech Queries:
                <br />
                <p className="space-x-3">
                  <a href="mailto:info@infogentech.com">info@infogentech.com</a>{" "}
                  <span>|</span> <span>9999999999</span>
                </p>
              </div>
              <div className=" max-w-[300px] text-white border-1 mt-7.5"></div>
              <div className="flex gap-10 mt-3.5 items-center">
                <Image
                  src="/assist/img/dmca.png"
                  alt="valueImg"
                  width={108}
                  height={54}
                  objectFit="cover"
                />
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
            </div>
            <div></div>
            <div className="flex flex-wrap justify-between items-start mb-12 font-kumbh-sans">
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 font-jost">Links</h3>
                <ul className="space-y-3.5">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactUs" className="text-gray-400 hover:text-white">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 font-jost">
                  Services
                </h3>
                <ul className="space-y-3.5">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Web / App Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Video & Photo
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/4">
                <h3 className="text-lg font-semibold mb-4 font-jost">
                  General
                </h3>
                <ul className="space-y-3.5">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full text-white border-1 mt-3.5"></div>
        </div>

        <div className="flex flex-wrap justify-between items-center mt-3.5 pb-6 font-kumbh-sans">
          <p>
            &copy; {new Date().getFullYear()} Infogentech. All rights reserved.
          </p>
          <div className="space-x-4 ">
            <Link href="#" className="hover:text-white ">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
