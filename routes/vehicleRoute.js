const router = require("express").Router();
const controller= require("../controllers/vehicleController")

router.get("/allVehicles" ,controller.getAllVehicles)
router.get("/specificVehicle/:VehicleId" , controller.getSpecificVehicle)
router.delete("/deleteVehicle/:VehicleId" , controller.deleteVehicle);
router.post("/createVehicle" , controller.createVehicle);
router.put("/updateVehicle" , controller.updateVehicle);

module.exports = router;