const router = require("express").Router();
const controller= require("../controllers/driverSearchRadiusController")

router.get("/alldriver_search_radius" ,controller.getAlldriver_search_radius)
router.delete("/deletedriver_search_radius/:driver_search_radiusId" , controller.deletedriver_search_radius);
router.post("/createdriver_search_radius" , controller.createdriver_search_radius);
router.put("/updatedriver_search_radius" , controller.updatedriver_search_radius);

module.exports = router;