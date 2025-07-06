import ProjectCard from "@/components/project-card"
import { ChevronRight } from "lucide-react"
import RevealText from "./reveal-text"

export default function Projects() {
  const projects = [
    {
      id: "fake-news",
      title: "AI Fake News Detection",
      description: "Web application that detects and explains fake news using AI and RAG models",
      image: "/Images/fakenewsdetectionhomepage.png",
      technologies: ["HTML/CSS", "JavaScript", "Python", "AI/ML", "RAG", "NewsAPI"],
      keyPoints: [
        "Implemented Retrieval-Augmented Generation (RAG) model for accurate fake news detection",
        "Integrated with NewsAPI for real-time data processing",
        "Built responsive UI with modern design principles",
        "Developed custom algorithms for keyword analysis",
      ],
      liveLink: "https://fakeverifier.co.uk/",
      githubLink: "https://github.com/pdevulapally/Preetham-Project",
      featured: true,
    },
    {
      id: "football",
      title: "Football Database App",
      description: "Android application for browsing football leagues and clubs with local storage",
      image: "/Images/FootballDBapp.png",
      technologies: ["Kotlin", "Jetpack Compose", "Room DB", "Android", "REST API"],
      keyPoints: [
        "Developed with Kotlin and Jetpack Compose for modern UI",
        "Implemented Room database for offline data persistence",
        "Integrated TheSportsDB API for comprehensive football data",
        "Created intuitive search and filtering functionality",
      ],
      liveLink: "https://drive.google.com/file/d/10tqvpyZddqQX39TG9JUV612CBTCsLVmW/view?usp=sharing",
      featured: true,
    },
    {
      id: "inventory",
      title: "University Inventory System",
      description: "Collaborative inventory management system built with Django and SQL",
      image: "/Images/Item List-2.jpg",
      technologies: ["Django", "Python", "SQL", "HTML/CSS", "JavaScript"],
      keyPoints: [
        "Led backend development in a team environment",
        "Designed database schema for optimal data organization",
        "Implemented CRUD operations with proper validation",
        "Used Trello for agile project management",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: "puzzle",
      title: "Ice Puzzle Solver",
      description: "Java application implementing BFS algorithm for pathfinding in a 2D grid",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Java", "Algorithms", "Data Structures", "BFS"],
      keyPoints: [
        "Implemented breadth-first search algorithm for optimal pathfinding",
        "Created efficient data structures for grid representation",
        "Developed dynamic parser for map input files",
        "Achieved O(V+E) time complexity for performance",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: "vacation",
      title: "Vacation Management System",
      description: "Database design project for comprehensive vacation booking and management",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Database Design", "SQL", "ERD", "Data Modeling"],
      keyPoints: [
        "Created Enhanced Entity-Relationship Diagram (EERD)",
        "Developed comprehensive data dictionary",
        "Implemented normalization for data integrity",
        "Designed business queries for practical use cases",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: "theatre",
      title: "Theatre Booking System",
      description: "Java application for managing theatre bookings with advanced features",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Java", "OOP", "Data Structures", "Exception Handling"],
      keyPoints: [
        "Implemented object-oriented design principles",
        "Created robust exception handling for error management",
        "Developed sorting algorithms for price-based ticket display",
        "Built intuitive user interface for booking management",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <RevealText key={project.id} delay={index * 150}>
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
