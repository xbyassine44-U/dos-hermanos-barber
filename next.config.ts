import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  serverExternalPackages: [],
};

const host = process.env.HOST || "0.0.0.0";

export default nextConfig;
