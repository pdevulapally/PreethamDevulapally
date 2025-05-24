"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, type User } from "firebase/auth"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Eye, LogOut, Search, Inbox, Calendar, UserIcon, Mail, MessageSquare } from "lucide-react"

// Define the Contact type
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

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const router = useRouter()

  // Check authentication state
  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)

      if (currentUser) {
        fetchContacts()
      }
    })

    return () => unsubscribe()
  }, [])

  // Fetch contacts from Firebase
  const fetchContacts = async () => {
    try {
      const contactsQuery = query(collection(db, "contacts"), orderBy("timestamp", "desc"))
      const querySnapshot = await getDocs(contactsQuery)

      const contactsList: Contact[] = []
      querySnapshot.forEach((doc) => {
        contactsList.push({
          id: doc.id,
          ...doc.data(),
        } as Contact)
      })

      setContacts(contactsList)
    } catch (error) {
      console.error("Error fetching contacts:", error)
    }
  }

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setError("Invalid email or password")
      console.error("Login error:", error)
    }
  }

  // Handle logout
  const handleLogout = async () => {
    const auth = getAuth()
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Format timestamp
  const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
    if (!timestamp) return "N/A"
    const date = new Date(timestamp.seconds * 1000)
    return date.toLocaleString()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 space-y-8 bg-card-bg rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary">Admin Login</h1>
            <p className="mt-2 text-text-secondary">Sign in to access the admin dashboard</p>
          </div>

          {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-md">{error}</div>}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-background border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-background border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card-bg border-b border-gray-700 shadow-md">
        <div className="container-custom py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-text-secondary hidden md:inline-block">
              Logged in as <span className="text-text-primary">{user.email}</span>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center text-text-secondary hover:text-primary transition-colors"
            >
              <LogOut size={18} className="mr-1" /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container-custom py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Contact Submissions</h2>
            <p className="text-text-secondary">
              {contacts.length} {contacts.length === 1 ? "submission" : "submissions"} found
            </p>
          </div>

          {/* Search */}
          <div className="mt-4 md:mt-0 relative">
            <input
              type="text"
              placeholder="Search submissions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-text-secondary" />
          </div>
        </div>

        {/* Contact list and detail view */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact list */}
          <div className="lg:col-span-2">
            {filteredContacts.length > 0 ? (
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
                      {filteredContacts.map((contact) => (
                        <tr
                          key={contact.id}
                          className={`hover:bg-background/30 transition-colors ${
                            selectedContact?.id === contact.id ? "bg-primary/10" : ""
                          }`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                            {contact.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{contact.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                            {contact.subject || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                            {formatDate(contact.timestamp)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                            <button
                              onClick={() => setSelectedContact(contact)}
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
            ) : (
              <div className="bg-card-bg rounded-xl shadow-lg p-8 text-center">
                <Inbox className="mx-auto h-12 w-12 text-text-secondary" />
                <h3 className="mt-4 text-lg font-medium text-text-primary">No submissions found</h3>
                <p className="mt-2 text-text-secondary">
                  {searchTerm
                    ? "No submissions match your search criteria"
                    : "You haven't received any contact form submissions yet"}
                </p>
              </div>
            )}
          </div>

          {/* Contact detail */}
          <div className="lg:col-span-1">
            {selectedContact ? (
              <div className="bg-card-bg rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <UserIcon className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Name</p>
                      <p className="text-text-primary">{selectedContact.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Email</p>
                      <p className="text-text-primary">{selectedContact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Date</p>
                      <p className="text-text-primary">{formatDate(selectedContact.timestamp)}</p>
                    </div>
                  </div>

                  {selectedContact.subject && (
                    <div className="flex items-start">
                      <Inbox className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-text-secondary">Subject</p>
                        <p className="text-text-primary">{selectedContact.subject}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-text-secondary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Message</p>
                      <p className="text-text-primary whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-card-bg rounded-xl shadow-lg p-8 text-center">
                <Eye className="mx-auto h-12 w-12 text-text-secondary" />
                <h3 className="mt-4 text-lg font-medium text-text-primary">No contact selected</h3>
                <p className="mt-2 text-text-secondary">Select a contact to view details</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card-bg border-t border-gray-700 py-4 mt-8">
        <div className="container-custom text-center text-text-secondary text-sm">
          <p>Admin Dashboard | Preetham Devulapally Portfolio</p>
          <p className="mt-1">
            <span className="text-primary">Software Engineering</span> •<span className="mx-2">Next.js</span> •
            <span>Firebase</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
