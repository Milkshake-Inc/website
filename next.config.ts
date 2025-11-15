import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  distDir: 'build',
  basePath: "/website",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
