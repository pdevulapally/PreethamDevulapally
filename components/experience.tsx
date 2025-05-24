import ExperienceCard from "@/components/experience-card"
import RevealText from "./reveal-text"

export default function Experience() {
  const experiences = [
    {
      id: "westminster-final",
      title: "Software Engineering (BEng) – Final Year",
      company: "University of Westminster",
      location: "London, UK",
      period: "September 2022 – 2025",
      achievements: [
        "Developing AI Fake News Detection website using RAG model and LLM",
        "Building responsive UI with HTML, CSS, and JavaScript",
        "Integrating with NewsAPI and Hugging Face datasets",
        "Implementing real-time data processing and analysis",
      ],
      technologies: ["HTML/CSS", "JavaScript", "Python", "AI/ML", "RAG", "NewsAPI", "Hugging Face"],
    },
    {
      id: "westminster-second",
      title: "Software Engineering (BEng) – Second Year: First Grade",
      company: "University of Westminster",
      location: "London, UK",
      period: "September 2023 – May 2024",
      achievements: [
        "Developed football database mobile app with Kotlin and Jetpack Compose",
        "Created Ice Puzzle Solver using Java and BFS algorithm",
        "Designed database system for vacation management with ERD and SQL",
        "Built university inventory system with Django and SQL in a team environment",
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Java", "Algorithms", "Django", "Python", "SQL", "Database Design"],
    },
    {
      id: "westminster-first",
      title: "Software Engineering (BEng) – First Year: First Grade",
      company: "University of Westminster",
      location: "London, UK",
      period: "September 2022 – May 2023",
      achievements: [
        "Created 'Dream Destinations' web application with HTML, CSS, and JavaScript",
        "Developed student grading system in Python with logical algorithms",
        "Built theatre booking system in Java with OOP principles",
        "Achieved First Grade across all modules",
      ],
      technologies: ["HTML/CSS", "JavaScript", "Python", "Java", "OOP", "Web Development"],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-background bg-opacity-50">
      <div className="container-custom">
        <RevealText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title mb-0">Experience</h2>
            <p className="text-text-secondary mt-2 md:mt-0">Academic and project experience</p>
          </div>
        </RevealText>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <RevealText key={exp.id} delay={index * 200}>
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                achievements={exp.achievements}
                technologies={exp.technologies}
              />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  )
}
