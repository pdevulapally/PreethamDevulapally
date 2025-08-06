import ProjectCard from "@/components/project-card"
import { ChevronRight } from "lucide-react"
import RevealText from "./reveal-text"

export default function Projects() {
  const projects = [
    {
      id: "ai-news-verifier",
      title: "🧠 AI News Verifier – Final Year Project (2024–2025)",
      description: "Real-time news credibility checker with AI explanation",
      image: "/Images/fakenewsdetectionhomepage.png",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Firebase (Auth + Firestore)", "OpenAI GPT-4o API", "AWS EC2", "GitHub Actions"],
      keyPoints: [
        "Real-time news credibility checker with AI explanation",
        "Full-stack app with secure user auth",
        "CI/CD pipeline with GitHub Actions and AWS EC2 deployment"
      ],
      liveLink: "https://fakeverifier.co.uk/",
      githubLink: "https://github.com/pdevulapally/Preetham-Project",
      featured: true,
    },
    {
      id: "inventory-management",
      title: "📦 Inventory Management System – University Project (2023)",
      description: "Stock management system with dynamic UI",
      image: "/Images/Item List-2.jpg",
      technologies: ["Django (Python)", "PHP", "HTML/CSS/JS", "MySQL"],
      keyPoints: [
        "Stock management system with dynamic UI",
        "MySQL database design and Django backend",
        "Agile sprints and GitHub branching"
      ],
      githubLink: "https://github.com/pdevulapally/Software-Group-Project",
      featured: true,
    },
    {
      id: "university-inventory",
      title: "📦 University Inventory System",
      description: "Collaborative inventory management system built with Django and SQL",
      image: "/Images/Item List-2.jpg",
      technologies: ["Django", "Python", "SQL", "HTML/CSS", "JavaScript"],
      keyPoints: [
        "Led backend development in a team environment",
        "Designed database schema for optimal data organization",
        "Implemented CRUD operations with proper validation",
        "Used Trello for agile project management"
      ],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: "football-database",
      title: "⚽ Football Database App",
      description: "Android application for browsing football leagues and clubs with local storage",
      image: "/Images/FootballDBapp.png",
      technologies: ["Kotlin", "Jetpack Compose", "Room DB", "Android", "REST API"],
      keyPoints: [
        "Developed with Kotlin and Jetpack Compose for modern UI",
        "Implemented Room database for offline data persistence",
        "Integrated TheSportsDB API for comprehensive football data",
        "Created intuitive search and filtering functionality"
      ],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-16">
      <div className="container-custom">
        <RevealText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title mb-0">Projects</h2>
            <a
              href="https://github.com/pdevulapally"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors flex items-center mt-2 md:mt-0"
            >
              View All on GitHub <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </RevealText>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <RevealText key={project.id} delay={index * 200}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                keyPoints={project.keyPoints}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                featured={project.featured}
              />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  )
}
