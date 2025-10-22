import IndHeroPage from "@/components/india/IndHeroPage";
export const metadata = {
  title: "Innovation Success with Software, Technology & Digital Marketing | Infogentech Softwares LLP",
  description:
    "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
  keywords:
    "digital marketing company, digital marketing company in Delhi NCR, digital marketing services, online marketing services, web development services, IT services, SEO services in Delhi, SEO services, digital marketing agency near me, social media marketing",
  openGraph: {
    title: "Innovation Success with Software, Technology & Digital Marketing",
    description:
      "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
    url: "https://infogentech.com/",
    siteName: "infogentech",
    images: [
      {
        url: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
        width: 1200,
        height: 630,
        alt: "Infogentech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@infogentech",
    title: "Innovation Success with Software, Technology & Digital Marketing",
    description:
      "Discover how innovation in software, technology, and digital marketing drives business growth. Explore strategies for success in today’s digital-first world.",
    images: ["https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png"],
  },
  alternates: {
    canonical: "https://infogentech.com/",
  },
};
export default function Home() {
  return <IndHeroPage />;
}
