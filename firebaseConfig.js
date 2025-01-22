// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr6xcvSmCXqH2XD-PxZeuBF3dXkdJRdHM",
    authDomain: "my-portfolio-b204e.firebaseapp.com",
    projectId: "my-portfolio-b204e",
    storageBucket: "my-portfolio-b204e.firebasestorage.app",
    messagingSenderId: "609036685786",
    appId: "1:609036685786:web:9b809a3d7e47d05d9730e3",
    measurementId: "G-V0CB9N0QLB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics, collection, addDoc, serverTimestamp };
