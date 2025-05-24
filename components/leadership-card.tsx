interface LeadershipCardProps {
  role: string
  organization: string
  period: string
  responsibilities: string[]
}

export default function LeadershipCard({ role, organization, period, responsibilities }: LeadershipCardProps) {
  return (
    <div className="bg-card-bg rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary border border-gray-700">
      <div className="p-4">
        <h4 className="font-semibold text-primary">{role}</h4>
        <p className="text-text-secondary text-sm mb-3">
          {organization} | {period}
        </p>

        <ul className="space-y-1">
          {responsibilities.map((resp, respIndex) => (
            <li key={respIndex} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-text-secondary text-sm">{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
