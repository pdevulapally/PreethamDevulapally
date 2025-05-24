"use client"

import Link from "next/link"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-primary">
              Preetham<span className="text-accent">.dev</span>
            </Link>
            <p className="mt-2 text-text-primary">Software Engineer | London, UK</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/pdevulapally"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/preethamdevulapally/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:PreethamDevulapally@gmail.com" className="social-icon-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-primary text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Preetham Devulapally. All rights reserved.
          </p>

          <button onClick={scrollToTop} className="back-to-top" aria-label="Scroll to top">
            <span className="mr-2">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
