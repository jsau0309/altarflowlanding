import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Spectral } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-spectral",
})

export const metadata: Metadata = {
  title: "Altarflow - Church Management Platform",
  description:
    "Streamline your church operations and boost productivity with Altarflow, the complete platform for modern churches.",
  appleWebApp: {
    title: "Altarflow",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${spectral.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
