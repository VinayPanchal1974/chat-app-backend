
const mongoose = require("mongoose");

const messageModel = mongoose.Schema({
  sender: {
    type: mongoose.schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: mongoose.schema.Types.ObjectId,
    ref: "User",
  },
  chat: {
    type: mongoose.schema.Types.ObjectId,
    ref: "Chat",
  }
},{
    timeStamp:true
});

const Message = mongoose.Model("Message",messageModel)
module.exports = Message;
