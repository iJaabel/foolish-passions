const bcrypt = require("bcryptjs");
const UserDB = require("../models/User");

/** 
* clean Architecture.
* userIDs:
* Tom: 61fe02d5c66d6eadee1de28e
* 61bcafe5fe354c9ba9e25316
 * 61bcc152c2229e29b52366cb
*/

exports.user = async (req, res, next) => {
  const userId = req.query.userId;
  const username = req.query.username;

  const user = userId
    ? await UserDB.findById(req.params.id)
    : await UserDB.findOne({ username });
  const { password, updatedAt, ...other } = user._doc;
  res.status(200).json(other);
};

exports.follow = async (req, res, next) => {
  console.log("\nThis is our client\n\n",req.body)
  console.log("\nThis is our target\n\n",req.params)
  if (req.body.userId !== req.params.id) {
    const target = await UserDB.findById(`${req.params.id}`);
    console.log("\nwhat's in target after finding by Id\n\n", target)
    const client = await UserDB.findById(req.body.userId);
    console.log("\nwhat's in client after db search\n\n", client)
    if (!target.followers.includes(req.body.userId)) {
      await target.updateOne({ $push: { followers: req.body.userId } });
      await client.updateOne({ $push: { following: req.params.id } });
      res.status(200).json("user has been followed");
    } else {
      res.status(403).json("you already follow this user");
    }
  } else {
    res.status(403).json("You cannot follow yourself");
  }
};

exports.unfollow = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    const user = await UserDB.findById(req.params.id);
    const currentUser = await UserDB.findById(req.body.userId);
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
    const user = await UserDB.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Account has been updated");
  } else {
    return res.status(403).json("you can only update your account!");
  }
};

exports.remove = async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    const user = await UserDB.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } else {
    return res.status(403).json("you can only delete your account!");
  }
};
