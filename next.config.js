/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/NRF-Workshop-Website',
  assetPrefix: '/NRF-Workshop-Website/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig