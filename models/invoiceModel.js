const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    InvoiceNo:String,
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel'
    },
     guest_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest'
    },
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver'
    },
    dispacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dispacher'
    },
    status: {
        type: String,
        enum: ['pending', 'completed']
    },
    totalAmount:String,
    created_at:String
}
);
module.exports = mongoose.model("invoice", invoiceSchema);