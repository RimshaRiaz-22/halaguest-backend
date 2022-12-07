const termsAndConditionsModel = require("../models/termsAndConditionModel");
const mongoose = require("mongoose");

exports.getAlltermsAndConditions = (req, res) => {
    termsAndConditionsModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult[0])
        } catch (err) {
            res.json(err)
        }
    })
}

exports.deletetermsAndConditions = (req, res) => {
    const termsAndConditions = req.params.termsAndConditionsId;
    termsAndConditionsModel.deleteOne({ _id: termsAndConditions }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createtermsAndConditions = async (req, res) => {
    const termsAndConditions = new termsAndConditionsModel({
        _id: mongoose.Types.ObjectId(),
        termsAndConditions: req.body.termsAndConditions,
    });
    try {
        const savedAdmin = await termsAndConditions.save();
        res.json({
            data: savedAdmin,
            message: "termsAndConditions Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updatetermsAndConditions = async (req, res) => {
    const updateData = {
        termsAndConditions: req.body.termsAndConditions,
    }
    const options = {
        new: true
    }
    termsAndConditionsModel.find({}, function (err, foundResult) {
        try {
            const idData=foundResult[0]._id
            termsAndConditionsModel.findByIdAndUpdate(idData, updateData, options, (error, result) => {
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
