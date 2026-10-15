import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    qualities: [70, 75, 85],
  },
  // Verizon's page was removed (client, Oct 2026: not approved yet); send old links to the providers hub.
  async redirects() {
    return [{ source: "/providers/verizon", destination: "/internet-providers", permanent: false }];
  },
};

export default nextConfig;
