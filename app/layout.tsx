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
      <head>
        <link
          rel="preload"
          href="/Assets/Fonts/Raleway-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Assets/Fonts/Raleway-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Assets/Fonts/Raleway-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Assets/Fonts/Montserrat-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
