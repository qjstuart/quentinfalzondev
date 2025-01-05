import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.discogs.com",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
