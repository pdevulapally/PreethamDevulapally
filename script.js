// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

//firebase config
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

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';
    
    try {
        await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: serverTimestamp()
        });
        

        showNotification('Message sent successfully!', 'success');
        

        document.getElementById('contactForm').reset();
        
    } catch (error) {
        console.error("Error sending message: ", error);
        showNotification('Failed to send message. Please try again.', 'error');
    }
    
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
});

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    

    setTimeout(() => {
        notification.remove();
    }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});
