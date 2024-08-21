const userModel = require("../models/usermodel");

async function userSignupController(req, res) {
  const { email, password } = req.body;

  if (!email) {
    res.status(201).json({
      message: "please provide email",
    });
  }
  if (!password) {
    res.status(201).json({
      message: "please provide password",
    });
  }

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      res.json({
        message: "user name already exist",
      });
    } else {
      const newuser = new userModel({
        email,
        password,
      });

      await newuser.save();

      res.json({
        message: "user registered successfully",
      });
    }
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = userSignupController;
