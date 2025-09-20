
import Link from "next/link";
import Icons from "./ui/Icon";

export function MiniNavbar() {
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
        <div>
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
        </div>
      </div>
    </div>
  );
}
