const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint
app.post('/receive-log', (req, res) => {
    // Log the received data
    console.log('Received POST request with data:');
    console.log(JSON.stringify(req.body, null, 2));
    
    // Log headers
    console.log('Headers:');
    console.log(JSON.stringify(req.headers, null, 2));

    // Send response
    res.status(200).json({
        message: 'Data received successfully',
        receivedData: req.body
    });
});

// GET endpoint for testing
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`POST endpoint available at http://localhost:${port}/receive-log`);
});
