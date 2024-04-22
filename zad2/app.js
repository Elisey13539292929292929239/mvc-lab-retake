const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            handleHome(req, res);
            break;
        case '/add-car':
            handleAddCar(req, res);
            break;
        case '/car':
            handleCar(req, res);
            break;
        default:
            handlePageNotFound(req, res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});

const handleHome = require('./routes/index').handleHome;
const handleAddCar = require('./routes/index').handleAddCar;
const handleCar = require('./routes/index').handleCar;
const handlePageNotFound = require('./routes/index').handlePageNotFound;
