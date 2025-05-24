import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    // This is a simplified version that doesn't rely on Firebase Admin
    // In a real application, you would fetch contacts from Firestore

    // For demo purposes, we'll just return an empty array
    // The client-side code will fetch contacts directly from Firebase
    return NextResponse.json({ contacts: [] })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
