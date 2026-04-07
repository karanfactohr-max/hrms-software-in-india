import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import "@fontsource/public-sans/400.css"
import "@fontsource/public-sans/500.css"
import "@fontsource/public-sans/600.css"
import "@fontsource/public-sans/700.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "HRMS Software in India — Payroll, Compliance & HR Automation",
    template: "%s | HRMS Software in India",
  },
  description:
    "India's most compliant HRMS software. Automate payroll, attendance, leave, performance, recruitment, and statutory compliance (PF, ESI, PT, TDS) for companies of all sizes.",
  keywords: [
    "hrms software india",
    "hr software india",
    "payroll software india",
    "attendance management system",
    "hr compliance software",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "HRMS Software in India",
  },
  icons: {
    icon: [
      { url: "/facicon.png", type: "image/png" },
    ],
    apple: [{ url: "/facicon.png", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
