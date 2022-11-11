const ConditionModel = require("../models/conditionModel");
const mongoose = require("mongoose");

exports.getAllCondition = (req, res) => {
    ConditionModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}

exports.getSpecificCondition = (req, res) => {
    const ConditionId = req.params.ConditionId;
    ConditionModel.find({ _id: ConditionId }, function (err, foundResult) {
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
exports.deleteCondition = (req, res) => {
    const ConditionId = req.params.ConditionId;
    ConditionModel.deleteOne({ _id: ConditionId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createCondition = async (req, res) => {
    const Condition = new ConditionModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
    });
    try {
        const savedAdmin = await Condition.save();
        res.json({
            data: savedAdmin,
            message: "Condition Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateCondition = async (req, res) => {
    const updateData = {
        name: req.body.name,
    }
    const options = {
        new: true
    }
    ConditionModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

}
