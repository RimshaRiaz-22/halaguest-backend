const NotificationDetailModel = require("../models/notificationModel");
const mongoose = require("mongoose");
const moment = require('moment');
const adminModel = require("../models/adminModel");

exports.getAllNotificationDetails= (req,res)=>{
    NotificationDetailModel.find({},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}

exports.getSpecificNotificationDetail= (req,res)=>{
    const NotificationDetailId = req.params.NotificationId;
    NotificationDetailModel.find({_id:NotificationDetailId},function(err, foundResult){
        try{
            if(foundResult.length==0){
                res.json({data:foundResult,message:'Not Found'})
            }else{
                res.json({data:foundResult,message:'Found successfully'})
            }
        }catch(err){
            res.json(err)
        }
    })
}

exports.getToNotification= (req,res)=>{
    const NotificationToId = req.params.ToId;
    NotificationDetailModel.find({to:NotificationToId}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
    
}
exports.deleteNotificationDetail= (req,res)=>{
    const NotificationDetailId = req.params.NotificationId;
    NotificationDetailModel.deleteOne({_id:NotificationDetailId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}
exports.createNotificationDetail = async (req, res) => {
    const Createddate= req.body.created_at;
    const NotificationDetail = new NotificationDetailModel({
        _id: mongoose.Types.ObjectId(),
        to: req.body.to,
        to_table:req.body.to_table,
        from: req.body.from,
        from_table:req.body.from_table,
        detail: req.body.detail,
        created_at: req.body.created_at,
        readStatus: req.body.readStatus,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
    });
    try {
        const savedAdmin = await NotificationDetail.save();
        res.json({
            data:savedAdmin,
            message:"Notification Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updateNotificationDetail = async (req, res) => {
    const Createddate= req.body.created_at;
    const updateData = {
        to: req.body.to,
        to_table:req.body.to_table,
        from: req.body.from,
        from_table:req.body.from_table,
        detail: req.body.detail,
        created_at: req.body.created_at,
        readStatus: req.body.readStatus,
        created_at: moment(Createddate).format("DD/MM/YYYY"),
    }
    const options = {
        new: true
    }
    NotificationDetailModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
   
}
exports.changeStatusNotificationDetail = async (req, res) => {
    const updateData = {
        readStatus: req.body.readStatus,
    }
    const options = {
        new: true
    }
    NotificationDetailModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
   
}
