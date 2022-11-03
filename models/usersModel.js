const moment = require('moment');
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId:String,
    name: String,
    image:String,
    order_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }
    // date: moment().format("YYYY-MM-DD"),
    // time: moment().format("hh:mm a")
}
);
module.exports = mongoose.model("Users", userSchema);