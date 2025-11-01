export default function robots() {
  return {
    rules: [
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/admin/',
          '/login/',
          '/cart/',
          '/checkout/',
          '/user/',
          '/private/',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://infogentech.com/sitemap.xml',
    sitemap: 'https://infogentech.com/sitemap-0.xml',
    host: 'https://infogentech.com',
  };
}
