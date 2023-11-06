const validateEmail = require("../../../utils/validateEmail");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtManager = require("../../../managers/jwtManager");

const registerUser = async (req, res) => {
  const userModel = mongoose.model("user");

  const { email, password, confirm_password } = req.body;

  const emailAlreadyExists = await userModel.findOne({
    email: email,
  });

  if (!email) throw "Email is required";
  if (!validateEmail(email)) throw "Invalid email";
  if (emailAlreadyExists) throw "This email is already in use";
  if (!password) throw "Password is required";
  if (!confirm_password) throw "Confirm password";
  if (password.length < 6) throw "Password must contain 6 or more characters";
  if (password !== confirm_password)
    throw "Password and Confirm Password don't match";

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await userModel.create({
    email,
    password: hashedPassword,
  });

  const accessToken = jwtManager(createdUser);

  res.status(200).json({
    status: "success",
    message: "User registered successfully",
    accessToken,
  });
};

module.exports = registerUser;
