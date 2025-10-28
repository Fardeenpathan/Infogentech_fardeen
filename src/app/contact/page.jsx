export const metadata = {
  title: "Contact Us | Infogentech Softwares LLP",
  description:
    "Infogentech Softwares LLP is located at A-85, GT Karnal Rd, Block L 1, Azadpur, Delhi, 110033. Contact us at contact@infogentech.com or call us - 991-013-0963.",
  keywords: [
    "Query For Marketing Services",
    "Infogentech contact",
    "Contact Infogentech",
  ],
  metadataBase: new URL("https://infogentech.com"),
  alternates: {
    canonical: "/contact",
    languages: {
      "en-US": "/contact",
    },
  },
  openGraph: {
    title: "Contact Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP is located at A-85, GT Karnal Rd, Block L 1, Azadpur, Delhi, 110033.",
    url: "https://infogentech.com/contact",
    siteName: "Infogentech",
    images: [
      {
        url: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
        width: 200,
        height: 60,
        alt: "Infogentech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP — contact us at contact@infogentech.com or 991-013-0963.",
    site: "@infogentech",
    images: ["https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png"],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/contact",
    languages: {
      "en-US": "https://infogentech.com/contact",
    },
  },
  other: {
    "geo.region": "IN",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};

import IndContactForm from "@/components/india/IndContactForm";
import IndContactSub from "@/components/india/IndContactSub";

export default function ContactPage() {
  return (
    <section className="pb-10">
      <div className="w-full bg-[#E6DBFF] lg:h-158 h-100 justify-center items-center flex flex-col">
        <h1 className="font-avalors font-normal md:text-[80px] text-[46px] leading-[1.6] tracking-[3px] align-middle text-primary">
          Get in touch
        </h1>
        <p className="font-montserrat lg:text-lg text-sm max-w-4xl mx-auto text-center text-gray-600 font-medium">
          We’ll create high-quality linkable content and build at least 40
          high-authority links to each asset, paving the way for you to grow
          your rankings, improve brand.
        </p>
      </div>

      <IndContactForm />
      <IndContactSub />
    </section>
  );
}
