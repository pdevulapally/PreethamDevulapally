import { NextResponse } from "next/server";
import * as admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Verify the user's credentials with Firebase Auth
    const auth = admin.auth();
    
    try {
      // Get user by email
      const userRecord = await auth.getUserByEmail(email);
      
      // Create a custom token for the user
      const customToken = await auth.createCustomToken(userRecord.uid);

      return NextResponse.json({ 
        success: true, 
        token: customToken 
      });

    } catch (firebaseError) {
      console.error("Firebase authentication error:", firebaseError);
      return NextResponse.json(
        { error: "Invalid credentials" }, 
        { status: 401 }
      );
    }

  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    );
  }
}
