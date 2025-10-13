
import IndContactForm from "@/components/india/IndContactForm";
import IndContactSub from "@/components/india/IndContactSub";
const contact = () => {
  return (
    <>
      <div className="w-full bg-[#E6DBFF] h-158 justify-center items-center flex flex-col">
        <p className="font-avalors font-normal text-[80px] leading-[1.6] tracking-[3px] align-middle text-primary">
          Get in touch
        </p>
        <p className="font-montserrat text-lg  max-w-4xl mx-auto text-center text-[#252525] font-medium">
          We’ll create high-quality linkable content and build at least 40
          high-authority links to each asset, paving the way for you to grow
          your rankings, improve brand.
        </p>
      </div>
      <IndContactForm />
      <IndContactSub/>
    </>
  );
};

export default contact;
