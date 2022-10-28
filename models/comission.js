const mongoose = require("mongoose");
const comissionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    rate: String,
}
);
module.exports = mongoose.model("comission", comissionSchema);