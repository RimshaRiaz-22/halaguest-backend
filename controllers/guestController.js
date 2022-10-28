const guestModel= require("../models/guestModel");
const mongoose = require("mongoose");
const moment = require('moment');
exports.getAllGuests= (req,res)=>{
    guestModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1}).populate("hotel_id")
}

exports.getSpecificGuest= (req,res)=>{
    const GuestId = req.params.GuestId;
    guestModel.find({_id:GuestId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    }).populate("hotel_id")
}
exports.getHotelGuests= (req,res)=>{
    const HotelId = req.params.hotel_id;
    guestModel.find({hotel_id:HotelId}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
}
exports.deleteGuest= (req,res)=>{
    const GuestId = req.params.GuestId;
    guestModel.deleteOne({_id:GuestId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}
exports.createGuest= async(req,res)=>{
    const Createddate= req.body.created_at;
    const guest = new guestModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        gender: req.body.gender,
        details:req.body.details ,
        email: req.body.email,
        img: req.body.img,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        street_address: req.body.street_address,
        hotel_id:req.body.hotel_id,
        phoneno: req.body.phoneno,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
        status: req.body.status,
        device_token: req.body.device_token
    });
    try {
        const savedGuest = await guest.save();
        res.json({
            data:savedGuest,
            message:"Guest Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateGuest = async (req, res) => {
    const updateData = {
        name: req.body.name,
        gender: req.body.gender,
        details:req.body.details ,
        email: req.body.email,
        img: req.body.img,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        street_address: req.body.street_address,
        hotel_id:req.body.hotel_id,
        phoneno: req.body.phoneno,
        status: req.body.status,
        device_token: req.body.device_token
    }
    const options = {
        new: true
    }
    guestModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
   
}



