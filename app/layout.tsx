import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NRF Workshop 2025 - Listening Through the Body',
  description: 'Combining Visual, Auditory, and Haptic Interaction For Designing a Concert Space for XR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
