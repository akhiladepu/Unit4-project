const express = require('express');

const Mobile = require('../models/mobile.model');

const router = express.Router();

router.post("", async (req, res) => {
    try {

        const mobile = await Mobile.create(req.body);

        return res.send(mobile);
    }
    catch (err) {

        return res.status(400).send(err.message);
    }
});

router.get("", async (req, res) => {
    try {
        const mobile = await Mobile.find().lean().exec();

        return res.send(mobile);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const mobile = await Mobile.findById(req.params.id).lean().exec();
        console.log('mobile:', mobile)
        return res.send(mobile);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    const mobile = await Mobile.findByIdAndDelete(req.params.id);

    return res.send(mobile);
});

module.exports = router;