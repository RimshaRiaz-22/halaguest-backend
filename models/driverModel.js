const mongoose = require("mongoose");
const driverSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img: String,
    email: String,
    city: String,
    state: String,
    zip_code: String,
    country: String,
    street_address: String,
    name: String,
    gender:  {
        type: String,
        enum: ['male', 'female']
    },
    dispacher_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dispacher'
    }],
    payment_detail_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment_details'
    }],
    vehicle_detail_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicle_detail'
    }],
    doc_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver_documents'
    }],
    phoneno:String,
    created_at:String,
    status: {
        type: String,
        enum: ['block', 'unblock']
    },
    device_token:String

}
);
module.exports = mongoose.model("driver", driverSchema);