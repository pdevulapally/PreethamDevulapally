import { Award } from "lucide-react"
import RevealText from "./reveal-text"

export default function Education() {
  const achievements = [
    "First Grade in all completed years of Software Engineering degree",
    "Specialized in algorithms, data structures, and system design",
    "Outstanding Leadership – Student Union & Council (NewVIc Sixth Form)",
  ]

  return (
    <section id="education" className="py-16">
      <div className="container-custom">
        <RevealText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title mb-0">Education</h2>
            <p className="text-text-secondary mt-2 md:mt-0">Academic background</p>
          </div>
        </RevealText>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Education */}
          <RevealText className="lg:col-span-2">
            <div className="bg-card-bg rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary border border-gray-700 p-6">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">University of Westminster</h3>
                <p className="text-text-secondary text-sm md:ml-4">September 2022 – April 2025</p>
              </div>

              <p className="text-lg font-medium text-text-primary mb-1">BEng (Hons) Software Engineering</p>
              <p className="text-text-secondary mb-5">London, UK</p>

              <div className="space-y-6">
                {/* Key Coursework */}
                <div>
                  <h4 className="text-md font-semibold text-primary mb-3">Key Coursework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">Algorithms & Data Structures</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">Software Architecture & Design</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">Full-Stack Web Development</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">Mobile Application Development</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">Database Systems & SQL</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">AI & Machine Learning</span>
                    </div>
                  </div>
                </div>

                {/* Notable Projects */}
                <div>
                  <h4 className="text-md font-semibold text-primary mb-3">Notable Projects</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">
                        <span className="font-medium">AI Fake News Detection:</span> Developed using RAG models, Python,
                        and NewsAPI integration
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">
                        <span className="font-medium">Football Database App:</span> Built with Kotlin, Jetpack Compose,
                        and Room Database
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">
                        <span className="font-medium">University Inventory System:</span> Created using Django, Python,
                        and SQL
                      </span>
                    </div>
                  </div>
                </div>

                {/* Academic Achievements */}
                <div>
                  <h4 className="text-md font-semibold text-primary mb-3">Academic Achievements</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">Achieved First Grade in all completed years</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">
                        Consistently ranked in top performers for programming modules
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="text-text-secondary">
                        Recognized for excellence in practical project implementations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealText>

          {/* Previous Education & Achievements */}
          <div className="lg:col-span-1 space-y-6">
            {/* Previous Education Summary */}
            <RevealText delay={200}>
              <div className="bg-card-bg rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary border border-gray-700 p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">Previous Education</h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-text-primary">NewVIc Sixth Form College</p>
                    <p className="text-text-secondary text-sm">BTEC Level 3 in IT – DDD (2019-2022)</p>
                  </div>

                  <div>
                    <p className="font-medium text-text-primary">Eastlea Community School</p>
                    <p className="text-text-secondary text-sm">GCSEs including Computer Science (2015-2019)</p>
                  </div>
                </div>
              </div>
            </RevealText>

            {/* Key Achievements */}
            <RevealText delay={400}>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" /> Key Achievements
                </h3>
                <div className="bg-card-bg rounded-xl p-5 shadow-md border border-gray-700 hover:border-primary transition-all duration-300">
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span className="text-text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealText>
          </div>
        </div>

        {/* Hidden keywords for ATS systems */}
        <div className="sr-only">
          <h2>Education and Academic Background</h2>
          <p>
            Software Engineering, University of Westminster, First Grade, Algorithms, Data Structures, Web Development,
            Mobile Development, Database Design, SQL, Python, Java, Kotlin, Django, AI, Machine Learning, RAG, NewsAPI,
            Jetpack Compose, Room Database, BTEC, Computer Science, Academic Excellence, Programming, Software
            Architecture, System Design, Full-Stack Development
          </p>
        </div>
      </div>
    </section>
  )
}
