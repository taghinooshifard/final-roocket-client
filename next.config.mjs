import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
//   redirects: async () => {
//     return [
//       {
//         source: "/login",
//         destination: "/home",
//         permanent: false,
//       },
//     ];
//   },
env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
  },
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.technewsworld.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.reuters.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blogit.create.pt',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
