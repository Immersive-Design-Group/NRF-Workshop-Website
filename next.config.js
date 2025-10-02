/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/NRF-Workshop-Website' : '',
  assetPrefix: isProd ? '/NRF-Workshop-Website/' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig