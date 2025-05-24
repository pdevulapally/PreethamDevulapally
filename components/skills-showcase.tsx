"use client"

import type React from "react"

import { useState } from "react"
import { Code, Database, Layout, Server, Cpu, Users, Brain, Terminal } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: {
    name: string
    level: number
    keywords: string[]
  }[]
}

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("Software Engineering")

  const skillCategories: SkillCategory[] = [
    {
      name: "Software Engineering",
      icon: <Code className="h-5 w-5" />,
      skills: [
        {
          name: "Algorithms & Data Structures",
          level: 90,
          keywords: ["Algorithms", "Data Structures", "Problem-solving", "BFS", "Time Complexity", "Space Complexity"],
        },
        {
          name: "Object-Oriented Programming",
          level: 95,
          keywords: ["OOP", "Java", "Python", "Kotlin", "Inheritance", "Polymorphism", "Encapsulation"],
        },
        {
          name: "System Design",
          level: 85,
          keywords: ["Architecture", "Scalability", "Performance", "Reliability", "Maintainability"],
        },
        {
          name: "Software Development Lifecycle",
          level: 90,
          keywords: ["Agile", "Scrum", "Git", "CI/CD", "Testing", "Documentation", "Requirements Analysis"],
        },
      ],
    },
    {
      name: "Front-End Development",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        {
          name: "React & Next.js",
          level: 95,
          keywords: ["React.js", "Next.js", "Hooks", "Context API", "Server Components", "Client Components"],
        },
        {
          name: "JavaScript & TypeScript",
          level: 90,
          keywords: ["JavaScript", "TypeScript", "ES6+", "Async/Await", "Promises", "DOM Manipulation"],
        },
        {
          name: "UI/UX Design",
          level: 85,
          keywords: ["Responsive Design", "Tailwind CSS", "CSS", "HTML", "Accessibility", "User Experience"],
        },
        {
          name: "State Management",
          level: 80,
          keywords: ["Redux", "Context API", "Zustand", "React Query", "State Machines"],
        },
      ],
    },
    {
      name: "Back-End Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        {
          name: "API Development",
          level: 90,
          keywords: ["REST API", "GraphQL", "API Integration", "Microservices", "Serverless Functions"],
        },
        {
          name: "Server Frameworks",
          level: 85,
          keywords: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot"],
        },
        {
          name: "Authentication & Security",
          level: 80,
          keywords: ["JWT", "OAuth", "Firebase Auth", "Encryption", "HTTPS", "Security Best Practices"],
        },
        {
          name: "Server-Side Rendering",
          level: 85,
          keywords: ["Next.js", "SSR", "SSG", "ISR", "Edge Functions", "Middleware"],
        },
      ],
    },
    {
      name: "Database Management",
      icon: <Database className="h-5 w-5" />,
      skills: [
        {
          name: "SQL Databases",
          level: 85,
          keywords: ["SQL", "PostgreSQL", "MySQL", "SQLite", "Database Design", "Normalization"],
        },
        {
          name: "NoSQL Databases",
          level: 90,
          keywords: ["Firebase", "MongoDB", "DynamoDB", "Document Databases", "Key-Value Stores"],
        },
        {
          name: "Data Modeling",
          level: 85,
          keywords: ["ERD", "Schema Design", "Relationships", "Indexing", "Query Optimization"],
        },
        {
          name: "ORM & Query Building",
          level: 80,
          keywords: ["Prisma", "Sequelize", "Django ORM", "JDBC", "Raw Queries"],
        },
      ],
    },
    {
      name: "DevOps & Deployment",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        {
          name: "Cloud Services",
          level: 85,
          keywords: ["AWS", "Vercel", "Firebase", "Netlify", "EC2", "S3", "Lambda"],
        },
        {
          name: "CI/CD Pipelines",
          level: 80,
          keywords: ["GitHub Actions", "Jenkins", "Continuous Integration", "Continuous Deployment", "Automation"],
        },
        {
          name: "Containerization",
          level: 75,
          keywords: ["Docker", "Kubernetes", "Container Orchestration", "Microservices"],
        },
        {
          name: "Infrastructure as Code",
          level: 70,
          keywords: ["Terraform", "CloudFormation", "Infrastructure Automation", "Configuration Management"],
        },
      ],
    },
    {
      name: "Mobile Development",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        {
          name: "Android Development",
          level: 85,
          keywords: ["Kotlin", "Java", "Android Studio", "Jetpack Compose", "Room Database", "Lifecycle"],
        },
        {
          name: "Cross-Platform Development",
          level: 75,
          keywords: ["React Native", "Flutter", "Mobile UI/UX", "Native Modules"],
        },
        {
          name: "Mobile Architecture",
          level: 80,
          keywords: ["MVVM", "Clean Architecture", "Repository Pattern", "Dependency Injection"],
        },
        {
          name: "Mobile APIs & SDKs",
          level: 75,
          keywords: ["RESTful APIs", "GraphQL", "SDK Integration", "Third-party Libraries"],
        },
      ],
    },
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        {
          name: "AI Integration",
          level: 80,
          keywords: ["AI", "Machine Learning", "LLMs", "RAG", "Hugging Face", "OpenAI"],
        },
        {
          name: "Data Processing",
          level: 75,
          keywords: ["Data Analysis", "Data Cleaning", "Feature Engineering", "Vector Databases"],
        },
        {
          name: "Natural Language Processing",
          level: 70,
          keywords: ["NLP", "Text Classification", "Sentiment Analysis", "Named Entity Recognition"],
        },
        {
          name: "AI Application Development",
          level: 80,
          keywords: ["AI-powered Applications", "Fake News Detection", "Content Generation", "Recommendation Systems"],
        },
      ],
    },
    {
      name: "Collaboration & Teamwork",
      icon: <Users className="h-5 w-5" />,
      skills: [
        {
          name: "Agile Methodologies",
          level: 90,
          keywords: ["Agile", "Scrum", "Kanban", "Sprint Planning", "Retrospectives", "User Stories"],
        },
        {
          name: "Version Control",
          level: 95,
          keywords: ["Git", "GitHub", "Branching Strategies", "Pull Requests", "Code Reviews"],
        },
        {
          name: "Project Management",
          level: 85,
          keywords: ["Trello", "Jira", "Task Tracking", "Timeline Management", "Resource Allocation"],
        },
        {
          name: "Technical Communication",
          level: 90,
          keywords: ["Documentation", "Technical Writing", "API Docs", "Knowledge Sharing", "Presentations"],
        },
      ],
    },
  ]

  const activeSkills = skillCategories.find((category) => category.name === activeCategory)?.skills || []

  return (
    <section id="expertise" className="py-20 bg-background/50">
      <div className="container-custom">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="text-lg text-text-secondary max-w-3xl mb-10">
          As a Software Engineer with expertise across multiple domains, I bring a comprehensive skill set to solve
          complex technical challenges and deliver high-quality solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <div className="bg-card-bg rounded-xl p-4">
              <h3 className="text-xl font-semibold mb-4 text-primary">Domains</h3>
              <ul className="space-y-2">
                {skillCategories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                        activeCategory === category.name
                          ? "bg-primary/10 text-primary"
                          : "text-text-secondary hover:bg-card-bg hover:text-text-primary"
                      }`}
                    >
                      <span className="mr-3">{category.icon}</span>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-3">
            <div className="bg-card-bg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                {skillCategories.find((category) => category.name === activeCategory)?.icon}
                <span className="ml-2">{activeCategory}</span>
              </h3>

              <div className="space-y-8">
                {activeSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-text-primary">{skill.name}</h4>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%`, transition: "width 0.5s ease-in-out" }}
                      ></div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skill.keywords.map((keyword) => (
                        <span key={keyword} className="skill-badge text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEO-optimized hidden content for ATS systems */}
        <div className="sr-only">
          <h2>Technical Skills and Expertise</h2>
          <p>
            Software Engineering: Next.js, React, JavaScript, TypeScript, UI/UX, API Integration, Database Management,
            Responsive Design, Software Engineering, AI, Machine Learning, Python, Java, Kotlin, Django, Agile,
            Teamwork, Problem-solving, Algorithms, Data Structures, Full-Stack Development, Front-End Development,
            Back-End Development, Mobile App Development, Web Development, Database Design, SQL, HTML, CSS, DevOps,
            CI/CD, Docker, Kubernetes, AWS, Vercel, Firebase, Git, GitHub, REST API, GraphQL, Node.js, Express.js,
            MongoDB, PostgreSQL, Authentication, Security, Testing, Microservices, Serverless, Cloud Computing, System
            Design, Architecture, Performance Optimization, Scalability, Maintainability, Reliability, Documentation,
            Technical Communication, Project Management, Trello, Jira, Scrum, Kanban, Sprint Planning, Code Reviews,
            Pull Requests, Continuous Integration, Continuous Deployment, Infrastructure as Code, Configuration
            Management, Monitoring, Logging, Debugging, Troubleshooting, Problem-solving, Critical Thinking, Analytical
            Skills, Attention to Detail, Time Management, Organization, Leadership, Mentoring, Collaboration,
            Cross-functional Teams, Remote Work, Agile Development, Waterfall, SDLC, Requirements Analysis, Technical
            Specifications, User Stories, Acceptance Criteria, Quality Assurance, User Acceptance Testing, Integration
            Testing, Unit Testing, End-to-End Testing, Regression Testing, Performance Testing, Load Testing, Stress
            Testing, Security Testing, Penetration Testing, Vulnerability Assessment, Code Quality, Clean Code, SOLID
            Principles, Design Patterns, Refactoring, Code Optimization, Technical Debt, Legacy Code, Maintenance,
            Support, Documentation, Knowledge Transfer, Training, Onboarding, Client Communication, Stakeholder
            Management, Product Management, Product Development, Product Strategy, Product Roadmap, Product Backlog,
            Feature Prioritization, Feature Development, Feature Testing, Feature Deployment, Feature Maintenance,
            Feature Support, Feature Documentation, Feature Training, Feature Onboarding, Feature Knowledge Transfer,
            Feature Client Communication, Feature Stakeholder Management.
          </p>
        </div>
      </div>
    </section>
  )
}
