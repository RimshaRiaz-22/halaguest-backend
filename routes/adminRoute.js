const router = require("express").Router();
const controller= require("../controllers/adminController")

router.get("/alladmins" ,controller.getAlladmins)
router.get("/getAdminByID/:adminId" , controller.getSpecificadmin)
router.delete("/deleteadmin/:adminId" , controller.deleteadmin);
router.post("/createadmin" , controller.createadmin);
router.put("/updateadmin" , controller.updateadmin);
router.put("/loginAdmin" , controller.loginAdmin);

module.exports = router;