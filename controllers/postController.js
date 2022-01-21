const Post = require("../models/Post");
const User = require("../models/User");
/** */

exports.post = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
};

exports.timeline = async (req, res, next) => {
  const currentUser = await User.findById(req.params.userId);
  const userPosts = await Post.find({ userId: currentUser._id });
  const followingPosts = await Promise.all(
    currentUser.following.map((id) => Post.find({ userId: id }))
  );
  res.status(200).json(userPosts.concat(...followingPosts));
};

exports.profile = async (req, res, next) => {
  const user = await User.find({ username: req.params.username });
  console.log(req.params.username, user);
  const posts = await Post.find({ userId: user._id });
  console.log(posts);
  res.status(200).json(posts);
};

exports.like = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.body.userId)) {
    await post.updateOne({ $push: { likes: req.body.userId } });
    res.status(200).json("you liked this post");
  } else {
    await post.updateOne({ $pull: { likes: req.body.userId } });
    res.status(200).json("you removed the like from this post");
  }
};

exports.create = async (req, res, next) => {
  const newPost = new Post(req.body);
  const savedPost = await newPost.save();
  res.status(200).json(savedPost);
};

exports.update = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    await post.updateOne({ $set: req.body });
    res.status(200).json("the post has been updated");
  } else {
    res.status(403).json("you can only update your post");
  }
};

exports.remove = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    await post.deleteOne();
    res.status(200).json("the post has been deleted");
  } else {
    res.status(403).json("you can only delete your posts");
  }
};
