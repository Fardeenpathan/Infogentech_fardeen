"use client";
import { useState, useRef } from "react";
import Icons from "./ui/Icon";
import config from "@/config";
import adminApiService from "@/lib/adminApi";


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
      });
      setSubmitMessage(result.message || "Contact form submitted successfully. We will get back to you soon.");
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
      setSubmitMessage(error?.message || "Error sending message. Please try again later.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mt-0 container mx-auto overflow-hidden px-2">
      <div>
        <div className="w-full rounded-2xl">
          <div className="bg-[#EDE5FF] text-center pt-24 pb-24">
            <p className="font-avalors text-primary text-[40px] leading-tight">
              Get in Touch
            </p>

            <p className="font-jost font-medium text-lg leading-7 mt-4 text-black max-w-2xl mx-auto">
              Have a question or need help? Just send us a message or email —
              we’re happy to help!
            </p>
          </div>

          <section className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto shadow-xl p-[15px] bg-white rounded-[30px] overflow-hidden -mt-10 mb-[80px]">
            <div className="flex flex-col lg:flex-row w-full">
            {/* LEFT PANEL */}
            <div className="bg-primary rounded-[30px] text-white p-10 relative lg:w-[500px]">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">
                We’ll create high-quality linkable content and build at least 40
                high-authority.
              </p>

              <div className="mt-10 space-y-6 text-sm leading-6">
                <div className="flex items-start gap-4">
                  <Icons name="Phone" />
                  <span>+91 991-013-0963</span>
                </div>
                <div className="flex items-start gap-4">
                  <Icons name="Mail" />
                  <span>info@infogentech.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <Icons name="ContactLocation" />
                  <span>
                    A-85, First Floor, GT Karnal Road Industrial Area, Near
                    Vardhman Mall, New Delhi - 110033
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Icons name="ContactLocation" />
                  <span>Balcons DR Ste 100, Austin, TX 78731</span>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-white/20 blur-2xl"></div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex-1 bg-white p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2 text-gray-800"
                      required
                    />
                  </div>
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
                      className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2 text-gray-800"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2 text-gray-800"
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
                    className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2 text-gray-800 resize-none"
                    rows="3"
                    required
                  ></textarea>
                </div>
                {/*  <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptcha}
                /> */}

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
                  className="mt-4 px-6 py-3 rounded-[30px] text-white font-medium
          bg-[#8752FF] hover:opacity-90 transition "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            </div>
          </section>

          <section className="relative flex flex-col items-center justify-center text-center py-20 px-8 sm:px-16 md:px-24 lg:px-32 rounded-2xl overflow-hidden mt-[80px] bg-[#f5efff] -mt-10 w-full md:w-[85%] mx-auto">
            {/* Decorative Wave Background */}
            <div className="absolute inset-0 z-0">
              <svg
                width="1616"
                height="239"
                viewBox="0 0 1616 239"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <path
                  d="M-48 41C-48 41 139.445 156.514 286.739 170.972C383.528 180.472 441.175 180.62 534.307 159.474C688.427 124.482 779.651 70.096 946.455 69.4938C1148.67 68.7638 1235.25 176.395 1436.71 188.968C1509.96 193.54 1625 188.968 1625 188.968"
                  stroke="#ECE2FA"
                  strokeWidth="95"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="font-avalors text-primary text-[32px]-400 font-semibold tracking-widest mb-3">
                LET’S GET STARTED
              </p>
              <h1 className="font-avalors text-[46px] md:text-3xl font-bold text-[#4C4C4C]-400 uppercase">
                WORLD CLASS IT SOLUTIONS PARTNER OF CHOICE
              </h1>
            </div>
          </section>

          <br/>
          <br/>
<ContactStat />

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
