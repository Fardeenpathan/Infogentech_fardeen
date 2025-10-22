import { motion } from "framer-motion";
import MidHeader from "./MidHeader";
import Image from "next/image";
import Icons from "./ui/Icon";

export default function SubContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <MidHeader
        name="We’d love to hear from you!"
        subheading="With teams across the globe, we’re ready to connect and support you wherever you are."
        paragraph="We are currently based at"
      />
      <div className="flex justify-center items-center">
        <div className="relative max-w-[415px] h-[200px] px-4">
          <Image
            src="/assist/img/glassSlab.png"
            alt="valueImg"
            width={415}
            height={200}
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 p-5 text-[#CECECE] ">
            <div className="flex justify-between items-center px-4">
              <p className="flex gap-2 font-jost font-semibold text-[30px] tracking-[0.03em] uppercase items-center">
                <Icons name="UsaFlag" width={29} height={20} />
                <span>USA</span>
              </p>
              <Icons name="Globe" width={23} height={23} color="#8F8F9B" />
            </div>
            <div className="flex gap-2 font-jost font-semibold text-xl tracking-[0.03em] mt-5 items-center px-4">
              <Icons name="Building" /> <span>Texas, USA</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

