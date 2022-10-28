const mongoose = require("mongoose");
const dispacherSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    payment_detail_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment_details'
    },
    name_of_company: String,
    email: String,
    img: String,
    city: String,
    state: String,
    zip_code: String,
    country: String,
    street_address: String,
    phoneno:String,
    created_at:String,
    device_token:String,
    status: {
        type: String,
        enum: ['block', 'unblock']
    },
}
);
module.exports = mongoose.model("dispacher", dispacherSchema);