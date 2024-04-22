const home = require('../views/home');
const car = require('../views/car');
const { renderPage } = require('../views/car');
const addCar = require('../views/add-car');

const carInfo = { marka: 'Ford', model: 'Mustang' };

module.exports = {
    handleHome: (req, res) => {
        home(req, res);
    },
    handleAddCar: (req, res) => {
        // if (req.method == 'GET') {
        addCar(req, res);
        return;

    },
    handleCar: (req, res) => {
        const html = renderPage(JSON.stringify(carInfo));
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    },
    handlePageNotFound: (req, res) => {
        res.statusCode = 404;
        res.end('<h1>Strona nie została znaleziona</h1>');
    },
};
