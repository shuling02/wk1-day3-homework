
const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home page route
app.get('/', function(req, res) {
    res.render('content');
});

// Start the server
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});
