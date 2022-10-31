const router = require("express").Router();
const controller= require("../controllers/driverController")

router.get("/allDrivers" ,controller.getAllDrivers)
router.get("/specificDriver/:DriverId" , controller.getSpecificDriver)
router.delete("/deleteDriver/:DriverId" , controller.deleteDriver);
router.get("/getDispacherDriver/:dispacher_id" , controller.getDispacherDriver);
router.post("/createDriver" , controller.createDriver);
router.put("/updateDriver" , controller.updateDriver);
router.get("/searchOrder" , controller.getSearchOrder);


module.exports = router;