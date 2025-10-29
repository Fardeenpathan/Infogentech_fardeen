'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Icons from './ui/Icon';
import PurpleCheckbox from './ui/Checkbox';
import GradientButton from './ui/GradientButton';
import config from '@/config';
import adminApiService from '@/lib/adminApi';
import { motion } from 'framer-motion';
const contacta = [
  {
    country: 'USA',
    info: [
      { icon: 'Contact', text: '+1 123 456 7890' },
      { icon: 'Email', text: 'contact@infogentech.com' },
      { icon: 'Location', text: 'Texas, USA' },
    ],
  },
];

const socialMedia = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/1nfogentech?igsh=dXJrNjVzYndyZ2Rq',
  },
  // More social media entries can be added
];

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    productQuestion: '',
    message: '',
    captcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleCaptcha = (token) => {
    if (token) {
      setIsVerified(true);
      setFormData((prev) => ({ ...prev, captcha: token }));
    } else {
      setIsVerified(false);
      setFormData((prev) => ({ ...prev, captcha: '' }));
    }
  };

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
      setSubmitMessage('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await adminApiService.request(
        config.api.endpoints.contact,
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      );
      setSubmitMessage(
        result.message ||
          'Contact form submitted successfully. We will get back to you soon.'
      );
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        productQuestion: '',
        message: '',
        captcha: '',
      });

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setIsVerified(false);
      setTimeout(() => setSubmitMessage(''), 6000);
    } catch (error) {
      setSubmitMessage(
        error?.message || 'Error sending message. Please try again later.'
      );
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, ease: 'easeOut' },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
  return (
   <motion.div
    className="xl:mt-35 mt-0 container mx-auto overflow-hidden px-2"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
      <div className="flex justify-between gap-8">
        <motion.div className="xl:flex gap-10 hidden" variants={panelVariants}>
          <div className="flex justify-center items-center flex-col">
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-0.5 h-[731px] rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </div>
        </motion.div>
        <div className="w-full rounded-2xl">
          <div className="text-center mb-14">
            <p className="font-avalors text-primary text-[32px] leading-6 align-middle">
              Get in Touch
            </p>

            <p className="font-jost font-medium text-lg leading-6 align-middle mt-3">
              Have a question or need help? Just send us a message or email
              we’re happy to help!
            </p>
          </div>
          <section className="p-2.5 bg-[#202037] rounded-2xl flex gap-5 flex-col lg:flex-row">
               <motion.div
            className="md:min-w-[491px] w-full bg-[#000026] rounded-xl py-12 px-10 relative overflow-hidden"
            variants={panelVariants}
          >
              <p className="font-jost font-medium text-2xl leading-6 align-middle">
                Contact Information
              </p>
              <p className="font-jost text-lg leading-6 align-middle text-[#C9C9C9] mt-5">
                Say something to start a live chat!
              </p>

              <div className="mt-20 flex flex-col gap-12.5">
                {contacta.map((region, i) => (
                  <div key={i}>
                    <div className="flex flex-col gap-6.5">
                      {region.info.map((item, index) => (
                        <p key={index} className="flex gap-6.5 items-center">
                          <Icons name={item.icon} /> <span>{item.text}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6 mt-36 ">
                {socialMedia.map((item, index) => (
                  <div
                    key={index}
                    className="w-[30px] h-[30px] bg-[#C4C4C4] rounded-full flex items-center justify-center z-50"
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
                        {...(item.name === 'Twitter'
                          ? { width: '15', height: '14' }
                          : {})}
                      />
                    </a>
                  </div>
                ))}
              </div>
              <div className="w-[269px] h-[269px] bg-[#301F56] rounded-full absolute md:-bottom-25 md:-right-25 -bottom-32 -right-32"></div>
              <div className="w-[138px] h-[138px] bg-[#48484880] rounded-full absolute md:bottom-13 md:right-13 bottom-7 right-7"></div>
            </motion.div>
               <motion.div
            className="flex items-center justify-center px-6 w-full relative"
            variants={panelVariants}
          >
              <form
                className="w-full text-white space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E4E4E4] text-lg mb-2 font-jost font-light">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full py-2 border-b-2 border-[#FFFFFF] bg-transparent focus:outline-none focus:border-[#8752FF]"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#E4E4E4] text-lg mb-2 font-jost font-light">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full py-2 border-b-2 border-[#FFFFFF] bg-transparent focus:outline-none focus:border-[#8752FF]"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E4E4E4] text-lg mb-2 font-jost font-light">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full py-2 border-b-2 border-[#FFFFFF] bg-transparent focus:outline-none focus:border-[#8752FF]"
                      placeholder="+1 012 3456 789"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#E4E4E4] text-lg mb-2 font-light">
                      Product Question
                    </label>
                    <select
                      name="productQuestion"
                      value={formData.productQuestion}
                      onChange={handleInputChange}
                      className="w-full py-2 border-b-2 border-[#FFFFFF] bg-transparent focus:outline-none focus:border-[#8752FF]"
                      required
                    >
                      <option value="" className="bg-[#1C1B2D]">
                        Select
                      </option>
                      <option value="General Inquiry" className="bg-[#1C1B2D]">
                        General Inquiry
                      </option>
                      <option
                        value="Technical Support"
                        className="bg-[#1C1B2D]"
                      >
                        Technical Support
                      </option>
                      <option value="Pricing" className="bg-[#1C1B2D]">
                        Pricing
                      </option>
                      <option value="Partnership" className="bg-[#1C1B2D]">
                        Partnership
                      </option>
                      <option value="Other" className="bg-[#1C1B2D]">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#E4E4E4] text-lg mb-2 font-jost font-light">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full py-2 border-b-2 border-[#FFFFFF] bg-transparent focus:outline-none focus:border-[#8752FF] resize-none"
                    placeholder="Write your message.."
                    rows={3}
                    required
                  ></textarea>
                </div>
                <div className="flex items-center space-x-2">
                  <PurpleCheckbox label="subscribe to receive the latest news and exclusive offers" />
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptcha}
                />
                {submitMessage && (
                  <div
                    className={`text-sm ${
                      submitMessage.includes('successfully')
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={!isVerified || isSubmitting}
                  className="text-primary mt-7.5 pb-4"
                >
                  <GradientButton
                    bg="bg-[#202037]"
                    paddingX="px-12"
                    paddingY="py-4.5"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </GradientButton>
                </button>
              </form>
            </motion.div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
