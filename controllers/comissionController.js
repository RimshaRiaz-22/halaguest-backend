const ComissionModel = require("../models/comission");
const mongoose = require("mongoose");

exports.getAllComission = (req, res) => {
    ComissionModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult[0])
        } catch (err) {
            res.json(err)
        }
    })
}

exports.deleteComission = (req, res) => {
    const ComissionId = req.params.ComissionId;
    ComissionModel.deleteOne({ _id: ComissionId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createComission = async (req, res) => {
    const Comission = new ComissionModel({
        _id: mongoose.Types.ObjectId(),
        rate: req.body.rate,
    });
    try {
        const savedAdmin = await Comission.save();
        res.json({
            data: savedAdmin,
            message: "Comission Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateComission = async (req, res) => {
    const updateData = {
        rate: req.body.rate,
    }
    const options = {
        new: true
    }
    ComissionModel.find({}, function (err, foundResult) {
        try {
            const idData=foundResult[0]._id
            ComissionModel.findByIdAndUpdate(idData, updateData, options, (error, result) => {
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
