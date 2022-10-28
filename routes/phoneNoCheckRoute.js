const router = require("express").Router();
const controller= require("../controllers/phoneNoCheckController")

router.post("/logins" , controller.logins);

module.exports = router;

