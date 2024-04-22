const express = require('express');
const app = express();
const PORT = 3000;

// Set up server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Set up static files directory
app.use(express.static('public'));

// Set up bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle routes from routes/cars.js
app.use('/', require('./routes/cars'));

// Handle routes from routes/home.js
app.use('/', require('./routes/home'));

// Handle 404 Not Found
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({ error: err.message });
});
