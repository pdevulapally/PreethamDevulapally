import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import SeoKeywords from "@/components/seo-keywords"
import MeshGradient from "@/components/mesh-gradient"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Preetham Devulapally | Software Engineer",
  description:
    "Software Engineer with expertise in Full-Stack Development, AI, Mobile Apps, and Cloud Technologies. Skilled in React, Next.js, Python, Java, Kotlin, and DevOps practices.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Kotlin",
    "AI",
    "Machine Learning",
    "DevOps",
    "Cloud",
    "AWS",
    "Firebase",
    "Database",
    "SQL",
    "NoSQL",
    "Algorithms",
    "Data Structures",
    "Mobile Development",
    "Web Development",
    "API Integration",
    "UI/UX",
    "Responsive Design",
    "Agile",
    "Problem-solving",
  ],
  openGraph: {
    title: "Preetham Devulapally | Software Engineer",
    description: "Software Engineer with expertise in Full-Stack Development, AI, Mobile Apps, and Cloud Technologies.",
    url: "https://preetham-devulapally.vercel.app",
    siteName: "Preetham Devulapally Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preetham Devulapally - Software Engineer",
      },
    ],
    locale: "en_UK",
    type: "website",
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text-primary`}>
        <Suspense>
          <MeshGradient />
          {children}
          <SeoKeywords />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
