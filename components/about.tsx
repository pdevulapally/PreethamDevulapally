export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-12 sm:mb-16">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <p className="text-lg sm:text-xl leading-relaxed text-text-primary">
                I'm a <span className="gradient-text font-semibold">First Class Honours graduate</span> in Software Engineering from the University of Westminster. I specialise in full-stack development, AI integration, and cloud-based deployment. My final year project involved building an AI-powered Fake News Verifier using GPT-4o and Firebase, deployed on AWS EC2 with CI/CD. I'm passionate about building software that's scalable, secure, and impactful.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Personal Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-medium min-w-20 text-text-secondary">Location:</span>
                  <span className="text-text-primary">London, UK</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20 text-text-secondary">Email:</span>
                  <a href="mailto:PreethamDevulapally@gmail.com" className="text-text-primary hover:text-primary transition-colors hover:underline">
                    PreethamDevulapally@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20 text-text-secondary">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/preethamdevulapally/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-primary transition-colors hover:underline"
                  >
                    preethamdevulapally
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20 text-text-secondary">Portfolio:</span>
                  <a
                    href="https://preetham-devulapally.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-primary transition-colors hover:underline"
                  >
                    preetham-devulapally.vercel.app
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Languages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-lg bg-background/30">
                  <span className="text-text-primary">English</span>
                  <span className="text-primary font-semibold">Fluent</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg bg-background/30">
                  <span className="text-text-primary">Telugu</span>
                  <span className="text-primary font-semibold">Native</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg bg-background/30">
                  <span className="text-text-primary">Hindi</span>
                  <span className="text-primary font-semibold">Conversational</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
