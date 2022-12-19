const mongoose = require("mongoose");
const termsAndConditions = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    termsAndConditions: String,
}
);
module.exports = mongoose.model("termsAndConditions", termsAndConditions);