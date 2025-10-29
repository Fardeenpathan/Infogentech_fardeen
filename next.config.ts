import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path.php',
        destination: '/:path',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['localhost','res.cloudinary.com','infogentech.com',],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
