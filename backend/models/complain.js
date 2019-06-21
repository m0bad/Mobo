const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team"
    }
  },
  {
    timestamps: true
  }
);

const Complain = mongoose.model('Complain', complainSchema);
module.exports = Complain;
