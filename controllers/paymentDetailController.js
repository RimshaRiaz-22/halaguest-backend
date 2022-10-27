const paymentDetailModel = require("../models/paymentDetail");
const mongoose = require("mongoose");

exports.getAllpaymentDetails= (req,res)=>{
    paymentDetailModel.find({},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}

exports.getSpecificpaymentDetail= (req,res)=>{
    const paymentDetailId = req.params.paymentId;
    paymentDetailModel.find({_id:paymentDetailId},function(err, foundResult){
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
exports.deletepaymentDetail= (req,res)=>{
    const paymentDetailId = req.params.paymentId;
    paymentDetailModel.deleteOne({_id:paymentDetailId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}
exports.createPaymentDetail = async (req, res) => {
    const paymentDetail = new paymentDetailModel({
        _id: mongoose.Types.ObjectId(),
        bank_name: req.body.bank_name,
        account_holder_name: req.body.account_holder_name,
        account_number: req.body.account_number,
        iban: req.body.iban,
        swift_code: req.body.swift_code,
    });
    try {
        const savedAdmin = await paymentDetail.save();
        res.json({
            data:savedAdmin,
            message:"Payment Created successfully"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.updatePaymentDetail = async (req, res) => {
    const updateData = {
        bank_name: req.body.bank_name,
        account_holder_name: req.body.account_holder_name,
        account_number: req.body.account_number,
        iban: req.body.iban,
        swift_code: req.body.swift_code,
    }
    const options = {
        new: true
    }
    paymentDetailModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
   
}
