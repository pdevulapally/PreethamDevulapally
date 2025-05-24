interface EducationCardProps {
  institution: string
  degree: string
  period: string
  location: string
  achievements: string[]
}

export default function EducationCard({ institution, degree, period, location, achievements }: EducationCardProps) {
  return (
    <div className="bg-card-bg rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary border border-gray-700">
      <div className="p-5">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
          <h4 className="text-lg font-semibold text-primary">{institution}</h4>
          <p className="text-text-secondary text-sm md:ml-4">{period}</p>
        </div>
        <p className="text-text-primary">{degree}</p>
        <p className="text-text-secondary text-sm mb-4">{location}</p>

        <h5 className="text-sm font-medium text-text-primary mb-2">Key Achievements:</h5>
        <ul className="space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-text-secondary">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
