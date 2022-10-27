const router = require("express").Router();
const controller= require("../controllers/conditionController")

router.get("/allConditions" ,controller.getAllCondition)
router.get("/specificCondition/:ConditionId" , controller.getSpecificCondition)
router.delete("/deleteCondition/:ConditionId" , controller.deleteCondition);
router.post("/createCondition" , controller.createCondition);
router.put("/updateCondition" , controller.updateCondition);

module.exports = router;