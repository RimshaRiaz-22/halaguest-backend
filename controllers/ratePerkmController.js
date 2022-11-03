const rate_per_kmModel = require("../models/rate_per_km");
const mongoose = require("mongoose");

exports.getAllrate_per_km = (req, res) => {
    rate_per_kmModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult[0])
        } catch (err) {
            res.json(err)
        }
    })
}

exports.deleterate_per_km = (req, res) => {
    const rate_per_kmId = req.params.rate_per_kmId;
    rate_per_kmModel.deleteOne({ _id: rate_per_kmId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createrate_per_km = async (req, res) => {
    const rate_per_km = new rate_per_kmModel({
        _id: mongoose.Types.ObjectId(),
        rate: req.body.rate,
    });
    try {
        const savedAdmin = await rate_per_km.save();
        res.json({
            data: savedAdmin,
            message: "rate_per_km Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updaterate_per_km = async (req, res) => {
    const updateData = {
        rate: req.body.rate,
    }
    const options = {
        new: true
    }
    rate_per_kmModel.find({}, function (err, foundResult) {
        try {
            const idData=foundResult[0]._id
            rate_per_kmModel.findByIdAndUpdate(idData, updateData, options, (error, result) => {
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
