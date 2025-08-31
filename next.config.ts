import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["ik.imagekit.io"], // ✅ whitelist ImageKit
  },
};

export default nextConfig;
