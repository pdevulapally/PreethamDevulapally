import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login | Preetham Devulapally",
  description: "Login to the admin dashboard",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
