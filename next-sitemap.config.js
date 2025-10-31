export default {
  siteUrl: 'https://infogentech.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  // additionalPaths: async () => {
  //   let blogs = [];
  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  //     blogs = await res.json();
  //   } catch (error) {
  //     blogs = { data: [] };
  //   }
  //   const paths = [];

  //   if (Array.isArray(blogs.data) && blogs.data.length > 0) {
  //     blogs.data.forEach((blog) => {
  //       paths.push({
  //         loc: `/blog/${blog.slug}`,
  //         changefreq: 'daily',
  //         priority: 0.8,
  //         lastmod: new Date().toISOString(),
  //       });
  //       paths.push({
  //         loc: `/us/blog/${blog.slug}`,
  //         changefreq: 'daily',
  //         priority: 0.8,
  //         lastmod: new Date().toISOString(),
  //       });
  //     });
  //   }
  //   return paths;
  // },
};
