import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only — no Node server.
  output: "export",
  // /resume -> /resume/index.html so Pages resolves directory URLs.
  trailingSlash: true,
  // No image optimization server available on Pages.
  images: { unoptimized: true },
};

export default nextConfig;
