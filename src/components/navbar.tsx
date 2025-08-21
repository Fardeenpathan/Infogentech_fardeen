import Link from "next/link";
import Image from "next/image";
// import { ServicesDropdown } from "./services-dropdown";
import "../app/globals.css";

import { ServicesDropdown } from "../components/services-dropdown";



export function Navbar() {
  return (
    <nav className="flex bg-transparent top-6.25 h-15  fixed w-full justify-between items-center z-50 ">
      {/* Left Side Navigation (including Logo) */}
      <div className="flex items-center border-1 border-[#8E8E8E] rounded-md ml-38">
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
          {/* Navigation links */}
          {/* <Link
            href="/"
            className=""
          >
            Services
          </Link> */}

          <ServicesDropdown  />
          <Link
            href="#"
            className=""
          >
            Portfolio
          </Link>
        </div>
      </div>

      {/* Right side navigation */}
      <div className="flex items-center border-1 border-[#8E8E8E] rounded-md mr-38 pr-3.75">
        <div className="md:flex items-center space-x-12.5 px-12.5 py-4.5 text-lg font-medium font-Jost">
          <Link href="#">Blogs</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">About us</Link>
        </div>
        {/* Free Consultation Link */}
        <div className="p-[4px] rounded-[10px] bg-gradient-to-r from-[#7544E4] to-[#FFFFFF] inline-block">
          <div className="rounded-md bg-black px-6 py-3">
            <Link href="/" className="text-white">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
