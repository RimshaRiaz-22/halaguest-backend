const mongoose = require("mongoose");
const driver_search_radiusSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    radius: String,
}
);
module.exports = mongoose.model("driver_search_radius", driver_search_radiusSchema);