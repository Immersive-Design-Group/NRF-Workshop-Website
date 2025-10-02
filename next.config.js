/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/NRF-Workshop-Website' : '',
  assetPrefix: isProd ? '/NRF-Workshop-Website/' : '',
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/NRF-Workshop-Website' : ''
  }
}

module.exports = nextConfig