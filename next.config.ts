import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["100.70.199.130"],
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
