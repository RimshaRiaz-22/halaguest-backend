const privacyPolicyModel = require("../models/privacyPolicyModel");
const mongoose = require("mongoose");

exports.getAllprivacyPolicy = (req, res) => {
    privacyPolicyModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult[0])
        } catch (err) {
            res.json(err)
        }
    })
}

exports.deleteprivacyPolicy = (req, res) => {
    const privacy_policy_id = req.params.privacyPolicyId;
    privacyPolicyModel.deleteOne({ _id: privacy_policy_id }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createprivacyPolicy = async (req, res) => {
    const privacyPolicy = new privacyPolicyModel({
        _id: mongoose.Types.ObjectId(),
        privacy_policy: req.body.privacy_policy,
    });
    try {
        const savedAdmin = await privacyPolicy.save();
        res.json({
            data: savedAdmin,
            message: "privacyPolicy Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateprivacyPolicy = async (req, res) => {
    const updateData = {
        privacy_policy: req.body.privacy_policy,
    }
    const options = {
        new: true
    }
    privacyPolicyModel.find({}, function (err, foundResult) {
        try {
            const idData=foundResult[0]._id
            privacyPolicyModel.findByIdAndUpdate(idData, updateData, options, (error, result) => {
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
