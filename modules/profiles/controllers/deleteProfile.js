const mongoose = require("mongoose");

const deleteProfile = async (req, res) => {
  const profileModel = await mongoose.model("profile");

  const foundProfile = await profileModel.findById(req.params.profile_id);

  if (!foundProfile) throw "Profile not found";

  await profileModel.deleteOne({
    _id: req.params.profile_id,
  });

  res.status(200).json({
    status: "success",
    message: "Profile deleted successfully",
  });
};

module.exports = deleteProfile;
