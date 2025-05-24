import { Code, Database, Layout, Server, Cpu, Brain, Terminal, Users } from "lucide-react"
import RevealText from "./reveal-text"

export default function Skills() {
  const skillCategories = [
    {
      id: "software",
      name: "Software Engineering",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "Algorithms & Data Structures",
        "Object-Oriented Programming",
        "System Design & Architecture",
        "Problem Solving & Critical Thinking",
        "Software Development Lifecycle",
        "Clean Code & Best Practices",
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        "React.js & Next.js",
        "JavaScript & TypeScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Principles",
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        "Node.js & Express",
        "Django (Python)",
        "RESTful APIs",
        "GraphQL",
        "Authentication & Security",
        "Serverless Functions",
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL & PostgreSQL", "NoSQL & Firebase", "Database Design", "Data Modeling", "Query Optimization", "ORM"],
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Android Development",
        "Kotlin & Java",
        "Jetpack Compose",
        "Room Database",
        "API Integration",
        "Mobile UI/UX",
      ],
    },
    {
      id: "ai",
      name: "AI & ML",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        "AI Integration",
        "Retrieval-Augmented Generation",
        "Large Language Models",
        "Hugging Face",
        "Vector Databases",
        "Natural Language Processing",
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        "AWS & Cloud Services",
        "CI/CD Pipelines",
        "Docker & Containerization",
        "Version Control (Git)",
        "Deployment Automation",
        "Infrastructure as Code",
      ],
    },
    {
      id: "soft",
      name: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      skills: [
        "Team Collaboration",
        "Agile Methodologies",
        "Technical Communication",
        "Project Management",
        "Time Management",
        "Leadership",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-background bg-opacity-50">
      <div className="container-custom">
        <RevealText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title mb-0">Technical Skills</h2>
            <p className="text-text-secondary mt-2 md:mt-0">Expertise across multiple domains</p>
          </div>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <RevealText key={category.id} delay={index * 100}>
              <div className="skill-card">
                <div className="flex items-center mb-3">
                  <div className="skill-icon">{category.icon}</div>
                  <h3 className="font-semibold text-primary">{category.name}</h3>
                </div>

                <div className="mt-4 space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-text-secondary text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  )
}
