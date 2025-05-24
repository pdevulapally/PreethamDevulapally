export default function About() {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg">
              I'm a Software Engineer with experience in developing innovative applications across multiple platforms.
              My expertise spans frontend and backend development, mobile applications, and AI-powered solutions, with a
              strong foundation in Java, Python, Kotlin, JavaScript, and various frameworks.
            </p>

            <p className="text-lg">
              With strong problem-solving skills and a solid understanding of algorithms and data structures, I've
              developed both Android and web applications with robust data handling capabilities. I'm proficient in
              integrating APIs and working with real-time data sources such as NewsAPI, Hugging Face datasets, and
              external databases, ensuring efficient and scalable solutions.
            </p>

            <p className="text-lg">
              I've designed and implemented various software systems, including an AI Fake News Detection application
              using Retrieval-Augmented Generation (RAG), a University Inventory Management System using Django, and a
              Football Database mobile application with Kotlin and Jetpack Compose.
            </p>

            <p className="text-lg">
              I'm currently pursuing a BEng (Hons) in Software Engineering at the University of Westminster, where I've
              consistently achieved First Grade results while developing practical software engineering skills through
              project-based learning.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Personal Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium min-w-24">Location:</span>
                  <span>London, UK</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-24">Email:</span>
                  <a href="mailto:PreethamDevulapally@gmail.com" className="hover:text-primary transition-colors">
                    PreethamDevulapally@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-24">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/preethamdevulapally/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    preethamdevulapally
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-24">Portfolio:</span>
                  <a
                    href="https://preetham-devulapally.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    preetham-devulapally.vercel.app
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>English</span>
                  <span className="text-primary">Fluent</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Telugu</span>
                  <span className="text-primary">Native</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Hindi</span>
                  <span className="text-primary">Conversational</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
