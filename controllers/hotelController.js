const hotelModel= require("../models/hotelModel");
const mongoose = require("mongoose");
const moment = require('moment');
exports.getAllHotels= (req,res)=>{
    hotelModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("payment_detail_id").populate("hotel_type_id")
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
exports.deleteHotel= (req,res)=>{
    const HotelId = req.params.HotelId;
    hotelModel.deleteOne({_id:HotelId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
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



