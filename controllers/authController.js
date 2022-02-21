const bcrypt = require("bcryptjs");
const UserDB = require("../models/User");
const PostDB = require("../models/Post");

/** 
 * 
* This is where the timeline logic is place. 
* must rearrange these so that it reflects
* clean Architecture.
* 
*/


exports.signin = async (req, res, next) => {
  const rawUser = await UserDB.findOne({ email: req.body.email });
  !rawUser && res.status(404).json("user not found");
  // console.log("\nfirst checkpoint for rawUser object:\n\n", rawUser)

  const validPassword = await bcrypt.compare(req.body.password, rawUser.password);
  !validPassword && res.status(404).json("wrong password");

  /**
   * end of signin validation above
   * send an updated state to client
   * without sensitive data
   */

  // *** *** *** *** *** *** *** *** *** *** *** *** *** 

  //get a current array of all validatedUser's post as owner
  //combine validatedUser's post with thier following's post as collection
  //get all the posts from validatedUser's following

  const owner = await PostDB.find({ userId: rawUser._id });
  const followingPosts = await Promise.all(
    rawUser.following.map((id) => PostDB.find({ userId: id }))
  );
  const collection = owner.concat(...followingPosts)

  console.log("\nprofile:\n\n", owner)
  console.log("\nfollowingPosts:\n\n", followingPosts)
  console.log("\collection:\n\n", collection)

  // *** *** *** *** *** *** *** *** *** *** *** *** *** 

  const validatedUser = {
    ...rawUser._doc,
    _id: rawUser._doc._id.toString(),
    password: undefined,
  }
  console.log("user: ", validatedUser)

  //collect a list of all the userIds of following and followers
  const listOfIds = validatedUser.following.concat(validatedUser.followers)
  const lib = await Promise.all(listOfIds.map(id => UserDB.findById(id)))
  for (const obj of lib) obj.password = undefined
  const active = validatedUser

  console.log("what is in the listOfIds?:\n\n", listOfIds)
  console.log("\nshould look more like a map. this is lib:\n\n", lib)

  // *** *** *** *** *** *** *** *** *** *** *** *** *** 

  // put everything together as remote state [{ user }, { post }]
  const remoteState = [{ active, lib }, { collection, owner, },]
  console.log("\nlast checkpoint for remote state:\n\n", remoteState)

  // *** *** *** *** *** *** *** *** *** *** *** *** *** 

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
