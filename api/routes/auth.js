const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//register a new user
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

    res.status(200).json({
      message: 'User was registered',
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login excisting user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(404).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
