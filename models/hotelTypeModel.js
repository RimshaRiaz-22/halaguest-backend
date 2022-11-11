const mongoose = require("mongoose");
const hotelTypeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    stars: String,
}
);
module.exports = mongoose.model("hotel_type", hotelTypeSchema);