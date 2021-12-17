const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      defaul: "",
    },
    coverPicture: {
      type: String,
      defaul: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 200,
    },
    city: {
      type: String,
      max: 50,
    },
    hometown: {
      type: String,
      max: 50,
    },
    badges: {
      type: Array,
      default: [],
    },
    danceStyle: {
      type: Number,
      enum: [1, 2, 3],
    },
    isAvailableToPractice: {
      type: Boolean,
      default: false,
    },
    whenAvailableHours: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
