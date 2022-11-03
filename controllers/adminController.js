const adminModel = require("../models/adminModel");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

exports.getAlladmins = (req, res) => {
    adminModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 })
}

exports.getSpecificadmin = (req, res) => {
    const adminId = req.params.adminId;
    adminModel.find({ _id: adminId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.loginAdmin = (req, res) => {
    const findUser = {
        email: req.body.email
    }
    adminModel.findOne(findUser, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                if (bcrypt.compareSync(req.body.password, result.password)) {
                   res.send(result)
                } else {
                    res.sendStatus(401)
                }
            } else {
                res.sendStatus(404)
            }
        }
    })
}
exports.deleteadmin = (req, res) => {
    const adminId = req.params.adminId;
    adminModel.deleteOne({ _id: adminId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createadmin = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    adminModel.find({ email: req.body.email }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            if (result === undefined || result.length == 0) {
                const admin = new adminModel({
                    _id: mongoose.Types.ObjectId(),
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                    img: req.body.img,
                    privacy_policy: req.body.privacy_policy,
                    terms_and_conditions: req.body.terms_and_conditions,

                });
                admin.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })

            } else {
                res.send("Email Already Exist")

            }
        }
    })

}
exports.updateadmin = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    const updateData = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        img: req.body.img,
        privacy_policy: req.body.privacy_policy,
        terms_and_conditions: req.body.terms_and_conditions,
    }
    const options = {
        new: true
    }
    adminModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}



