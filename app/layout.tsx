import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TriosLK",
  metadataBase: new URL("https://trios.lk"),
  openGraph: {
    title: "TriosLK",
    description:
      "Trios.LK offers event planning, signage solutions, photography, and educational programs through Trios Academy.",
    url: "https://trios.lk",
    siteName: "TriosLK",
    images: [
      {
        url: "https://trios.lk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TriosLK - Event Planning, Signage Solutions, Photography, and Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "TriosLK",
    "Event Planning",
    "Signage Solutions",
    "Photography",
    "Trios Academy",
    "Sri Lanka",
    "Community Events",
    "Educational Programs",
  ],
  description: "Trios.LK offers event planning, signage solutions, photography, and educational programs through Trios Academy.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <ScrollToTop />
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
