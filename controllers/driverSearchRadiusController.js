const driver_search_radiusModel = require("../models/driver_search_radius");
const mongoose = require("mongoose");

exports.getAlldriver_search_radius = (req, res) => {
    driver_search_radiusModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult[0])
        } catch (err) {
            res.json(err)
        }
    })
}

exports.deletedriver_search_radius = (req, res) => {
    const driver_search_radiusId = req.params.driver_search_radiusId;
    driver_search_radiusModel.deleteOne({ _id: driver_search_radiusId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createdriver_search_radius = async (req, res) => {
    const driver_search_radius = new driver_search_radiusModel({
        _id: mongoose.Types.ObjectId(),
        radius: req.body.radius,
    });
    try {
        const savedAdmin = await driver_search_radius.save();
        res.json({
            data: savedAdmin,
            message: "driver_search_radius Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updatedriver_search_radius = async (req, res) => {
    const updateData = {
        radius: req.body.radius,
    }
    const options = {
        new: true
    }
    driver_search_radiusModel.find({}, function (err, foundResult) {
        try {
            const idData=foundResult[0]._id
            driver_search_radiusModel.findByIdAndUpdate(idData, updateData, options, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                }
            })
        } catch (err) {
            res.json(err)
        }
    })
}
