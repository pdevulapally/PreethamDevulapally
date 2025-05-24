import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    // This is a simplified version that doesn't rely on Firebase Admin
    // In a real application, you would fetch the contact from Firestore

    // For demo purposes, we'll just return a not found response
    // The client-side code will fetch contacts directly from Firebase
    return NextResponse.json({ error: "Contact not found" }, { status: 404 })
  } catch (error) {
    console.error("Error fetching contact:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
