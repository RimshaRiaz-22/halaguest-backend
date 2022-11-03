const mongoose = require("mongoose");
const vehicleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    make: String,
    modal: String,
    year: String,
    color: String,
    plate_no: String,
    style: String,
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
    driver_Id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver'
    }],

}
);
module.exports = mongoose.model("vehicle_detail", vehicleSchema);