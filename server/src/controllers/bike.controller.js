const express = require('express');

const Bike = require('../models/Bike.model');

const router = express.Router();

router.post("", async (req, res) => {
    try {

        const bike = await Bike.create(req.body);

        return res.send(bike);
    }
    catch (err) {

        return res.status(400).send(err.message);
    }
});

router.get("", async (req, res) => {
    try {
        const bike = await Bike.find().lean().exec();

        return res.send(bike);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const bike = await Bike.findById(req.params.id).lean().exec();
        return res.send(bike);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    const bike = await Bike.findByIdAndDelete(req.params.id);

    return res.send(bike);
});

module.exports = router;