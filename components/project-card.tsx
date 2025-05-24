import Image from "next/image"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  keyPoints: string[]
  liveLink?: string
  githubLink?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  keyPoints,
  liveLink,
  githubLink,
  featured = false,
}: ProjectCardProps) {
  return (
    <div className="bg-card-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-full flex flex-col">
      {featured && (
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2">
          <h4 className="text-sm font-medium text-text-primary mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start text-sm">
                <span className="text-primary mr-2">•</span>
                <span className="text-text-secondary">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4 mt-auto pt-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-accent transition-colors"
              aria-label={`View ${title} live`}
            >
              <ExternalLink size={18} className="mr-1" /> Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-accent transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <GitHub size={18} className="mr-1" /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
