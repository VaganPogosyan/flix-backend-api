const validateEmail = require("../../../utils/validateEmail");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtManager = require("../../../managers/jwtManager");

const loginUser = async (req, res) => {
  const userModel = mongoose.model("user");

  const { email, password } = req.body;

  const foundUser = await userModel.findOne({
    email: email,
  });

  if (!email) throw "Email is required";
  if (!validateEmail(email)) throw "Invalid email";
  if (!foundUser) throw "User with this email doesn't exist";
  if (!password) throw "Password is required";

  const comparePassword = await bcrypt.compare(password, foundUser.password);
  if (!comparePassword) throw "Email and password do not match";

  const accessToken = jwtManager(foundUser);

  res.status(200).json({
    status: "success",
    message: "Logged in successfully!",
    accessToken,
  });
};

module.exports = loginUser;
