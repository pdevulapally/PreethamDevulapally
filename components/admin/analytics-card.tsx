import type React from "react"
interface AnalyticsCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function AnalyticsCard({ title, value, icon, description, trend }: AnalyticsCardProps) {
  return (
    <div className="bg-card-bg rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-text-secondary">{title}</h3>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">{icon}</div>
      </div>

      <div className="mt-4">
        <p className="text-3xl font-bold text-text-primary">{value}</p>

        {trend && (
          <div className="flex items-center mt-2">
            <span className={`text-sm ${trend.isPositive ? "text-green-500" : "text-red-500"}`}>
              {trend.isPositive ? "+" : "-"}
              {trend.value}%
            </span>
            {description && <span className="text-sm text-text-secondary ml-2">{description}</span>}
          </div>
        )}

        {!trend && description && <p className="text-sm text-text-secondary mt-2">{description}</p>}
      </div>
    </div>
  )
}
