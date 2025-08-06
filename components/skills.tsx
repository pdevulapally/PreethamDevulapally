import { Code, Database, Layout, Server, Cpu, Brain, Terminal, Users } from "lucide-react"
import RevealText from "./reveal-text"

export default function Skills() {
  const skillCategories = [
    {
      id: "languages",
      name: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "Python",
        "Java", 
        "JavaScript",
        "Kotlin",
        "HTML",
        "CSS"
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        "React",
        "HTML5",
        "CSS3",
        "JavaScript"
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        "Node.js",
        "Express.js",
        "Django (Python)",
        "PHP"
      ],
    },
    {
      id: "database",
      name: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        "Firebase (Firestore)",
        "MySQL"
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        "AWS EC2",
        "GitHub Actions (CI/CD)"
      ],
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Git",
        "GitHub",
        "Trello",
        "VS Code",
        "XAMPP"
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-secondary/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container-custom relative z-10">
        <RevealText>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="section-title mb-4">Technical Skills</h2>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
              Mastery across multiple domains with modern technologies and frameworks
            </p>
          </div>
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {skillCategories.map((category, index) => (
            <RevealText key={category.id} delay={index * 150}>
              <div className="skill-card group relative overflow-hidden h-full flex flex-col">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse"></div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-8">
                    <div className="skill-icon group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-primary text-xl ml-4 group-hover:text-accent transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-4 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill} className="flex items-center group/item">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-4 group-hover/item:scale-150 transition-all duration-300 shadow-lg flex-shrink-0"></div>
                        <span className="text-text-secondary text-base font-medium group-hover/item:text-text-primary group-hover/item:font-semibold transition-all duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealText>
          ))}
        </div>

      </div>
    </section>
  )
}
