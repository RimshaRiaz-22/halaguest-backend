const mongoose = require("mongoose");
const paymentDetailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bank_name: String,
    account_holder_name: String,
    account_number: String,
    iban: String,
    swift_code: String,
    expiry_date:String,
    cvv:String
}
);
module.exports = mongoose.model("payment_details", paymentDetailSchema);