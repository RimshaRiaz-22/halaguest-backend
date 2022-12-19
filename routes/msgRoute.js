const router = require("express").Router();
const controller= require("../controllers/msgController")

router.post("/Add-Msg-Socket" , controller.addMsg);
router.post("/Add-Multi-Msg-Socket" , controller.addMsgBroadcast);

router.post("/get-Msg-Socket" , controller.getMsg);
router.get("/Get-MultiMsgs-By-OrderId/:order_id" , controller.getMultiMsgs);

router.get("/getUserByOrder/:orderId" , controller.getUsersByOrder);

module.exports = router;

