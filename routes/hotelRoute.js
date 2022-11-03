const router = require("express").Router();
const controller= require("../controllers/hotelController")

router.get("/allHotels" ,controller.getAllHotels)
router.get("/specificHotel/:HotelId" , controller.getSpecificHotel)
router.delete("/deleteHotel/:HotelId" , controller.deleteHotel);
router.post("/createHotel" , controller.createHotel);
router.put("/updateHotel" , controller.updateHotel);
router.get("/getHotelOrdersStatus/:hotel_id/:status" , controller.getHotelOrdersStatus);
router.get("/getHotelOrders/:hotel_id" , controller.getHotelOrders);
router.get("/getHotelGuests/:hotel_id" , controller.getHotelGuests);
router.get("/getHotelInvoices/:hotel_id" , controller.getHotelInvoices);



module.exports = router;

