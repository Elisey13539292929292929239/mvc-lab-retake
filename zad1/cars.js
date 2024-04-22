// cars.js

const cars = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, color: 'red' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, color: 'blue' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2018, color: 'black' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2021, color: 'white' },
    { id: 5, make: 'Chevrolet', model: 'Camaro', year: 2017, color: 'yellow' }
];

function getCars() {
    return cars;
}

function getCarInformation(id) {
    const car = cars.find(c => c.id === id);
    return car ? `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}` : 'Car does not exist';
}

function getCarAge(id) {
    const car = cars.find(c => c.id === id);
    if (car) {
        const age = new Date().getFullYear() - car.year;
        return `Age: ${age} year(s) old`;
    }
    return 'Cars does not exist';
}

module.exports = { getCars, getCarInformation, getCarAge };