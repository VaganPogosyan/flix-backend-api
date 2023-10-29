const mongoose = require("mongoose");
const getRandomColor = require("../../../utils/getRandomColor");

const editProfile = async (req, res) => {
  const profileModel = await mongoose.model("profile");

  if (!req.body.name) throw "Name is required";

  await profileModel.updateOne(
    {
      _id: req.params.profile_id,
    },
    {
      name: req.body.name,
      color: req.body.color,
    },
    { runValidators: true }
  );

  res.status(200).json({
    status: "success",
    message: "Profile updated successfully",
  });
};

module.exports = editProfile;
