const userModel = require("../models/usermodel");

async function UserSigninontroller(req, res) {
  const { email, password } = req.body;

  // Validate the request body
  if (!email) {
    return res.status(201).json({ message: "Please provide a email" });
  }
  if (!password) {
    return res.status(201).json({ message: "Please provide a password" });
  }

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      res.json({
        message: "invalid user",
      });
    } else {
      const checkpassword = password === existingUser.password;

      if (checkpassword) {
        res.json({
          message: "login success",
        });
      } else {
        res.status(201).json({
          message: "wrong password",
        });
      }
    }
  } catch (error) {
    // Log error and send a generic error response
    console.error("Error during user signup:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = UserSigninontroller;
