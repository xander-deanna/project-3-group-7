const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userShchema);

module.exports = User;