const router = require("express").Router();
const controller= require("../controllers/orderController")

router.post("/createOrder" , controller.createOrder);
router.get("/allOrders" , controller.getAllOrders);
router.get("/specificOrder/:OrderId" , controller.getSpecificOrder);
router.delete("/deleteOrder/:OrderId" , controller.deleteOrder);
router.put("/updateOrder" , controller.updateOrder);
router.put("/updateOrderStatus" , controller.updateOrderStatus);
router.post("/updateOrderStatusOngoing" , controller.updateOrderStatusOngoing);

router.get("/driverOrders/:driverId" , controller.getDriverOrders);
router.get("/driverOrdersByTime/:driverId" , controller.driverOrdersByTime);

router.get("/hotelOrders/:hotelId" , controller.getHotelOrders);
router.get("/getHotelOrdersByTime/:hotelId" , controller.getHotelOrdersByTime);

router.get("/dispacherOrders/:dispacherId" , controller.getDispacherOrders);
router.get("/getDispacherOrdersByTime/:dispacherId" , controller.getDispacherOrdersByTime);

router.get("/dispacherOrdersScheduled/:dispacherId" , controller.getDispacherOrdersScheduled);
router.get("/dispacherOrdersCompleted/:dispacherId" , controller.getDispacherOrdersCompleted);

router.get("/getDriverOrdersAll/:driverId" , controller.getDriverOrdersAll);
router.get("/getGuestOrdersAll/:guest_id" , controller.getGuestOrdersAll);
router.get("/getGuestOrdersByTime/:guest_id" , controller.getGuestOrdersByTime);

router.post("/getGuestOrdersByStatus" , controller.getGuestOrdersByStatus);
router.post("/getHotelOrdersByStatus" , controller.getHotelOrdersByStatus);
router.post("/getDispacherOrdersByStatus" , controller.getDispacherOrdersByStatus);
router.post("/getDriverOrdersByStatus" , controller.getDriverOrdersByStatus);
router.get("/getOrdersScheduled/:status" , controller.getOrdersScheduled);
router.get("/hotelOrdersScheduled/:hotelId" , controller.getHotelOrdersScheduled);
router.get("/hotelOrdersCompleted/:hotelId" , controller.getHotelOrdersCompleted);
router.get("/driverOrdersCompleted/:driverId" , controller.getDriverOrdersCompleted);
router.get("/driverOrdersOngoing/:driverId" , controller.getDriverOrdersOngoing);
router.get("/driverOrdersCancel/:driverId" , controller.getDriverOrdersCancel);
router.put("/AcceptOrder" , controller.AcceptOrder);
// invoice 
router.post("/getOrdersByInvoiceStatus" , controller.getOrdersByInvoiceStatus);
router.post("/getOrderWithoutInvoicing" , controller.getOrderWithoutInvoicing);
router.post("/checkRideStatus" , controller.checkRideStatus);
router.post("/updateRideStatus" , controller.updateRideStatus);


module.exports = router;

