const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guest_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest'
    },
    pickup_location: String,
    pickup_log: String,
    pickup_lat: String,
    dropoff_location: String,
    dropoff_log: String,
    dropoff_lat: String,
    condition_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'condition'
    },
    car_type_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car_type'
    },
    ac:{
        type: String,
        enum: ['yes', 'no']
    },
    flight_date: String,
    flight_time: String,
    driver_notes: String,
    estimated_amount: String,
    total_amount: String,
    status: {
        type: String,
        enum: ['schedule', 'ongoing','completed','cancel']
    },
    cancellation_reason: String,
    canceled_by: String,
    canceled_by_id: String,
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver'
    },

}
);
module.exports = mongoose.model("order", orderSchema);