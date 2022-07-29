/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "images.unsplash.com"],

    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    images: {
      unoptimized: true,
    }
  },

}

module.exports = nextConfig
