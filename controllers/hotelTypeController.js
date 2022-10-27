const hotelTypeModel = require("../models/hotelTypeModel");
const mongoose = require("mongoose");

exports.getAllhotelType = (req, res) => {
    hotelTypeModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}

exports.getSpecifichotelType = (req, res) => {
    const hotelTypeId = req.params.hotelTypeId;
    hotelTypeModel.find({ _id: hotelTypeId }, function (err, foundResult) {
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
exports.deletehotelType = (req, res) => {
    const hotelTypeId = req.params.hotelTypeId;
    hotelTypeModel.deleteOne({ _id: hotelTypeId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createhotelType = async (req, res) => {
    const hotelType = new hotelTypeModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        stars: req.body.stars,
    });
    try {
        const savedAdmin = await hotelType.save();
        res.json({
            data: savedAdmin,
            message: "Hotel Type Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updatehotelType = async (req, res) => {
    const updateData = {
        name: req.body.name,
        stars: req.body.stars,
    }
    const options = {
        new: true
    }
    hotelTypeModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

}
