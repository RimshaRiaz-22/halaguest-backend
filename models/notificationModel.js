const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    to: String,
    from: String,
    to_table:{
        type: String,
        enum: ['admin', 'hotel','dispacher','driver','guest']
    },
    from_table:{
        type: String,
        enum: ['admin', 'hotel','dispacher','driver','guest']
    },
    detail: String,
    created_at: String,
    readStatus: Boolean,
}
);
module.exports = mongoose.model("notification", notificationSchema);