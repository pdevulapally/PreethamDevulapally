interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
  technologies: string[]
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="bg-card-bg rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary border border-gray-700">
      <div className="p-5">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="text-lg font-medium">{company}</p>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <p className="text-text-secondary">{location}</p>
            <p className="text-text-secondary">{period}</p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-text-primary mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-text-secondary">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-text-primary mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
