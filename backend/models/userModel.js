const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please input name"],
    },
    email: {
      type: String,
      required: [true, "Please input an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please input your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
