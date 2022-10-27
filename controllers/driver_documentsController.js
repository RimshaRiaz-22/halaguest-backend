const driverDocModel = require("../models/driver_documentsModel");
const mongoose = require("mongoose");

exports.getAlldriverDocs= (req,res)=>{
    driverDocModel.find({},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}

exports.getSpecificdriverDoc= (req,res)=>{
    const driverDocId = req.params.docId;
    driverDocModel.find({_id:driverDocId},function(err, foundResult){
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
exports.deletedriverDoc= (req,res)=>{
    const driverDocId = req.params.docId;
    driverDocModel.deleteOne({_id:driverDocId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}
exports.createdriverDoc = async (req, res) => {
    const driverDoc = new driverDocModel({
        _id: mongoose.Types.ObjectId(),
        driving_license_front: req.body.driving_license_front,
        driving_license_back: req.body.driving_license_back,
        cnic_front: req.body.cnic_front,
        cnic_back: req.body.cnic_back,
        vehicle_ownership: req.body.vehicle_ownership,
        cnic_issue_date: req.body.cnic_issue_date,

    });
    try {
        const savedAdmin = await driverDoc.save();
        res.json({
            data:savedAdmin,
            message:"Document Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updatedriverDoc = async (req, res) => {
    const updateData = {
        driving_license_front: req.body.driving_license_front,
        driving_license_back: req.body.driving_license_back,
        cnic_front: req.body.cnic_front,
        cnic_back: req.body.cnic_back,
        vehicle_ownership: req.body.vehicle_ownership,
        cnic_issue_date: req.body.cnic_issue_date,
    }
    const options = {
        new: true
    }
    driverDocModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
   
}
