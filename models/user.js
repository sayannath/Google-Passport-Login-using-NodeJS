const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    googleID: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    photoUrl: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

mongoose.model("User", userSchema);