const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    hotel_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel_type'
    },
    payment_detail_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment_details'
    },
    hotel_name: String,
    img: String,
    email:String,
    city: String,
    state: String,
    zip_code: String,
    country: String,
    street_address: String,
    phoneno:String,
    created_at:String,
    status:String,
    device_token:String
}
);
module.exports = mongoose.model("hotel", hotelSchema);