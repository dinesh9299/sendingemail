const express = require("express");
const UserSigninontroller = require("../controller/Usersignin");
const userSignupController = require("../controller/Usersignup");
const sentEmailController = require("../controller/Email");

const router = express.Router();

router.post("/signin", UserSigninontroller);
router.post("/signup", userSignupController);
router.post("/sendemail", sentEmailController);

module.exports = router;
