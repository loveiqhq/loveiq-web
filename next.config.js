/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
      },
    ],
  },
  // Reduce bundle size by optimizing imports from large packages
  experimental: {
    optimizePackageImports: ["lenis"],
  },
  // Ensure modern JS output - skip legacy polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  // Security headers are now set in proxy.ts with nonce-based CSP
};

module.exports = nextConfig;
