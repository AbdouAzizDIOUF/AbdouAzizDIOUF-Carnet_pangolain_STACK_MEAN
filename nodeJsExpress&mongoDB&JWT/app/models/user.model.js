const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {type: String, required: false},
    email: String,
    password: {type: String, required: false},
    age: Number,
    famille:String,
    race: String,
    nourriture: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: false
      }
    ]
  })
);

module.exports = User;
