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
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    dispacher_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dispacher'
    }],
    vehicle_detail_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicle_detail'
    }],
    doc_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver_documents'
    }],
    phoneno: String,
    created_at: String,
    status: {
        type: String,
        enum: ['block', 'unblock']
    },
    device_token: String,
    driver_location: String,
    driver_lat: String,
    driver_log: String,
    // location: {
    //     type: {
    //       type: String,
    //       enum: ['Point'],
    //       default: 'Point',
    //     },
    //     coordinates: {
    //       type: [Number],
    //       default: [0, 0]
    //     }
    //   }
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number]
        }
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rating'
    }]
    },
    {
        timestamps: true
    }

);
driverSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("driver", driverSchema);