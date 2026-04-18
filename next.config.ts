import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blgroup.com.vn",
      },
    ],
  },
};

export default nextConfig;
