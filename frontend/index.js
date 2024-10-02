const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

const PORT = 3000;

// Serve the static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// API route to get message from the backend
app.get('/api/message', async (req, res) => {
    try {
        const response = await fetch('http://backend-service:5000/api/message');
        const data = await response.json();
        res.json({ message: data.message });
    } catch (error) {
        console.error('Error fetching message from backend:', error);
        res.status(500).json({ error: 'Unable to fetch message from backend' });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend is running on http://localhost:${PORT}`);
});
