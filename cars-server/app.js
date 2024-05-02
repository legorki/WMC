
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cars = ["Puch", "Steyr", "Gräf-Stift"];

app.get('/', (req, res) => res.send(cars));

app.post('/', (req, res) => {
    const selectedCars = req.body;
    console.log('Received cars:', selectedCars);
    res.json({ message: 'Selected cars received.' });
});

app.listen(3000, () => console.log('Example app listening on port 3000'));
