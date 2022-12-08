const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orderNo:String,
    guest_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest'
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel'
    },
    pickup_location: String,
    pickup_log: Number,
    pickup_lat: Number,
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number]
        }
    },
    dropoff_location: String,
    dropoff_log: Number,
    dropoff_lat: Number,
    condition_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'condition'
    },
    car_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car_type'
    },
    ac: {
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
        enum: ['schedule','created', 'ongoing', 'completed', 'cancel']
    },
    cancellation_reason: String,
    canceled_by: String,
    canceled_by_id: String,
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver'
    },
    driver_Lat:Number,
    driver_Long:Number,
    driver_location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number]
        }
    },
    dispacher_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dispacher'
    },
    // Invoice: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'invoice'
    // }],
    invoiceStatus: {
        type: String,
        enum: ['billed', 'unbilled']
    },
    invoicing:Boolean,
    rideStatus:{
        type: String,
        enum: ['none', 'riding','reached']
    }
},
    {
        timestamps: true
    }
);
orderSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("order", orderSchema);