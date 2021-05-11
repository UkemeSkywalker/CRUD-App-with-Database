const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  country: String,
});

module.exports = User = mongoose.model("User", userSchema);
