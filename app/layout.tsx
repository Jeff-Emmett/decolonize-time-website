import type React from "react"
import type { Metadata } from "next"
import { Geist, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Decolonize Time - Reclaiming Natural Rhythms",
  description:
    "Explore the system construct of time and reconnect with natural, lunar, and seasonal rhythms beyond the imposed 12-60 frequency.",
  keywords: "lunar calendar, 13 moons, indigenous time, Kairos, Chronos, natural time, decolonize, fractal time",
  generator: "v0.app",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>♾️</text></svg>",
  },
  metadataBase: new URL("https://decolonizeti.me"),
  openGraph: {
    title: "Decolonize Time - Reclaiming Natural Rhythms",
    description: "Explore the system construct of time and reconnect with natural, lunar, and seasonal rhythms beyond the imposed 12-60 frequency.",
    url: "https://decolonizeti.me",
    siteName: "Decolonize Time",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Decolonize Time - Moon phases over natural landscape",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decolonize Time - Reclaiming Natural Rhythms",
    description: "Explore the system construct of time and reconnect with natural, lunar, and seasonal rhythms beyond the imposed 12-60 frequency.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${crimsonText.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
