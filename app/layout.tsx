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
  title: "Preetham Devulapally | Software Engineer Portfolio",
  description:
    "Preetham Devulapally - Graduate Software Engineer with expertise in Full-Stack Development, DevOps, AI, Mobile Apps, and Cloud Technologies. Skilled in React, Next.js, Python, Java, Kotlin, and modern development practices.",
  keywords: [
    // Personal Identifiers
    "Preetham Devulapally",
    "Preetham",
    "Devulapally",
    "Software Engineer Portfolio",

    // Roles & Expertise
    "Software Engineer",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Graduate Software Engineer",
    "AI Developer",

    // Technical Skills
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Kotlin",
    "HTML5",
    "CSS3",
    "SASS",
    "Tailwind CSS",

    // Technologies & Frameworks
    "Node.js",
    "Express.js",
    "Django",
    "Spring Boot",
    "Android Development",
    "Jetpack Compose",
    "REST API",
    "GraphQL",

    // Cloud & DevOps
    "AWS",
    "Firebase",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Git",
    "GitHub",
    "Vercel",
    "Cloud Computing",
    "DevOps",

    // AI & ML
    "AI",
    "Machine Learning",
    "RAG",
    "Neural Networks",
    "NLP",
    "TensorFlow",
    "PyTorch",

    // Database
    "Database",
    "SQL",
    "NoSQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase Firestore",

    // Core Skills
    "Algorithms",
    "Data Structures",
    "System Design",
    "Software Architecture",
    "Mobile Development",
    "Web Development",
    "API Integration",
    "UI/UX",
    "Responsive Design",

    // Soft Skills & Methodologies
    "Agile",
    "Scrum",
    "Problem-solving",
    "Team Collaboration",
    "Project Management",
    "Technical Leadership",

    // Education & Location
    "University of Westminster",
    "London",
    "UK Software Engineer",
    "Graduate Developer",
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
  verification: {
    google: '-TA2UguYscIU7Q2_lxHNfh8VaKKJ_mc68yWClUVJsDg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta 
          name="google-site-verification" 
          content="-TA2UguYscIU7Q2_lxHNfh8VaKKJ_mc68yWClUVJsDg" 
        />
      </head>
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
