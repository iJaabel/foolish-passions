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

  activeUser = await UserDB.findOne({ email: req.body.email });
  !activeUser && res.status(404).json("user not found");

  const validPassword = await bcrypt.compare(req.body.password, activeUser.password);
  !validPassword && res.status(404).json("wrong password");

  // --- 

  // console.log("\nfirst checkpoint for activeUser object:\n\n", activeUser)

  //sanitizing the password
  activeUser.password = undefined

  //gets the posts for the user owner
  const owner = await PostDB.find({ userId: activeUser._id });
  // console.log("\nprofile:\n\n", owner)

  //gets all the post of how client follows
  const followingPosts = await Promise.all(
    activeUser.following.map((id) => PostDB.find({ userId: id }))
  );
  // console.log("\nfollowingPosts:\n\n", followingPosts)

  //creates collection post first render...
  const collection = owner.concat(...followingPosts)
  // console.log("\collection:\n\n", collection)

  const listOfIds = activeUser.following.concat(activeUser.followers)
 
  console.log("what is in the listOfIds?:\n\n", listOfIds)

  const lib = await Promise.all(listOfIds.map(id => UserDB.findById(id)))
  for (const obj of lib) obj.password = undefined

  console.log("\nshould look more like a map. this is lib:\n\n", lib)



  const active = activeUser

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
