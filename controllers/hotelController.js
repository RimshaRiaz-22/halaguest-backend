const hotelModel= require("../models/hotelModel");
const orderModel= require("../models/orderModel");

const mongoose = require("mongoose");
const moment = require('moment');
const guestModel = require("../models/guestModel");
const invoiceModel = require("../models/invoiceModel");
exports.getAllHotels= (req,res)=>{
    hotelModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1}).populate("payment_detail_id").populate("hotel_type_id")
}

exports.getSpecificHotel= (req,res)=>{
    const HotelId = req.params.HotelId;
    hotelModel.find({_id:HotelId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    }).populate("payment_detail_id").populate("hotel_type_id")
}
exports.getHotelOrdersStatus= (req,res)=>{
    const HotelId = req.params.hotel_id;
    const Status = req.params.status;

    orderModel.find({hotel_id:HotelId,status:Status},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    }).sort({$natural:-1})
}
exports.getHotelInvoices= (req,res)=>{
    const HotelId = req.params.hotel_id;
    invoiceModel.find({hotel_id:HotelId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    }).sort({$natural:-1}).populate("order_id")
}
exports.getHotelOrders= (req,res)=>{
    const HotelId = req.params.hotel_id;
    orderModel.find({hotel_id:HotelId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    }).sort({$natural:-1})
}
exports.getHotelGuests= (req,res)=>{
    const HotelId = req.params.hotel_id;
    guestModel.find({hotel_id:HotelId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    }).sort({$natural:-1})
}
exports.deleteHotel= (req,res)=>{
    const HotelId = req.params.HotelId;
    hotelModel.findByIdAndDelete(HotelId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({message:"Deleted Successfully"})
        }
    })
}
exports.createHotel= async(req,res)=>{
    const Createddate= req.body.created_at;
    const diapacher = new hotelModel({
        _id: mongoose.Types.ObjectId(),
        hotel_type_id: req.body.hotel_type_id,
        payment_detail_id: req.body.payment_detail_id,
        hotel_name: req.body.hotel_name,
        email:req.body.email,
        img: req.body.img,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        street_address: req.body.street_address,
        phoneno: req.body.phoneno,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
        status: req.body.status,
        device_token: req.body.device_token
    });
    try {
        const savedHotel = await diapacher.save();
        res.json({
            data:savedHotel,
            message:"Hotel Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateHotel = async (req, res) => {
    const updateData = {
        hotel_type_id: req.body.hotel_type_id,
        payment_detail_id: req.body.payment_detail_id,
        hotel_name: req.body.hotel_name,
        email:req.body.email,
        img: req.body.img,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        street_address: req.body.street_address,
        phoneno: req.body.phoneno,
        status: req.body.status,
        device_token: req.body.device_token
    }
    const options = {
        new: true
    }
    hotelModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
   
}



