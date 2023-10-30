const mongoose = require("mongoose");

const getWatchList = async (req, res) => {
  const profileModel = await mongoose.model("profile");

  const foundWatchList = await profileModel
    .findOne({
      _id: req.params.profile_id,
    })
    .select("watch_list");

  res.status(200).json({
    status: "success",
    data: foundWatchList,
  });
};

module.exports = getWatchList;
