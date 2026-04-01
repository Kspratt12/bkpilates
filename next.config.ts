import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 7680],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 1024],
  },
};

export default nextConfig;
