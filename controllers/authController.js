const bcrypt = require("bcryptjs");
const UserModelForMongo = require("../models/User");

/** */

exports.verify = async (req, res, next) => {
  const verified = await UserModelForMongo.validate({
    email: req.body.email,
    password: req.body.password,
  });

  if (!verified)
    throw { message: "Please enter the correct email and password" };

  return res.status(200).send({ message: "verified" });
};

exports.signin = async (req, res, next) => {
  const user = await UserModelForMongo.findOne({ email: req.body.email });
  !user && res.status(404).json("user not found");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  !validPassword && res.status(404).json("wrong password");

  res.status(200).json(user);
};

exports.register = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = await new UserModelForMongo({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  const user = await newUser.save();

  res.status(200).send({ message: "User was registered" });
};
