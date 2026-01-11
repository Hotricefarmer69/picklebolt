import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import content from "./_content/picklebolt.json"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: content.seo.ogTitle || "Picklebolt Tournament",
  description: content.seo.ogDescription || "High-energy pickleball tournament benefiting CHS Tennis",
  generator: "v0.app",
  openGraph: {
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: [content.seo.ogImage],
  },
  themeColor: "#D72638",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-pb-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
