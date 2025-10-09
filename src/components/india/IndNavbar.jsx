import Link from "next/link";
import Icons from "../ui/Icon";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import IndButton from "./ui/IndButton";
export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (href) =>
    `transition-colors cursor-pointer ${
      pathname.startsWith(href)
        ? "text-primary font-semibold"
        : "text-white hover:text-primary"
    }`;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="font-montserrat relative flex bg-transparent py-9 mx-auto justify-between items-center z-50 text-lg leading-6 gap-4 border-b border-[#8E8E8E]"
    >
      <div className="flex items-center container justify-between mx-auto">
        <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
          <Icons name="LogoFooter" />
          <p className="font-avalors lg:text-[24px] leading-8 tracking-[3px] font-bold text-xl text-white">
            INFOGENTECH
          </p>
        </Link>

        <div className="space-x-20">
          <Link href="/services" className={linkClasses("/services")}>
            Services
          </Link>
          <Link href="/portfolio" className={linkClasses("/portfolio")}>
            Portfolio
          </Link>
          <Link href="/blogs" className={linkClasses("/blogs")}>
            Blogs
          </Link>
          <Link href="/contactUs" className={linkClasses("/contactUs")}>
            Contact us
          </Link>
          <Link href="/aboutUs" className={linkClasses("/aboutUs")}>
            About us
          </Link>
        </div>
        <a href="#contact"><IndButton
             variant="primary"
                  >
                    Let's talk
             </IndButton></a>
          
       
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/5 -z-10 opacity-30"></div>
    </motion.nav>
  );
}
