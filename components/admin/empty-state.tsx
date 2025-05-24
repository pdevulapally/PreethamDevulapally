import { Inbox, Eye } from "lucide-react"

interface EmptyStateProps {
  type: "contacts" | "detail"
  searchTerm?: string
}

export function EmptyState({ type, searchTerm }: EmptyStateProps) {
  if (type === "contacts") {
    return (
      <div className="bg-card-bg rounded-xl shadow-lg p-8 text-center">
        <Inbox className="mx-auto h-12 w-12 text-text-secondary" />
        <h3 className="mt-4 text-lg font-medium text-text-primary">No submissions found</h3>
        <p className="mt-2 text-text-secondary">
          {searchTerm
            ? "No submissions match your search criteria"
            : "You haven't received any contact form submissions yet"}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-card-bg rounded-xl shadow-lg p-8 text-center">
      <Eye className="mx-auto h-12 w-12 text-text-secondary" />
      <h3 className="mt-4 text-lg font-medium text-text-primary">No contact selected</h3>
      <p className="mt-2 text-text-secondary">Select a contact to view details</p>
    </div>
  )
}
