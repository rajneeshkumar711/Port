import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Developer - Full Stack Developer Portfolio",
  description:
    "Professional portfolio of John Developer, a Full Stack Developer with 5+ years of experience in React, Node.js, and modern web technologies.",
  keywords: "Full Stack Developer, React, Node.js, JavaScript, Portfolio, Web Development",
  authors: [{ name: "John Developer" }],
  openGraph: {
    title: "John Developer - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing 5+ years of full-stack development experience",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
