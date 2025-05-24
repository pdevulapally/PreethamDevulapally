"use client"

import { LogOut } from "lucide-react"
import type { User } from "firebase/auth"

interface DashboardHeaderProps {
  user: User | null
  onLogout: () => void
}

export function DashboardHeader({ user, onLogout }: DashboardHeaderProps) {
  return (
    <header className="bg-card-bg border-b border-gray-700 shadow-md">
      <div className="container-custom py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-text-secondary hidden md:inline-block">
            Logged in as <span className="text-text-primary">{user?.email}</span>
          </span>
          <button
            onClick={onLogout}
            className="flex items-center text-text-secondary hover:text-primary transition-colors"
          >
            <LogOut size={18} className="mr-1" /> Logout
          </button>
        </div>
      </div>
    </header>
  )
}
