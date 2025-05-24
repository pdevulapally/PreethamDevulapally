"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { GitlabIcon as GitHub, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import RevealText from "./reveal-text"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-[90vh] pt-20 flex items-center">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <RevealText delay={100}>
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-primary">Preetham</span> Devulapally
                </h1>
                <h2 className="text-2xl md:text-3xl text-text-secondary font-medium">Software Engineer</h2>
              </div>
            </RevealText>

            <RevealText delay={300}>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Next.js</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">Kotlin</span>
                <span className="skill-badge">AI</span>
              </div>
            </RevealText>

            <RevealText delay={500}>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Graduate Software Engineer with a passion for DevOps and cloud technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>BEng Software Engineering student at University of Westminster (First Grade)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Developed a final-year AI project to assess news article trustworthiness. Eager to work in a dynamic team, apply my skills in development and deployment tools</span>
                </li>
              </ul>
            </RevealText>

            <RevealText delay={700}>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="btn-primary flex items-center">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </a>
                <a
                  href="/CV/PREETHAM DEVULAPALLY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center"
                >
                  Download CV <FileText size={16} className="ml-2" />
                </a>
              </div>
            </RevealText>

            <RevealText delay={900}>
              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="https://github.com/pdevulapally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/preethamdevulapally/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:PreethamDevulapally@gmail.com"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </RevealText>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <RevealText delay={200}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary p-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407336793_6833926710054844_1424313180351365942_n.jpg-rQyDcOudtZtxVEZqeJi8Mc7L8a1owU.jpeg"
                  alt="Preetham Devulapally"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  )
}
