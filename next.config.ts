import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// output: "export",
// images: {
//     domains: ['localhost'],
//     unoptimized: true
//   } 
images: {
    domains: ['localhost', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
}
};

export default nextConfig;
