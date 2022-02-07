const PostDB = require("../models/Post");
const UserDB = require("../models/User");

exports.post = async (req, res, next) => {
  const post = await PostDB.findById(req.params.id);
  res.status(200).json(post);
};
/** 
* This is where the timeline logic is place. 
* must rearrange these so that it reflects
* clean Architecture.
* userIDs:
* Tom: 61fe02d5c66d6eadee1de28e
* 61bcafe5fe354c9ba9e25316
 * 61bcc152c2229e29b52366cb
*/

exports.timeline = async (req, res, next) => {
  const currentUser = await UserDB.findById(req.params.userId);
  const userPosts = await PostDB.find({ userId: currentUser._id });
  const followingPosts = await Promise.all(
    currentUser.following.map((id) => PostDB.find({ userId: id }))
  );
  res.status(200).json(userPosts.concat(...followingPosts));
};

exports.profile = async (req, res, next) => {
  const user = await UserDB.find({ username: req.params.username });
  const posts = await PostDB.find({ userId: user[0]._id });
  res.status(200).json(posts);
};

exports.like = async (req, res, next) => {
  const post = await PostDB.findById(req.params.id);
  if (!post.likes.includes(req.body.userId)) {
    await post.updateOne({ $push: { likes: req.body.userId } });
    res.status(200).json("you liked this post");
  } else {
    await post.updateOne({ $pull: { likes: req.body.userId } });
    res.status(200).json("you removed the like from this post");
  }
};

exports.create = async (req, res, next) => {
  const newPost = new PostDB(req.body);
  const savedPost = await newPost.save();
  res.status(200).json(savedPost);
};

exports.update = async (req, res, next) => {
  const post = await PostDB.findById(req.params.id);
  if (post.userId === req.body.userId) {
    await post.updateOne({ $set: req.body });
    res.status(200).json("the post has been updated");
  } else {
    res.status(403).json("you can only update your post");
  }
};

exports.remove = async (req, res, next) => {
  const post = await PostDB.findById(req.params.id);
  if (post.userId === req.body.userId) {
    await post.deleteOne();
    res.status(200).json("the post has been deleted");
  } else {
    res.status(403).json("you can only delete your posts");
  }
};
