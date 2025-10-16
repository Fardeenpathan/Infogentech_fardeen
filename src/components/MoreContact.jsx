import { motion } from "framer-motion";
import Icons from "./ui/Icon";

export default function MoreContact() {
  return (
    <motion.div
      className="flex gap-7 flex-row justify-center items-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal md:text-[32px]  text-2xl leading-6 align-middle text-primary mt-5">
          Looking for More Information?
        </p>
        <p className="font-jost font-medium md:text-lg text-[16px] leading-6 align-middle mt-3">
          Check out our FAQs or About Us page for quick answers.
        </p>
        <div className="flex justify-center items-center md:gap-20 gap-4 mt-14 flex-col md:flex-row">
          {[
            {
              href: "/faq",
              icon: "Questionmark",
              title: "FAQs",
              description: "Visit our FAQ page.",
            },
            {
              href: "/about",
              icon: "People",
              title: "About Us",
              description: "Visit our About us page.",
            },
          ].map(({ href, icon, title, description }, i) => (
            <motion.a
              key={href}
              href={href}
              className="p-[1px] rounded-lg bg-[linear-gradient(106.97deg,#492B8D_10.89%,#5F439D_100.67%)] inline-block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg bg-[#15152a] p-6 w-[313px] h-[173px]">
                <div className="bg-[#262626] px-5 py-2.5 flex gap-2 w-fit radius">
                  <Icons name={icon} />
                  <span className="font-jost font-medium text-xl leading-6 align-middle">
                    {title}
                  </span>
                </div>
                <p className="text-[#9CA3AF] font-jost font-medium text-xl leading-6 align-middle mt-3">
                  {description}
                </p>
                <p className="mt-9">
                  <Icons name="Link" />
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
