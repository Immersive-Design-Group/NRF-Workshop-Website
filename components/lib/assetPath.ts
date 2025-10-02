export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (!path.startsWith('/')) return `${base}/${path}`
  return `${base}${path}`
}


