import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Bishesh Tech — Nepal's Modern IT Company",
    template: "%s | Bishesh Tech",
  },
  description: "Bishesh Tech is Nepal's trusted digital partner. We build websites, SEO, school systems, clinic booking, and restaurant solutions for businesses in Kathmandu, Pokhara and across Nepal.",
  keywords: [
    "web development Nepal",
    "IT company Nepal",
    "website design Kathmandu",
    "SEO Nepal",
    "school management system Nepal",
    "clinic booking system Nepal",
    "restaurant website Nepal",
    "digital marketing Nepal",
    "Bishesh Tech",
    "Nepal IT company",
  ],
  authors: [{ name: "Bishesh Tech", url: "https://bishesh-tech.vercel.app" }],
  creator: "Bishesh Tech",
  metadataBase: new URL("https://bishesh-tech.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bishesh-tech.vercel.app",
    siteName: "Bishesh Tech",
    title: "Bishesh Tech — Nepal's Modern IT Company",
    description: "We build websites, SEO, school systems, clinic booking, and restaurant solutions for businesses across Nepal.",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Bishesh Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishesh Tech — Nepal's Modern IT Company",
    description: "We build websites, SEO, and digital solutions for Nepal businesses.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0F1E]">
        {children}
      </body>
    </html>
  )
}