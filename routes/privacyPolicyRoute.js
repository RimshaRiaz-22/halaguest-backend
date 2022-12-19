const router = require("express").Router();
const controller= require("../controllers/privacyPolicyController")

router.get("/allprivacyPolicys" ,controller.getAllprivacyPolicy)
router.delete("/deleteprivacyPolicy/:privacyPolicyId" , controller.deleteprivacyPolicy);
router.post("/createprivacyPolicy" , controller.createprivacyPolicy);
router.put("/updateprivacyPolicy" , controller.updateprivacyPolicy);

module.exports = router;