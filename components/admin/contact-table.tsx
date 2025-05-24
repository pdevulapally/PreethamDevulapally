"use client"
import { Eye } from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: {
    seconds: number
    nanoseconds: number
  }
}

interface ContactTableProps {
  contacts: Contact[]
  onSelectContact: (contact: Contact) => void
  selectedContactId: string | null
}

export function ContactTable({ contacts, onSelectContact, selectedContactId }: ContactTableProps) {
  // Format timestamp
  const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
    if (!timestamp) return "N/A"
    const date = new Date(timestamp.seconds * 1000)
    return date.toLocaleString()
  }

  return (
    <div className="bg-card-bg rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-background/50">
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                className={`hover:bg-background/30 transition-colors ${
                  selectedContactId === contact.id ? "bg-primary/10" : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{contact.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{contact.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{contact.subject || "N/A"}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  {formatDate(contact.timestamp)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  <button
                    onClick={() => onSelectContact(contact)}
                    className="flex items-center text-primary hover:text-accent transition-colors"
                  >
                    <Eye size={16} className="mr-1" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
