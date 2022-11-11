const router = require("express").Router();
const controller= require("../controllers/guestController")

router.get("/allGuests" ,controller.getAllGuests)
router.get("/specificGuest/:GuestId" , controller.getSpecificGuest)
router.delete("/deleteGuest/:GuestId" , controller.deleteGuest);
router.post("/createGuest" , controller.createGuest);
router.put("/updateGuest" , controller.updateGuest);
router.get("/getAllHotelGuests/:hotel_id" , controller.getHotelGuests);


module.exports = router;

