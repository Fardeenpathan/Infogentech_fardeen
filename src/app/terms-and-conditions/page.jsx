
export const metadata = {
  title: "Terms and Conditions | Infogentech Softwares LLP",
  description:
    "Your Agreement Matters to Us — Terms and Conditions for Infogentech. By accessing or using our Site, you agree to these Terms.",
  keywords: ["Terms and Conditions", "Infogentech", "legal", "privacy", "website terms"],
  authors: [{ name: "InfoGenTech" }],
  creator: "InfoGenTech",
  publisher: "InfoGenTech",
  metadataBase: new URL("https://infogentech.com"),
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions - Infogentech",
    description:
      "Your Agreement Matters to Us — Terms and Conditions for Infogentech.",
    url: "https://infogentech.com/terms-and-conditions",
    siteName: "infogentech",
    images: [
      {
        url: "https://infogentech.com/https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
         width: 200,
        height: 60,
        alt: "Infogentech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@infogentech",
    title: "Terms and Conditions - Infogentech",
    description:
      "Your Agreement Matters to Us — Terms and Conditions for Infogentech.",
    images: ["https://infogentech.com/https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    other: {
    "geo.region": "IN",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};

const Terms = () => {
  return (
    <div className="subContainer mx-auto p-3">
    <div className="flex flex-col xl:mt-35 mt-25">
            <h1 className="font-avalors font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              Terms and Conditions
            </h1>
            <h2 className="font-avalors font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mt-2">
              Your Agreement Matters to Us
            </h2>
            <p className="font-montserrat font-medium text-base sm:text-lg md:text-xl leading-relaxed mt-6">
              Welcome to Infogentech. These Terms and Conditions govern your access to and use of our website, located at [the “Site”]. 
              By accessing or using our Site, you agree to comply with and be bound by these Terms. 
              If you do not agree, you should not use this site.
            </p>
          </div>
              <aside className="flex flex-col p-4">
          <article className="space-y-8">
            <div>
            <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
              Use of the Site
            </h4>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-2 font-montserrat">
              <li>
                You must be at least 18 years old or have parental/guardian
                consent to use this Site.
              </li>
              <li>
                You agree to use the Site only for lawful purposes and in a way
                that does not infringe the rights of others.
              </li>
              <li>
                You may not use the Site to distribute harmful content, attempt
                to gain unauthorized access, or engage in fraudulent activity.
              </li>
            </ul>
            </div>
            <div>
              <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
              User Accounts ( If Applicable )
            </h4>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-2 font-montserrat">
              <li>
               If you create an account, you are responsible for maintaining the confidentiality of your login credentials.
              </li>
              <li>
                You agree to notify us immediately if you suspect unauthorized use of your account.
              </li>
              <li>
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </li>
            </ul>
            </div>

            <div>
              <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
               Third-Party Links
              </h4>
              <p className="text-base sm:text-lg md:text-xl font-montserrat">
                Our Site may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites. Accessing them is at your own risk.
              </p>
            </div>
            <div>
              <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
               Disclaimer of Warranties
              </h4>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-2 font-montserrat">
              <li>
             The Site is provided on an “as-is” and “as-available” basis.
              </li>
              <li>
                We make no warranties or representations regarding the accuracy, reliability, or availability of the Site.
              </li>
              <li>
               We disclaim all warranties, whether express or implied, including but not limited to fitness for a particular purpose, merchantability, and non-infringement.
              </li>
            </ul>
            </div>
            <div>
              <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
               Limitation of Liability
              </h4>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-2 font-montserrat">
              <li>
            To the maximum extent permitted by law, [Your Website Name] and its affiliates shall not be liable for any damages, losses, or claims arising from your use of the Site
              </li>
              <li>
                This includes, but is not limited to, indirect, incidental, consequential, or punitive damages.
              </li>
            </ul>
            </div>
            <div>
              <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
                 Indemnification
              </h4>
              <p className="text-base sm:text-lg md:text-xl font-montserrat">
              You agree to indemnify and hold harmless Infogentech, its officers, employees, and affiliates from any claims, liabilities, or damages arising from your use of the Site or violation of these Terms.
              </p>
            </div>
            <div>
              <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
                Changes to These Terms
              </h4>
              <p className="text-base sm:text-lg md:text-xl font-montserrat">
                We may update or revise these Terms at any time without prior notice. Continued use of the Site means you accept the revised Terms.
              </p>
            </div>
            <div>
              <h4 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
               Governing Law
              </h4>
              <p className="text-base sm:text-lg md:text-xl font-montserrat">
                These Terms are governed by the laws of India, without regard to its conflict of law principles.
              </p>
            </div>
            <div>
              <h3 className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize mb-4">
                Contact Us
              </h3>
              <p className="text-base sm:text-lg md:text-xl font-montserrat">
               If you have questions about these Terms, please contact us:
              </p>
              <p className="mt-3 text-base sm:text-lg md:text-xl font-montserrat">
                Email Address : info@infogentech.com <br /> Phone Number :
                +91 991-013-0963 <br /> Company Name & Address : Infogentech , model
                Town
              </p>
            </div>
          </article>
        </aside>
    
    </div>
  );
};

export default Terms;
