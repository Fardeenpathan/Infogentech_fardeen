import axios from "axios";

export async function GET() {
  const baseUrl = 'https://infogentech.com';

  let blogs = [];
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });
    const data = res.data;
    blogs = Array.isArray(data.data) ? data.data : [];
  } catch (e) {
    blogs = [];
  }

  const blogUrls = blogs.map((blog) => ([
    {
      loc: `${baseUrl}/blog/${blog.slug}`,
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/us/blog/${blog.slug}`,
      changefreq: 'daily',
      priority: 0.8,
    },
  ])).flat();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogUrls.map(
      (url) => `
      <url>
        <loc>${url.loc}</loc>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`
    ).join('')}
  </urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}