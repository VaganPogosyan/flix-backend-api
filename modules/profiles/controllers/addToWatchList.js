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

  if (foundMovieIndex > -1) {
    watch_list.splice(foundMovieIndex, 1);
    await profileModel.updateOne(
      { _id: req.params.profile_id },
      {
        $set: { watch_list: watch_list },
      },
      { runValidators: true }
    );
  } else {
    await profileModel.updateOne(
      { _id: req.params.profile_id },
      {
        $push: { watch_list: { movie_id: req.params.movie_id } },
      },

      { runValidators: true }
    );
  }

  res.status(200).json({
    status: "success",
    message: "Added to your watch list",
  });
};

module.exports = addToWatchList;
