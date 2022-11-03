const invoiceModel = require("../models/invoiceModel");
const mongoose = require("mongoose");
const moment = require('moment');
const orderModel = require("../models/orderModel");
exports.getAllInvoices = (req, res) => {
    invoiceModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 })
        .populate({
            path: 'order_id',
            populate: {
                path: 'guest_id',
                model: 'guest',
            }
        })
        .populate({
            path: 'order_id',
            populate: {
                path: 'driver_id',
                model: 'driver',
                populate: {
                    path: 'dispacher_id',
                    model: 'dispacher',
                }
            }
        })
        .populate({
            path: 'order_id',
            populate: {
                path: 'driver_id',
                model: 'driver',
                populate: {
                    path: 'vehicle_detail_id',
                    model: 'vehicle_detail',
                }
            }
        })
        .populate({
            path: 'order_id',
            populate: {
                path: 'driver_id',
                model: 'driver',
                populate: {
                    path: 'doc_id',
                    model: 'driver_documents',
                }
            }
        })
}

exports.getSpecificInvoice = (req, res) => {
    const InvoiceId = req.params.InvoiceId;
    invoiceModel.find({ _id: InvoiceId }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }).populate({
        path: 'order_id',
        populate: {
            path: 'guest_id',
            model: 'guest',
        }
    })
        .populate({
            path: 'order_id',
            populate: {
                path: 'driver_id',
                model: 'driver',
                populate: {
                    path: 'dispacher_id',
                    model: 'dispacher',
                }
            }
        })
        .populate({
            path: 'order_id',
            populate: {
                path: 'driver_id',
                model: 'driver',
                populate: {
                    path: 'vehicle_detail_id',
                    model: 'vehicle_detail',
                }
            }
        })
        .populate({
            path: 'order_id',
            populate: {
                path: 'driver_id',
                model: 'driver',
                populate: {
                    path: 'doc_id',
                    model: 'driver_documents',
                }
            }
        })
}
exports.deleteInvoice = (req, res) => {
    const InvoiceId = req.params.InvoiceId;
    invoiceModel.find({ _id: InvoiceId }, function (err, foundResult) {
        try {
            // res.json(foundResult);
            const order_id = foundResult[0].order_id
            const updateData = {
                $pull: {
                    Invoice: InvoiceId,
                },
            }
            const options = {
                new: true
            }
            orderModel.findByIdAndUpdate(order_id, updateData, options, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    invoiceModel.deleteOne({ _id: InvoiceId }, function (err, foundResult) {
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
exports.createInvoice = async (req, res) => {
    const Createddate = req.body.created_at;
    orderModel.findById(req.body.order_id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const Invoice = new invoiceModel({
                _id: mongoose.Types.ObjectId(),
                order_id: req.body.order_id,
                hotel_id:result.hotel_id,
                guest_id:result.guest_id,
                driver_id:result.driver_id,
                status: req.body.status,
                created_at: moment(Createddate).format("DD/MM/YYYY"),
            })
            Invoice.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                    const updateData1 = {
                        $push: {
                            Invoice: result,
                        }
                    }
                    const options1 = {
                        new: true
                    }
                    orderModel.findByIdAndUpdate(req.body.order_id, updateData1, options1, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                        }
                    })
                }
            })
        }
    })
  
}
exports.updateInvoice = async (req, res) => {
    const Createddate = req.body.created_at;
    const updateData = {
        status: req.body.status,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
    }
    const options = {
        new: true
    }
    invoiceModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}



