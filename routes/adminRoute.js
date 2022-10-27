const router = require("express").Router();
const adminModel= require("../models/adminModel");
const bcrypt = require("bcryptjs");

const auth= require("../middlewares/auth")
const mongoose=require("mongoose")
const controller= require("../controllers/adminController")

router.get("/allAdmins" ,controller.getAllAdmins)
router.get("/specificAdmin/:adminId" , controller.getSpecificAdmin)
router.delete("/deleteAdmin/:adminId" , controller.deleteAdmin);
router.put("/updateAdminPassword", controller.updatePassword)

 

router.post("/register",  async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //Check if the user is already in the db
    const emailExists = await adminModel.findOne({ email: req.body.email });
  
    if (emailExists) return res.status(400).send("Email already exists");
  
    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
  
    //create new user
    const admin = new adminModel({
      _id:mongoose.Types.ObjectId(),
      email: req.body.email,
      password: hashPassword,
     
     
    });
  
    try {
      const savedAdmin= await admin.save();
      
      res.json({
        _id:savedAdmin._id,
        email:savedAdmin.email,
        password:savedAdmin.password,


      })
    } catch (err) {
      res.status(400).send(err);
    }
  });


module.exports = router;

