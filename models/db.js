const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
      max: 50,
    },
    lastName: {
      type: String,
      require: true,
      max: 50,
    },
    gender: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    username: {
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

const PostSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    vid: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

exports.userModel = mongoose.model("User", UserSchema);
exports.postModel = mongoose.model("Post", PostSchema);
