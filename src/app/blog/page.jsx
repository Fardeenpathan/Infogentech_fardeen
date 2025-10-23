import BlogClient from './BlogClient';

export const metadata = {
  title: "Blogs | Infogentech Softwares LLP ",
  description:
    "Explore our blogs on digital marketing, app/web design, and development. Get insights, tips, and trends to enhance your online presence and boost your business.",
  keywords: "",
  openGraph: {
    title: "Blogs - Digital Marketing, App/Web Designing & Development",
    description:
      "Explore our blogs on digital marketing, app/web design, and development. Get insights, tips, and trends to enhance your online presence and boost your business.",
    url: "https://infogentech.com/blog",
    siteName: "infogentech",
    images: [
      {
        url: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blogs - Digital Marketing, App/Web Designing & Development ",
    description:
      "Explore our blogs on digital marketing, app/web design, and development. Get insights, tips, and trends to enhance your online presence and boost your business.",
    site: "@infogentech",
    images: [
      {
        url: "https://res.cloudinary.com/dpmceu66e/image/upload/v1761122550/blog-app/blogs/blogs/1761122539255-group_2147224477.png",
      },
    ],
  },
  robots: "index, follow, All",
  authors: [{ name: "InfoGenTech" }],
  publisher: "InfoGenTech",
  distribution: "global",
  "geo.region": "US",
  alternates: {
    canonical: "https://infogentech.com/blog",
    languages: {
      "en-US": "https://infogentech.com/blog",
    },
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
