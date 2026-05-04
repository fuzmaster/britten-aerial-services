import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable source maps in production builds to reduce memory
  productionBrowserSourceMaps: false,
  // Disable the "powered by" header
  poweredByHeader: false,
  // Keep fewer inactive pages in memory during local development
  onDemandEntries: {
    maxInactiveAge: 15 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
