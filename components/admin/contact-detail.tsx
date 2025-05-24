import { UserIcon, Mail, Calendar, Inbox, MessageSquare } from "lucide-react"

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

interface ContactDetailProps {
  contact: Contact
}

export function ContactDetail({ contact }: ContactDetailProps) {
  // Format timestamp
  const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
    if (!timestamp) return "N/A"
    const date = new Date(timestamp.seconds * 1000)
    return date.toLocaleString()
  }

  return (
    <div className="bg-card-bg rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-primary mb-4">Contact Details</h3>

      <div className="space-y-4">
        <div className="flex items-start">
          <UserIcon className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
          <div>
            <p className="text-sm text-text-secondary">Name</p>
            <p className="text-text-primary">{contact.name}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
          <div>
            <p className="text-sm text-text-secondary">Email</p>
            <p className="text-text-primary">{contact.email}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Calendar className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
          <div>
            <p className="text-sm text-text-secondary">Date</p>
            <p className="text-text-primary">{formatDate(contact.timestamp)}</p>
          </div>
        </div>

        {contact.subject && (
          <div className="flex items-start">
            <Inbox className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
            <div>
              <p className="text-sm text-text-secondary">Subject</p>
              <p className="text-text-primary">{contact.subject}</p>
            </div>
          </div>
        )}

        <div className="flex items-start">
          <MessageSquare className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
          <div>
            <p className="text-sm text-text-secondary">Message</p>
            <p className="text-text-primary whitespace-pre-wrap">{contact.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
