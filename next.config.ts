import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "electro.madrasthemes.com",
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
