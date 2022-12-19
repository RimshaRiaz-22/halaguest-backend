const mongoose = require("mongoose");
const RatingGuestSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    rated_by_driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver'
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel'
    },
    star: String,
    review:String,
   
}
);
module.exports = mongoose.model("ratingGuest", RatingGuestSchema);