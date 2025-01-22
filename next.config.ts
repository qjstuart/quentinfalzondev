import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.discogs.com",
      },
      {
        protocol: "https",
        hostname: "st.discogs.com",
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
