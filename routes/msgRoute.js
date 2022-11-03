const router = require("express").Router();
const controller= require("../controllers/msgController")

router.post("/Add-Msg-Socket" , controller.addMsg);
router.get("/get-Msg-Socket" , controller.getMsg);
router.get("/getUserByOrder/:orderId" , controller.getUsersByOrder);

module.exports = router;

