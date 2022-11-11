const mongoose = require("mongoose");
const car_typeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        enum: ['luxury', 'economy','VVIP']
    },
    price:String
}
);
module.exports = mongoose.model("car_type", car_typeSchema);