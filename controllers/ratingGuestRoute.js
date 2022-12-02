const ratingModel = require("../models/ratingGuestModel");
const mongoose = require("mongoose");
const moment = require('moment');
const collect = require('collect.js');
const orderModel = require("../models/orderModel");
const driverModel = require("../models/driverModel");
const guestModel = require("../models/guestModel");
const hotelModel = require("../models/hotelModel");
exports.getAllRatings = (req, res) => {
    ratingModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 })
        .populate('order_id')
        .populate('rated_by_driver_id')
        .populate('hotel_id')
}

exports.getSpecificRating = (req, res) => {
    const RatingId = req.params.RatingId;
    ratingModel.find({ _id: RatingId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }) .populate('order_id')
    .populate('rated_by_driver_id')
    .populate('hotel_id')
}
exports.getGuestRatings= (req, res) => {
    const hotel_id = req.params.hotel_id;
    ratingModel.find({ hotel_id:hotel_id }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }) .populate('order_id')
    .populate('rated_by_driver_id')
    .populate('hotel_id')
    // .populate('order_id')
    //     .populate('rated_by_guest_id')
    //     .populate('driver_id')
}
exports.deleteRating = (req, res) => {
    const RatingId = req.params.RatingId;
    ratingModel.find({ _id: RatingId }, function (err, foundResult) {
        try {
            // res.json(foundResult);
            const hotel_id = foundResult[0].hotel_id
            const updateData = {
                $pull: {
                    ratings: RatingId,
                },
            }
            const options = {
                new: true
            }
            hotelModel.findByIdAndUpdate(hotel_id, updateData, options, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    ratingModel.deleteOne({ _id: RatingId }, function (err, foundResult) {
                        try {
                            res.json(foundResult)
                        } catch (err) {
                            res.json(err)
                        }
                    })
                }
            })
        } catch (err) {
            res.json(err)
        }
    })
}
exports.createRating = async (req, res) => {
    const orderId = req.body.order_id;
    orderModel.find({ _id: orderId }, function (err, foundResult) {
        try {
            // res.json(foundResult[0].guest_id);
            const hotel_id = foundResult[0].hotel_id;
            const DriverId = foundResult[0].driver_id;
            const Rating = new ratingModel({
                _id: mongoose.Types.ObjectId(),
                order_id: req.body.order_id,
                rated_by_driver_id: DriverId,
                hotel_id: hotel_id,
                star: req.body.star,
                review: req.body.review,
            })
            Rating.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)

                    ratingModel.find({ hotel_id:hotel_id }, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                    var newArr = result.map(function (val, index) {
                        return {
                            value: val.star
                        };
                    })
                    let total = 0;
                    // Count Number of elements
                    const dataCount = collect(newArr);
                    const totalCount = dataCount.count();
                    //   calculate total 
                    newArr.forEach(element => {
                        total = parseInt(total) + parseInt(element.value)
                    });
                    // console.log(total)
                    // console.log(totalCount)
                    let Rating = ((total/5)/totalCount)*5;
                    // console.log()
                    let RatingFinal=Rating.toFixed(0);
                     // res.send(result)
                    const updateData1 = {
                        $push: {
                            ratings: result,
                        },
                        totalRatings:RatingFinal
                    }
                    const options1 = {
                        new: true
                    }
                    hotelModel.findByIdAndUpdate(hotel_id, updateData1, options1, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                        }
                    })
                }
            })
                   
                }
            })

        } catch (err) {
            res.json(err)
        }
    })

}
exports.updateRating = async (req, res) => {
    // const updateData = {
    //     order_id: req.body.order_id,
    //     rated_by_driver_id: DriverId,
    //     hotel_id: GuestId,
    //     star: req.body.star,
    //     review: req.body.review,
    // }
    // const options = {
    //     new: true
    // }
    // ratingModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
    //     if (error) {
    //         res.send(error)
    //     } else {
    //         res.send(result)
    //     }
    // })
}
exports.getTotalRatingGuest = (req, res) => {
    const hotel_id = req.params.hotel_id;
    ratingModel.find({ hotel_id:hotel_id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            //  res.json(foundResult)
            var newArr = result.map(function (val, index) {
                return {
                    value: val.star
                };
            })
            let total = 0;
            // Count Number of elements
            const dataCount = collect(newArr);
            const totalCount = dataCount.count();
            //   calculate total 
            newArr.forEach(element => {
                total = parseInt(total) + parseInt(element.value)
            });
            // console.log(total)
            // console.log(totalCount)
            let Rating = ((total/5)/totalCount)*5;
            // console.log()
            let RatingFinal=Rating.toFixed(0);
            res.status(200).json(RatingFinal)
        }
    }
    )
}


