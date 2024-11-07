import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/estro-gym/",
  basePath: "/estro-gym",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
