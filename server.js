const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Serve the index.html file when accessing the root URL ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files (like mainweb.html, images, etc.) from the 'main' directory
app.use(express.static(path.join(__dirname, 'main')));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle password validation
app.post('/validate-password', (req, res) => {
    const enteredPassword = req.body.password;

    const correctPassword = 'supernova'; // Replace this with your actual password

    if (enteredPassword === correctPassword) {
        // Redirect to the main page upon successful password entry
        res.redirect('/main/mainweb.html');
    } else {
        // If password is incorrect, reload the page with an error message
        res.send('Incorrect password. Please try again.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
