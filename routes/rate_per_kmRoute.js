const router = require("express").Router();
const controller= require("../controllers/ratePerkmController")

router.get("/allrate_per_kms" ,controller.getAllrate_per_km)
router.delete("/deleterate_per_km/:rate_per_kmId" , controller.deleterate_per_km);
router.post("/createrate_per_km" , controller.createrate_per_km);
router.put("/updaterate_per_km" , controller.updaterate_per_km);

module.exports = router;