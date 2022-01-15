const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.user = async (req, res, next) => {
  // console.log(req, "^^^req");
  // 1. get user
  const user = await User.schema.findById(req.params.id);
  // 2. sanitize
  const { password, updatedAt, ...other } = user._doc;
  // 3. return the user
  res.status(200).json(other);
  // console.log(res,'^^^res', other, '^^^other',);
};

exports.follow = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    const user = await User.schema.findById(req.params.id);
    const currentUser = await User.schema.findById(req.body.userId);
    if (!user.followers.includes(req.body.userId)) {
      await user.updateOne({ $push: { followers: req.body.userId } });
      await currentUser.updateOne({ $push: { following: req.params.id } });
      res.status(200).json("user has been followed");
    } else {
      res.status(403).json("you already follow this user");
    }
  } else {
    res.status(403).jason("You cannot follow yourself");
  }
};

exports.unfollow = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    const user = await User.schema.findById(req.params.id);
    const currentUser = await User.schema.findById(req.body.userId);
    if (user.followers.includes(req.body.userId)) {
      await user.updateOne({ $pull: { followers: req.body.userId } });
      await currentUser.updateOne({ $pull: { following: req.params.id } });
      res.status(200).json("user has been unfollowed");
    } else {
      res.status(403).json("you dont follow this user");
    }
  } else {
    res.status(403).json("You cannot unfollow yourself");
  }
};

exports.update = async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Account has been updated");
  } else {
    return res.status(403).json("you can only update your account!");
  }
};

exports.remove = async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } else {
    return res.status(403).json("you can only delete your account!");
  }
};
