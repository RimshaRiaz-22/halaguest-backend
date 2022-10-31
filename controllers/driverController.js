const DriverModel = require("../models/driverModel");
const mongoose = require("mongoose");
const moment = require('moment');
const driverModel = require("../models/driverModel");

exports.getAllDrivers = (req, res) => {
    DriverModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 })
        .populate({
            path: 'dispacher_id',
            populate: {
                path: 'payment_detail_id',
                model: 'payment_details',
            }
        })
        .populate({
            path: 'vehicle_detail_id',
            populate: {
                path: 'condition_id',
                model: 'condition',
            }
        })
        .populate({
            path: 'vehicle_detail_id',
            populate: {
                path: 'car_type_id',
                model: 'car_type',
            }
        })
        .populate("doc_id")
}
exports.getDispacherDriver = (req, res) => {
    const DispacherId = req.params.dispacher_id;
    DriverModel.find({ dispacher_id: DispacherId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 }).populate({
        path: 'vehicle_detail_id',
        populate: {
            path: 'condition_id',
            model: 'condition',
        }
    })
        .populate({
            path: 'vehicle_detail_id',
            populate: {
                path: 'car_type_id',
                model: 'car_type',
            }
        })
        .populate("doc_id")
}

exports.getSpecificDriver = (req, res) => {
    const DriverId = req.params.DriverId;
    DriverModel.find({ _id: DriverId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }).populate({
        path: 'dispacher_id',
        populate: {
            path: 'payment_detail_id',
            model: 'payment_details',
        }
    })
        .populate({
            path: 'vehicle_detail_id',
            populate: {
                path: 'condition_id',
                model: 'condition',
            }
        })
        .populate({
            path: 'vehicle_detail_id',
            populate: {
                path: 'car_type_id',
                model: 'car_type',
            }
        })
        .populate("doc_id")
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
    const Createddate = req.body.created_at;
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
        phoneno: req.body.phoneno,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
        status: req.body.status,
        device_token: req.body.device_token,
        driver_location: req.body.driver_location,
        driver_lat: req.body.driver_lat,
        driver_log: req.body.driver_log,
        // coordinates:[]
        location:
        //  {
            // coordinates:
             [
                req.body.driver_lat,         //<INDEXED as 2d>
                req.body.driver_log,
            ]
        // }


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
        doc_id: req.body.doc_id,
        phoneno: req.body.phoneno,
        status: req.body.status,
        device_token: req.body.device_token,
        driver_location: req.body.driver_location,
        driver_lat: req.body.driver_lat,
        driver_log: req.body.driver_log,
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

exports.getSearchOrder = (req, res) => {
    const ConditionId = req.body.condition_id;
    const CarTypeId = req.body.car_type_id;
    const Ac = req.body.ac;
    const Location_lat = req.body.location_lat;
    const Location_log = req.body.location_log;
    // console.log(Location_lat)
    // DriverModel.aggregate([{
    //     $geoNear: {
    //         near: {type: "Point", coordinates: [ Location_lat, Location_log ]},
    //         distanceField: "location",
    //         minDistance:0,
    //         maxDistance:5000,
    //         spherical: true
    //     }
    // }], function(err, resp){
    //     console.log(resp)
    // })
  DriverModel.find({
        // vehicle_detail_id:req.body.vehicle_detail_id
        // 'vehicle_detail_id[0].condition_id': ConditionId,
        // 'vehicle_detail_id[0].car_type_id': CarTypeId,
        // 'vehicle_detail_id[0].ac': Ac,
            $geoNear: {
                near: { type: "Point", coordinates: [ Location_lat,  Location_log ] },
                distanceField: "location",
                minDistance: 2,
                query: { type: "public" },
                // includeLocs: "dist.location",
                num: 5,
                spherical: true
             }
       
       

}
, (error, result) => {
    if (error) {
        res.send(error)
    } else {
        res.send(result)
    }
}).sort({ $natural: -1 })
}



