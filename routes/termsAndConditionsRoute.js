const router = require("express").Router();
const controller= require("../controllers/termsAndConditionsController")

router.get("/alltermsAndConditionss" ,controller.getAlltermsAndConditions)
router.delete("/deletetermsAndConditions/:termsAndConditionsId" , controller.deletetermsAndConditions);
router.post("/createtermsAndConditions" , controller.createtermsAndConditions);
router.put("/updatetermsAndConditions" , controller.updatetermsAndConditions);

module.exports = router;