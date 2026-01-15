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
  // Security headers are now set in middleware.ts with nonce-based CSP
  // This provides stronger XSS protection than 'unsafe-inline'
};

module.exports = nextConfig;
