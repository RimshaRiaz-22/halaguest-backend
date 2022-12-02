const router = require("express").Router();
const controller= require("../controllers/ratingGuestRoute")

router.get("/allRatings" ,controller.getAllRatings)
router.get("/specificRating/:RatingId" , controller.getSpecificRating)
router.delete("/deleteRating/:RatingId" , controller.deleteRating);
router.post("/createRating" , controller.createRating);
router.put("/updateRating" , controller.updateRating);
router.get("/getHotelRatings/:hotel_id" , controller.getGuestRatings);

router.get("/getTotalRatingHotel/:hotel_id" , controller.getTotalRatingGuest);

// router.put("/loginRating" , controller.loginRating);


module.exports = router;