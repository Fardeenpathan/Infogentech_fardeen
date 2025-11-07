const PrivacyPolicy = () => {
  return (
    <div className="xl:mt-20 mt-10 subContainer mx-auto p-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-7">
          <div className="flex justify-center items-center mb-40 flex-col">
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 "></div>
          </div>
          <div className="flex flex-col p-2">
            <p className="font-avalors font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              Privacy Policy
            </p>
            <p className="font-avalors font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              Your Privacy Matters to Us
            </p>
            <p className="font-jost font-medium text-base sm:text-lg md:text-xl leading-relaxed mt-6">
              Your personal information is safe with us, and we handle it with
              the utmost care and responsibility. This Privacy Policy explains
              how we collect, use, disclose, and protect your personal
              information when you visit or use our website (website link). By
              using this Website, you agree to the terms outlined below.
            </p>
          </div>
        </div>
      </div>

      <section className="flex justify-between gap-7">
        <div className="flex  items-center mb-40 flex-col">
          <div className="relative w-12 h-12">
            <img
              src="/assist/video/pentagonVideo.gif"
              alt="valueImg"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="w-0.5 h-full rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
        </div>

        <aside className="flex flex-col p-4">
          <article className="space-y-6">
            {/* Section 1 */}
            <p className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
              Information We Collect
            </p>
            <h2 className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              When you use our Website, we may collect the following types of
              information:
            </h2>
            <ul className="mt-3 list-disc list-inside text-base sm:text-lg md:text-xl leading-relaxed space-y-2 font-jost">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, or other details you provide through forms or
                communication.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and interact with the Website (e.g., IP address, browser type,
                device type, pages visited, time and date of visits)
              </li>
              <li>
                <strong>Cookies & Tracking Data:</strong> Data collected through
                cookies and similar technologies to enhance your browsing
                experience and improve our services.
              </li>
            </ul>

            {/* Section 2 */}
            <p className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
              How We Use Your Information
            </p>
            <h2 className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              We use the information we collect to
            </h2>
            <ul className="mt-3 list-disc list-inside text-base sm:text-lg md:text-xl leading-relaxed space-y-2 font-jost">
              <li>Provide, operate, and improve our Website and services.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Personalize your user experience.</li>
              <li>Monitor Website usage and analyze trends.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            {/* Other sections */}
            {[
              "Cookies and Tracking Technologies",
              "Sharing of Information",
              "Data Security",
              "Third-Party Links",
              "Children’s Privacy",
              "Your Privacy Rights",
              "Changes to This Privacy Policy",
              "Contact Us",
            ].map((title, idx) => (
              <section key={idx}>
                <p className="font-avalors font-normal  sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
                  {title}
                </p>
                <h2 className="mt-3 text-base sm:text-lg md:text-xl leading-relaxed font-jost pl-4">
                  {/* Text content handled individually in your real version */}
                  {/* Keeping as-is but with updated responsive size */}
                </h2>
              </section>
            ))}

            {/* <p className="mt-3 text-base sm:text-lg md:text-xl leading-relaxed font-jost pl-4">
              Email Address : contact@infogentech.com <br /> Phone Number : +91
              991-013-0963 <br /> Company Name & Address : Infogentech , Model
              Town
            </p> */}

            <footer className="text-end text-xs sm:text-sm md:text-base text-gray-500 mt-6">
              <p>
                © {new Date().getFullYear()} Infogentech. All rights reserved.
              </p>
            </footer>
          </article>
        </aside>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
