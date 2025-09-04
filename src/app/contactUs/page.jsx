import Image from "next/image";
import Icons from "@/components/ui/Icon";
const ContactUs = () => {
  return (
    <div className="mt-30 container mx-auto">
      <div className="flex gap-7 flex-row">
        <div className="flex justify-center items-center flex-col">
          <Image
            src="/assist/img/Polygon.png"
            alt="Best Design. Development. Marketing."
            width={46}
            height={46}
            objectFit="cover"
          />

          <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
        </div>
        <div>
          <p className="font-avalors font-normal text-[32px] leading-[24px] align-middle text-primary">
            Need assistances
            <br /> just ask!
          </p>
          <p className="font-[jost] font-medium text-[18px] leading-[24px] align-middle mt-3">
            We’re here to help! Reach out with any real questions, and we’ll get
            back to you within 48 hours. For support or inquiries, feel free to
            contact us at.
          </p>
        </div>
        <Icons name = "Contact"/>
      </div>
    </div>
  );
};

export default ContactUs;
