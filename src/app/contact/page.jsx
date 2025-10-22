export const metadata = {
  title: "Contact Us | Infogentech Softwares LLP",
  description:
    "Infogentech Softwares LLP is located at A-85, GT Karnal Rd, Block L 1, Azadpur, Delhi, 110033. Contact us at info@infogentech.com or call us - 991-013-0963.",
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
        url: "/public/logoGroup.png",
        width: 1200,
        height: 630,
        alt: "Infogentech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Infogentech Softwares LLP",
    description:
      "Infogentech Softwares LLP — contact us at info@infogentech.com or 991-013-0963.",
    site: "@infogentech",
    images: ["/public/logoGroup.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <p className="font-montserrat lg:text-lg text-sm max-w-4xl mx-auto text-center text-[#252525] font-medium">
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
