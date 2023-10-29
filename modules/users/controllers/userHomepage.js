const mongoose = require("mongoose");

const userHomepage = async (req, res) => {
  const userModel = mongoose.model("user");
  const profileModel = mongoose.model("profile");

  const foundUser = await userModel
    .findOne({
      _id: req.user._id,
    })
    .select("-password");

  const userProfiles = await profileModel.find({ user_id: req.user._id });

  res.status(200).json({
    status: "success",
    message: "You are on your Homepage",
    user_data: foundUser,
    profiles: userProfiles,
  });
};

module.exports = userHomepage;
