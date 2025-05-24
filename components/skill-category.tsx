"use client"

import type React from "react"

interface SkillCategoryProps {
  name: string
  icon: React.ReactNode
  skills: string[]
  isActive: boolean
  onClick: () => void
}

export default function SkillCategory({ name, icon, skills, isActive, onClick }: SkillCategoryProps) {
  return (
    <div
      className={`bg-card-bg rounded-xl p-5 shadow-md cursor-pointer transition-all duration-300 border ${
        isActive ? "border-primary shadow-lg" : "border-gray-700 hover:border-primary/50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
            isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {icon}
        </div>
        <h3 className={`font-semibold ${isActive ? "text-primary" : "text-text-primary"}`}>{name}</h3>
      </div>

      {isActive && (
        <div className="mt-4 grid grid-cols-1 gap-2">
          {skills.map((skill) => (
            <div key={skill} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-text-secondary text-sm">{skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
