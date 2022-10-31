const router = require("express").Router();
const controller= require("../controllers/msgController")

router.post("/Add-Msg-Socket" , controller.addMsg);
router.get("/get-Msg-Socket" , controller.getMsg);
module.exports = router;

