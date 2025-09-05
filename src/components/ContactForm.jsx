"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import Icons from "./ui/Icon";
import PurpleCheckbox from "./ui/Checkbox";
import GradientButton from "./ui/GradientButton";
const contactInfo = [
  {
    icon: "Contact",
    text: "+1 XXX XXX-XXXX",
  },
  {
    icon: "Email",
    text: "info@infogentech.com",
  },
  {
    icon: "Location",
    text: "New York, NY",
  },
];

const socialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
  },
];
const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(true);

  const handleCaptcha = (value) => {
    if (value) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };
  return (
    <div className="mt-35 subContainer mx-auto ">
      <div className="flex justify-between ">
        <div className="flex gap-10">
          <div className="flex justify-center items-center flex-col">
            <Image
              src="/assist/img/Polygon.png"
              alt="Best Design. Development. Marketing."
              width={46}
              height={46}
              objectFit="cover"
            />

            <div className="w-0.5 h-[721px] rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 "></div>
          </div>
        </div>
        <div className="w-full rounded-2xl">
          <div className="text-center mb-14">
            <p className="font-avalors text-[#6A27FF] text-[32px] leading-[24px]  align-middle">
              Get in Touch
            </p>

            <p className="font-[jost] font-medium text-[18px] leading-[24px] align-middle mt-3">
              Have a question or need help? Just send us a message or email
              we’re happy to help!
            </p>
          </div>
          <section className="p-2.5 bg-[#202037] rounded-2xl flex gap-5">
            <div className="min-w-[491px] bg-[#000026] rounded-xl py-12 px-10 relative overflow-hidden">
              <p className="font-[jost] font-medium text-2xl leading-[24px] align-middle">
                Contact Information
              </p>
              <p className="font-[jost] text-[18px] leading-[24px] align-middle text-[#C9C9C9] mt-5">
                Say something to start a live chat!
              </p>

              <div className="mt-30 flex flex-col gap-12.5">
                {contactInfo.map((item, index) => (
                  <p key={index} className="flex gap-6.5">
                    <Icons name={item.icon} /> <span>{item.text}</span>
                  </p>
                ))}
              </div>
              <div className="flex gap-6 mt-46">
                {socialMedia.map((item, index) => (
                  <div
                    key={index}
                    className="w-[30px] h-[30px] bg-[#C4C4C4] rounded-full flex items-center justify-center"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Icons
                        name={item.name}
                        color="#000000"
                        {...(item.name === "Twitter"
                          ? { width: "15", height: "14" }
                          : {})}
                      />
                    </a>
                  </div>
                ))}
              </div>
              <div className="w-[269px] h-[269px] bg-[#301F56] rounded-full absolute -bottom-25 -right-25 "></div>
              <div className="w-[138px] h-[138px] bg-[#48484880] rounded-full absolute bottom-13 right-13"></div>
            </div>
            <div className="flex items-center justify-center p-6 w-full relative">
              <form className="w-full  text-white space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E4E4E4] text-[18px] mb-2 font-jost font-light">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full  py-2  border-b-2 border-[#FFFFFF] bg-transparent  focus:outline-none focus:border-[#8752FF]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#E4E4E4] text-[18px] mb-2 font-jost font-light">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full  py-2  border-b-2 border-[#FFFFFF] bg-transparent  focus:outline-none focus:border-[#8752FF]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E4E4E4] text-[18px] mb-2 font-jost font-light">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full  py-2  border-b-2 border-[#FFFFFF] bg-transparent  focus:outline-none focus:border-[#8752FF]"
                      placeholder="+1 012 3456 789"
                    />
                  </div>
                  <div>
                    <label className="block text-[#E4E4E4] text-[18px] mb-2 font-light">
                      Product Question
                    </label>
                    <select className="w-full  py-2  border-b-2 border-[#FFFFFF] bg-transparent  focus:outline-none focus:border-[#8752FF]">
                      <option className="bg-[#1C1B2D]">Select</option>
                      <option className="bg-[#1C1B2D]">Option 1</option>
                      <option className="bg-[#1C1B2D]">Option 2</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#E4E4E4] text-[18px] mb-2 font-jost font-light">
                    Message
                  </label>
                  <input
                    className="w-full  py-2  border-b-2 border-[#FFFFFF] bg-transparent  focus:outline-none focus:border-[#8752FF]"
                    placeholder="Write your message.."
                  ></input>
                </div>
                <div className="flex items-center space-x-2">
                  <PurpleCheckbox label="subscribe to receive the latest news and exclusive offers" />
                </div>
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={handleCaptcha}
                />
                <button
                  type="submit"
                  disabled={!isVerified}
                  className="text-[#6A27FF]"
                >
                  <GradientButton bg="#202037" paddingX="10" paddingY="4.5">
                    Send Message
                  </GradientButton>
                </button>
                
                  <Image
                  src="/assist/img/ContactPlane.png"
                  alt="valueImg"
                  width={183}
                  height={85}
                  objectFit="cover"
                  className="rotate-200 scale-y-[-1] absolute text flex items-center justify-center"
                />
                
              </form>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
