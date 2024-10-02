const apiUrl = 'http://backend-service:5000/api/message';

async function fetchBackendMessage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('message').textContent = `Backend says: ${data.message}`;
    } catch (error) {
        console.error('Error fetching message from backend:', error);
        document.getElementById('message').textContent = 'Error fetching message from backend';
    }
}

// Call the function when the page loads
window.onload = fetchBackendMessage;
