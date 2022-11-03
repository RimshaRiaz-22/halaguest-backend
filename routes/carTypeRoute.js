const router = require("express").Router();
const controller= require("../controllers/carTypeController")

router.get("/allCarTypes" ,controller.getAllcarType)
router.get("/specificCarType/:carTypeId" , controller.getSpecificcarType)
router.delete("/deleteCarType/:carTypeId" , controller.deletecarType);
router.post("/createCarType" , controller.createcarType);
router.put("/updateCarType" , controller.updatecarType);

module.exports = router;