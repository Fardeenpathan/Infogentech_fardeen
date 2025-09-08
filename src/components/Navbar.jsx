import Link from "next/link";
import GradientButton from "./ui/GradientButton";
import { ServicesDropdown } from "./services-dropdown";
import Icons from "./ui/Icon";
export function Navbar() {
  return (
    <nav className="flex bg-transparent mt-6 h-15 mx-auto justify-between items-center z-50 font-jost font-medium text-[18px] leading-[24px] container">
      <div className="flex items-center border-1 border-[#8E8E8E] rounded-md">
        <div className="flex items-center pl-3.75 py-2.25 space-x-1.5">
          <a href="/" className="flex items-center  gap-1.5">
            <Icons name="LogoFooter" />
            <p className="font-avalors text-[24px] leading-[32px] tracking-[3px] font-bold">
              INFOGENTECH
            </p>
          </a>
        </div>
        <div className="flex flex-row space-x-12.5 py-4.5 px-12.5 text-lg font-medium font-Jost">
          
            <ServicesDropdown />
          
          <Link href="/portfolio">
            Portfolio
          </Link>
        </div>
      </div>
      <div className="flex items-center border-1 border-[#8E8E8E] rounded-md pr-3.75">
        <div className="md:flex items-center space-x-12.5 px-12.5 py-4.5 text-lg font-medium font-Jost">
          <Link href="/blogs">Blogs</Link>
          <Link href="/contactUs">Contact us</Link>
          <Link href="aboutUs">About us</Link>
        </div>
        <Link href="/contactUs">
          <GradientButton>Free Consultation</GradientButton>
        </Link>
      </div>
    </nav>
  );
}
