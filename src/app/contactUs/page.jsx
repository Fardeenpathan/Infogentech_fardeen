import Image from "next/image";
import Icons from "@/components/ui/Icon";
import ContactForm from "@/components/ContactForm";
const ContactUs = () => {
  return (
    <div className="mt-35 subContainer mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <div className="flex justify-center items-center mb-40 flex-col">
            <Image
              src="/assist/img/Polygon.png"
              alt="Best Design. Development. Marketing."
              width={46}
              height={46}
              objectFit="cover"
            />

            <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 "></div>
          </div>
          <div className="flex flex-col max-w-3xl">
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              NEED ASSISTANCE?
            </p>
            <p className="text-[#6A27FF] font-avalors align-middle text-[75px] leading-[120%] tracking-[-0.75px]">
              just ask!
            </p>
            <p className="font-[jost] font-medium text-[18px] leading-[24px] align-middle mt-9">
              We’re here to help! Reach out with any real questions, and we’ll
              get back to you within 48 hours. For support or inquiries, feel
              free to contact us at.
            </p>
            <button
              className={`border border-white radius flex justify-center items-center px-8 py-3 cursor-pointer max-w-[274px] mt-8.5 space-x-2.5
                }`}
            >
              <p className="font-jost">Info@infogentech.com</p>
              <Icons name="Slide" />
            </button>
          </div>
        </div>

        <div class="relative  flex items-center justify-center mb-8">
          <img
            src="assist/video/play.gif"
            alt="valueImg"
            className="relative w-[459px] h-[450px]"
          />
          <Image
            src="/assist/img/polygons.png"
            alt="valueImg"
            width={359}
            height={371}
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>
    <ContactForm/>
    </div>
  );
};

export default ContactUs;
