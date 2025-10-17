import IndServiceCard from "@/components/india/IndServiceCard";
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import IndServiceDesc from "@/components/india/IndServiceDesc";
import Icons from "@/components/ui/Icon";
export const metadata = {
  title: "Digital Marketing Services and Web Solution Company",
  description:
    "Top digital marketing and web solutions provider globally. We offer expert services to enhance your online presence, drive traffic, and grow your business.",
  keywords:
    "Online Marketing Services, Online Internet Marketing, Marketing Solution, IT Solutions Services",
  openGraph: {
    title: "Digital Marketing Services and Web Solution Company",
    description:
      "Top digital marketing and web solutions provider globally. We offer expert services to enhance your online presence, drive traffic, and grow your business.",
    url: "https://infogentech.com/services",
    siteName: "infogentech",
    type: "website",
    images: [
      {
        url: "https://infogentech.com/public/CompanyName.svg",
        alt: "Infogentech",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Digital Marketing Services and Web Solution Company",
    description:
      "Top digital marketing and web solutions provider globally. We offer expert services to enhance your online presence, drive traffic, and grow your business.",
    site: "@infogentech",
    images: ["https://infogentech.com/public/CompanyName.svg"],
  },
  robots: "index, follow, all",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  alternates: {
    canonical: "https://infogentech.com/services",
    languages: {
      "en-US": "https://infogentech.com/services",
    },
  },
  other: {
    "geo.region": "US",
    "http-equiv": "x-ua-compatible",
    distribution: "global",
  },
};
const Marketing = () => {
  const categories = [
    {
      id: "01",
      title: "Marketing Strategy",
      description:
        "Create comprehensive strategies focused on long-term brand growth, audience engagement, and ROI.",
      image: "/images/services/marketing-strategy.jpg",
      subServices: [
        { id: "01", title: "ROI-Driven Campaign Strategies" },
        { id: "02", title: "B2B Content Strategies" },
        { id: "03", title: "Brand Messaging & Narratives" },
        { id: "04", title: "Content Strategy & Execution" },
        { id: "05", title: "Performance Tracking & ROI Analysis" },
        { id: "06", title: "Long-Term Partnerships" },
        { id: "07", title: "Competitor Benchmarking" },
      ],
    },
    {
      id: "02",
      title: "Performance Marketing",
      description:
        "Targeted, measurable campaigns to drive traffic, sales, and conversion through various ad platforms.",
      image: "/images/services/performance-marketing.jpg",
      subServices: [
        { id: "01", title: "Pay-Per-Click Advertising (PPC)" },
        { id: "02", title: "Google Ads Campaign Management" },
        { id: "03", title: "Display Ads & Retargeting" },
        { id: "04", title: "Shopping Ads & Product Listings" },
        { id: "05", title: "Conversion Tracking & Optimization" },
        { id: "06", title: "E-commerce Marketing" },
        { id: "07", title: "Online Store Optimization" },
        { id: "08", title: "Shopping Campaign Management" },
        { id: "09", title: "Shopping Ads & Product Listings" },
        { id: "10", title: "Cart Abandonment Recovery" },
        { id: "11", title: "CLV Optimization" },
        { id: "12", title: "Marketplace Marketing (Amazon, eBay)" },
      ],
    },
    {
      id: "03",
      title: "CRM & Automation",
      description:
        "Automate marketing flows and nurture customer relationships through personalized messaging.",
      image: "/images/services/crm-automation.jpg",
      subServices: [
        { id: "01", title: "Email Marketing" },
        { id: "02", title: "Email Campaign Design" },
        { id: "03", title: "Newsletter Creation & Management" },
        { id: "04", title: "Automation Sequences" },
        { id: "05", title: "Customer Retention Strategies" },
        { id: "06", title: "List Building & Segmentation" },
      ],
    },
    {
      id: "04",
      title: "Audience Engagement Strategy",
      description:
        "Grow and retain loyal audiences through social campaigns, influencer outreach, and strategic content.",
      image: "/images/services/audience-engagement.jpg",
      subServices: [
        { id: "01", title: "Social Media Marketing (SMO)" },
        { id: "02", title: "Instagram, Facebook & YouTube Marketing" },
        { id: "03", title: "WhatsApp & Twitter Engagement" },
        { id: "04", title: "Social Strategy Development" },
        { id: "05", title: "Content Creation & Community Management" },
        { id: "06", title: "Channel Optimization" },
        { id: "07", title: "Social Analytics & Reporting" },
        { id: "08", title: "Influencer Marketing" },
        { id: "09", title: "Influencer Outreach & Collaboration" },
        { id: "10", title: "Campaign Strategy & Management" },
      ],
    },
    {
      id: "05",
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimize your website for better visibility, organic traffic, and search engine rankings.",
      image: "/images/services/seo.jpg",
      subServices: [
        { id: "01", title: "Search Engine Optimization (SEO)" },
        { id: "02", title: "Technical SEO Audits" },
        { id: "03", title: "On-Page SEO & Content Optimization" },
        { id: "04", title: "Off-Page SEO & Link Building" },
        { id: "05", title: "Local SEO for Businesses" },
        { id: "06", title: "Mobile & E-commerce SEO" },
        { id: "07", title: "Keyword Research & Competitor Analysis" },
      ],
    },
    {
      id: "06",
      title: "Content Marketing",
      description:
        "Create valuable and consistent content to attract, engage, and convert your target audience.",
      image: "/images/services/content-marketing.jpg",
      subServices: [
        { id: "01", title: "Blog Writing & SEO Copy" },
        { id: "02", title: "Social Content & Captions" },
        { id: "03", title: "Video Scripts & Storytelling" },
        { id: "04", title: "Marketing Copywriting" },
        { id: "05", title: "Content Calendar Planning" },
      ],
    },
    {
      id: "07",
      title: "Analytics & Reporting",
      description:
        "Track campaign performance with custom dashboards and actionable insights to guide decision-making.",
      image: "/images/services/analytics-reporting.jpg",
      subServices: [
        { id: "01", title: "Google Analytics Setup" },
        { id: "02", title: "Performance Monitoring & CRO" },
        { id: "03", title: "Custom Dashboards & Reporting" },
        { id: "04", title: "ROI & Insight Reports" },
      ],
    },
  ];

  return (
    <section className="pb-10">
      <IndServicesHeader />
      <IndAllServices activeService="Digital Marketing" />
      <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2">
        <div className="lg:pb-20 pb-4">
          <IndServiceDesc />
        </div>
        <IndServiceCard categories={categories} />
      </div>
      <div className="moving-text-container overflow-hidden bg-[#3F237F] text-white mt-40">
        <div className="moving-text-content font-montserrat font-normal text-xl -tracking-[0.05em] custom-skew">
          <div className="flex gap-96">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i} className="py-4 flex gap-28">
                Design <Icons name="IndStar" /> Development
                <Icons name="IndStar" /> Branding <Icons name="IndStar" />
                Product
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
