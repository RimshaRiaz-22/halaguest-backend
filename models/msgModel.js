const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    message: {
        text: { type: String, required: true },
      },
      users: Array,
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
}
);
module.exports = mongoose.model("Msg", MessageSchema);