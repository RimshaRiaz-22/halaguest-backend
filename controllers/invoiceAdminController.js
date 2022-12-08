const invoiceAdminModel = require("../models/invoiceAdminModel");
const mongoose = require("mongoose");
const moment = require('moment');
const orderModel = require("../models/orderModel");
exports.getAllInvoices = (req, res) => {
    invoiceAdminModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 })
        .populate('order_id')
}
exports.getInvoicesBetweenDates = (req, res) => {
    // const startDate = req.body.startDate;
    invoiceAdminModel.find({ created_at: { $gte: req.body.sdate, $lt: req.body.edate } }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }).populate('order_id')


}
exports.getInvoicesByStatus = (req, res) => {
    const status = req.body.status;
    invoiceAdminModel.find({ status: status }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }).populate('order_id')

}
exports.getSpecificInvoiceAdmin = (req, res) => {
    // const InvoiceId = req.params.InvoiceId;
    invoiceAdminModel.find({ _id: req.body._id }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    })
        .populate('order_id')
        // .populate('hotel_id')
        // .populate('guest_id')
        // .populate('driver_id')
        // .populate('dispacher_id')

}
exports.createInvoiceAdmin = async (req, res) => {
    const Createddate = req.body.created_at;
    let invoiceNo = Math.floor((Math.random() * 100000) + 1);
    console.log(req.body.order_id)
    const Invoice = new invoiceAdminModel({
        _id: mongoose.Types.ObjectId(),
        InvoiceNo: invoiceNo,
        order_id: [],
        status: req.body.status,
        totalAmount: req.body.totalAmount,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
    })
    Invoice.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)

        }

    })
}
exports.pushOrderIdAdminInvoice = async (req, res) => {
    const updateData1 = {
        $push: {
            order_id: req.body.order_id
        },
    }
    const options1 = {
        new: true
    }
    invoiceAdminModel.findByIdAndUpdate(req.body._id, updateData1, options1, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
            // update 
            const updateData1 = {
                invoiceStatus:result.status
            }
            const options1 = {
                new: true
            }
            orderModel.findByIdAndUpdate(req.body.order_id, updateData1, options1, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                }
            })
        }
    })
}

