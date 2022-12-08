const mongoose = require("mongoose");
const invoiceAdminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    InvoiceNo:String,
    order_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }],
    status: {
        type: String,
        enum: ['billed', 'unbilled']
    },
    totalAmount:String,
    created_at:String
}
);
module.exports = mongoose.model("invoiceAdmin", invoiceAdminSchema);