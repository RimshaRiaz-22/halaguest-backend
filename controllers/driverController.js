const DriverModel = require("../models/driverModel");
const mongoose = require("mongoose");
const moment = require('moment');

exports.getAllDrivers = (req, res) => {
    DriverModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1}).populate("dispacher_id").populate("vehicle_detail_id").populate("doc_id").populate("payment_detail_id")
}
exports.getDispacherDriver= (req,res)=>{
    const DispacherId = req.params.dispacher_id;
    DriverModel.find({dispacher_id:DispacherId}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
}

exports.getSpecificDriver = (req, res) => {
    const DriverId = req.params.DriverId;
    DriverModel.find({ _id: DriverId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }).populate("dispacher_id").populate("vehicle_detail_id").populate("doc_id").populate("payment_detail_id")
}
exports.deleteDriver = (req, res) => {
    const DriverId = req.params.DriverId;
    DriverModel.deleteOne({ _id: DriverId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createDriver = async (req, res) => {
    // console.log(new Date)
    const Createddate= req.body.created_at;
    const Driver = new DriverModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        gender: req.body.gender,
        details: req.body.details,
        email: req.body.email,
        img: req.body.img,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        street_address: req.body.street_address,
        dispacher_id: req.body.dispacher_id,
        vehicle_detail_id: req.body.vehicle_detail_id,
        doc_id: req.body.doc_id,
        payment_detail_id:req.body.payment_detail_id,
        phoneno: req.body.phoneno,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
        status: req.body.status,
        device_token: req.body.device_token
    });
    try {
        const savedDriver = await Driver.save();
        res.json({
            data: savedDriver,
            message: "Driver Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateDriver = async (req, res) => {
    const updateData = {
        name: req.body.name,
        gender: req.body.gender,
        details: req.body.details,
        email: req.body.email,
        img: req.body.img,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        street_address: req.body.street_address,
        dispacher_id: req.body.dispacher_id,
        vehicle_detail_id: req.body.vehicle_detail_id,
        payment_detail_id:req.body.payment_detail_id,
        doc_id: req.body.doc_id,
        phoneno: req.body.phoneno,
        status: req.body.status,
        device_token: req.body.device_token
    }
    const options = {
        new: true
    }
    DriverModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}



