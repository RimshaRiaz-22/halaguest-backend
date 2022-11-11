const VehicleModel = require("../models/vehicleModel");
const mongoose = require("mongoose");
const driverModel = require("../models/driverModel");

exports.getAllVehicles = (req, res) => {
    VehicleModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("condition_id").populate("car_type_id")
}

exports.getSpecificVehicle = (req, res) => {
    const VehicleId = req.params.VehicleId;
    VehicleModel.find({ _id: VehicleId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }).populate("condition_id").populate("car_type_id")
}
exports.deleteVehicle = (req, res) => {
    const VehicleId = req.params.VehicleId;
    VehicleModel.deleteOne({ _id: VehicleId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createVehicle = async (req, res) => {
    const Vehicle = new VehicleModel({
        _id: mongoose.Types.ObjectId(),
        make: req.body.make,
        modal: req.body.modal,
        year: req.body.year,
        color: req.body.color,
        plate_no: req.body.plate_no,
        style: req.body.style,
        condition_id: req.body.condition_id,
        car_type_id: req.body.car_type_id,
        ac: req.body.ac,
        driver_Id: []
    });
    try {
        const savedVehicle = await Vehicle.save();
        res.json({
            data: savedVehicle,
            message: "Vehicle Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateVehicle = async (req, res) => {
    // const driverId= req.body.make
    VehicleModel.find({ _id: req.body._id }, function (err, foundResult) {
        try {
            // res.json(foundResult[0].driver_Id[0])
            const driverId = foundResult[0].driver_Id[0];
            const updateData = {
                make: req.body.make,
                modal: req.body.modal,
                year: req.body.year,
                color: req.body.color,
                plate_no: req.body.plate_no,
                style: req.body.style,
                condition_id: req.body.condition_id,
                car_type_id: req.body.car_type_id,
                ac: req.body.ac,
            }

            const options = {
                new: true
            }
            VehicleModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                    const updateData1 = {
                        vehicle_condition_id: result.condition_id,
                        vehicle_car_type_id: result.car_type_id,
                        vehicle_ac:result.ac,
                    }
                    const options = {
                        new: true
                    }
                    driverModel.findByIdAndUpdate(driverId, updateData1, options, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            // res.send(result)
                        }
                    })
                }
            })
        } catch (err) {
            res.json(err)
        }
    })


}



