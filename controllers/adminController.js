const adminModel= require("../models/adminModel");
const bcrypt = require("bcryptjs");

exports.getAllAdmins= (req,res)=>{
    adminModel.find({},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}

exports.getSpecificAdmin= (req,res)=>{
    const adminId = req.params.adminId;
    adminModel.find({_id:adminId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}
exports.deleteAdmin= (req,res)=>{
    const adminId = req.params.adminId;
    adminModel.deleteOne({_id:adminId},function(err, foundResult){
        try{
            res.json(foundResult)
        }catch(err){
            res.json(err)
        }
    })
}

exports.updatePassword=async (req,res)=>{

    const email=req.body.email;
    const newPassword=req.body.newPassword;
    const adminId = req.body.adminId;


    if(email && newPassword && adminId !==null && typeof email && typeof newPassword && typeof adminId !=="undefined"){
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        adminModel.findOneAndUpdate({
            email:email,
            _id:adminId,
            },
            {
              password:hashPassword
            }, 
            function(err, result) 
            { 
               
                if(result){
                    console.log("password updated successfully") 
                    res.json({
                        message: "password updated successfully",
                        success: true,
                        result:result
                        
                    })
                } else{
                    res.json({
                        message: "could'nt update admin password",
                        success: false,
                        error:err,
                        data:result
                    })
                }
        });
    }
    else{
        res.json({
            message:"email , newPassword or adminId may be null or undefined",
        })
    }

     
}
