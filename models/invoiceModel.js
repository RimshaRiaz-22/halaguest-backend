const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    status: String,
    created_at:String
}
);
module.exports = mongoose.model("invoice", invoiceSchema);