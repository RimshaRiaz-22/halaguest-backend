const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchema);
