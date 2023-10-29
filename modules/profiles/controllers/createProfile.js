const mongoose = require("mongoose");
const getRandomColor = require("../../../utils/getRandomColor");

const createProfile = async (req, res) => {
  const profileModel = await mongoose.model("profile");

  const allProfiles = await profileModel.find({ user_id: req.user._id });
  if (allProfiles.length >= 3) throw "You can't have more than 3 profiles";

  if (!req.body.name) throw "Name is required";

  const newProfile = {
    user_id: req.user._id,
    name: req.body.name,
    color: req.body.color || getRandomColor(),
  };

  await profileModel.create(newProfile);

  res.status(200).json({
    status: "success",
    data: newProfile,
  });
};

module.exports = createProfile;
