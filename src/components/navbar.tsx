import Link from "next/link";
import Image from "next/image";
import GradientButton from "./ui/GradientButton";
import { ServicesDropdown } from "../components/services-dropdown";

export function Navbar() {
  return (
    <nav className="flex bg-transparent mt-6 h-15  justify-between items-center z-50 mx-38 font-jost font-medium text-[18px] leading-[24px] align-middle">
      <div className="flex items-center border-1 border-[#8E8E8E] rounded-md">
        <div className="flex items-center pl-3.75 py-2.25 space-x-1.5">
          <Image
            src="/logo.svg"
            alt="Infogentech logo"
            width={43}
            height={42}
          />
          <Image
            src="/CompanyName.svg"
            alt="Infogentech"
            width={169}
            height={42}
          />

        </div>
        <div className="flex flex-row space-x-12.5 py-4.5 px-12.5 text-lg font-medium font-Jost">
          <ServicesDropdown  />
          <Link
            href="#"
            className=""
          >
            Portfolio
          </Link>
        </div>
      </div>
      <div className="flex items-center border-1 border-[#8E8E8E] rounded-md pr-3.75">
        <div className="md:flex items-center space-x-12.5 px-12.5 py-4.5 text-lg font-medium font-Jost">
          <Link href="#">Blogs</Link>
          <Link href="/contactUs">Contact us</Link>
          <Link href="#">About us</Link>
        </div>
         <Link href="/contact">
        <GradientButton>Free Consultation</GradientButton>
      </Link>
      </div>
    </nav>
  );
}
