import { db, analytics, collection, addDoc, serverTimestamp } from './firebaseConfig.js';

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

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
