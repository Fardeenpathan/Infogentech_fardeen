import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import IndButton from "./ui/IndButton";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (href) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return `transition-colors cursor-pointer ${
      isActive ? "text-primary font-semibold" : "text-white hover:text-primary"
    }`;
  };

  return (
    <div className="absolute w-full mx-auto">
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`font-montserrat relative text-nowrap flex bg-transparent 2xl:py-8 py-5 mx-auto justify-between items-center z-50 text-lg lg:text-sm xl:text-base leading-6 gap-4 ${
          pathname === "/" ? "border-b-2 border-[#8E8E8E]" : ""
        }`}
      >
        <div className="flex items-center container justify-between mx-auto px-4">
          <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
            {/* <Icons name="LogoFooter" />
            <p className="font-avalors lg:text-2xl leading-8 tracking-[3px] font-bold 2xl:text-xl  text-white">
              INFOGENTECH
            </p> */}
            <Image
              src="/logoGroup.png"
              alt="Infogentech"
              width={212}
              height={46}
            />
          </Link>

          <div className="2xl:space-x-20 xl:space-x-15 lg:space-x-8">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
            <Link href="/about" className={linkClasses("/about")}>
              About us
            </Link>
            <Link
              href="/portfolio/design"
              className={linkClasses("/portfolio/design")}
            >
              Portfolio
            </Link>
            <Link
              href="/services/design"
              className={linkClasses("/services/design")}
            >
              Services
            </Link>
            <Link href="/blog" className={linkClasses("/blog")}>
              Blogs
            </Link>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact us
            </Link>
          </div>
          <a href="/contact">
            <IndButton variant="primary">Let's Talk</IndButton>
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#312f2f59] -z-10" />
      </motion.nav>
    </div>
  );
}
