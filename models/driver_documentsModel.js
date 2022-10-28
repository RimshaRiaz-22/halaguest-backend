const mongoose = require("mongoose");

const driverDocSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    driving_license_front: String,
    driving_license_back: String,
    cnic_front: String,
    cnic_back: String,
    vehicle_ownership: String,
    cnic_issue_date: String,
    
}
);
module.exports = mongoose.model("driver_documents", driverDocSchema);