const mongoose = require("mongoose");
const RatingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    rated_by_guest_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest'
    },
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver'
    },
    star: String,
    review:String,
   
}
);
module.exports = mongoose.model("rating", RatingSchema);