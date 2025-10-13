// Utility function to handle asset paths for both development and production
export const getAssetPath = (path: string): string => {
  const isProd = process.env.NODE_ENV === 'production'
  const basePath = isProd ? '/NRF-Workshop-Website' : ''
  return `${basePath}${path}`
}
