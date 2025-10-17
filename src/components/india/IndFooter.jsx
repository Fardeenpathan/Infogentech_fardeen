import Link from "next/link";
import Image from "next/image";
import Icons from "../ui/Icon";
import Button from "../ui/Button";

export function IndFooter() {
  return (
    <footer className="bg-[#1E1629] mx-auto relative overflow-hidden md:px-10 px-4 text-white">
      <div className="container mx-auto pt-11">
        <div className="flex md:justify-between items-center md:flex-row flex-col justify-center">
          <div className="w-[162px] h-[162px] -top-[26px] -left-3.5 rounded-[81px] absolute bg-primary blur-[100px]" />
          <div className="w-[148px] h-[87px] top-[533px] right-0 rounded-[74px/43.5px] absolute bg-primary blur-[100px]" />
          <p className="font-avalors font-medium xl:text-[45px] xl:leading-14 leading-6 md:leading-9 text-lg md:text-3xl">
            Start Earlier, Grow Faster <br /> Without Hidden Costs.
          </p>
          <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end space-x-5 font-jost mt-6">
            <Link
              href="/services/design"
              className="bg-white text-black  xl:py-5 lg:px-12.5  radius py-3.5 px-8 text-nowrap"
            >
              View Services
            </Link>
            <Link href="/contact">
              <Button
                text="Contact Us"
                className="!py-4 !px-10 xl:!py-5.5 lg:!px-12.5 text-nowrap"
              />
            </Link>
          </div>
        </div>
        <div className=" w-full text-white opacity-10 border-1 mt-7.5"></div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full grid md:grid-cols-3 grid-cols-1 mt-6.5">
            <div>
              <a className="flex items-center mb-4 gap-1.5" href="/">
                <Icons name="LogoFooter" />
                <h3 className="font-avalors text-2xl leading-8 tracking-[3px] font-bold">
                  INFOGENTECH
                </h3>
              </a>
              <p className=" text-xl mb-4 font-montserrat ">
                Infogentech delivers smart digital solutions that move with the
                times, crafted for every generation, inspired by change. We
                focus on achieving real, measurable results, keeping up with the
                trends.
              </p>
              <div className=" text-sm font-kumbh-sans">
                For Infogentech Queries:
                <br />
                <p className="space-x-3">
                  <a href="mailto:info@infogentech.com">info@infogentech.com</a>
                  <span>|</span>
                   {/* <span>+91 991-013-0963</span> */}
                </p>
              </div>
              <div className=" max-w-[300px] text-white opacity-10 border-1 mt-7.5"></div>
              <div className="flex gap-10 mt-3.5 items-center">
                <Image
                  src="/assist/img/dmca.png"
                  alt="valueImg"
                  width={108}
                  height={54}
                  objectFit="cover"
                />
             
                <Link href="https://www.linkedin.com/company/infogentech/">
                  <Icons name="LinkedIn" />
                </Link>
              </div>
            </div>
            <div></div>
            <div className="grid xl:grid-cols-3 grid-cols-2 items-start mb-12 font-kumbh-sans text-nowrap gap-5 mt-10">
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 font-jost">Links</h3>
                <ul className="space-y-3.5">
                  <li>
                    <Link href="/" className=" hover:text-gray-200">
                      Home
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/portfolio"
                      className=" hover:text-gray-200"
                    >
                      Portfolio
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/blog"
                      className=" hover:text-gray-200"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className=" hover:text-gray-200"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className=" hover:text-gray-200"
                    >
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
                    <Link
                      href="/services/design"
                      className=" hover:text-gray-200"
                    >
                      Web / App Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/development"
                      className=" hover:text-gray-200"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/design"
                      className=" hover:text-gray-200"
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/design"
                      className=" hover:text-gray-200"
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/content"
                      className=" hover:text-gray-200 "
                    >
                      Video & Photo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help-center"
                      className=" hover:text-gray-200"
                    >
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
                    <Link
                      href=""
                      className=" hover:text-gray-200 cursor-not-allowed"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className=" hover:text-gray-200"
                    >
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className=" hover:text-gray-200 cursor-not-allowed"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="block md:hidden">
                    <Link
                      href="/privacy-policy"
                      className=" hover:text-gray-200 "
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="block md:hidden">
                    <Link
                      href="/terms-and-conditions"
                      className=" hover:text-gray-200"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full text-white opacity-10 border-1 mt-3.5"></div>
        </div>

        <div className="flex flex-wrap md:justify-between justify-center items-center mt-3.5 pb-6 font-kumbh-sans">
          <p>
            &copy; {new Date().getFullYear()} Infogentech. All rights reserved.
          </p>
          <div className="space-x-4  md:block hidden">
            <Link href="/privacy-policy" className="hover:text-gray-200 ">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
