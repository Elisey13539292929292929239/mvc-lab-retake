// app.js

const http = require('http');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');
const { getCars, getCarInformation, getCarAge } = require('./cars');

const server = http.createServer((req, res) => {
    const carsData = getCars();
    console.log(carsData);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(getHTMLDocumentStart());
    res.write('<h1>Car Information</h1>');

    // Example of using getCarInformation and getCarAge for car with id 1
    res.write(`<div>${getCarInformation(1)}</div>`);
    res.write(`<div>${getCarAge(1)}</div>`);

    res.write(getHTMLDocumentEnd());
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
