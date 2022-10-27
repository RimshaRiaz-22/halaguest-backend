const mongoose = require("mongoose");
const conditionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        enum: ['New', 'Moderately Used','Heavily Used']
    },
}
);
module.exports = mongoose.model("condition", conditionSchema);