const mongoose = require("mongoose");
const privacyPolicy = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    privacy_policy: String,
}
);
module.exports = mongoose.model("privacyPolicy", privacyPolicy);