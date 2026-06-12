import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tree-shake heavy libs so unused exports don't ship — cuts the JS the mobile
  // main thread has to parse/execute (PageSpeed: "reduce unused JavaScript").
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "embla-carousel-react",
      "embla-carousel-autoplay",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-select",
      "@radix-ui/react-tabs",
    ],
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ]
  },
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2kd0cre8z.ufs.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tv7odam5so.ufs.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
