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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }

}

module.exports = nextConfig
