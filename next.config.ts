import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the normal Vercel build; use an export only for the private Sites preview.
  ...(process.env.IOA_STATIC_EXPORT === "1"
    ? { output: "export" as const, images: { unoptimized: true } }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
