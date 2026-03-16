
const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String },
    isGroupChat: { type: Boolean },
    users: [
      {
        type: mongoose.schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  {
    timeStamp: true,
  },
);

const chat = mongoose.Model("Chat", chatModel);
module.exports = chat;
