const express = require('express');

const Car = require('../models/car.model');

const router = express.Router();

router.post("", async (req, res) => {
    try {

        const car = await Car.create(req.body);

        return res.send(car);
    }
    catch (err) {

        return res.status(400).send(err.message);
    }
});

router.get("", async (req, res) => {
    try {
        const car = await Car.find().lean().exec();

        return res.send(car);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const car = await Car.findById(req.params.id).lean().exec();
        console.log('car:', car)
        return res.send(car);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    const car = await Car.findByIdAndDelete(req.params.id);

    return res.send(car);
});

module.exports = router;