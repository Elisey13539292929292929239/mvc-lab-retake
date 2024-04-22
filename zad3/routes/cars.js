const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const fs = require('fs');


const cars = [];
let nextId = 1;

router.get('/car', (req, res) => {
    const html = fs.readFileSync('./views/car.html', 'utf8');
    const $ = cheerio.load(html);

    if (cars.length === 0) {
        $('.car').html('No cars has been found.');
    } else {
        const lastCar = cars[cars.length - 1];
        const carProperties = ['make', 'model', 'year', 'color'];
        let carInfo = '<h2>Last added car</h2>';

        carProperties.forEach(property => {
            carInfo += `<div><span class="bold">${property.toUpperCase()}:</span> ${lastCar[property]}</div>`;
        });

        $('.car').html(carInfo);
    }

    res.send($.html());
});

router.get('/car/add', (req, res) => {
    const html = fs.readFileSync('./views/add-car.html', 'utf8');
    res.send(html);
});

router.get('/car/list', (req, res) => {
    const html = fs.readFileSync('./views/cars-list.html', 'utf8');
    const $ = cheerio.load(html);

    if (cars.length === 0) {
        $('.cars').html('No cars has been found.');
    } else {
        let carsHtml = `<h2>Cars</h2><ul>`;
        cars.forEach(car => {
            carsHtml += `<li>
                <p><span class="bold">Make:</span> ${car.make}</p>
                <p><span class="bold">Model:</span> ${car.model}</p>
                <p><span class="bold">Year:</span> ${car.year}</p>
                <p><span class="bold">Color:</span> ${car.color}</p>
            </li>`;
        });
        carsHtml += `</ul>`;
        $('.cars').html(carsHtml);
    }

    res.send($.html());
});

router.post('/car/add', (req, res) => {
    const { make, model, year, color } = req.body;

    // Create a new car object with an id property
    const newCar = {
        id: nextId,
        make: make,
        model: model,
        year: year,
        color: color
    };

    // Add the new car to the array
    cars.push(newCar);

    // Increment the nextId
    nextId++;

    // Redirect to the /car route
    res.redirect('/car');
});

module.exports = router;
