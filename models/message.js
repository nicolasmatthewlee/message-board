const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
  datetime: { type: Date, required: true },
});

module.exports = mongoose.model("Message", messageSchema);
