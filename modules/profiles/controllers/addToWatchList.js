const mongoose = require("mongoose");

const addToWatchList = async (req, res) => {
  console.log(req.params);
  const profileModel = mongoose.model("profile");

  await profileModel.updateOne(
    { _id: req.params.profile_id },
    {
      $push: { watch_list: { movie_id: req.params.movie_id } },
    },

    { runValidators: true }
  );

  res.status(200).json({
    status: "success",
    message: "Added to your watch list",
  });
};

module.exports = addToWatchList;
