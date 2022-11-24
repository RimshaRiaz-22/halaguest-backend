const router = require("express").Router();
const controller= require("../controllers/sendSMSController")

router.post("/createSMS" , controller.createSMS);
router.post("/createOTP" , controller.createOTP);


module.exports = router;

