const carTypeModel = require("../models/car_typeModel");
const mongoose = require("mongoose");

exports.getAllcarType = (req, res) => {
    carTypeModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}

exports.getSpecificcarType = (req, res) => {
    const carTypeId = req.params.carTypeId;
    carTypeModel.find({ _id: carTypeId }, function (err, foundResult) {
        try {
            if (foundResult.length == 0) {
                res.json({ data: foundResult, message: 'Not Found' })
            } else {
                res.json({ data: foundResult, message: 'Found successfully' })
            }
        } catch (err) {
            res.json(err)
        }
    })
}
exports.deletecarType = (req, res) => {
    const carTypeId = req.params.carTypeId;
    carTypeModel.deleteOne({ _id: carTypeId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createcarType = async (req, res) => {
    const carType = new carTypeModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
    });
    try {
        const savedAdmin = await carType.save();
        res.json({
            data: savedAdmin,
            message: "Car Type Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updatecarType = async (req, res) => {
    const updateData = {
        name: req.body.name,
    }
    const options = {
        new: true
    }
    carTypeModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

}
