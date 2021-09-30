const express = require('express');

const Laptop = require('../models/laptop.model');

const router = express.Router();

router.post("", async (req, res) => {
    try {

        const laptop = await Laptop.create(req.body);

        return res.send(laptop);
    }
    catch (err) {

        return res.status(400).send(err.message);
    }
});

router.get("", async (req, res) => {
    try {
        const laptop = await Laptop.find().lean().exec();

        return res.send(laptop);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const laptop = await Laptop.findById(req.params.id).lean().exec();
        return res.send(laptop);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    const laptop = await Laptop.findByIdAndDelete(req.params.id);

    return res.send(laptop);
});

module.exports = router;