const mongoose = require("mongoose");
const invoiceAdminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    InvoiceNo:String,
    order_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }],
    hotel_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel'
    },
    status: {
        type: String,
        enum: ['pending', 'completed']
    },
    totalAmount:String,
    created_at:String
}
);
module.exports = mongoose.model("invoiceAdmin", invoiceAdminSchema);