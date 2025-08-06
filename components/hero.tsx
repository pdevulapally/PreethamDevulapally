"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { GitlabIcon as GitHub, Linkedin, Mail, FileText, ArrowRight, Sparkles } from "lucide-react"
import RevealText from "./reveal-text"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container-custom py-8 sm:py-12 md:py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image for mobile - shown at top */}
          <div className="lg:hidden w-full flex justify-center mb-8">
            <RevealText delay={200}>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 p-1 float">
                <div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'}}></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407336793_6833926710054844_1424313180351365942_n.jpg-rQyDcOudtZtxVEZqeJi8Mc7L8a1owU.jpeg"
                  alt="Preetham Devulapally"
                  fill
                  className="object-cover rounded-full relative z-10"
                  priority
                />
              </div>
            </RevealText>
          </div>

          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <RevealText delay={100}>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary font-medium">First Class Honours Graduate</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Preetham</span> Devulapally
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium leading-relaxed">
                  First Class BEng (Hons) Software Engineering Graduate – University of Westminster
                </h2>
              </div>
            </RevealText>

            <RevealText delay={300}>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">Kotlin</span>
                <span className="skill-badge">AI</span>
              </div>
            </RevealText>

            <RevealText delay={500}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
                Passionate about AI, full-stack development, and cloud infrastructure. Open to software engineering roles.
              </p>
            </RevealText>

            <RevealText delay={700}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a href="#projects" className="btn-primary flex items-center justify-center text-sm sm:text-base py-3 px-6 group">
                  View Projects 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/CV/PreethamDevulapallyCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center text-sm sm:text-base py-3 px-6 group"
                >
                  Download CV 
                  <FileText size={18} className="ml-2 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </RevealText>

            <RevealText delay={900}>
              <div className="flex items-center space-x-4 sm:space-x-6 pt-6">
                <a
                  href="https://github.com/pdevulapally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GitHub size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/preethamdevulapally/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="mailto:PreethamDevulapally@gmail.com"
                  className="social-icon-link p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </RevealText>
          </div>

          {/* Image for desktop - hidden on mobile */}
          <div className="hidden lg:col-span-5 lg:flex justify-center">
            <RevealText delay={200}>
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/30 p-1 float">
                <div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'}}></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407336793_6833926710054844_1424313180351365942_n.jpg-rQyDcOudtZtxVEZqeJi8Mc7L8a1owU.jpeg"
                  alt="Preetham Devulapally"
                  fill
                  className="object-cover rounded-full relative z-10"
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
