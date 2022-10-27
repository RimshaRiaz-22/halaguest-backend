const router = require("express").Router();
const controller= require("../controllers/hotelController")

router.get("/allHotels" ,controller.getAllHotels)
router.get("/specificHotel/:HotelId" , controller.getSpecificHotel)
router.delete("/deleteHotel/:HotelId" , controller.deleteHotel);
router.post("/createHotel" , controller.createHotel);
router.put("/updateHotel" , controller.updateHotel);

module.exports = router;

