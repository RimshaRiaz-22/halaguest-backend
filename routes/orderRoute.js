const router = require("express").Router();
const controller= require("../controllers/orderController")

router.post("/createOrder" , controller.createOrder);
router.get("/allOrders" , controller.getAllOrders);
router.get("/specificOrder/:OrderId" , controller.getSpecificOrder);
router.delete("/deleteOrder/:OrderId" , controller.deleteOrder);
router.put("/updateOrder" , controller.updateOrder);
router.get("/driverOrders/:driverId" , controller.getDriverOrders);
router.get("/driverOrdersCompleted/:driverId" , controller.getDriverOrdersCompleted);
router.get("/driverOrdersOngoing/:driverId" , controller.getDriverOrdersOngoing);
router.get("/driverOrdersCancel/:driverId" , controller.getDriverOrdersCancel);

module.exports = router;

