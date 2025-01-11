const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Replace with your actual password
const PASSWORD = 'supernova';

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Validate password
app.post('/validate-password', (req, res) => {
    const enteredPassword = req.body.password;
    
    if (enteredPassword === PASSWORD) {
        // Redirect to the main page
        res.redirect('/mainweb.html');
    } else {
        res.send('<script>alert("Incorrect password!"); window.history.back();</script>');
    }
});

// Serve the protected page
app.get('/mainweb.html', (req, res) => {
    res.send('<h1>Welcome to the Main Web!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
