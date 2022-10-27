const router = require("express").Router();
const controller= require("../controllers/hotelTypeController")

router.post("/createhotelType" , controller.createhotelType);
router.get("/allhotelTypes" , controller.getAllhotelType);
router.get("/specifichotelType/:hotelTypeId" , controller.getSpecifichotelType);
router.delete("/deletehotelType/:hotelTypeId" , controller.deletehotelType);
router.put("/updatehotelType" , controller.updatehotelType);
module.exports = router;

