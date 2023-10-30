const mongoose = require("mongoose");

const addToWatchList = async (req, res) => {
  const profileModel = mongoose.model("profile");

  // check if movie already added to watchlist
  const { watch_list } = await profileModel
    .findById(req.params.profile_id)
    .select("watch_list");

  const foundMovieIndex = watch_list.findIndex(
    (movie) => movie.movie_id === req.params.movie_id
  );

  let message = "";

  if (foundMovieIndex > -1) {
    // remove from wathclist if it's already there
    watch_list.splice(foundMovieIndex, 1);
    await profileModel.updateOne(
      { _id: req.params.profile_id },
      {
        $set: { watch_list: watch_list },
      },
      { runValidators: true }
    );
    message = "Removed from watch list";
  } else {
    await profileModel.updateOne(
      { _id: req.params.profile_id },
      {
        $push: { watch_list: { movie_id: req.params.movie_id } },
      },

      { runValidators: true }
    );
    message = "Added to your watch list";
  }

  res.status(200).json({
    status: "success",
    message,
  });
};

module.exports = addToWatchList;
