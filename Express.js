const express = require('express');
const app = express();

// Define a route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Write your full name' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
