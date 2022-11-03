const mongoose = require("mongoose");
const rate_per_kmSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    rate: String,
}
);
module.exports = mongoose.model("rate_per_km", rate_per_kmSchema);