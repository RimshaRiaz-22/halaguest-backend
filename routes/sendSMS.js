const router = require("express").Router();
const controller= require("../controllers/sendSMSController")

router.post("/createSMS" , controller.createSMS);

module.exports = router;

