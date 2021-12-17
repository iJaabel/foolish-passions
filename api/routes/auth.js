const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//registration
router.post("/register", async (req, res) => {
  try {
    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //creates new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save to the DB
    const user = await newUser.save();
    res.status(200).json();
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
