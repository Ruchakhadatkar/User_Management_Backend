const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  gender: {type: String},
  status: {type: String}
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
