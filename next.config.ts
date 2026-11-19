import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Brand photography is served as pre-optimised JPGs from /public/images.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
