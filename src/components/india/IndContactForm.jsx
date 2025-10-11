"use client";
import { useState, useRef } from "react";
import Icons from "@/components/ui/Icon";
import config from "@/config";
import adminApiService from "@/lib/adminApi";
import ReCAPTCHA from "react-google-recaptcha";
const contactInd = [
  {
    info: [
      { icon: "Contact", text: "+91 991-013-0963" },
      { icon: "Email", text: "info@infogentech.com" },
      {
        icon: "Location",
        text: "A-85, First Floor, GT Karnal Road Industrial Area, Near Vardhman Mall, New Delhi - 110033",
      },
    ],
  },
];

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    productQuestion: "",
    message: "",
    captcha: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCaptcha = (token) => {
    if (token) {
      setIsVerified(true);
      setFormData((prev) => ({ ...prev, captcha: token }));
    } else {
      setIsVerified(false);
      setFormData((prev) => ({ ...prev, captcha: "" }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified || !formData.captcha) {
      setSubmitMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await adminApiService.request(
        config.api.endpoints.contact,
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      setSubmitMessage(
        result.message ||
          "Contact form submitted successfully. We will get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        productQuestion: "",
        message: "",
        captcha: "",
      });

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setIsVerified(false);
      setTimeout(() => setSubmitMessage(""), 6000);
    } catch (error) {
      setSubmitMessage(
        error?.message || "Error sending message. Please try again later."
      );
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container mx-auto overflow-hidden px-2 font-montserrat relative -top-24 font-medium">
      <div>
        <div className="w-full rounded-2xl">
          <section className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-[15px] bg-white rounded-[30px] overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full ">
              <div className="bg-primary rounded-[30px] text-white pl-10 relative lg:w-[500px] flex justify-between flex-col pb-30 pr-30 pt-15 overflow-hidden">
                <div>
                  <h2 className=" font-medium text-2xl leading-6 align-middle">
                    Contact Information
                  </h2>
                  <p className=" text-lg leading-6 align-middle mt-5">
                    We’ll create high-quality linkable content and build at
                    least 40 high-authority.
                  </p>
                </div>

                <div>
                  {contactInd.map((region, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-semibold mb-4">
                        {region.country}
                      </h3>
                      <div className="flex flex-col gap-10.5">
                        {region.info.map((item, index) => (
                          <p key={index} className="flex gap-6.5 items-center">
                            <Icons name={item.icon} /> <span>{item.text}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                 <div className="w-[269px] h-[269px] bg-[linear-gradient(150deg,#BC9EFF_25.15%,rgba(191,162,255,0.05)_86.75%)] rounded-full absolute md:-bottom-25 md:-right-25  -bottom-32 -right-32"></div>
                <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-white/20 blur-2xl"></div>
              </div>

              {/* RIGHT PANEL */}
              <div className="flex-1 bg-white p-10">
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-gray-800"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-1">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="+1 012 3456 789"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-gray-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Write your message.."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-gray-800 resize-none"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptcha}
                  />

                  {submitMessage && (
                    <p
                      className={`text-sm ${
                        submitMessage.includes("successfully")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {submitMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!isVerified || isSubmitting}
                    className="px-11 py-3.5 bg-primary rounded-4xl cursor-pointer hover:opacity-90 transition text-white  "
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
