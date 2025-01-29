const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  timeTaken: Number, // Store time taken in seconds
});

module.exports = mongoose.model("User", userSchema);
