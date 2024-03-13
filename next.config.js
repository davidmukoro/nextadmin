/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plunic.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
