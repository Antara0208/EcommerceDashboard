const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, resp) => {
  resp.send("hellow world from the router ");
});

router.post("/register", async (req, resp) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return resp.status(422).json({ error: "plz filled the failed properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    
    if (userExist) {
      return resp.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return resp.status(422).json({ error: "password r not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      resp.status(201).json({ message: " user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, resp) => {

  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return resp.status(400).json({ error: "Plz filled data" });
    }

    const userlogin = await User.findOne({ email: email });

    // console.log(userlogin);

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      token = await userlogin.generateAuthToken();
      console.log(token);

      // resp.cookie("jwtoken",token,{
      //   expires:new Date(Date.now() + 25892000000),httpOnly:true
      // });

      if (!isMatch) {
        resp.status(400).json({ error: "Invalid Credentials" });
      } else {
        resp.json({ message: "user signin successfully" });
      }
    } else {
      resp.json({ error: "user error successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
