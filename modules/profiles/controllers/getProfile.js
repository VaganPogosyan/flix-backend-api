const mongoose = require("mongoose");

const getProfile = async (req, res) => {
  const profileModel = await mongoose.model("profile");

  const foundProfile = await profileModel.findOne({
    _id: req.params.profile_id,
  });

  res.status(200).json({
    status: "success",
    data: foundProfile,
  });
};

module.exports = getProfile;
