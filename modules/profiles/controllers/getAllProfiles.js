const mongoose = require("mongoose");

const getAllProfiles = async (req, res) => {
  const profileModel = await mongoose.model("profile");

  const allProfiles = await profileModel.find({
    user_id: req.user._id,
  });

  res.status(200).json({
    status: "success",
    data: allProfiles,
  });
};

module.exports = getAllProfiles;
