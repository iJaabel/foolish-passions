const bcrypt = require("bcryptjs");
const UserDB = require("../models/User");
const PostDB = require("../models/Post");

/** 
 * 
* This is where the timeline logic is place. 
* must rearrange these so that it reflects
* clean Architecture.
* userIDs:
* Tom: 61fe02d5c66d6eadee1de28e
* 61bcafe5fe354c9ba9e25316
 * 61bcc152c2229e29b52366cb
 * 
*/


exports.signin = async (req, res, next) => {

  const rawUser = await UserDB.findOne({ email: req.body.email });
  !rawUser && res.status(404).json("user not found");

  const validPassword = await bcrypt.compare(req.body.password, rawUser.password);
  !validPassword && res.status(404).json("wrong password");

  // --- end of signin --

  // --- starting of remote state delivery --

  // console.log("\nfirst checkpoint for rawUser object:\n\n", rawUser)

  //sanitizing the password
  const thisActiveUser = {
    ...rawUser._doc,
    _id: rawUser._doc._id.toString(),
    password: undefined,
  }
  // console.log (thisActiveUser)
  // console.log("user: ", thisActiveUser)
  //gets the posts for the user owner
  const owner = await PostDB.find({ userId: rawUser._id });
  // console.log("\nprofile:\n\n", owner)

  //gets all the post of how client follows
  const followingPosts = await Promise.all(
    rawUser.following.map((id) => PostDB.find({ userId: id }))
  );
  // console.log("\nfollowingPosts:\n\n", followingPosts)

  //creates collection post first render...
  const collection = owner.concat(...followingPosts)
  // console.log("\collection:\n\n", collection)

  const onlyIds = collection.map(post => post.userId).reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue)
    }
    return previousValue
  }, [])

  // console.log("\nonlyIds:", onlyIds)
  // console.log("\nlibIds:", libIds)



  const findUsers = await Promise.all(
    onlyIds.map(id => UserDB.findById(id))
  )

  const lib = findUsers.map(user => {
    const { password, ...userRest } = user._doc
    return userRest
  })
  // console.log("lib:\n", lib)

  const active = thisActiveUser

  const remoteState = [{ active, lib }, { collection, owner, },]
  // console.log("\nlast checkpoint for remote state:\n\n", remoteState)

  res.status(200).json(remoteState);
};

exports.register = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = await new UserDB({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  const user = await newUser.save();

  res.status(200).send({ message: "User was registered" });
};

exports.verify = async (req, res, next) => {
  const verified = await UserDB.validate({
    email: req.body.email,
    password: req.body.password,
  });

  if (!verified)
    throw { message: "Please enter the correct email and password" };

  return res.status(200).send({ message: "verified" });
};
